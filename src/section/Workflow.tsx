import Lottie from "lottie-react";
import { useState } from "react";
import Workflow1 from "../assets/layers/wrokflow-1.svg";
import AppAnimation from "../assets/lottie/app-animation.json";
export const Workflow = () => {
  return (
    <section className="bg-[#F6F9FF] py-20 relative">
      <img src={Workflow1} alt="" className="absolute left-0 top-0" />
      <div className="container flex z-10">
        <div className="w-1/2 z-10">
          <h1 className="text-primaryDarkBlue">
            Development Process & Methodology
          </h1>
          <div className="my-10 rounded-3xl w-[500px] h-[500px] overflow-hidden">
            <Lottie
              animationData={AppAnimation}
              loop={true}
              className="w-[500px] h-[500px] rounded-3xl bg-white"
            />
          </div>
        </div>
        <div className="w-1/2">
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
          onClick={() => setActiveIndex(index)}
          className={`px-6 py-4 text-center rounded-xl my-2  ${
            index === activeIndex ? "bg-primary text-white" : " bg-white"
          }`}
        >
          <h3>0{index + 1}</h3>
          <h4 className={index === activeIndex ? "text-white" : "text-primary"}>
            {el.title}
          </h4>
          {index === activeIndex && <h5 className="pt-4">{el.body}</h5>}
        </div>
      ))}
    </div>
  );
};
