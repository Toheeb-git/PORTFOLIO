import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const TestimonialsProps = ({ Short, name, work, star, text }) => {

useEffect(() => {
  AOS.init({ duration: 3000 });
}, []);


  return (
    <div class=" shadow-lg bg-[#1b1448] p-6 space-y-4 " data-aos="zoom-in">
      <div class="flex items-center space-x-4">
        <div class="h-12 w-12 flex items-center justify-center bg-red-500 text-white text-lg font-semibold rounded-full">{Short}</div>
        <div>
          <div class="text-white font-medium">{name}</div>
          <div class="text-gray-300 text-sm">{work}</div>
        </div>
      </div>

      <div class="flex text-yellow-600 text-xl">{star}</div>

      <p class="text-gray-300">{text}</p>
    </div>
  );
};

export default TestimonialsProps;
