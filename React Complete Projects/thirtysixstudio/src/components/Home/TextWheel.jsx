import { useEffect, useRef } from "react";
import gsap from "gsap";

function TextWheel() {
  const wheelRef = useRef(null);

  useEffect(() => {
    gsap.to(wheelRef.current, {
      rotate: 360,
      duration: 20,
      repeat: -1,
      ease: "none",
    });
  }, []);

  return (
    <div className="absolute right-1/4 top-1/2 -translate-y-1/2">
      <div
        ref={wheelRef}
        className="w-52 h-52 flex items-center justify-center"
      >
        <svg viewBox="0 0 300 300" className="w-full h-full">
          <defs>
            <path
              id="circlePath"
              d="
                M 150, 150
                m -110, 0
                a 110,110 0 1,1 220,0
                a 110,110 0 1,1 -220,0
              "
            />
          </defs>

          <text fontSize="16" fill="black" letterSpacing="3">
            <textPath href="#circlePath" className="text-[17.5px] font-bold">THIRTYSIXSTUDIO—FOR ALL THINGS DIGITAL PRODUCTION—</textPath>
          </text>
        </svg>
      </div>
    </div>
  );
}

export default TextWheel;
