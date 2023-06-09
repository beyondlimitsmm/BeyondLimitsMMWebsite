import Lottie from "lottie-react";
import Hero1 from "../assets/layers/hero-1.svg";
import Hero2 from "../assets/layers/hero-2.svg";
import LandingDots from "../assets/layers/landing-dots.svg";
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
      </div>

      <div className="container flex flex-col-reverse items-center justify-between md:flex-row">
        <div className="w-4/5 md:mr-8 md:w-1/2 lg:ml-10 lg:mr-24">
          <h1 className="hidden font-medium leading-[2.5rem] text-text-secondary45 md:block md:text-[2rem] lg:text-[4rem] lg:leading-[5rem]">
            Innovative Software Solutions for
            <span className="text-primary"> Digital World</span>
          </h1>
          <h5 className="mb-5 mt-16 font-medium text-text-secondary45 md:my-5">
            Beyond Limits Technologies excels in
            <span className="font-bold text-black">
              {" "}
              crafting custom software solutions that empower businesses{" "}
            </span>
            to succeed in a fast-changing digital world. Our passionate team of
            experts is driven by
            <span className="font-bold text-black">
              {" "}
              innovation and a commitment{" "}
            </span>
            to delivering outstanding outcomes for our clients. With a focus on
            excellence,
            <span className="font-bold text-black">
              {" "}
              we provide tailored software solutions{" "}
            </span>
            that enable businesses to thrive in today's dynamic landscape.
          </h5>

          <a
            className="block w-max rounded bg-primary px-4 py-2 text-white"
            href="#contactUs"
          >
            Contact Us
          </a>
        </div>
        <div className="relative lg:mr-14">
          <img
            src={LandingDots}
            width={152}
            height={128}
            alt="svg shapes"
            className="absolute -right-12 -top-12 z-20 scale-75 md:scale-90 lg:scale-100"
          />
          <div className=" z-20 h-[320px] w-[320px] overflow-hidden rounded-3xl md:h-[336px] md:w-[336px] lg:h-[500px] lg:w-[500px]">
            <Lottie
              animationData={MarketAnalysis}
              loop={true}
              className="h-[320px] w-[320px] rounded-3xl bg-white md:h-[336px]  md:w-[336px] lg:h-[500px] lg:w-[500px]"
            />
          </div>
        </div>

        <h1 className="mx-6 my-14 block text-[2rem] leading-[2.5rem] text-text-secondary45 md:hidden">
          Innovative Software Solutions for
          <span className="font-medium text-primary"> Digital World</span>
        </h1>
      </div>
    </section>
  );
};
