import Lottie from "lottie-react";
import Hero1 from "../assets/layers/hero-1.svg";
import Hero2 from "../assets/layers/hero-2.svg";
import MarketAnalysis from "../assets/lottie/market-analysis.json";

export const HeroSection = () => {
  return (
    <section id="home" className="HeroSection py-20 relative scroll-m-16">
      <div className="absolute right-0 top-0 -z-10">
        <img src={Hero1} alt="" className="" />
        <img src={Hero2} alt="" className="absolute right-0 bottom-20" />
      </div>

      <div className="container flex items-center justify-between">
        <div className="w-1/2 ml-10 mr-24">
          <h1 className="text-[64px] leading-[80px] text-text-secondary45">
            Innovative Software Solutions for
            <span className="text-primary7"> Digital World</span>
          </h1>
          <h5 className="my-5 text-text-secondary45">
            Beyond Limits Technologies specializes in creating
            <span className="text-black font-bold">
              {" "}
              cutting-edge, tailor-made software solutions{" "}
            </span>
            that empower businesses to thrive in a rapidly evolving digital
            landscape. Our team of
            <span className="text-black font-bold">
              {" "}
              dedicated professionals{" "}
            </span>
            combines passion, expertise, and a relentless pursuit of innovation
            to
            <span className="text-black font-bold">
              {" "}
              deliver exceptional results{" "}
            </span>
            for our clients.
          </h5>

          <button className="bg-primary6 text-white rounded-xl px-4 py-2">
            Learn More
          </button>
        </div>
        <div className=" mr-14">
          <div className="w-[500px] h-[500px] rounded-3xl overflow-hidden">
            <Lottie
              animationData={MarketAnalysis}
              loop={true}
              className="w-[500px] h-[500px] rounded-3xl bg-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
