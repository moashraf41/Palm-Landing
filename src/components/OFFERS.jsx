export default function OFFERS() {
  return (
    <section
      className="min-h-screen w-full relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #ed9fc4, #f0cac4, #a1b5de, #98aedc, #ed9fc4)",
        backgroundSize: "400% 400%",
        backgroundRepeat: "no-repeat",
        animation: "gradientShift 5s ease-in-out infinite",
      }}
    >
      <style>
        {`
          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>

      <div className="container mx-auto px-6 pt-30 pb-15">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            DUBAI'S HOTTEST <br /> BEACH HOTEL
          </h1>
          <p className="text-lg md:text-lg leading-relaxed opacity-90 mt-4">
            Luxury rooms and suites. 150-m private beach. Picture perfect pools.
            Insta-views. Award-winning restaurants. Stunning spa. Our
            unashamedly luxurious resort has it all!
            <br />
            <span className="font-semibold">
              Enjoy complimentary group yoga with all room bookings.
            </span>
          </p>
        </div>
      </div>

      {/* ROOM OFFERS AT FIVE Section */}
      <div className="container mx-auto max-w-7xl px-6 py-8 mb-20 md:bg-white">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white md:text-black">
            ROOM OFFERS AT FIVE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {[
            {
              img: "/imgi_16_SEVENROOMS-BG.jpg.webp",
              title: "PAY 3 STAY 4 OFFER",
            },
            {
              img: "/imgi_17_00-compressed.png.webp",
              title: "ALL-INCLUSIVE OFFER",
            },
            {
              img: "/imgi_18_FB-WEB-1.jpg.webp",
              title: "FREE HALF BOARD OFFER",
            },
          ].map((offer, index) => (
            <div key={index} className="cursor-pointer">
              <div className="h-64 overflow-hidden">
                <img
                  src={offer.img}
                  alt={offer.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="bg-white px-4 py-3  text-center">
                <h3 className="relative group text-black text-3xl font-bold uppercase transition-colors duration-300 inline-block">
                  {offer.title}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
