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
          title="Proven Track Record"
          body="Our diverse portfolio of successful projects and satisfied clients speaks to our ability to transform businesses through innovative software."
        ></WhyChooseUsCard>
        <WhyChooseUsCard
          variant={staggerVariants}
          icon={
            <div className="flex min-h-[2.5rem] min-w-[2.5rem] items-center justify-center rounded-full bg-[#7CB305] text-white">
              <AiOutlineLaptop></AiOutlineLaptop>
            </div>
          }
          title="Technological Excellence"
          body="Our team stays ahead of industry trends, utilizing the latest tools and technologies to create reliable, scalable solutions"
        ></WhyChooseUsCard>
        <WhyChooseUsCard
          variant={staggerVariants}
          icon={
            <div className="flex min-h-[2.5rem] min-w-[2.5rem] items-center justify-center rounded-full bg-[#FA541C] text-white">
              <AiOutlineAppstoreAdd></AiOutlineAppstoreAdd>
            </div>
          }
          title="Customized Solutions"
          body="We develop bespoke software solutions that address your unique business challenges, streamline processes, and maximize efficiency. Our custom software solutions are designed to grow with your business, ensuring long-term success."
        ></WhyChooseUsCard>
        <WhyChooseUsCard
          variant={staggerVariants}
          icon={
            <div className="flex min-h-[2.5rem] min-w-[2.5rem] items-center justify-center rounded-full bg-[#D4380D] text-white">
              <AiOutlineReload></AiOutlineReload>
            </div>
          }
          title="Agile Approach"
          body="We follow agile development practices, ensuring flexibility and efficiency throughout the development process."
        ></WhyChooseUsCard>
        <WhyChooseUsCard
          variant={staggerVariants}
          icon={
            <div className="flex min-h-[2.5rem] min-w-[2.5rem] items-center justify-center rounded-full bg-[#08979C] text-white">
              <AiFillWechat></AiFillWechat>
            </div>
          }
          title="Dedicated Support"
          body="Our commitment to your success extends beyond project completion. We offer ongoing support to ensure your software continues to deliver exceptional results."
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
      className="m-2 flex flex-col items-center gap-4 rounded-xl bg-[#F6F9FF] px-6 py-4 lg:basis-[48%] lg:flex-row"
    >
      {icon}
      <div className="text-center lg:text-left">
        <h5 className="mb-2 font-medium text-primary">{title}</h5>
        <p className=" text-text-secondary45">{body}</p>
      </div>
    </motion.div>
  );
};
