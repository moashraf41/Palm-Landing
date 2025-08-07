import React from "react";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

export default function AwardsMarquee() {
  const awards = [
    {
      logo: "/imgi_9_25.11.24-FIVE-WEB-PALM-AWARDS-4-1.svg",
    },
    {
      logo: "/imgi_11_25.11.24-FIVE-WEB-PALM-AWARDS-2-1.svg",
    },
    {
      logo: "/imgi_12_25.11.24-FIVE-WEB-PALM-AWARDS-1-1.svg",
    },
    {
      logo: "/imgi_13_25.11.24-FIVE-WEB-PALM-AWARDS-1.svg",
    },
    {
      logo: "/imgi_14_whatsonlogo.svg",
    },
  ];

  return (
    <div className="bg-white text-black">
      {/* Top Marquee */}
      <Marquee
        speed={100}
        className="py-1 bg-white"
        gradient={false}
        direction="right"
      >
        <div className="flex items-center space-x-8">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center space-x-2">
              <span className="text-black font-bold text-sm uppercase tracking-wider">
                COME PLAY
              </span>
              <img
                src="/imgi_142_button-play-icon.svg"
                alt="Play"
                className="w-4 h-4"
                style={{
                  filter:
                    "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)",
                }}
              />
            </div>
          ))}
        </div>
      </Marquee>

      {/* Awards Section */}
      <div className="py-10 bg-black px-6">
        <div className="max-w-7xl mx-auto">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            className="awards-swiper"
          >
            {awards.map((award, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-40 flex items-center justify-center">
                    <img
                      src={award.logo}
                      alt={award.title}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Bottom Marquee */}
      <Marquee
        speed={100}
        className="py-1 bg-white"
        gradient={false}
        direction="right"
      >
        <div className="flex items-center space-x-8">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center space-x-2">
              <span className="text-black font-bold text-sm uppercase tracking-wider">
                COME PLAY
              </span>
              <img
                src="/imgi_142_button-play-icon.svg"
                alt="Play"
                className="w-4 h-4"
                style={{
                  filter:
                    "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)",
                }}
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
