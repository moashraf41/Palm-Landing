import React, { useEffect, useState } from "react";

export default function Footer() {
  const socialIcons = [
    "/imgi_215_default.svg",
    "/imgi_216_default.svg",
    "/imgi_217_default.svg",
    "/imgi_218_default.svg",
    "/imgi_219_default.svg",
    "/imgi_220_default.svg",
    "/imgi_221_default.svg",
  ];

  const complayArrow = "/imgi_139_side-arrow.svg";
  const bigFooter = "/imgi_140_footer-five.svg";

  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const formatTime = (d) => {
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();
    const hh = ((hours + 11) % 12) + 1;
    const pad = (n) => String(n).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    return `${pad(hh)}:${pad(minutes)}:${pad(seconds)} ${ampm}`;
  };

  const linkHoverClass =
    "relative inline-block cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:bg-black after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100";

  return (
    <footer className="w-full bg-gray-100/40 text-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-black/5 to-transparent pointer-events-none"></div>

      {/* Top links & social */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-12 gap-6 items-start">
          {/* Left link columns */}
          <div className="col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-3">
            <ul className="space-y-5 text-sm">
              <li>
                <span className={`${linkHoverClass} font-medium`}>
                  About FIVE
                </span>
              </li>
              <li>
                <span className={linkHoverClass}>In the Press</span>
              </li>
              <li>
                <span className={linkHoverClass}>Trade Partners</span>
              </li>
              <li>
                <span className={linkHoverClass}>Awards</span>
              </li>
            </ul>
          </div>

          <div className="col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-2">
            <ul className="space-y-5 text-sm">
              <li>
                <span className={`${linkHoverClass} font-medium`}>Careers</span>
              </li>
              <li>
                <span className={linkHoverClass}>Culture</span>
              </li>
              <li>
                <span className={linkHoverClass}>FAQs</span>
              </li>
            </ul>
          </div>

          <div className="col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-2">
            <ul className="space-y-5 text-sm text-gray-400">
              <li>
                <span className={linkHoverClass}>Contact</span>
              </li>
              <li>
                <span className={linkHoverClass}>Terms &amp; Conditions</span>
              </li>
              <li>
                <span className={linkHoverClass}>Cookies</span>
              </li>
              <li>
                <span className={linkHoverClass}>Privacy Policy</span>
              </li>
              <li>
                <span className={linkHoverClass}>Sitemap</span>
              </li>
            </ul>
          </div>

          {/* Center short tagline */}
          <div className="col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-2">
            <h3 className="text-lg font-medium">Elevating Luxury</h3>
            <p className="text-sm">Redefining Entertainment</p>
          </div>

          {/* Right: clock + socials */}
          <div className="col-span-12 xl:col-span-3 flex flex-col items-center xl:items-start justify-start order-last xl:order-none mt-6 xl:mt-0">
            <div className="text-2xl font-extrabold tracking-wide">
              {formatTime(time)}
            </div>
            <div className="mt-4 flex gap-3">
              {socialIcons.map((src, i) => (
                <div
                  key={i}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white shadow transform transition-transform duration-200 hover:scale-110 cursor-pointer"
                >
                  <img
                    src={src}
                    alt={`social-${i}`}
                    className="w-5 h-5 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* COME PLAY center */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 group cursor-pointer">
            <h2 className="text-4xl font-extrabold tracking-tight">
              COME PLAY
            </h2>
            <img
              src={complayArrow}
              alt="arrow"
              className="w-6 h-6 transform transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </div>
        </div>
      </div>

      {/* Huge footer graphic centered and responsive */}
      <div className="w-full flex justify-center mt-10">
        <div className="max-w-[1400px] w-full px-4 sm:pb-7 md:pb-0 pb-7">
          <img
            src={bigFooter}
            alt="FIVE big"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </footer>
  );
}
