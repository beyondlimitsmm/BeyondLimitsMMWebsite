import { useEffect, useState } from "react";

export const NavBar = () => {
  const [navBarClass, setNavBarClass] = useState("");
  const [navbarTogglerClass, setNavbarTogglerClass] = useState("");

  const handleShadowOnScroll = () => {
    if (window.scrollY > 10) {
      setNavBarClass("shadow");
    } else {
      setNavBarClass("");
    }
  };

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
      const scrollTopMinus = scrollPos + 73;
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
    window.addEventListener("scroll", handleShadowOnScroll);
    window.addEventListener("scroll", handleMenuOnScroll);

    return () => {
      window.removeEventListener("scroll", handleShadowOnScroll);
      window.removeEventListener("scroll", handleMenuOnScroll);
    };
  }, [navbarTogglerClass]);

  const toggleNavBtn = () => {
    handleMenuOnScroll();
    if (navbarTogglerClass === "") {
      setNavbarTogglerClass("active");
    } else {
      setNavbarTogglerClass("");
    }
  };

  const handleClickLink = () => {
    setNavbarTogglerClass("");
  };

  // TODO: handle Link Active

  return (
    <div className={`navbar-area bg-white ${navBarClass}`}>
      {navbarTogglerClass === "active" ? (
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
      ) : null}
      <div className="container relative">
        <div className="row items-center">
          <div className="w-full">
            <nav className="flex items-center justify-between py-4 navbar navbar-expand-lg">
              <div className="h-13 w-21 bg-slate-600 flex justify-center items-center px-2 mr-13 text-white">
                LOGO
              </div>
              <button
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
              </button>

              <div
                className={`absolute left-0 z-20 hidden w-full px-5 py-3 duration-300 bg-white lg:block top-full mt-full lg:static`}
                id="navbarOne"
              >
                <ul
                  id="nav"
                  className="items-center content-start mr-auto lg:justify-end navbar-nav lg:flex"
                >
                  <li className="nav-item ml-5 lg:ml-11">
                    <a className="page-scroll active" href="#home">
                      Home
                    </a>
                  </li>
                  <li className="nav-item ml-5 lg:ml-11">
                    <a className="page-scroll" href="#about">
                      About
                    </a>
                  </li>
                  <li className="nav-item ml-5 lg:ml-11">
                    <a className="page-scroll" href="#services">
                      Services
                    </a>
                  </li>

                  <li className="nav-item ml-5 lg:ml-11">
                    <a className="page-scroll" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
