import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoDiscord } from "react-icons/io5";
import { SiYoutube } from "react-icons/si";
import Photo from "../assets/My Picture.jpeg"
const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex px-6 py-20 bg-[#0b043a] text-white  lg:flex-row flex-col gap-8"
    >
      <div className="flex lg:w-[40%] w-full justify-center">
        <div className=" lg:relative w-[80%] bg-[#1B1448] ring-1 ">
          <img
            className="lg:absolute right-[-40px] top-[-60px]"
            src={Photo}
          />
          <div className="flex pl-10 w-full lg:absolute bottom-5 gap-5 text-2xl ">
            <a
              href="https://x.com/@toshiba_crypt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-2xl cursor-pointer" />
            </a>
            <IoLogoDiscord />
             <a
              href="https://www.linkedin.com/in/ademola-toheeb-806744382"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl cursor-pointer" />
            </a> 
          </div>
        </div>
      </div>
      <div className="flex lg:w-[60%] w-full flex-col gap-4 items-center justify-center">
        <p className="lg:text-3xl text-2xl font-semibold px-2 lg:px-0">
          I’m Ademola Toheeb. I’m passionate about crafting exceptional
          websites. With a blend of design skills and coding expertise, I create
          unique online experiences that captivate users.
        </p>
        <p className="lg:text-xl text-lg px-2 lg:px-0">
          Looking for a top-notch web developer to transform your business’s
          website? Look no further than Ademola Toheeb. With years of experience
          and a keen eye for design, Toheeb can take your brand to the next
          level, helping you attract more customers and grow your presence.
        </p>
      </div>
    </section>
  );
};

export default About;
