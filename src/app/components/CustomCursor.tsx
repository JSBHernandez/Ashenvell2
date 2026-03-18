"use client";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement[]>([]);
  const trailsCount = 10;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Solo mostrar en dispositivos que no sean táctiles
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }
    
    setIsVisible(true);
    let mouseX = 0;
    let mouseY = 0;
    const trailCoords = Array(trailsCount).fill('').map(() => ({ x: -100, y: -100 }));

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const animate = () => {
      trailCoords.forEach((pt, index) => {
        const nextPt = index === 0 ? { x: mouseX, y: mouseY } : trailCoords[index - 1];
        pt.x += (nextPt.x - pt.x) * 0.45;
        pt.y += (nextPt.y - pt.y) * 0.45;

        if (trailRef.current[index]) {
          trailRef.current[index].style.transform = `translate3d(${pt.x}px, ${pt.y}px, 0)`;
        }
      });
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    const animId = requestAnimationFrame(animate);

    document.body.style.cursor = "none";
    let styleTag = document.createElement("style");
    styleTag.id = "custom-cursor-style";
    styleTag.innerHTML = `
      * { cursor: none !important; }
    `;
    document.head.appendChild(styleTag);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
      document.body.style.cursor = "auto";
      const existingStyle = document.getElementById("custom-cursor-style");
      if (existingStyle) existingStyle.remove();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Trails */}
      {Array.from({ length: trailsCount }).map((_, i) => {
        const size = Math.max(3, 12 - i);
        return (
          <div
            key={i}
            ref={(el) => {
                if (el) trailRef.current[i] = el;
            }}
            className="absolute top-0 left-0 rounded-full bg-blue-300 blur-[1px]"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              marginLeft: `-${Math.floor(size / 2)}px`,
              marginTop: `-${Math.floor(size / 2)}px`,
              opacity: 1 - i * (1 / trailsCount),
              transform: "translate3d(-100px, -100px, 0)",
              transition: "opacity 0.1s ease",
            }}
          />
        );
      })}

      {/* Main Star Cursor */}
      <div
        ref={cursorRef}
        className="absolute top-0 left-0 -ml-[12px] -mt-[12px] text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,1)]"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      >
        <svg 
           width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
        >
          <path fillRule="evenodd" clipRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" />
        </svg>
      </div>
    </div>
  );
}
