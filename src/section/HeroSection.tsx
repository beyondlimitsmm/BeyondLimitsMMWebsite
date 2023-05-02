import Lottie from "lottie-react";
import Hero1 from "../assets/layers/hero-1.svg";
import Hero2 from "../assets/layers/hero-2.svg";
import MarketAnalysis from "../assets/lottie/market-analysis.json";

export const HeroSection = () => {
  return (
    <section id="home" className="HeroSection py-10 md:pt-48 md:pb-0 relative">
      <div className="absolute scale-75 -right-28 -z-10 top-36 md:right-0 md:top-10 md:scale-100">
        <img src={Hero1} alt="" className="" />
        <img src={Hero2} alt="" className="absolute right-0 bottom-20" />
      </div>

      <div className="container flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="w-4/5 md:w-1/2 md:ml-10 md:mr-24">
          <h1 className="hidden md:block md:text-[4rem] leading-[5rem] text-text-secondary45">
            Innovative Software Solutions for
            <span className="text-primary7"> Digital World</span>
          </h1>
          <h5 className="mt-16 mb-5 md:my-5 text-text-secondary45 font-medium">
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
        <div className="md:mr-14">
          <div className="w-[320px] h-[320px] md:w-[500px] md:h-[500px] rounded-3xl overflow-hidden ">
            <Lottie
              animationData={MarketAnalysis}
              loop={true}
              className="w-[320px] h-[320px] md:w-[500px] md:h-[500px] rounded-3xl bg-white "
            />
          </div>
        </div>

        <h1 className="block md:hidden text-[2rem] leading-[2.5rem] my-14 mx-6 text-text-secondary45">
          Innovative Software Solutions for
          <span className="text-primary7"> Digital World</span>
        </h1>
      </div>
    </section>
  );
};
