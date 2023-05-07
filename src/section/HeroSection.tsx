import Lottie from "lottie-react";
import Hero1 from "../assets/layers/hero-1.svg";
import Hero2 from "../assets/layers/hero-2.svg";
import MarketAnalysis from "../assets/lottie/market-analysis.json";

export const HeroSection = () => {
  return (
    <section
      data-section
      id="home"
      className="HeroSection relative py-10 md:pb-20 md:pt-32"
    >
      <div className="absolute -right-28 top-36 -z-10 scale-75 md:-top-10 lg:right-0 lg:top-0 lg:scale-100">
        <img
          width={498}
          height={625}
          src={Hero1}
          alt="svg shapes"
          className=""
        />
        <img
          src={Hero2}
          width={286}
          height={356}
          alt="svg shapes"
          className="absolute bottom-20 right-0"
        />
      </div>

      <div className="container flex flex-col-reverse items-center justify-between md:flex-row">
        <div className="w-4/5 md:mr-8 md:w-1/2 lg:ml-10 lg:mr-24">
          <h1 className="hidden font-medium leading-[2.5rem] text-text-secondary45 md:block md:text-[2rem] lg:text-[4rem] lg:leading-[5rem]">
            Innovative Software Solutions for
            <span className="text-primary7"> Digital World</span>
          </h1>
          <h5 className="mb-5 mt-16 font-medium text-text-secondary45 md:my-5">
            Beyond Limits Technologies specializes in creating
            <span className="font-bold text-black">
              {" "}
              cutting-edge, tailor-made software solutions{" "}
            </span>
            that empower businesses to thrive in a rapidly evolving digital
            landscape. Our team of
            <span className="font-bold text-black">
              {" "}
              dedicated professionals{" "}
            </span>
            combines passion, expertise, and a relentless pursuit of innovation
            to
            <span className="font-bold text-black">
              {" "}
              deliver exceptional results{" "}
            </span>
            for our clients.
          </h5>

          {/* <button className="rounded-xl bg-primary6 px-4 py-2 text-white">
            Learn More
          </button> */}
        </div>
        <div className="lg:mr-14">
          <div className="h-[320px] w-[320px] overflow-hidden rounded-3xl md:h-[336px]  md:w-[336px] lg:h-[500px] lg:w-[500px] ">
            <Lottie
              animationData={MarketAnalysis}
              loop={true}
              className="h-[320px] w-[320px] rounded-3xl bg-white md:h-[336px]  md:w-[336px] lg:h-[500px] lg:w-[500px] "
            />
          </div>
        </div>

        <h1 className="mx-6 my-14 block text-[2rem] leading-[2.5rem] text-text-secondary45 md:hidden">
          Innovative Software Solutions for
          <span className="text-primary7"> Digital World</span>
        </h1>
      </div>
    </section>
  );
};
