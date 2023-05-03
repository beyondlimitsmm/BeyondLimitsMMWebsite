import WhyChooseUs1 from "../assets/layers/whychooseus-1.svg";

export const WhyChooseUs = () => {
  return (
    <section
      id="whyUs"
      className="relative scroll-m-16 overflow-hidden bg-[#F6F9FF] py-10 lg:py-20"
    >
      <img
        src={WhyChooseUs1}
        alt=""
        className="absolute  -right-32 -top-20 scale-50 md:top-20 md:scale-75 lg:top-0 lg:-right-10 lg:scale-100"
      />

      <div className="container flex flex-col justify-between lg:flex-row lg:justify-center">
        <h1 className="z-10 mx-4 mb-6 block text-primaryDarkBlue lg:hidden">
          Why You Should Choose Beyond Limits
        </h1>
        <div className="z-10 flex flex-col lg:w-1/3 lg:max-w-[480px]">
          <WhyChooseUsCard
            title="Customized Solutions"
            body="We develop bespoke software solutions that address your unique business challenges, streamline processes, and maximize efficiency. Our custom software solutions are designed to grow with your business, ensuring long-term success."
          ></WhyChooseUsCard>

          <WhyChooseUsCard
            title="Agile Approach"
            body="We follow agile development practices, ensuring flexibility and efficiency throughout the development process."
          ></WhyChooseUsCard>

          <WhyChooseUsCard
            title="Dedicated Support"
            body="Our commitment to your success extends beyond project completion. We offer ongoing support to ensure your software continues to deliver exceptional results."
          ></WhyChooseUsCard>
        </div>
        <div className="z-10 flex flex-col lg:ml-24 lg:w-2/3 lg:max-w-[670px]">
          <h1 className="mb-6 hidden text-primaryDarkBlue lg:block">
            Why You Should Choose Beyond Limits
          </h1>

          <WhyChooseUsCard
            title="Proven Track Record"
            body="Our diverse portfolio of successful projects and satisfied clients speaks to our ability to transform businesses through innovative software."
          ></WhyChooseUsCard>

          <WhyChooseUsCard
            title="Technological Excellence"
            body="Our team stays ahead of industry trends, utilizing the latest tools and technologies to create reliable, scalable solutions"
          ></WhyChooseUsCard>
        </div>
      </div>
    </section>
  );
};

export const WhyChooseUsCard = ({
  title,
  body,
}: {
  title: string;
  body: string;
}) => {
  return (
    <div className="my-2 flex flex-col items-center justify-center rounded-xl bg-white py-4 px-12">
      <h5 className="mb-4 font-medium text-primary">{title}</h5>
      <p className="text-center text-text-secondary45">{body}</p>
    </div>
  );
};
