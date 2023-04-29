import {
  AiOutlineBulb,
  AiOutlineCloud,
  AiOutlineLaptop,
  AiOutlineMobile,
  AiOutlinePicLeft,
} from "react-icons/ai";
import { ICardInfo } from "./ContactSection";

export const OurService = () => {
  return (
    <section className="OurService">
      <div className="bg-primary py-8">
        <div className="container flex gap-14 items-center text-white">
          <h1 className=" w-1/2">
            Transforming Businesses with Cutting-Edge Solutions
          </h1>

          <h5 className="w-1/2 max-w-[520px] font-normal">
            At Beyond Limits Technologies, we specialize in a wide range of
            software development servicesdesigned to help your business achieve
            its full potential. Our expertise, coupled with a deepunderstanding
            of industry trends and emerging technologies, enables us to create
            tailoredsolutions that drive success.
          </h5>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container grid grid-cols-2 gap-6 mb-6">
          <OurServiceCard
            icon={<AiOutlineLaptop className="w-8 h-8" />}
            title="Custom Software Development"
            body="We develop bespoke software solutions that address your unique business challenges, streamline processes, and maximize efficiency. Our custom software solutions are designed to grow with your business, ensuring long-term success."
          ></OurServiceCard>
          <OurServiceCard
            icon={<AiOutlineMobile className="w-8 h-8" />}
            title="Mobile App Development"
            body="Capture your target audience with engaging, user-friendly mobile applications. Our team has expertise in developing native and cross-platform mobile apps for iOS and Android, ensuring your app stands out in today's competitive market."
          ></OurServiceCard>
        </div>
        <div className="container grid grid-cols-3 gap-6">
          <OurServiceCard
            icon={<AiOutlinePicLeft className="w-8 h-8" />}
            title="Web Development"
            body="We create responsive, feature-rich websites that deliver exceptional user experiences. Our expertise includes designing and developing websites using popular technologies and frameworks like HTML5, CSS3, JavaScript, React, Angular, and more."
          ></OurServiceCard>
          <OurServiceCard
            icon={<AiOutlineBulb className="w-8 h-8" />}
            title="UX/UI Design"
            body="Our designers work closely with you to create intuitive, visually appealing userinterfaces that align with your brand identity and resonate with your target audience. Weprioritize usability and accessibility to ensure a seamless user experience across allplatforms."
          ></OurServiceCard>
          <OurServiceCard
            icon={<AiOutlineCloud className="w-8 h-8" />}
            title="Cloud Solutions"
            body="We help businesses harness the power of the cloud by designing and implementing scalable, secure, and cost-effective cloud-based solutions. Our expertise includes working with major cloud service providers such as AWS, Google Cloud, and Microsoft Azure."
          ></OurServiceCard>
        </div>
      </div>
    </section>
  );
};

export const OurServiceCard = ({ icon, title, body }: ICardInfo) => {
  return (
    <div className="flex flex-col px-6 py-4 items-center rounded-3xl  border-[3px] border-[#F5F5F5]">
      <div className="mb-6 w-20 h-20 bg-neutral2 rounded-full flex justify-center items-center">
        <div className=" w-16 h-16 bg-primary rounded-full flex justify-center items-center text-white">
          {icon}
        </div>
      </div>

      <h4 className="mb-4 text-primary">{title}</h4>

      <p className="text-center">{body}</p>
    </div>
  );
};
