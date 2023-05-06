import { useEffect, useRef, useState } from "react";
import Logo from "/tab_logo.png";

export const NavBar = () => {
  const [openNavBar, setOpenNavBar] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find(
          (entry) => entry.isIntersecting
        )?.target;
        if (visibleSection) {
          setActiveSection(visibleSection.id);
        }
      },
      { threshold: 0.5 }
    );
    const sections = document.querySelectorAll<HTMLElement>("[data-section]");
    sections.forEach((section) => {
      observer.current?.observe(section);
    });

    const handleWindowResize = () => {
      setOpenNavBar(false);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
      observer.current?.disconnect();
    };
  }, []);

  return (
    <div className="navbar-area bg-white shadow-md">
      <div className="relative flex h-full w-full items-center">
        {openNavBar && (
          <MobileSlideInNav
            activeSection={activeSection}
            open={openNavBar}
            setOpenNavBar={setOpenNavBar}
          ></MobileSlideInNav>
        )}
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
                  className={`page-scroll ${
                    activeSection === "home" ? "active" : ""
                  } flex h-full items-center`}
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item ml-5 flex h-full items-center lg:ml-11">
                <a
                  className={`page-scroll ${
                    activeSection === "aboutUs" ? "active" : ""
                  } flex h-full items-center`}
                  href="#aboutUs"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item ml-5 flex h-full items-center lg:ml-11">
                <a
                  className={`page-scroll ${
                    activeSection === "services" ? "active" : ""
                  } flex h-full items-center`}
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li className="nav-item ml-5 flex h-full items-center lg:ml-11">
                <a
                  className={`page-scroll ${
                    activeSection === "process" ? "active" : ""
                  } flex h-full items-center`}
                  href="#process"
                >
                  Process
                </a>
              </li>
              <li className="nav-item ml-5 flex h-full items-center lg:ml-11">
                <a
                  className={`page-scroll ${
                    activeSection === "team" ? "active" : ""
                  } flex h-full items-center`}
                  href="#team"
                >
                  Team
                </a>
              </li>
              <li className="nav-item ml-5 flex h-full items-center lg:ml-11">
                <a
                  className={`page-scroll ${
                    activeSection === "whyUs" ? "active" : ""
                  } flex h-full items-center`}
                  href="#whyUs"
                >
                  Why Us
                </a>
              </li>
              <li className="nav-item ml-5 flex h-full items-center lg:ml-11">
                <a
                  className={`page-scroll ${
                    activeSection === "contactUs" ? "active" : ""
                  } flex h-full items-center`}
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
  activeSection,
  setOpenNavBar,
}: {
  activeSection: string;
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
          className={`link-menu ${
            activeSection === "home" ? "active-mobile" : ""
          } h-10 leading-10`}
          onClick={handleClick}
        >
          <a className="block h-full w-full pl-6 " href="#home">
            Home
          </a>
        </li>
        <li
          onClick={handleClick}
          className={`link-menu ${
            activeSection === "aboutUs" ? "active-mobile" : ""
          } h-10 leading-10`}
        >
          <a className="block h-full w-full pl-6" href="#aboutUs">
            About Us
          </a>
        </li>
        <li
          onClick={handleClick}
          className={`link-menu ${
            activeSection === "services" ? "active-mobile" : ""
          } h-10 leading-10`}
        >
          <a className="block h-full w-full pl-6" href="#services">
            Services
          </a>
        </li>
        <li
          onClick={handleClick}
          className={`link-menu ${
            activeSection === "process" ? "active-mobile" : ""
          } h-10 leading-10`}
        >
          <a className="block h-full w-full pl-6" href="#process">
            Process
          </a>
        </li>
        <li
          onClick={handleClick}
          className={`link-menu ${
            activeSection === "team" ? "active-mobile" : ""
          } h-10 leading-10`}
        >
          <a className="block h-full w-full pl-6" href="#team">
            Team
          </a>
        </li>
        <li
          onClick={handleClick}
          className={`link-menu ${
            activeSection === "whyUs" ? "active-mobile" : ""
          } h-10 leading-10`}
        >
          <a className="block h-full w-full pl-6" href="#whyUs">
            Why Us
          </a>
        </li>
        <li
          onClick={handleClick}
          className={`link-menu ${
            activeSection === "contactUs" ? "active-mobile" : ""
          } h-10 leading-10`}
        >
          <a className="block h-full w-full pl-6" href="#contactUs">
            Contact Us
          </a>
        </li>
      </div>
    </div>
  );
};
