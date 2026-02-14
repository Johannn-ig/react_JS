import { useEffect, useRef } from "react";
import gsap from "gsap";

function Navbar({ setShowCanvas, growingSpan }) {
  const headingRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      setShowCanvas((prev) => {
        const newState = !prev;

        if (newState) {
          // Position growing circle
          gsap.set(growingSpan.current, {
            top: e.clientY,
            left: e.clientX,
          });

          // Add red theme class
          document.body.classList.add("red-theme");

          // Animate growing circle
          gsap.to(growingSpan.current, {
            scale: 1000,
            duration: 2,
            ease: "power2.inOut",
            onComplete: () => {
              gsap.set(growingSpan.current, {
                scale: 0,
                clearProps: "all",
              });
            },
          });
        } else {
          // Remove red theme and return to original light theme
          document.body.classList.remove("red-theme");
        }

        return newState;
      });
    };

    const heading = headingRef.current;
    heading.addEventListener("click", handleClick);

    return () => heading.removeEventListener("click", handleClick);
  }, [setShowCanvas, growingSpan]);

  return (
    <>
      {/* Top Navbar */}
      <nav className="bdr mx-2 py-3 flex relative z-20">
        <div className="brand">Thirtysixstudios</div>

        <div className="flex justify-evenly w-full">
          <div>Light mode</div>

          <div className="links flex gap-8 font-extralight">
            {[
              "What we do",
              "Who we are",
              "How we give back",
              "Talk to us",
            ].map((link, index) => (
              <a key={index} href={`#${link.toLowerCase()}`}>
                {link}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Big Bottom Heading */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <div
          ref={headingRef}
          className="flex justify-center zalando-sans text-[15vw] font-normal tracking-[-5px] leading-44 cursor-pointer"
        >
          {"Thirtysixstudio".split("").map((char, i) => (
            <span key={i}>{char}</span>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;
