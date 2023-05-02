import WhyChooseUs1 from "../assets/layers/whychooseus-1.svg";

export const WhyChooseUs = () => {
  return (
    <section
      id="whyUs"
      className="bg-[#F6F9FF] py-10 md:py-20 relative scroll-m-16 overflow-hidden"
    >
      <img
        src={WhyChooseUs1}
        alt=""
        className="absolute  scale-50 -right-32 -top-20 md:top-0 md:-right-10 md:scale-100"
      />

      <div className="container flex flex-col md:flex-row justify-between">
        <h1 className="mb-6 text-primaryDarkBlue block md:hidden mx-4">
          Why You Should Choose Beyond Limits
        </h1>
        <div className="flex flex-col md:w-1/3 max-w-[480px] z-10">
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
        <div className="md:w-2/3 flex flex-col md:ml-24 max-w-[670px] z-10">
          <h1 className="mb-6 text-primaryDarkBlue hidden md:block">
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
    <div className="bg-white flex justify-center items-center flex-col my-2 py-4 px-12 rounded-xl">
      <h5 className="text-primary mb-4 font-medium">{title}</h5>
      <p className="text-center text-text-secondary45">{body}</p>
    </div>
  );
};
