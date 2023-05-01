import { useEffect, useState } from "react";
import Logo from "/tab_logo.png";

export const NavBar = () => {
  const [navbarTogglerClass, setNavbarTogglerClass] = useState("");

  const handleMenuOnScroll = () => {
    const sections = document.querySelectorAll(".page-scroll");
    const scrollPos =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    for (let i = 0; i < sections.length; i++) {
      const currLink = sections[i] as HTMLElement;
      const val = currLink.getAttribute("href");
      const refElement = document.querySelector(val!) as HTMLElement;
      const scrollTopMinus = scrollPos + 64;
      if (
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

  useEffect(() => {
    window.addEventListener("scroll", handleMenuOnScroll);

    return () => {
      window.removeEventListener("scroll", handleMenuOnScroll);
    };
  }, [navbarTogglerClass]);

  return (
    <div className="navbar-area bg-white shadow-md">
      {/* /// Insert */}
      <div className="container relative h-full flex items-center">
        <nav className="flex items-center justify-between navbar navbar-expand-lg w-full h-full">
          <img
            src={Logo}
            alt=""
            width={32}
            height={32}
            className="rounded-lg overflow-hidden"
          />
          {/* /// Insert Btn */}

          <div
            className={`absolute left-0 z-20 hidden w-full h-full px-5 bg-white lg:block top-full mt-full lg:static`}
            id="navbarOne"
          >
            <ul
              id="nav"
              className="items-center content-start mr-auto lg:justify-end navbar-nav lg:flex h-full"
            >
              <li className="nav-item ml-5 lg:ml-11 h-full flex items-center">
                <a
                  className="page-scroll h-full active flex items-center"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item ml-5 lg:ml-11 h-full flex items-center">
                <a
                  className="page-scroll h-full flex items-center"
                  href="#aboutUs"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item ml-5 lg:ml-11 h-full flex items-center">
                <a
                  className="page-scroll h-full flex items-center"
                  href="#services"
                >
                  Services
                </a>
              </li>

              <li className="nav-item ml-5 lg:ml-11 h-full flex items-center">
                <a
                  className="page-scroll h-full flex items-center"
                  href="#process"
                >
                  Process
                </a>
              </li>
              <li className="nav-item ml-5 lg:ml-11 h-full flex items-center">
                <a
                  className="page-scroll h-full flex items-center"
                  href="#team"
                >
                  Team
                </a>
              </li>
              <li className="nav-item ml-5 lg:ml-11 h-full flex items-center">
                <a
                  className="page-scroll h-full flex items-center"
                  href="#whyUs"
                >
                  Why Us
                </a>
              </li>
              <li className="nav-item ml-5 lg:ml-11 h-full flex items-center">
                <a
                  className="page-scroll h-full flex items-center"
                  href="#contactUs"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

{
  /* <button
onClick={() => toggleNavBtn()}
className={`block navbar-toggler focus:outline-none lg:hidden ${navbarTogglerClass}`}
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
</button> */
}

{
  /* {navbarTogglerClass === "active" ? (
        <div className="absolute px-8 bg-white shadow w-full left-0 right-0 top-full">
          <ul
            id="nav"
            className="items-center content-start mr-auto lg:justify-end navbar-nav lg:flex"
          >
            <li
              className="nav-item ml-5 py-1 lg:ml-11"
              onClick={() => handleClickLink()}
            >
              <a className="page-scroll active" href="#home">
                Home
              </a>
            </li>
            <li
              className="nav-item ml-5 py-1 lg:ml-11"
              onClick={() => handleClickLink()}
            >
              <a className="page-scroll" href="#about">
                About
              </a>
            </li>
            <li
              className="nav-item ml-5 py-1 lg:ml-11"
              onClick={() => handleClickLink()}
            >
              <a className="page-scroll" href="#services">
                Services
              </a>
            </li>

            <li
              className="nav-item ml-5 py-1 lg:ml-11"
              onClick={() => handleClickLink()}
            >
              <a className="page-scroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      ) : null} */
}
