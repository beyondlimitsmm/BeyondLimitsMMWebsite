import Lottie from "lottie-react";
import { useState } from "react";
import Workflow1 from "../assets/layers/wrokflow-1.svg";
import AppAnimation from "../assets/lottie/app-animation.json";

export const Workflow = () => {
  return (
    <section
      id="process"
      className="relative h-auto scroll-m-16 overflow-y-hidden bg-[#F6F9FF] py-10 lg:h-[900px] lg:py-20"
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
          <div className="mx-auto my-10 h-[320px] w-[320px] overflow-hidden rounded-3xl md:mx-0  lg:h-[400px] lg:w-[400px] xl:h-[500px] xl:w-[500px]">
            <Lottie
              animationData={AppAnimation}
              loop={true}
              className="h-[320px] w-[320px] rounded-3xl bg-white lg:h-[400px] lg:w-[400px] xl:h-[500px] xl:w-[500px]"
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
  const [hoverIndex, setHoverIndex] = useState(0);

  return (
    <>
      {PanelItem.map((el, index) => (
        <PanelChild
          key={index}
          title={el.title}
          body={el.body}
          index={index}
          hoverIndex={hoverIndex}
          setHoverIndex={setHoverIndex}
        ></PanelChild>
      ))}
    </>
  );
};

export const PanelChild = ({
  title,
  body,
  index,
  hoverIndex,
  setHoverIndex,
}: {
  title: string;
  body: string;
  index: number;
  hoverIndex: number;
  setHoverIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <>
      {index === hoverIndex ? (
        <div className="py-2">
          <div className="group flex h-48 max-h-52 flex-col justify-between rounded-xl bg-primary px-6 py-4 transition-all duration-500 sm:h-44 md:h-48 lg:h-44 xl:h-40">
            <div className={`text-center`}>
              <h3 className=" text-white">0{index + 1}</h3>
              <h4 className="text-white">{title}</h4>
              <h5 className={`pt-4 text-white`}>{body}</h5>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="py-2"
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(index)}
          onClick={() => setHoverIndex(index)}
        >
          <div className="group flex h-24 max-h-48 flex-col justify-between rounded-xl bg-white px-6 py-4 transition-all duration-500 hover:h-48 hover:bg-primary hover:sm:h-40 hover:lg:h-44 hover:xl:h-40">
            <div className={`text-center`}>
              <h3 className="text-primary group-hover:text-white">
                0{index + 1}
              </h3>
              <h4 className="text-primary group-hover:text-white">{title}</h4>
              <h5
                className={`hidden select-none pt-4 text-white group-hover:block`}
              >
                {body}
              </h5>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
