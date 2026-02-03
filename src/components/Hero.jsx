import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import slide1 from "../assets/hero/web_GET899_jan-teme.jpg";
import slide2 from "../assets/hero/zxc.jpg";
import slide3 from "../assets/hero/qwe.jpg";
import slide4 from "../assets/hero/abc.png";
import slide5 from "../assets/hero/WEB_GET699.png";
import heroVideo from "../assets/hero/Bblunt_video.mp4";

const Hero = () => {
  return (
    <section className="relative w-full ">

      {/* SALE STRIP
      <div className="absolute top-0 left-0 right-0 bg-[#FFD700] text-black text-center py-2 text-xs md:text-sm font-bold z-20">
        SALE ENDING SOON
      </div> */}

      {/* HERO SLIDER */}
      <Swiper
        modules={[Navigation, Autoplay]}
        centeredSlides
        slidesPerView="auto"
        spaceBetween={25}
        loop
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="h-[380px] md:h-[520px] lg:h-[400px] overflow-visible"

      >
        {/* VIDEO SLIDE */}
        <SwiperSlide className="!w-[90%] ">
          <div className="relative h-full w-full rounded-[28px] overflow-hidden shadow-md">
            <video
              src={heroVideo}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </SwiperSlide>

        {/* IMAGE SLIDES */}
        {[slide1, slide2, slide3, slide4, slide5].map((img, i) => (
          <SwiperSlide key={i} className="!w-[90%]">
            <img
              src={img}
              alt={`Hero slide ${i + 1}`}
              className="h-full w-full object-cover rounded-[28px] shadow-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CUSTOM NAVIGATION BUTTONS */}
      <div className="pointer-events-none absolute inset-y-1/2 left-0 right-0 flex justify-center gap-[55%] z-10">
        <button className="swiper-button-prev pointer-events-auto !static !text-black" />
        <button className="swiper-button-next pointer-events-auto !static !text-black" />
      </div>

    </section>
  );
};

export default Hero;
