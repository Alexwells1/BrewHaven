import React from "react";
import { Award, Users, Coffee, Heart } from "lucide-react";

const About: React.FC = () => {
  const stats = [
    {
      icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />,
      number: "15+",
      label: "Years Excellence",
    },
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      number: "10k+",
      label: "Happy Customers",
    },
    {
      icon: <Coffee className="w-5 h-5 sm:w-6 sm:h-6" />,
      number: "50+",
      label: "Coffee Varieties",
    },
    {
      icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" />,
      number: "100%",
      label: "Quality Promise",
    },
  ];

  return (
    <section
      id="about"
      className="w-full py-16 sm:py-20 bg-gradient-to-b from-[#0a0a0a] to-[#151111] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-amber-600/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-amber-600/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="w-full max-w-full px-4 sm:px-6 lg:px-8 mx-auto relative">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Main Image */}
              <div
                className="w-full h-64 xs:h-72 sm:h-80 md:h-96 lg:h-[400px] xl:h-[500px] bg-cover bg-center rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
                }}
              />

              {/* Floating Elements */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-amber-600 text-black p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold font-josefin">
                    2008
                  </div>
                  <div className="text-xs sm:text-sm font-semibold">
                    Established
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-black/80 backdrop-blur-sm border border-amber-600/30 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Coffee className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm sm:text-base">
                      Fresh Roast
                    </div>
                    <div className="text-amber-400 text-xs sm:text-sm">
                      Daily
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <div className="w-full max-w-full">
              {/* Header */}
              <div className="mb-6 sm:mb-8">
                <div className="w-full flex justify-center lg:justify-start">
                  <span className="inline-block bg-amber-600/20 text-amber-400 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 border border-amber-600/30">
                    Our Heritage
                  </span>
                </div>
                <h2 className="w-full text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-josefin text-white font-bold mb-4 sm:mb-6 leading-tight text-center lg:text-left break-words">
                  Crafting Exceptional
                  <span className="text-amber-600 block sm:inline">
                    {" "}
                    Coffee Experiences
                  </span>
                  <span className="block w-12 sm:w-16 h-1 bg-amber-600 mt-2 sm:mt-4 rounded-full mx-auto lg:mx-0"></span>
                </h2>
              </div>

              {/* Main Content */}
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <p className="w-full text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed text-center lg:text-left break-words">
                  Founded in 2008, BrewHaven began as a small neighborhood
                  roastery with a simple mission: to source the world's finest
                  coffee beans and roast them to perfection. What started as a
                  passion project between friends has grown into a beloved
                  community hub.
                </p>

                <p className="w-full text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed text-center lg:text-left break-words">
                  Our master roasters travel directly to coffee-growing regions,
                  building relationships with farmers who share our commitment
                  to sustainable practices and exceptional quality. Every batch
                  is carefully roasted in small quantities to ensure peak flavor
                  and aroma.
                </p>

                <div className="bg-amber-600/10 border border-amber-600/20 rounded-lg sm:rounded-xl p-4 sm:p-6 backdrop-blur-sm">
                  <p className="text-amber-200 italic text-sm sm:text-base md:text-lg leading-relaxed text-center lg:text-left">
                    "Great coffee isn't just a drink—it's a moment of
                    connection, a spark of inspiration, and a daily ritual that
                    brings people together."
                  </p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-amber-600/20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:bg-amber-600/30 transition-colors duration-300 border border-amber-600/30">
                      <div className="text-amber-400 group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <button className="w-full xs:w-auto bg-amber-600 hover:bg-amber-700 text-black px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-lg sm:rounded-xl transition-all duration-300 hover:shadow-xl sm:hover:shadow-2xl hover:shadow-amber-600/25 flex items-center justify-center gap-2 text-sm sm:text-base">
                  Our Roasting Process
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
                <button className="w-full xs:w-auto border border-amber-600 sm:border-2 text-amber-600 hover:bg-amber-600 hover:text-black px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-lg sm:rounded-xl transition-all duration-300 backdrop-blur-sm text-sm sm:text-base">
                  Meet Our Team
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent"></div>
      </div>
    </section>
  );
};

export default About;
