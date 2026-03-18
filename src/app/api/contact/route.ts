import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const MAX_NAME_LENGTH = 100;
const MAX_MESSAGE_LENGTH = 5000;
const MIN_MESSAGE_LENGTH = 10;
const MAX_CONTENT_LENGTH_BYTES = 12_000;

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const ipStore = new Map<string, { count: number; resetAt: number }>();

function getClientIp(request: Request): string {
  const xForwardedFor = request.headers.get('x-forwarded-for');
  const xRealIp = request.headers.get('x-real-ip');

  if (xForwardedFor) {
    return xForwardedFor.split(',')[0].trim();
  }

  return xRealIp?.trim() || 'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const state = ipStore.get(ip);

  if (!state || now > state.resetAt) {
    ipStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (state.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  state.count += 1;
  ipStore.set(ip, state);
  return false;
}

function sanitizeText(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const contentLength = Number(request.headers.get('content-length') || 0);
    if (contentLength > MAX_CONTENT_LENGTH_BYTES) {
      return NextResponse.json(
        { error: 'Solicitud demasiado grande.' },
        { status: 413 }
      );
    }

    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Demasiadas solicitudes. Intentalo nuevamente en unos minutos.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const name = typeof body?.name === 'string' ? body.name.trim() : '';
    const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : '';
    const message = typeof body?.message === 'string' ? body.message.trim() : '';

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    if (name.length > MAX_NAME_LENGTH) {
      return NextResponse.json(
        { error: 'El nombre excede el limite permitido.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Correo electronico invalido.' },
        { status: 400 }
      );
    }

    if (message.length < MIN_MESSAGE_LENGTH || message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: 'El mensaje debe tener entre 10 y 5000 caracteres.' },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_PASSWORD;
    const contactRecipient = process.env.CONTACT_EMAIL_RECIPIENT;

    if (!emailUser || !emailPassword || !contactRecipient) {
      return NextResponse.json(
        { error: 'Configuracion de correo incompleta en el servidor.' },
        { status: 500 }
      );
    }

    const safeName = sanitizeText(name);
    const safeEmail = sanitizeText(email);
    const safeMessage = sanitizeText(message);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

    const mailOptions = {
      from: emailUser,
      to: contactRecipient,
      subject: `Nuevo mensaje de contacto de ${safeName}`,
      html: `
        <h2>Nuevo mensaje de contacto desde Ashenvell</h2>
        <p><strong>Nombre:</strong> ${safeName}</p>
        <p><strong>Email del cliente:</strong> ${safeEmail}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${safeMessage.replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color: gray; font-size: 12px;">Este mensaje fue enviado desde el formulario de contacto de tu sitio web.</p>
      `,
      text: `
        Nuevo mensaje de contacto desde Ashenvell
        
        Nombre: ${name}
        Email del cliente: ${email}
        
        Mensaje:
        ${message}
        
        ---
        Este mensaje fue enviado desde el formulario de contacto de tu sitio web.
      `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.' },
      { status: 200 }
    );
  } catch {
    console.error('Error al enviar el correo.');
    return NextResponse.json(
      { error: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.' },
      { status: 500 }
    );
  }
}
