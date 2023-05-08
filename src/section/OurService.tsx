import { motion } from "framer-motion";
import {
  AiOutlineBulb,
  AiOutlineCloud,
  AiOutlineLaptop,
  AiOutlineMobile,
  AiOutlinePicLeft,
} from "react-icons/ai";
import cloud from "../assets/services/service-cloud.svg";
import mobiledevelopment from "../assets/services/service-mobiledevelopment.svg";
import Saas from "../assets/services/service-saas.svg";
import uiux from "../assets/services/service-uiux.svg";
import webdevelopment from "../assets/services/service-webdevelopment.svg";
import { ICardInfo } from "../data/types";

export const OurService = () => {
  const variants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } },
  };

  return (
    <section data-section id="services" className="OurService bg-primary pt-10">
      <div className=" py-8">
        <div className="container flex flex-col items-start gap-6 text-white md:items-center lg:flex-row lg:gap-14">
          <h1 className="lg:w-1/2">
            Transforming Businesses with Cutting-Edge Solutions
          </h1>

          <h5 className="font-light lg:w-1/2 lg:max-w-[520px]">
            At Beyond Limits Technologies, we specialize in a wide range of
            software development services designed to help your business achieve
            its full potential.
          </h5>
        </div>
      </div>

      <div
        // initial={variants.hidden}
        // whileInView={variants.visible}
        // viewport={{ once: true }}
        className="py-8 lg:py-16"
      >
        <div className="container mb-6">
          <OurServiceCard
            imagePath={Saas}
            title="SAAS"
            body="We develop bespoke software solutions that address your unique business challenges, streamline processes, and maximize efficiency."
            bullets={[
              "Issue printed or electronic receipts",
              "Apply discounts and issue refunds",
              "Keep recording sales even when offline",
              "Connect a receipt printer, barcode scanner, and cash drawer",
            ]}
          ></OurServiceCard>

          <OurServiceCard
            reverse
            imagePath={webdevelopment}
            title="Web Development"
            body="We create responsive, feature-rich websites that deliver exceptional user experiences. We used Following Technologies."
            bullets={["React", "Typescript", "Animations", "CSS"]}
          ></OurServiceCard>

          <OurServiceCard
            imagePath={mobiledevelopment}
            title="Mobile App Development"
            body="We develop bespoke software solutions that address your unique business challenges, streamline processes, and maximize efficiency."
            bullets={[
              "a long established",
              "more-or-less normal distribution",
              "Lorem Ipsum as their default model text",
              "Various versions have evolved",
            ]}
          ></OurServiceCard>

          <OurServiceCard
            reverse
            imagePath={uiux}
            title="UI/UX Design"
            body="Our designers work closely with you to create intuitive, visually appealing useri nterfaces that align with your brand identity and resonate with your target audience."
            bullets={[
              "User Research",
              "Design Thinking Approach",
              "Lean UX Aprroach",
              "User Testing",
            ]}
          ></OurServiceCard>

          <OurServiceCard
            imagePath={cloud}
            title="Cloud Solutions"
            body="We help businesses harness the power of the cloud by designing and implementing scalable, secure, and cost-effective cloud-based solutions. "
            bullets={[
              "a long established",
              "more-or-less normal distribution",
              "Lorem Ipsum as their default model text",
              "Various versions have evolved",
            ]}
          ></OurServiceCard>
        </div>
      </div>
    </section>
  );
};

const OurServiceCard = ({
  imagePath,
  title,
  body,
  reverse = false,
  bullets,
}: {
  imagePath: string;
  title: string;
  body: string;
  bullets: string[];
  reverse?: boolean;
}) => {
  return (
    <div
      className={`mb-4 flex flex-col gap-6 rounded-3xl bg-white p-6 lg:mb-12  lg:gap-12 lg:px-10 lg:py-6  ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className="flex w-full justify-center">
        <img src={imagePath} alt="" />
      </div>
      <div
        className={`flex w-full flex-col justify-center ${
          reverse && "lg:ml-6"
        }`}
      >
        <h2 className="text-header-2">{title}</h2>

        <h5 className="my-2 font-medium text-text-secondary45 lg:my-4">
          {body}
        </h5>

        {bullets.map((bullet, index) => (
          <li
            key={index}
            className="mb-1 list-disc font-medium text-text-secondary45 marker:text-primary lg:mb-2"
          >
            {bullet}
          </li>
        ))}
      </div>
    </div>
  );
};
