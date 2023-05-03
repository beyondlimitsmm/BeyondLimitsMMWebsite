import { FiFacebook, FiGithub, FiInstagram, FiTwitter } from "react-icons/fi";
import Logo from "/tab_logo.png";

export const Footer = () => {
  return (
    <section className="Footer container mx-6 mb-12 sm:mx-auto lg:mb-24 ">
      <div className="flex flex-col justify-center gap-6 md:flex-row md:gap-0">
        <div className="md:w-1/2 lg:w-1/4">
          <div className="mb-3 flex items-center">
            <img
              src={Logo}
              alt=""
              width={32}
              height={32}
              className="overflow-hidden rounded-lg"
            />
            <h5 className="ml-2 text-primary">Beyond Limits</h5>
          </div>
          <p className="max-w-[250px] text-text-secondary45">
            We are top rated Digital Marketing and Software Provider in Myanmar.
          </p>
        </div>
        <div className="row md:w-1/2 lg:w-1/3">
          <li className="flex w-20 items-center lg:w-24">
            <a className="" href="#home">
              Home
            </a>
          </li>
          <li className="flex w-20 items-center lg:w-24">
            <a className="" href="#aboutUs">
              About Us
            </a>
          </li>
          <li className="flex w-20 items-center lg:w-24">
            <a className="" href="#services">
              Services
            </a>
          </li>
          <li className="flex w-20 items-center lg:w-24">
            <a className="" href="#process">
              Process
            </a>
          </li>
          <li className="flex w-20 items-center lg:w-24">
            <a className="" href="#team">
              Team
            </a>
          </li>
          <li className="flex w-20 items-center lg:w-24">
            <a className="" href="#whyUs">
              Why Us
            </a>
          </li>
          <li className="flex w-20 items-center lg:w-24">
            <a className="" href="#contactUs">
              Contact Us
            </a>
          </li>
        </div>
        <div className="flex gap-3 md:hidden lg:flex lg:w-1/4">
          <SocialCircle icon={<FiTwitter />} link=""></SocialCircle>
          <SocialCircle
            icon={<FiFacebook />}
            customStyle="bg-primary text-white border-primary"
            link=""
          ></SocialCircle>
          <SocialCircle icon={<FiInstagram />} link=""></SocialCircle>
          <SocialCircle icon={<FiGithub />} link=""></SocialCircle>
        </div>
      </div>
      <div className="mt-4 hidden gap-3 md:flex md:w-1/4 lg:hidden">
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
      className={`flex h-8 w-8 items-center justify-center rounded-full border text-black ${
        customStyle === undefined ? " border-text-secondary45" : customStyle
      }`}
    >
      <a href={link} className="">
        {icon}
      </a>
    </div>
  );
};
