import { motion } from "framer-motion";
import {
  AiFillLike,
  AiFillWechat,
  AiOutlineAppstoreAdd,
  AiOutlineLaptop,
  AiOutlineReload,
} from "react-icons/ai";

export const WhyChooseUs = () => {
  const staggerVariants = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { staggerChildren: 0.15, ease: "easeInOut", duration: 0.4 },
    },
  };

  return (
    <section
      data-section
      id="whyUs"
      className="container relative scroll-m-16 overflow-hidden bg-white pt-10 lg:py-20"
    >
      <h1 className="text-center font-semibold text-text-secondary45">
        Why You Should{" "}
        <span className="text-primary">Choose Beyond Limits</span>
      </h1>

      <motion.div
        initial="initial"
        whileInView="animate"
        variants={staggerVariants}
        viewport={{ once: true }}
        className="mt-4 flex flex-wrap justify-center lg:mt-12"
      >
        <WhyChooseUsCard
          variant={staggerVariants}
          icon={
            <div className="flex min-h-[2.5rem] min-w-[2.5rem] items-center justify-center rounded-full bg-[#096DD9] text-white">
              <AiFillLike></AiFillLike>
            </div>
          }
          title="Innovative Custom Solutions"
          body="Tailored for Your Unique Business Needs
          At Beyond Limits, we understand that every business has unique requirements. Our team of experts works closely with clients to develop innovative, customized software solutions that align with their specific goals and objectives, ensuring optimal results."
        ></WhyChooseUsCard>
        <WhyChooseUsCard
          variant={staggerVariants}
          icon={
            <div className="flex min-h-[2.5rem] min-w-[2.5rem] items-center justify-center rounded-full bg-[#7CB305] text-white">
              <AiOutlineLaptop></AiOutlineLaptop>
            </div>
          }
          title="Experienced Team of Professionals"
          body="Industry-leading Expertise at Your Service
          Our team consists of highly skilled and experienced professionals with diverse backgrounds, who bring a wealth of knowledge and expertise to every project. This ensures that our clients receive top-notch software solutions that are both efficient and reliable."
        ></WhyChooseUsCard>
        <WhyChooseUsCard
          variant={staggerVariants}
          icon={
            <div className="flex min-h-[2.5rem] min-w-[2.5rem] items-center justify-center rounded-full bg-[#FA541C] text-white">
              <AiOutlineAppstoreAdd></AiOutlineAppstoreAdd>
            </div>
          }
          title="Agile Development Approach"
          body="Flexible and Responsive to Your Changing Needs
          We embrace the agile development methodology, which allows us to be highly adaptable to changing requirements and priorities. This approach ensures that our clients receive high-quality software solutions that are delivered on time and within budget."
        ></WhyChooseUsCard>
        <WhyChooseUsCard
          variant={staggerVariants}
          icon={
            <div className="flex min-h-[2.5rem] min-w-[2.5rem] items-center justify-center rounded-full bg-[#D4380D] text-white">
              <AiOutlineReload></AiOutlineReload>
            </div>
          }
          title="Commitment to Continuous Improvement"
          body="Staying Ahead of the Curve
          At Beyond Limits, we are dedicated to staying up-to-date with the latest technology trends and best practices. Our commitment to continuous improvement ensures that our clients receive cutting-edge software solutions that help them maintain a competitive edge in their industry."
        ></WhyChooseUsCard>
        <WhyChooseUsCard
          variant={staggerVariants}
          icon={
            <div className="flex min-h-[2.5rem] min-w-[2.5rem] items-center justify-center rounded-full bg-[#08979C] text-white">
              <AiFillWechat></AiFillWechat>
            </div>
          }
          title="Unrivaled Customer Support"
          body="Your Success is Our Success
          We believe in building long-lasting relationships with our clients, and this starts with providing exceptional customer support. Our team is readily available to address any concerns or issues that may arise, ensuring a smooth and successful software implementation process."
        ></WhyChooseUsCard>
      </motion.div>
    </section>
  );
};

const WhyChooseUsCard = ({
  icon,
  title,
  body,
  variant,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  variant: any;
}) => {
  return (
    <motion.div
      variants={variant}
      className="m-2 flex flex-col items-center gap-6 rounded-xl bg-[#F6F9FF] px-8 py-4 lg:basis-[48%] lg:flex-row"
    >
      {icon}
      <div className="text-center lg:text-left">
        <h5 className="mb-2 font-medium text-primary">{title}</h5>
        <p className=" text-text-secondary45">{body}</p>
      </div>
    </motion.div>
  );
};
