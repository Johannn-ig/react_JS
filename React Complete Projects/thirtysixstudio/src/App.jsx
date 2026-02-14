import "./index.css";
import { useEffect, useState, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import data from "./data";
import Canvas from "./Canvas";

import Navbar from "./components/Home/Navbar";
import HeroSection from "./components/Home/HeroSection";
import Section1 from "./components/section1/Section1";

function App() {
  const [showCanvas, setShowCanvas] = useState(false);
  const growingSpan = useRef(null);

  useEffect(() => {
  const locomotiveScroll = new LocomotiveScroll({
    smooth: true,
  });

  window.scrollTo(0, 0); // 🔥 force scroll to top
}, []);


  return (
    <>
      {/* Growing Circle Animation */}
      <span
        ref={growingSpan}
        className="growing rounded-full block fixed -top-5 -left-5 w-5 h-5"
      ></span>

      {/* First Screen */}
      <div className="w-full relative min-h-screen">
        <Navbar
          setShowCanvas={setShowCanvas}
          growingSpan={growingSpan}
        />

        <HeroSection showCanvas={showCanvas} />
      </div>

      {/* Second Section */}
      <div className="w-full relative h-screen mt-32 px-10">
        {showCanvas &&
          data[1].map((canvasdets, index) => (
            <Canvas key={index} details={canvasdets} />
          ))}

        <Section1 />
      </div>
    </>
  );
}

export default App;
