import { FiFacebook, FiGithub, FiInstagram, FiTwitter } from "react-icons/fi";
import Logo from "/tab_logo.png";

export const Footer = () => {
  return (
    <section className="Footer flex flex-col md:flex-row container mb-12 mx-4 md:mx-auto md:mb-24 gap-6 md:gap-0 justify-center">
      <div className="md:w-1/4">
        <div className="flex items-center mb-3">
          <img
            src={Logo}
            alt=""
            width={32}
            height={32}
            className="rounded-lg overflow-hidden"
          />
          <h5 className="text-primary ml-2">Beyond Limits</h5>
        </div>
        <p className="text-text-secondary45 max-w-[250px]">
          We are top rated Digital Marketing and Software Provider in Myanmar.
        </p>
      </div>
      <div className="md:w-1/3 row">
        <li className="md:w-24 w-20 flex items-center">
          <a className="" href="#home">
            Home
          </a>
        </li>
        <li className="md:w-24 w-20 flex items-center">
          <a className="" href="#aboutUs">
            About Us
          </a>
        </li>
        <li className="md:w-24 w-20 flex items-center">
          <a className="" href="#services">
            Services
          </a>
        </li>

        <li className="md:w-24 w-20 flex items-center">
          <a className="" href="#process">
            Process
          </a>
        </li>
        <li className="md:w-24 w-20 flex items-center">
          <a className="" href="#team">
            Team
          </a>
        </li>
        <li className="md:w-24 w-20 flex items-center">
          <a className="" href="#whyUs">
            Why Us
          </a>
        </li>
        <li className="md:w-24 w-20 flex items-center">
          <a className="" href="#contactUs">
            Contact Us
          </a>
        </li>
      </div>
      <div className="md:w-1/4 flex gap-3">
        <SocialCircle icon={<FiTwitter />} link=""></SocialCircle>
        <SocialCircle
          icon={<FiFacebook />}
          customStyle="bg-primary text-white border-primary"
          link=""
        ></SocialCircle>
        <SocialCircle icon={<FiInstagram />} link=""></SocialCircle>
        <SocialCircle icon={<FiGithub />} link=""></SocialCircle>
      </div>
    </section>
  );
};

export const SocialCircle = ({
  icon,
  link,
  customStyle,
}: {
  icon: React.ReactNode;
  link: string;
  customStyle?: string;
}) => {
  return (
    <div
      className={`rounded-full border border-text-secondary45 w-8 h-8 flex justify-center items-center text-black ${customStyle}`}
    >
      <a href={link} className="">
        {icon}
      </a>
    </div>
  );
};
