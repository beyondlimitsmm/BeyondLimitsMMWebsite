import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Map from "../assets/Map.png";
import Contact1 from "../assets/layers/contact-1.svg";

export const ContactSection = () => {
  return (
    <section
      id="contactUs"
      className="container flex flex-col items-center justify-between gap-6 py-10 md:flex-row "
    >
      <div className="h-56 rounded-xl md:h-72 md:w-1/2 lg:h-96">
        <img src={Map} alt="" className="h-full" />
      </div>
      <div className="ContactInfo relative flex h-72 flex-col justify-center gap-8 overflow-hidden rounded-xl bg-primary px-8 md:h-72 md:w-1/2 md:px-11 lg:h-96">
        <img src={Contact1} alt="" className="absolute right-0" />
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
    <div className="flex items-center gap-4 text-white">
      <div className="mb-4">{icon}</div>
      <div>
        <p>{title}</p>
        <p>{body}</p>
      </div>
    </div>
  );
};
