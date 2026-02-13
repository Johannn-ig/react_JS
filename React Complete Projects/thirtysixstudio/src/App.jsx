import "./index.css";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Circ, Expo } from "gsap/all";
// import Header from "./components/Header";
// import HeroSection from "./components/HeroSection"

function App() {
  const [showCanvas, setShowCanvas] = useState(false);
  const headingref = useRef(null);
  const growingSpan = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      setShowCanvas((prevShowCanvas) => {
        if (!prevShowCanvas) {
          gsap.set(growingSpan.current, {
            top: e.clientY,
            left: e.clientX,
          });

          gsap.to("body", {
            color: "#000",
            backgroundColor: "#fd2c2a",
            duration: 1.2,
            ease: "power2.inOut",
          });

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
          gsap.to("body", {
            color: "#fff",
            backgroundColor: "#000",
            duration: 1.2,
            ease: "power2.inOut",
          });
        }

        return !prevShowCanvas;
      });
    };

    const headingElement = headingref.current;
    headingElement.addEventListener("click", handleClick);

    // Clean up event listener on unmount
    return () => headingElement.removeEventListener("click", handleClick);
  }, []);

  return (

    <>
      {/* <Header /> */}
      {/* <HeroSection /> */}
      <span
        ref={growingSpan}
        className="growing rounded-full block fixed -top-5 -left-5 w-5 h-5"
      ></span>
      <div className="w-full relative min-h-screen">
        {showCanvas &&
          data[0].map((canvasdets, index) => <Canvas details={canvasdets} />)}
        <div className="w-full relative z-1 h-screen ">
          <nav className="mx-2 py-3 flex border-b border-[#F1EDED]">
            <div className="brand">Thirtysixstudios</div>
            <div className='flex justify-evenly w-full'>
              <div>Light mode</div>
              <div className="links flex gap-8 font-extralight">
                {[
                  "What we do",
                  "Who we are",
                  "How we give back",
                  "Talk to us",
                ].map((link, index) => (
                  <a
                    key={index}
                    href={`#${link.toLowerCase()}`}>
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </nav>
          <div className="textcontainer  px-[26vw] w-[75vw]">

            <h2 className='pt-14 text-3xl font-light tracking-wide'>At Thirtysixstudio, we <br /> build digital assets and <br /> immersive experiences <br /> for purposeful brands.</h2>
            <p className='pt-8 pb-6 font-extralight text-sm'>We're a boutique production studio focused on design, animation, and technology, constantly rethinking what digital craft can do for present-day ads and campaigns.</p>
            <p className='text-[16px] font-light'>Scroll</p>

          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
            <div className="flex justify-center zalando-sans text-[15vw] font-normal tracking-[-5px] leading-44" ref={headingref} >
              <span>T</span><span>h</span><span>i</span><span>r</span><span>t</span><span>y</span><span>s</span><span>i</span><span>x</span><span>s</span><span>t</span><span>u</span><span>d</span><span>i</span><span>o</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full relative h-screen  mt-32 px-10">
        {showCanvas &&
          data[1].map((canvasdets, index) => <Canvas details={canvasdets} />)}
        <div className="flex justify-evenly w-100%">
          <h1 className="uppercase w-1/4 text-center">01 - What we do</h1>
          <div className="w-1/4">
            <h1 className="text-4xl">We aim to elevate digital production in the advertising space, bringing your ideas to life.</h1>
            <p>As a contemporary studio, we use cutting-edge design practices and the latest technologies to deliver current digital work.</p>
            <p>Our commitment to innovation and simplicity, paired with our agile approach, ensures your journey with us is smooth and enjoyable from start to finish.</p>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;