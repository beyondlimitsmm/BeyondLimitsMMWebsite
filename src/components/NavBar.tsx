import { useEffect, useState } from "react";
import Logo from "/tab_logo.png";

export const NavBar = () => {
  const [openNavBar, setOpenNavBar] = useState(false);

  const handleMenuOnScroll = () => {
    const maxScrollableHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const sections = document.querySelectorAll(".page-scroll");
    const scrollPos =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    const mobileSections = document.querySelectorAll(".link-menu");
    for (let i = 0; i < mobileSections.length; i++) {
      const currLink = mobileSections[i] as HTMLElement;
      const val = currLink.firstElementChild?.getAttribute("href");
      const refElement = document.querySelector(val!) as HTMLElement;
      const scrollTopMinus = scrollPos + 64;

      if (Math.round(scrollPos) === maxScrollableHeight) {
        document.querySelector(".link-menu")?.classList.remove("active-mobile");
        mobileSections[mobileSections.length - 2].classList.remove(
          "active-mobile"
        );
        mobileSections[mobileSections.length - 1].classList.add(
          "active-mobile"
        );
      } else if (
        refElement &&
        refElement.offsetTop <= scrollTopMinus &&
        refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
      ) {
        document.querySelector(".link-menu")?.classList.remove("active-mobile");
        currLink.classList.add("active-mobile");
      } else {
        currLink.classList.remove("active-mobile");
      }
    }

    for (let i = 0; i < sections.length; i++) {
      const currLink = sections[i] as HTMLElement;
      const val = currLink.getAttribute("href");
      const refElement = document.querySelector(val!) as HTMLElement;
      const scrollTopMinus = scrollPos + 64;

      if (Math.round(scrollPos) === maxScrollableHeight) {
        document.querySelector(".page-scroll")?.classList.remove("active");
        sections[sections.length - 2].classList.remove("active");
        sections[sections.length - 1].classList.add("active");
      } else if (
        refElement &&
        refElement.offsetTop <= scrollTopMinus &&
        refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
      ) {
        document.querySelector(".page-scroll")?.classList.remove("active");
        currLink.classList.add("active");
      } else {
        currLink.classList.remove("active");
      }
    }
  };

  const handleWindowResize = () => {
    if (window.innerWidth > 720) {
      setOpenNavBar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleMenuOnScroll);
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("scroll", handleMenuOnScroll);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="navbar-area bg-white shadow-md">
      <div className="relative flex h-full w-full items-center">
        <MobileSlideInNav
          open={openNavBar}
          setOpenNavBar={setOpenNavBar}
        ></MobileSlideInNav>
        {openNavBar && (
          <div
            className="absolute right-0 left-0 top-full bottom-0 h-screen w-screen bg-black opacity-25 md:hidden"
            onClick={() => setOpenNavBar(false)}
          ></div>
        )}

        <nav className="navbar navbar-expand-lg container z-20 flex h-full w-full items-center  justify-between">
          <img
            src={Logo}
            alt=""
            width={32}
            height={32}
            className="overflow-hidden rounded-lg"
          />
          <div
            className={`mt-full absolute left-0 top-full z-20 hidden h-full w-full bg-white px-5 md:static md:block`}
            id="navbarOne"
          >
            <ul
              id="nav"
              className="navbar-nav mr-auto h-full content-start items-center md:flex md:justify-end"
            >
              <li className="nav-item ml-5 flex h-full items-center lg:ml-11">
                <a
                  className="page-scroll active flex h-full items-center"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item ml-5 flex h-full items-center lg:ml-11">
                <a
                  className="page-scroll flex h-full items-center"
                  href="#aboutUs"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item ml-5 flex h-full items-center lg:ml-11">
                <a
                  className="page-scroll flex h-full items-center"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li className="nav-item ml-5 flex h-full items-center lg:ml-11">
                <a
                  className="page-scroll flex h-full items-center"
                  href="#process"
                >
                  Process
                </a>
              </li>
              <li className="nav-item ml-5 flex h-full items-center lg:ml-11">
                <a
                  className="page-scroll flex h-full items-center"
                  href="#team"
                >
                  Team
                </a>
              </li>
              <li className="nav-item ml-5 flex h-full items-center lg:ml-11">
                <a
                  className="page-scroll flex h-full items-center"
                  href="#whyUs"
                >
                  Why Us
                </a>
              </li>
              <li className="nav-item ml-5 flex h-full items-center lg:ml-11">
                <a
                  className="page-scroll flex h-full items-center"
                  href="#contactUs"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <button
            onClick={() => {
              setOpenNavBar(!openNavBar);
            }}
            className={`navbar-toggler block transition-none focus:outline-none md:hidden ${
              openNavBar ? "active" : ""
            }`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarOne"
            aria-controls="navbarOne"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon"></span>
            <span className="toggler-icon"></span>
            <span className="toggler-icon"></span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export const MobileSlideInNav = ({
  open,
  setOpenNavBar,
}: {
  open: boolean;
  setOpenNavBar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  function handleClick(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    const sections = document.querySelectorAll(".link-menu");
    sections.forEach((el) => {
      el.classList.remove("active-mobile");
    });

    e.currentTarget.classList.add("active-mobile");
    setOpenNavBar(false);
  }

  return (
    <div className={`${open ? "block" : "hidden"}`}>
      <div className="absolute top-full right-0 left-0 z-20 w-full bg-white opacity-100 md:hidden md:h-0 md:w-0">
        <li
          className="link-menu active-mobile h-10 leading-10"
          onClick={handleClick}
        >
          <a className="block h-full w-full pl-6 " href="#home">
            Home
          </a>
        </li>
        <li onClick={handleClick} className="link-menu h-10 leading-10">
          <a className="block h-full w-full pl-6" href="#aboutUs">
            About Us
          </a>
        </li>
        <li onClick={handleClick} className="link-menu h-10 leading-10">
          <a className="block h-full w-full pl-6" href="#services">
            Services
          </a>
        </li>
        <li onClick={handleClick} className="link-menu h-10 leading-10">
          <a className="block h-full w-full pl-6" href="#process">
            Process
          </a>
        </li>
        <li onClick={handleClick} className="link-menu h-10 leading-10">
          <a className="block h-full w-full pl-6" href="#team">
            Team
          </a>
        </li>
        <li onClick={handleClick} className="link-menu h-10 leading-10">
          <a className="block h-full w-full pl-6" href="#whyUs">
            Why Us
          </a>
        </li>
        <li onClick={handleClick} className="link-menu h-10 leading-10">
          <a className="block h-full w-full pl-6" href="#contactUs">
            Contact Us
          </a>
        </li>
      </div>
    </div>
  );
};
