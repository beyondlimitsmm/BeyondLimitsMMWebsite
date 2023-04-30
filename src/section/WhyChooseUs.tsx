import WhyChooseUs1 from "../assets/layers/whychooseus-1.svg";

export const WhyChooseUs = () => {
  return (
    <section className="bg-[#F6F9FF] py-20 relative">
      <img src={WhyChooseUs1} alt="" className="absolute -right-10 " />

      <div className="container flex justify-between">
        <div className="flex flex-col w-1/3 min-w-[480px]">
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
        <div className="w-2/3 flex flex-col ml-24 max-w-[670px] z-10">
          <h1 className="mb-6 text-primaryDarkBlue">
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
