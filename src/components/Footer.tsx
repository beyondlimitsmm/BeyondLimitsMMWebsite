import { FiFacebook, FiGithub, FiInstagram, FiTwitter } from "react-icons/fi";
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
          <SocialCircle icon={<FiTwitter size={20} />} link=""></SocialCircle>
          <SocialCircle
            icon={<FiFacebook size={20} />}
            customStyle="bg-primary text-white border-primary"
            link=""
          ></SocialCircle>
          <SocialCircle icon={<FiInstagram size={20} />} link=""></SocialCircle>
          <SocialCircle icon={<FiGithub size={20} />} link=""></SocialCircle>
        </div>
      </div>
      <div className="my-4 border-b border-[#E2E8F0]"></div>
      <div className="flex flex-col-reverse justify-between gap-4 md:flex-row lg:justify-center">
        <div>© Copyright 2023, All Rights Reserved by Beyond Limits</div>
        <div className="flex gap-3 lg:hidden">
          <SocialCircle icon={<FiTwitter size={20} />} link=""></SocialCircle>
          <SocialCircle
            icon={<FiFacebook size={20} />}
            customStyle="bg-primary text-white border-primary"
            link=""
          ></SocialCircle>
          <SocialCircle icon={<FiInstagram size={20} />} link=""></SocialCircle>
          <SocialCircle icon={<FiGithub size={20} />} link=""></SocialCircle>
        </div>
      </div>
    </footer>
  );
};

// export const Footer = () => {
//   return (
//     <footer className="Footer container mx-6 mb-12 sm:mx-auto lg:mb-24 ">
//       <div className="flex flex-col justify-center gap-6 md:flex-row md:gap-0">
// <div className="md:w-1/2 lg:w-1/4">
//   <div className="mb-3 flex items-center">
//     <img
//       src={Logo}
//       alt=""
//       width={32}
//       height={32}
//       className="overflow-hidden rounded-lg"
//     />
//     <h5 className="ml-2 text-primary">Beyond Limits</h5>
//   </div>
//   <p className="max-w-[250px] text-text-secondary45">
//     We are top rated Digital Marketing and Software Provider in Myanmar.
//   </p>
// </div>
//         <div className="row md:w-1/2 lg:w-1/3">
//           <li className="flex w-20 items-center lg:w-24">
//             <a className="" href="#home">
//               Home
//             </a>
//           </li>
//           <li className="flex w-20 items-center lg:w-24">
//             <a className="" href="#aboutUs">
//               About Us
//             </a>
//           </li>
//           <li className="flex w-20 items-center lg:w-24">
//             <a className="" href="#services">
//               Services
//             </a>
//           </li>
//           <li className="flex w-20 items-center lg:w-24">
//             <a className="" href="#process">
//               Process
//             </a>
//           </li>
//           <li className="flex w-20 items-center lg:w-24">
//             <a className="" href="#team">
//               Team
//             </a>
//           </li>
//           <li className="flex w-20 items-center lg:w-24">
//             <a className="" href="#whyUs">
//               Why Us
//             </a>
//           </li>
//           <li className="flex w-20 items-center lg:w-24">
//             <a className="" href="#contactUs">
//               Contact Us
//             </a>
//           </li>
//         </div>
//         <div className="flex gap-3 md:hidden lg:flex lg:w-1/4">
//           <SocialCircle icon={<FiTwitter />} link=""></SocialCircle>
//           <SocialCircle
//             icon={<FiFacebook />}
//             customStyle="bg-primary text-white border-primary"
//             link=""
//           ></SocialCircle>
//           <SocialCircle icon={<FiInstagram />} link=""></SocialCircle>
//           <SocialCircle icon={<FiGithub />} link=""></SocialCircle>
//         </div>
//       </div>
//       <div className="mt-4 hidden gap-3 md:flex md:w-1/4 lg:hidden">
// <SocialCircle icon={<FiTwitter />} link=""></SocialCircle>
// <SocialCircle
//   icon={<FiFacebook />}
//   customStyle="bg-primary text-white border-primary"
//   link=""
// ></SocialCircle>
// <SocialCircle icon={<FiInstagram />} link=""></SocialCircle>
// <SocialCircle icon={<FiGithub />} link=""></SocialCircle>
//       </div>
//     </footer>
//   );
// };

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
      <a href={link} className="">
        {icon}
      </a>
    </div>
  );
};
