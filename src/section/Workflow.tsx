import Lottie from "lottie-react";
import { useState } from "react";
import Workflow1 from "../assets/layers/wrokflow-1.svg";
import AppAnimation from "../assets/lottie/app-animation.json";

export const Workflow = () => {
  return (
    <section
      id="process"
      className="relative scroll-m-16  bg-[#F6F9FF] py-10 lg:py-20"
    >
      <img
        src={Workflow1}
        alt=""
        className="absolute -left-20 -top-20 scale-75  lg:left-0 lg:top-0 lg:scale-100 "
      />
      <div className="container z-10 flex flex-col md:flex-row">
        <div className="z-10 md:w-1/2">
          <h1 className="text-primaryDarkBlue">
            Development Process & Methodology
          </h1>
          <div className="mx-auto my-10 h-[320px] w-[320px] overflow-hidden rounded-3xl md:mx-0  lg:h-[500px]  lg:w-[500px]">
            <Lottie
              animationData={AppAnimation}
              loop={true}
              className="h-[320px] w-[320px] rounded-3xl bg-white lg:h-[500px] lg:w-[500px]"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <WorkFlowPanel></WorkFlowPanel>
        </div>
      </div>
    </section>
  );
};

const PanelItem: { title: string; body: string }[] = [
  {
    title: "Discovery",
    body: "We begin by understanding your business goals, requirements, and target audience to create a comprehensive project plan.",
  },
  {
    title: "Design",
    body: "Our designers create wireframes, mockups, and prototypes to ensure a visually appealing and user-friendly experience.",
  },
  {
    title: "Development",
    body: "Our developers bring your vision to life by writing clean, efficient, and scalable code using the latest technologies and best practices.",
  },
  {
    title: "Testing",
    body: "We perform rigorous testing to identify and resolve any issues, ensuring the highest level of quality and reliability ",
  },
  {
    title: "Deployment",
    body: "We help you launch your solution, providing support and guidance throughout the process.",
  },
  {
    title: "Maintenance & Support",
    body: "We offer ongoing support and updates to ensure your software stays current and performs optimally.",
  },
];

export const WorkFlowPanel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      {PanelItem.map((el, index) => (
        <div
          key={index}
          className={`my-2 rounded-xl border-2 border-transparent hover:border-2 hover:border-primary ${
            index === activeIndex && "hover:border-transparent"
          }`}
        >
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`max-h-24 overflow-hidden rounded-xl px-6 py-4 text-center transition-[max-height] duration-500 ease-in-out ${
              index === activeIndex
                ? "max-h-48 bg-primary text-white"
                : " bg-white"
            }`}
          >
            <h3>0{index + 1}</h3>
            <h4
              className={index === activeIndex ? "text-white" : "text-primary"}
            >
              {el.title}
            </h4>
            {index === activeIndex && <h5 className={`pt-4`}>{el.body}</h5>}
          </div>
        </div>
      ))}
    </div>
  );
};
