import { useEffect, useState } from "react";

const Navbar = () => {

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close the mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };


  const [scrolled, setScrolled] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Add scroll event listener when component mounts
  
  return (
    <nav className={`h-20 ${
        scrolled ? "fixed top-0 w-screen bg-white shadow-md z-50" : ""
      }`}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className={`block h-6 w-6 ${
                  mobileMenuOpen ? "hidden" : "block"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={`hidden h-6 w-6 ${
                  mobileMenuOpen ? "block" : "hidden"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-10 w-auto"
                src="http://schrankdesign.de/cdn/shop/files/Grayscale_on_Transparent.png"
                alt="Your Company"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-700 font-mono rounded-md px-3 py-2 text-md font-medium"
                  onClick={closeMobileMenu}
                >
                  Produkte
                </a>
                <a
                  href="#"
                  className="text-gray-700 font-mono rounded-md px-3 py-2 text-md font-medium"
                  onClick={closeMobileMenu}
                >
                  Qualität
                </a>
                <a
                  href="#"
                  className="text-gray-700 font-mono rounded-md px-3 py-2 text-md font-medium"
                  onClick={closeMobileMenu}
                >
                  Service
                </a>
                <a
                  href="#"
                  className="text-gray-700 font-mono rounded-md px-3 py-2 text-md font-medium"
                  onClick={closeMobileMenu}
                >
                  Beratung
                </a>
                <a
                  href="#"
                  className="text-gray-700 font-mono rounded-md px-3 py-2 text-md font-medium"
                  onClick={closeMobileMenu}
                >
                  Über Uns
                </a>
                <a
                  href="#"
                  className="text-green-700 rounded-md px-3 py-2 text-md font-medium"
                  onClick={closeMobileMenu}
                >
                  Kostenlose Muster
                </a>
              </div>
            </div>
          </div>
          <div className="absolute  inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative flex gap-2 rounded-full  p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <img
                src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20focusable%3D%22false%22%20width%3D%2224%22%20height%3D%2224%22%20class%3D%22icon%20icon--picto-chat%20%20%20%22%20viewBox%3D%220%200%2024%2024%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M18.3234%2010.1404C18.3234%2014.6362%2014.9806%2017.9327%2010.473%2017.9327M18.3234%2010.1404C18.3234%205.64457%2014.6693%202%2010.1617%202C5.65412%202%202%205.0042%202%209.5C2%2010.9769%202.50153%2012.5042%203%2013.5L2%2018.2807L6.4857%2016.9369C7.7184%2017.6824%208.92606%2017.9327%2010.473%2017.9327M18.3234%2010.1404C19.5489%2010.7827%2022%2012.6539%2022%2015C22%2017.3461%2021.3333%2018.9776%2021%2019.5L21.5%2022L18.5%2021.5C16.6487%2022.2884%2012.4514%2022.6788%2010.473%2017.9327%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%3C%2Fsvg%3E"
                alt=""
              />
              <h2 className="text-green-700">FAQ</h2>
            </button>
          </div>
          <img
            className="ml-4"
            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20focusable%3D%22false%22%20width%3D%2218%22%20height%3D%2218%22%20class%3D%22icon%20icon--header-search%20%20%20%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M12.336%2012.336c2.634-2.635%202.682-6.859.106-9.435-2.576-2.576-6.8-2.528-9.435.106C.373%205.642.325%209.866%202.901%2012.442c2.576%202.576%206.8%202.528%209.435-.106zm0%200L17%2017%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%3C%2Fsvg%3E"
            alt=""
          />
          <img
          className="ml-5"
            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20focusable%3D%22false%22%20width%3D%2221%22%20height%3D%2220%22%20class%3D%22icon%20icon--header-shopping-cart%20%20%20%22%20viewBox%3D%220%200%2021%2020%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M0%201H4L5%2011H17L19%204H8%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%226%22%20cy%3D%2217%22%20r%3D%222%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%3E%3C%2Fcircle%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2216%22%20cy%3D%2217%22%20r%3D%222%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%3E%3C%2Fcircle%3E%0A%20%20%20%20%20%20%3C%2Fsvg%3E"
            alt=""
          />
        </div>
      </div>
      <div
        className={`sm:hidden ${mobileMenuOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium"
            onClick={closeMobileMenu}
          >
            Produkte
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium"
            onClick={closeMobileMenu}
          >
            Qualität
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium"
            onClick={closeMobileMenu}
          >
            Service
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium"
            onClick={closeMobileMenu}
          >
            Beratung
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium"
            onClick={closeMobileMenu}
          >
            Über Uns
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium"
            onClick={closeMobileMenu}
          >
            Kostenlose Muster
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
