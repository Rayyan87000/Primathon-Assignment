//This file creates the top hero slider of the website.It contains: a carousel/slider one video slide multiple image slides autoplay + navigation arrows responsive design
import { Swiper, SwiperSlide } from "swiper/react";//Swiper → main slider container SwiperSlide → one slide inside the slider 👉 Without these, the slider won’t work.
import { Navigation, Autoplay } from "swiper/modules";//Navigation → next / previous arrows Autoplay → automatic sliding
import "swiper/css";
import "swiper/css/navigation";//These are Swiper’s default CSS styles. Without them: slider layout breaks arrows won’t appear properly

import slide1 from "../assets/hero/web_GET899_jan-teme.jpg";
import slide2 from "../assets/hero/zxc.jpg";
import slide3 from "../assets/hero/qwe.jpg";
import slide4 from "../assets/hero/abc.png";
import slide5 from "../assets/hero/WEB_GET699.png";
import heroVideo from "../assets/hero/Bblunt_video.mp4";

const Hero = () => {
  return (
    <section className="relative w-full ">{/* relative :- needed for positioning arrows later */}

      {/* SALE STRIP
      <div className="absolute top-0 left-0 right-0 bg-[#FFD700] text-black text-center py-2 text-xs md:text-sm font-bold z-20">
        SALE ENDING SOON
      </div> */}

      {/* HERO SLIDER */}
        {/* Use navigation arrows and autoplay */}
      <Swiper
        modules={[Navigation, Autoplay]}
        centeredSlides={true}
        slidesPerView="auto"
        spaceBetween={25}
        loop={true}
        navigation={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="h-[380px] md:h-[520px] lg:h-[400px] overflow-visible"
      >
{/* overflow 👉 What happens when content goes outside its container.Example:If a box is 300px wide,
but inside content is 500px wide.What should happen? That is controlled by overflow. */}

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
        {[slide1, slide2, slide3, slide4, slide5].map((img, i) => (  // doing connection to import lines of image 
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
      <div className="pointer-events-none absolute inset-y-1/2 left-0 right-0 flex justify-center gap-[55%] z-10"> {/*place arrows outside slider and center them vertically*/}
        <button className="swiper-button-prev pointer-events-auto !static !text-black" />
        <button className="swiper-button-next pointer-events-auto !static !text-black" />
      </div>
      {/* `//Swiper automatically: connects these buttons controls slide movement pointer-events-auto is used so: buttons are clickable container isn’t` */}

    </section>
  );
};

export default Hero;
