import {
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import Logo from "/tab_logo.png";

export const Footer = () => {
  return (
    <footer className="Footer container my-8 sm:mx-auto">
      <div className="mb-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Div 1 */}
        <div className="">
          <div className="mb-4 flex items-center">
            <img
              src={Logo}
              alt=""
              width={32}
              height={32}
              className="overflow-hidden rounded-lg"
            />
            <h4 className="ml-4 text-primary">Beyond Limits</h4>
          </div>
          <p className="text-base font-medium text-text-secondary45 md:max-w-[300px]">
            We are top rated Digital Marketing and Software Provider in Myanmar.
          </p>
        </div>

        {/* Div 2 */}
        <div className="grid grid-cols-2 justify-items-start md:justify-items-center lg:justify-items-end">
          <div>
            <h4 className="mb-4 font-bold text-primary">Quick Links</h4>

            <a
              className="group mb-2 block transition-all duration-150 hover:text-primary"
              href="#home"
            >
              <span className="relative">
                Home
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-primary transition-all group-hover:w-full"></span>
              </span>
            </a>

            <a
              className="group mb-2 block transition-all duration-150 hover:text-primary"
              href="#aboutUs"
            >
              <span className="relative">
                About Us
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-primary transition-all group-hover:w-full"></span>
              </span>
            </a>

            <a
              className="group mb-2 block transition-all duration-150 hover:text-primary"
              href="#team"
            >
              <span className="relative">
                Team
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-primary transition-all group-hover:w-full"></span>
              </span>
            </a>

            <a
              className="group mb-2 block transition-all duration-150 hover:text-primary"
              href="#contactUs"
            >
              <span className="relative">
                Contact Us
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-primary transition-all group-hover:w-full"></span>
              </span>
            </a>
          </div>
          <div className="">
            <h4 className="mb-4 font-bold text-primary">Resources</h4>

            <a
              className="group mb-2 block transition-all duration-150 hover:text-primary"
              href="#services"
            >
              <span className="relative">
                Services
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-primary transition-all group-hover:w-full"></span>
              </span>
            </a>

            <a
              className="group mb-2 block transition-all duration-150 hover:text-primary"
              href="#process"
            >
              <span className="relative">
                Process
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-primary transition-all group-hover:w-full"></span>
              </span>
            </a>
            <a
              className="group mb-2 block transition-all duration-150 hover:text-primary"
              href="#whyUs"
            >
              <span className="relative">
                Why Us
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-primary transition-all group-hover:w-full"></span>
              </span>
            </a>
          </div>
        </div>

        <div className="hidden justify-end gap-3 lg:flex">
          <SocialCircle
            icon={<FiLinkedin size={20} />}
            link="https://www.linkedin.com/company/beyond-limits-technologies-myanmar/"
          ></SocialCircle>
          <SocialCircle
            icon={<FiFacebook size={20} />}
            customStyle="bg-primary text-white border-primary"
            link="https://www.facebook.com/beyondlimitsmm"
          ></SocialCircle>
          <SocialCircle icon={<FiInstagram size={20} />} link=""></SocialCircle>
          <SocialCircle icon={<FiGithub size={20} />} link=""></SocialCircle>
        </div>
      </div>
      <div className="my-4 border-b border-[#E2E8F0]"></div>
      <div className="flex flex-col-reverse justify-between gap-4 md:flex-row lg:justify-center">
        <div>© Copyright 2023, All Rights Reserved by Beyond Limits</div>
        <div className="flex gap-3 lg:hidden">
          <SocialCircle
            icon={<FiLinkedin size={20} />}
            link="https://www.linkedin.com/company/beyond-limits-technologies-myanmar/"
          ></SocialCircle>
          <SocialCircle
            icon={<FiFacebook size={20} />}
            customStyle="bg-primary text-white border-primary"
            link="https://www.facebook.com/beyondlimitsmm"
          ></SocialCircle>
          <SocialCircle icon={<FiInstagram size={20} />} link=""></SocialCircle>
          <SocialCircle icon={<FiGithub size={20} />} link=""></SocialCircle>
        </div>
      </div>
    </footer>
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
      className={`flex h-10 w-10 items-center justify-center rounded-full border text-black ${
        customStyle === undefined ? " border-text-secondary45" : customStyle
      }`}
    >
      <a href={link} target="_blank" className="">
        {icon}
      </a>
    </div>
  );
};
