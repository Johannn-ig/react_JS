import Canvas from "../../Canvas";
import data from "../../data";
import TextWheel from "./TextWheel";


function HeroSection({ showCanvas }) {
  return (
    <>
      {showCanvas &&
        data[0].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}

      <div className="relative w-full">
  
  {/* Existing Hero Text */}
  <div className="textcontainer px-[26vw] w-[75vw]">
    <h2 className="pt-14 text-3xl font-light tracking-wide">
      At Thirtysixstudio, we <br />
      build digital assets and <br />
      immersive experiences <br />
      for purposeful brands.
    </h2>

    <p className="pt-8 pb-6 font-extralight text-sm">
      We're a boutique production studio focused on design,
      animation, and technology, constantly rethinking what
      digital craft can do for present-day ads and campaigns.
    </p>

    <p className="text-[16px] font-light">Scroll</p>
  </div>

  {/* 🔥 Rotating Wheel */}
  <TextWheel />

</div>

    </>
  );
}

export default HeroSection;
