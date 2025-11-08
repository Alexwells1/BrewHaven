import React from "react";
import { Star, Clock } from "lucide-react";

const MenuSection: React.FC = () => {
  const menuItems = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      name: "Signature Espresso",
      rating: 4.9,
      time: "2-3 min",
      popular: true,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      name: "Pour Over Collection",
      rating: 4.8,
      time: "4-5 min",
      popular: false,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      name: "Cold Brew Series",
      rating: 4.7,
      time: "1-2 min",
      popular: true,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      name: "Artisan Latte Art",
      rating: 5.0,
      time: "3-4 min",
      popular: true,
    },
  ];

  return (
    <section
      id="menu"
      className="py-8 sm:py-12 lg:py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-amber-600/10 rounded-full blur-2xl sm:blur-3xl -translate-y-16 sm:-translate-y-32 translate-x-16 sm:translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-80 sm:h-80 bg-amber-600/5 rounded-full blur-2xl sm:blur-3xl -translate-x-16 sm:-translate-x-32 translate-y-16 sm:translate-y-32"></div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
          {/* Content Section */}
          <div className="lg:w-1/2 w-full">
            <div className="max-w-2xl">
              <span className="inline-block bg-amber-600/20 text-amber-400 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 border border-amber-600/30">
                Our Specialties
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-josefin text-white font-bold mb-4 sm:mb-6 leading-tight">
                Curated Coffee
                <span className="text-amber-600"> Experiences</span>
                <span className="block w-12 sm:w-16 h-0.5 sm:h-1 bg-amber-600 mt-2 sm:mt-4 rounded-full"></span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Each drink on our menu tells a story of craftsmanship and
                passion. From single-origin pour overs to signature espresso
                blends, we've perfected every detail to deliver an unforgettable
                coffee experience.
              </p>

              {/* Features List */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {[
                  "Single-origin beans from ethical farms",
                  "Custom roast profiles for each blend",
                  "House-made syrups and flavorings",
                  "Seasonal specials and limited editions",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-600 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm sm:text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="bg-amber-600 hover:bg-amber-700 text-black px-6 py-3 sm:px-8 sm:py-4 font-semibold rounded-lg sm:rounded-xl transition-all duration-300 hover:shadow-xl sm:hover:shadow-2xl hover:shadow-amber-600/25 flex items-center justify-center gap-2 text-sm sm:text-base">
                  Explore Full Menu
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
                <button className="border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-black px-6 py-3 sm:px-8 sm:py-4 font-semibold rounded-lg sm:rounded-xl transition-all duration-300 backdrop-blur-sm text-sm sm:text-base">
                  Download Menu PDF
                </button>
              </div>
            </div>
          </div>

          {/* Menu Images Grid */}
          <div className="lg:w-1/2 w-full mt-6 sm:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {menuItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`group relative bg-cover bg-center aspect-[3/4] sm:aspect-square sm:h-48 lg:h-56 xl:h-64 rounded-xl sm:rounded-2xl shadow-xl overflow-hidden ${
                    index === 1 || index === 2 ? "sm:mt-4 lg:mt-8" : ""
                  }`}
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-josefin font-semibold text-base sm:text-lg">
                        {item.name}
                      </h3>
                      {item.popular && (
                        <span className="bg-amber-600 text-black text-xs px-2 py-1 rounded-full font-semibold">
                          Popular
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400 fill-current" />
                        <span>{item.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{item.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
