import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Map from "../assets/Map.png";
import Contact1 from "../assets/layers/contact-1.svg";

export const ContactSection = () => {
  return (
    <section
      id="contactUs"
      className="container flex flex-col items-center justify-between gap-6 py-10 lg:flex-row "
    >
      <div className="h-56 rounded-xl md:h-80 lg:h-96 lg:w-1/2">
        <img src={Map} alt="" className="h-full" />
      </div>
      <div className="ContactInfo relative flex h-72 max-w-[378px] flex-col justify-center gap-8 overflow-hidden rounded-xl bg-primary px-8 md:h-80 md:w-4/5 md:max-w-[542px] lg:h-96 lg:w-1/2 lg:max-w-full">
        <img
          src={Contact1}
          alt=""
          className="absolute -right-8 scale-75 md:right-0 md:scale-100 "
        />
        <ContactInfoChild
          icon={<FiPhone />}
          title="Tel"
          body="09770531873"
        ></ContactInfoChild>
        <ContactInfoChild
          icon={<FiMail />}
          title="Mail"
          body="beyondlimitsmm.com"
        ></ContactInfoChild>
        <ContactInfoChild
          icon={<FiMapPin />}
          title="Address"
          body="A -1106, Diamond Condo. Hledan Tsp, Yangon Myanmar"
        ></ContactInfoChild>
      </div>
    </section>
  );
};

export interface ICardInfo {
  icon: React.ReactNode;
  title: string;
  body: string;
}

export const ContactInfoChild = ({ icon, title, body }: ICardInfo) => {
  return (
    <div className="z-20 flex items-center gap-4 text-white">
      <div className="mb-4">{icon}</div>
      <div>
        <p>{title}</p>
        <p className="z-20 block bg-clip-text">{body}</p>
      </div>
    </div>
  );
};
