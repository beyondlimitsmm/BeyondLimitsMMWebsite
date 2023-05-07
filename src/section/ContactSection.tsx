import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Map from "../assets/Map.png";
import Contact1 from "../assets/layers/contact-1.svg";

export const ContactSection = () => {
  return (
    <section
      data-section
      id="contactUs"
      className="container flex flex-col items-center justify-between gap-6 py-10 lg:flex-row "
    >
      <div className="h-64 rounded-xl md:h-80 lg:h-96 lg:w-1/2">
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d954.7671578996177!2d96.131527!3d16.822951!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c195783c572807%3A0xd0668fc37bbad07!2sDiamond%20Condominium!5e0!3m2!1sen!2smm!4v1683195660940!5m2!1sen!2smm"
          width="1000"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full max-w-[360px] md:max-w-[542px] lg:max-w-full"
        ></iframe>
      </div>
      <div className="ContactInfo relative flex h-72 max-w-[360px] flex-col justify-center gap-8 overflow-hidden rounded-xl bg-primary px-8 md:h-80 md:w-4/5 md:max-w-[542px] lg:h-96 lg:w-1/2 lg:max-w-full">
        <img
          src={Contact1}
          width={138}
          height={367}
          alt="svg shapes"
          className="absolute -right-8 scale-75 md:right-0 md:scale-100"
        />
        <ContactInfoChild
          icon={<FiPhone />}
          title="Tel"
          body={
            <>
              <a className="mr-2 text-sm" href="tel:09967029812">
                09967029812 ,
              </a>

              <a className="mr-2 text-sm" href="tel:09421116577">
                09421116577
              </a>
            </>
          }
          // body={["09967029812", "09421116577"]}
        ></ContactInfoChild>
        <ContactInfoChild
          icon={<FiMail />}
          title="Mail"
          body={
            <a className="text-sm" href="mailto:beyondlimits.mm@gmail.com">
              beyondlimits.mm@gmail.com
            </a>
          }
        ></ContactInfoChild>
        <ContactInfoChild
          icon={<FiMapPin />}
          title="Address"
          body={
            <a
              target="_blank"
              href="http://maps.google.com/?q=Diamond Condominium, Pyay Road, Yangon"
              className="text-sm"
            >
              A -1106, Diamond Condo. Hledan Tsp, Yangon Myanmar
            </a>
          }
        ></ContactInfoChild>
      </div>
    </section>
  );
};

export interface ICardInfo {
  icon: React.ReactNode;
  title: string;
  body: React.ReactNode;
}

export const ContactInfoChild = ({ icon, title, body }: ICardInfo) => {
  return (
    <div className="z-20 flex items-center gap-4 text-white">
      <div className="mb-4">{icon}</div>
      <div>
        <p>{title}</p>
        <div className="flex">{body}</div>
      </div>
    </div>
  );
};
