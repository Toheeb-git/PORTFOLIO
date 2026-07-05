import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { LiaLinkedin } from "react-icons/lia";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t642for",
        "template_sl4rskd",
        form.current,
        "Z_DxM6EzRqHPBG4vI",
      )
      .then(
        () => {
          toast.success("Message sent successfully!");

          form.current.reset();
        },
        (error) => {
          console.log(error.text);

          toast.error("Something went wrong!");
        },
      );
  };

  return (
    <footer className="h-fit pt-20 pb-0" id="contact" name="contact">
      <div className="w-full h-full lg:flex grid grid-cols-1 lg:gap-10 gap-10 justify-between items-start px-10 py-10 border-b-[1px] border-white">
        {/* LEFT SIDE */}
        <div className="space-y-4">
          <h1 className="lg:text-5xl text-3xl font-bold">
            Let’s connect and create <br />
            something awesome together!
          </h1>

          {/* <div>
            <a
              className="text-3xl font-semibold underline"
              href="mailto:hi@johnsmith.dev"
            >
              hi@johnsmith.dev
            </a>
          </div> */}

          <div className="flex gap-5 text-2xl text-white pt-4">
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

        {/* RIGHT SIDE - CONTACT FORM */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="lg:w-[40%] w-full space-y-5"
        >
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-lg">Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Enter your name"
              required
              className="bg-transparent border border-white p-4 outline-none rounded-md"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-lg">Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              required
              className="bg-transparent border border-white p-4 outline-none rounded-md"
            />
          </div>

          {/* Purpose */}
          <div className="flex flex-col gap-2">
            <label className="text-lg">Purpose</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Tell me about your project..."
              required
              className="bg-transparent border border-white p-4 outline-none rounded-md resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-white text-black px-8 py-4 rounded-md font-semibold hover:scale-105 duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="py-5 text-center">
        &copy; {new Date().getFullYear()} Web Developer
      </div>

      <ToastContainer />
    </footer>
  );
};

export default Footer;

//Emailjs ServiceId: service_t642for
//Template ID: template_sl4rskd
//Public Key: Z_DxM6EzRqHPBG4vI
