import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-2 lg:mt-8">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        CyberStream
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for You
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      At Cyberstream, we’re driven by a passion for progress. We specialize in designing tech solutions that are transforming the way industries operate—whether it’s in healthcare, autonomous technology, or beyond.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Contact Us 
        </a>
        <a href="#" class="py-3 px-4 mx-3 rounded-md border border-gradient-to-r from-orange-500 to-orange-700">
         Read Mowa
        </a>
      </div>
      {/* <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
    </div>
  );
};

export default HeroSection;