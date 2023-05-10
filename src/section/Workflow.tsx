import { AnimatePresence, animate, motion } from "framer-motion";
import Lottie from "lottie-react";
import { useState } from "react";
import dots from "../assets/layers/dots.svg";
import Workflow1 from "../assets/layers/workflow-1.svg";
import AppAnimation from "../assets/lottie/app-animation.json";
import { PanelItem, makeAnimation } from "../data/data";

export const Workflow = () => {
  return (
    <section
      data-section
      id="process"
      className="relative h-auto scroll-m-16 overflow-y-hidden bg-[#F6F9FF] py-10 lg:h-[900px] lg:py-20"
    >
      <img
        width={150}
        height={218}
        src={Workflow1}
        alt="svg shapes"
        className="absolute -left-10 -top-10 scale-75  lg:left-0 lg:top-0 lg:scale-100 "
      />
      <div className="container z-10 flex flex-col md:flex-row">
        <div className="z-10 md:w-1/2">
          <h1 className="text-primaryDarkBlue">
            Development Process & Methodology
          </h1>

          <div className="relative">
            <img
              src={dots}
              alt="svg shapes"
              className="absolute -right-10 -top-16 scale-75 md:right-6 md:scale-90 lg:-top-14 lg:right-20 lg:scale-100"
            />

            <div className="z-20 mx-auto my-10 h-[320px] w-[320px] overflow-hidden rounded-3xl md:mx-0 md:mt-20 lg:h-[400px] lg:w-[400px] xl:h-[500px] xl:w-[500px]">
              <Lottie
                animationData={AppAnimation}
                loop={true}
                className="z-40 h-[320px] w-[320px] rounded-3xl bg-white lg:h-[400px] lg:w-[400px] xl:h-[500px] xl:w-[500px]"
              />
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <WorkFlowPanel></WorkFlowPanel>
        </div>
      </div>
    </section>
  );
};

const WorkFlowPanel = () => {
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

const PanelChild = ({
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
    <div
      className="py-2"
      onMouseEnter={() => setHoverIndex(index)}
      onMouseLeave={() => setHoverIndex(index)}
      onTouchStart={() => {
        setHoverIndex(index);
      }}
      onClick={() => setHoverIndex(index)}
    >
      <div
        className={`group rounded-xl px-6 py-4 transition-all duration-300 ${
          hoverIndex === index ? "bg-primary" : "bg-white"
        }`}
      >
        <div className="flex w-full flex-col items-center justify-between ">
          <h3
            className={`${
              hoverIndex === index
                ? "text-white group-hover:text-white"
                : "text-primary group-hover:text-primary"
            }`}
          >
            0{index + 1}
          </h3>
          <h4
            className={`${
              hoverIndex === index
                ? "text-white group-hover:text-white"
                : "text-primary group-hover:text-primary"
            }`}
          >
            {title}
          </h4>
        </div>
        <AnimatePresence mode="wait">
          {hoverIndex === index && (
            <motion.div
              {...makeAnimation}
              key="test"
              className="text-center text-white lg:px-14"
            >
              <div className="block h-3"></div>
              <h5>{body}</h5>

              <div className="block lg:h-2 "></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
