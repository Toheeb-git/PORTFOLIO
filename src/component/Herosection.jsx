import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-scroll";
import { RiCloseLargeFill } from "react-icons/ri";
import logo from "../assets/BuildWithToheeb 3.png";
import Logo2 from "../assets/Logo2.jpeg";

const Herosection = () => {
  const [mobilenav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobilenav);
  };

  const handleNavClick = () => {
    setMobileNav(false);
  };

  return (
    <section className="relative min-h-screen bg-cover bg-center bg-[url('assets/background.jpg')] bg-fixed text-white">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Desktop Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 hidden lg:flex items-center justify-between px-14 py-5 bg-black/30 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <img
            src={Logo2}
            alt="BuildWithToheeb Logo"
            className="w-16 h-16 rounded-full object-cover"
          />

          <div>
            <h2 className="text-xl font-bold">BuildWithToheeb</h2>
            <p className="text-sm text-gray-400">Full Stack Developer</p>
          </div>
        </div>
        <ul className="flex text-lg font-semibold gap-9">
          <Link to="about" smooth duration={500}>
            <li className="text-gray-400 hover:text-white cursor-pointer">
              About
            </li>
          </Link>
          <Link to="project" smooth duration={500}>
            <li className="text-gray-400 hover:text-white cursor-pointer">
              Portfolio
            </li>
          </Link>
          <Link to="service" smooth duration={500}>
            <li className="text-gray-400 hover:text-white cursor-pointer">
              Service
            </li>
          </Link>
          <Link to="testimonial" smooth duration={500}>
            <li className="text-gray-400 hover:text-white cursor-pointer">
              Testimonials
            </li>
          </Link>
        </ul>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block ring-1 ring-white px-8 py-3 font-semibold hover:bg-white hover:text-blue-700 transition duration-300"
        >
          View CV
        </a>
      </nav>

      {/* Mobile Nav */}
      <nav className="absolute top-0 z-20 flex w-full justify-between items-center px-5 py-4 lg:hidden">
        <div className="flex items-center gap-2">
          <img
            src={Logo2}
            alt="BuildWithToheeb Logo"
            className="w-12 h-12 rounded-full object-cover"
          />

          <div className="leading-tight">
            <h2 className="text-lg font-extrabold italic tracking-wider text-white">
              BuildWithToheeb
            </h2>

            <p className="text-xs text-purple-400">Full Stack Developer</p>
          </div>
        </div>

        <div
          onClick={toggleMobileNav}
          className="p-2 border border-white rounded-md text-xl"
        >
          {mobilenav ? <RiCloseLargeFill /> : <RxHamburgerMenu />}
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="w-full lg:w-[60%]">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-snug">
            Freelance web developer based in Lagos
          </h1>

          <p className="text-sm sm:text-base lg:text-lg mt-4">
            Expert development services by Lagos-based freelancer for your
            website needs.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="contact" smooth={true} duration={500} offset={-50}>
              <button className="px-6 py-3 bg-purple-600 hover:bg-white hover:text-purple-600 font-semibold duration-300">
                Let's connect
              </button>
            </Link>
            <Link to="project" smooth={true} duration={500} offset={-50}>
              <button className="ring-1 px-6 py-3 font-semibold hover:bg-white hover:text-purple-600 duration-300">
                Check my work
              </button>
            </Link>
            
              <a href="/" target="_blank" rel="noopener noreferrer" className="ring-1 ring-white px-6 py-3 font-semibold hover:bg-white hover:text-blue-700 transition duration-300 lg:hidden">
                View CV
              </a>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {mobilenav && (
        <div className="absolute top-16 z-[100] w-full bg-[#1b1448] lg:hidden">
          <ul className="flex flex-col text-lg font-semibold">
            <Link to="about" smooth duration={500} onClick={handleNavClick}>
              <li className="border-b border-white px-6 py-3">About</li>
            </Link>
            <Link to="project" smooth duration={500} onClick={handleNavClick}>
              <li className="border-b border-white px-6 py-3">Portfolio</li>
            </Link>
            <Link to="service" smooth duration={500} onClick={handleNavClick}>
              <li className="border-b border-white px-6 py-3">Services</li>
            </Link>
            <Link
              to="testimonial"
              smooth
              duration={500}
              onClick={handleNavClick}
            >
              <li className="border-b border-white px-6 py-3">Testimonials</li>
            </Link>
          </ul>
        </div>
      )}
    </section>
  );
};

export default Herosection;
