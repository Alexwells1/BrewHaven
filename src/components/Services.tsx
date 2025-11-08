import React from "react";
import { Clock, Truck, Coffee, Star, Shield, Heart } from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Quick Service",
      description:
        "Your coffee prepared and served within minutes. We value your time as much as you value great coffee.",
      feature: "5-7 min average",
    },
    {
      icon: <Truck className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Free Local Delivery",
      description:
        "Enjoy our premium coffee delivered fresh to your doorstep. Free delivery on orders over $25.",
      feature: "Within 30 mins",
    },
    {
      icon: <Coffee className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Premium Quality",
      description:
        "Single-origin beans, ethically sourced and freshly roasted daily for the perfect cup every time.",
      feature: "Daily Roast",
    },
    {
      icon: <Star className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Expert Baristas",
      description:
        "Our certified baristas craft each drink with precision and passion, ensuring consistent excellence.",
      feature: "Certified Team",
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Quality Guarantee",
      description:
        "Not satisfied? We'll remake your drink. Your perfect coffee experience is our promise.",
      feature: "100% Guarantee",
    },
    {
      icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Community Focus",
      description:
        "Supporting local artists and hosting community events. More than coffee, we're a gathering place.",
      feature: "Local Love",
    },
  ];

  return (
    <section
      id="services"
      className="py-8 sm:py-12 lg:py-20 bg-gradient-to-br from-amber-50 to-amber-100 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-4 left-4 sm:top-10 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-amber-600 rounded-full"></div>
        <div className="absolute bottom-4 right-4 sm:bottom-10 sm:right-10 w-16 h-16 sm:w-32 sm:h-32 bg-amber-600 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-40 sm:h-40 bg-amber-600 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="inline-block bg-amber-600 text-white px-4 py-1 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 shadow-lg">
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-josefin text-gray-900 font-bold mb-4 sm:mb-6">
            Experience The
            <span className="text-amber-600"> Difference</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            We're committed to elevating your coffee experience with exceptional
            service, premium quality, and a community-focused approach.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:transform hover:-translate-y-1 sm:hover:-translate-y-2 border border-amber-200/50"
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <div className="text-white">{service.icon}</div>
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-josefin text-gray-900 font-semibold mb-3 sm:mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                {service.description}
              </p>

              {/* Feature Tag */}
              <div className="inline-block bg-amber-100 text-amber-700 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium border border-amber-200">
                {service.feature}
              </div>

              {/* Hover Effect Line */}
              <div className="w-0 group-hover:w-full h-0.5 bg-amber-600 transition-all duration-500 mt-3 sm:mt-4 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <button className="bg-gray-900 hover:bg-black text-white px-6 py-3 sm:px-8 sm:py-4 font-semibold rounded-lg sm:rounded-xl transition-all duration-300 hover:shadow-xl sm:hover:shadow-2xl flex items-center gap-2 sm:gap-3 mx-auto text-sm sm:text-base">
            Explore All Services
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform"
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
        </div>
      </div>
    </section>
  );
};

export default Services;
