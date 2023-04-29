import Lottie from "lottie-react";
import Hero1 from "../assets/layers/hero-1.svg";
import Hero2 from "../assets/layers/hero-2.svg";
import MarketAnalysis from "../assets/lottie/market-analysis.json";

export const HeroSection = () => {
  return (
    <section className="HeroSection  py-20 relative">
      <img src={Hero1} alt="" className="absolute right-0 top-0 -z-10" />
      <img src={Hero2} alt="" className="absolute right-0 bottom-20 -z-10" />

      <div className="container flex items-center gap-28">
        <div className="w-1/2 ml-32">
          <h1 className="font-[64px] ">
            Innovative Software Solutions for Digital World
          </h1>
          <p className="my-5">
            Beyond Limits Technologies specializes in creating cutting-edge,
            tailor-made software solutions that empower businesses to thrive in
            a rapidly evolving digital landscape. Our team of dedicated
            professionals combines passion, expertise, and a relentless pursuit
            of innovation to deliver exceptional results for our clients.
          </p>

          <button className="bg-primary6 text-white rounded-xl px-4 py-2">
            Learn More
          </button>
        </div>
        <div className="w-1/">
          <Lottie
            animationData={MarketAnalysis}
            loop={true}
            className="w-[500px] h-[500px] rounded-3xl bg-white"
          />
        </div>
      </div>
    </section>
  );
};
