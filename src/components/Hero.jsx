import React, { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="h-screen w-full relative overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/Palm 25 Brand No-14400P.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Text & Arrow */}
      <div className="absolute bottom-45 xl:bottom-20 left-1/2 transform -translate-x-1/2 z-10 text-center">
        {/* EXPLORE Text */}
        <h2
          className="text-2xl  font-bold uppercase tracking-widest text-white"
          style={{
            mixBlendMode: "overlay",
            opacity: 0.8,
          }}
        >
          EXPLORE
        </h2>

        {/* Arrow Icon */}
        <div
          className=" w-6 h-6 mx-auto flex items-center justify-center"
          style={{
            mixBlendMode: "overlay",
            opacity: 0.8,
          }}
        >
          <img
            src="/imgi_142_button-play-icon.svg"
            alt="Arrow Down"
            className="w-8 h-8 rotate-90"
          />
        </div>
      </div>
    </div>
  );
}
