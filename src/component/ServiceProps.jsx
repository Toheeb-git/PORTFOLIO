import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceProps = ({ id, title, desc, li1, li2, li3, image }) => {

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <section className="grid grid-cols-1 lg:flex lg:items-center gap-6 lg:mb-6 mt-10 p-4" data-aos="fade-up">
      
      
      <div className="w-full lg:w-1/2 space-y-5">
        <h1 className="text-white text-2xl">{id}</h1>
        <h2 className="text-3xl lg:font-bold font-semibold">{title}</h2>
        <p className="lg:text-lg text-base">{desc}</p>

        <ul className="m-0 list-disc pl-5 space-y-1">
          <li>{li1}</li>
          <li>{li2}</li>
          <li>{li3}</li>
        </ul>
      </div>
      
      <div className="w-full lg:w-1/2">
        <img src={image} className="w-full h-auto rounded-lg" alt={title} />
      </div>

    </section>
  );
};

export default ServiceProps;