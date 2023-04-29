import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Map from "../assets/Map.png";

export const ContactSection = () => {
  return (
    <section className="container flex justify-between items-center gap-6 py-10">
      <div className=" w-1/2 h-96 rounded-xl">
        <img src={Map} alt="" className="h-full" />
      </div>
      <div className="w-1/2 h-96 ContactInfo flex flex-col justify-center bg-primary px-11 gap-8 rounded-xl">
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
    <div className="flex items-center text-white gap-4">
      <div className="mb-4">{icon}</div>
      <div>
        <p>{title}</p>
        <p>{body}</p>
      </div>
    </div>
  );
};
