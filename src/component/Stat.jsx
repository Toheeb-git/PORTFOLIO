import React from "react";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";


const Stat = () => {
  return (
    // <section className="py-60">
    //   <div className="lg:flex grid grid-cols-1 justify-center lg:gap-2 gap-10 lg:px-10">
    //     <div className="flex items-center gap-2 lg:border-r-[1px] border-gray-400 px-16">
    //       <h1 className="text-6xl">
    //         <CountUp delay={2} end={10} duration={2.75} />
    //       </h1>
    //       <p className="text-xl">
    //         Years of <br /> experience
    //       </p>
    //     </div>
    //     <div className="flex items-center gap-2 lg:border-r-[1px] border-gray-400 px-16">
    //       <h1 className="text-6xl">
    //         {" "}
    //         <CountUp delay={2} end={120} duration={2.75} />
    //       </h1>
    //       <p className="text-xl">
    //         Successful <br /> Projects
    //       </p>
    //     </div>
    //     <div className="flex items-center gap-2 lg:border-r-[1px] border-gray-400 px-16">
    //       <h1 className="text-6xl">
    //         {" "}
    //         <CountUp delay={2} end={48} duration={2.75} />
    //       </h1>
    //       <p className="text-xl">Happy clients</p>
    //     </div>
    //     <div className="flex items-center gap-2  px-16">
    //       <h1 className="text-6xl">
    //         {" "}
    //         <CountUp delay={2} end={7} duration={2.75} />
    //       </h1>
    //       <p className="text-xl">Individual awards</p>
    //     </div>
    //   </div>
    // </section>

    <section className="py-60">
  <div className="lg:px-10 px-4">
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      loop={true}
      spaceBetween={20}
      breakpoints={{
         0: { slidesPerView: 1 },
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 2 },
      }}
    >
      <SwiperSlide>
        <div className="flex items-center gap-2 lg:border-r-[1px] border-gray-400 px-16">
          <h1 className="text-6xl">
            <CountUp delay={2} end={10} duration={2.75} />
          </h1>
          <p className="text-xl">
            Years of <br /> experience
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex items-center gap-2 lg:border-r-[1px] border-gray-400 px-16">
          <h1 className="text-6xl">
            <CountUp delay={2} end={120} duration={2.75} />
          </h1>
          <p className="text-xl">
            Successful <br /> Projects
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex items-center gap-2 lg:border-r-[1px] border-gray-400 px-16">
          <h1 className="text-6xl">
            <CountUp delay={2} end={48} duration={2.75} />
          </h1>
          <p className="text-xl">Happy clients</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex items-center gap-2 px-16">
          <h1 className="text-6xl">
            <CountUp delay={2} end={7} duration={2.75} />
          </h1>
          <p className="text-xl">Individual awards</p>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</section>

  );
};

export default Stat;
