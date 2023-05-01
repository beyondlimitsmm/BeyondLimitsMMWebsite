import { FiCalendar } from "react-icons/fi";
import Logo from "/tab_logo.png";

export const Footer = () => {
  return (
    <section className="Footer flex container mb-24 justify-center">
      <div className="w-1/4">
        <div className="flex items-center mb-3">
          <img src={Logo} alt="" width={32} height={32} />
          <h5 className="text-primary ml-2">Beyond Limits</h5>
        </div>
        <p className="text-text-secondary45 max-w-[250px]">
          We are top rated Digital Marketing and Software Provider in Myanmar.
        </p>
      </div>
      <div className="w-1/3 row">
        <li className="w-24 flex items-center">
          <a className="" href="#home">
            Home
          </a>
        </li>
        <li className="w-24 flex items-center">
          <a className="" href="#aboutUs">
            About Us
          </a>
        </li>
        <li className="w-24 flex items-center">
          <a className="" href="#services">
            Services
          </a>
        </li>

        <li className="w-24 flex items-center">
          <a className="" href="#process">
            Process
          </a>
        </li>
        <li className="w-24 flex items-center">
          <a className="" href="#team">
            Team
          </a>
        </li>
        <li className="w-24 flex items-center">
          <a className="" href="#whyUs">
            Why Us
          </a>
        </li>
        <li className="w-24 flex items-center">
          <a className="" href="#contactUs">
            Contact Us
          </a>
        </li>
      </div>
      <div className="w-1/4 flex gap-3">
        <SocialCircle></SocialCircle>
        <SocialCircle></SocialCircle>
        <SocialCircle></SocialCircle>
        <SocialCircle></SocialCircle>
      </div>
    </section>
  );
};

export const SocialCircle = ({
  icon,
  link,
}: {
  icon?: React.ReactNode;
  link?: string;
}) => {
  return (
    <div className="rounded-full border w-8 h-8 flex justify-center items-center">
      <a href="" className="">
        <FiCalendar></FiCalendar>
      </a>
    </div>
  );
};
