import { motion } from "framer-motion";
import { useState } from "react";
import {
  AiOutlineBulb,
  AiOutlineCloud,
  AiOutlineLaptop,
  AiOutlineMobile,
  AiOutlinePicLeft,
} from "react-icons/ai";
import marketing from "../assets/services/service-marketing.svg";
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
    <section
      data-section
      id="services"
      className="services overflow-hidden bg-primary pt-20"
    >
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

      <div className="py-4 lg:py-16">
        <div className="container mb-6">
          <OurServiceCard
            imagePath={Saas}
            title="SAAS"
            body="Stand out in the business domain with its unique advantages. SaaS (Software as a Service) offers a convenient solution that eliminates the need for software installation and maintenance. With its flexible subscription model, SaaS caters to diverse requirements. By choosing SaaS, you gain the advantages of convenience, flexibility, customization, and continuous innovation, empowering your business to stay competitive and take it to the next level."
            bullets={[
              "No cumbersome installation and maintenance",
              "Flexible subscription model and cost savings",
              "Quick deployment and user-friendly",
              "Continuous innovation and automatic updates",
            ]}
          ></OurServiceCard>

          <OurServiceCard
            reverse
            imagePath={webdevelopment}
            title="Web Development"
            body="Create scalable and visually stunning websites that provide a seamless user experience. From responsive design to optimized SEO, our web development services help you establish a captivating online presence and drive results."
            bullets={[
              "Scalable and dynamic websites",
              "Engaging user experience",
              "Responsive design",
              "Search engine optimization (SEO)",
            ]}
          ></OurServiceCard>

          <OurServiceCard
            imagePath={mobiledevelopment}
            title="Mobile App Development"
            body="Engage your audience with feature-rich mobile apps compatible with various platforms. Our mobile app development expertise ensures intuitive interfaces, seamless user experiences, and integration with device features, enabling direct interaction with your customers."
            bullets={[
              "Enhanced customer engagement",
              "Platform versatility",
              "Seamless user experience",
              "Integration with device features",
            ]}
          ></OurServiceCard>

          <OurServiceCard
            reverse
            imagePath={uiux}
            title="UI/UX Design"
            body="Deliver user-centric designs that prioritize usability and aesthetics. Our UI/UX design services enhance user satisfaction through intuitive navigation, captivating visual appeal, and consistent branding, resulting in delightful experiences for your target audience."
            bullets={[
              "User-centric interfaces",
              "Visual appeal and branding",
              "Intuitive navigation",
              "Usability testing and optimization",
            ]}
          ></OurServiceCard>

          <OurServiceCard
            imagePath={marketing}
            title="Marketing Solutions"
            body="Reach your target audience effectively with targeted marketing strategies driven by data insights. Our marketing solutions offer multichannel integration, personalization, and automation, empowering you to maximize brand visibility and achieve marketing success."
            bullets={[
              "Targeted audience reach",
              "Data-driven decision-making",
              "Multichannel marketing integration",
              "Personalization and automation",
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
  const [loading, setLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      // animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: loading ? 0 : 1, y: loading ? 100 : 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className={`mb-4 flex flex-col gap-0 rounded-3xl bg-white px-6 pb-6 md:px-10 md:py-6 lg:mb-12 lg:gap-12  ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="flex w-full justify-center">
        <motion.img
          initial={{ height: "16rem", opacity: 0 }}
          animate={{
            height: loading ? "16rem" : "auto",
            opacity: loading ? 0 : 1,
          }}
          transition={[
            { height: { delay: 0, duration: 0.4 } },
            { opacity: { delay: 0.5, duration: 0.4 } },
          ]}
          src={imagePath}
          alt={title}
          className="scale-75 lg:scale-100"
          onLoad={() => setLoading(false)}
        />
      </div>
      <div
        className={`flex w-full flex-col justify-center ${
          reverse && "md:ml-6"
        }`}
      >
        <h2 className="mb-2 text-xl font-semibold text-primary lg:text-[32px] lg:leading-[48px]">
          {title}
        </h2>

        <h5 className="my-2 text-sm font-medium text-text-secondary45 lg:my-4 lg:text-base">
          {body}
        </h5>

        {bullets.map((bullet, index) => (
          <div key={index} className="mb-1 flex items-center lg:mb-2">
            <span className="mr-4 h-2 w-2 rounded-full bg-primary"></span>
            <li className="text-sm font-medium text-text-secondary45  lg:text-base">
              {bullet}
            </li>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
