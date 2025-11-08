import React from "react";
import { Coffee, Award, Users, Globe } from "lucide-react";

const Counter: React.FC = () => {
  const stats = [
    {
      icon: <Coffee className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      number: 15000,
      label: "Cups Served Daily",
      suffix: "+",
    },
    {
      icon: <Award className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      number: 47,
      label: "Industry Awards",
      suffix: "",
    },
    {
      icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      number: 125000,
      label: "Happy Customers",
      suffix: "+",
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      number: 12,
      label: "Countries Sourced From",
      suffix: "",
    },
  ];

  return (
    <section
      className="py-8 sm:py-12 lg:py-20 relative bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-amber-900/30"></div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="inline-block bg-amber-600/20 text-amber-400 px-4 py-1 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 border border-amber-600/30 backdrop-blur-sm">
            Our Impact
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-josefin text-white font-bold mb-4 sm:mb-6">
            Brewing Excellence
            <span className="block text-amber-400">Since 2008</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            For over a decade, we've been committed to serving exceptional
            coffee while making a positive impact on our community and the
            environment.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              {/* Icon Container */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-4 sm:mb-6 bg-amber-600/20 rounded-xl sm:rounded-2xl flex items-center justify-center relative transition-all duration-500 group-hover:bg-amber-600/30 group-hover:scale-105 sm:group-hover:scale-110 border border-amber-600/30 backdrop-blur-sm">
                <div className="text-amber-400 group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-500">
                  {stat.icon}
                </div>
              </div>

              {/* Number */}
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-josefin text-white font-bold mb-1 sm:mb-2">
                {stat.number}
                <span className="text-amber-400">{stat.suffix}</span>
              </div>

              {/* Label */}
              <div className="text-gray-300 text-xs sm:text-sm font-semibold uppercase tracking-wider leading-tight">
                {stat.label}
              </div>

              {/* Animated Line */}
              <div className="w-0 group-hover:w-8 sm:group-hover:w-12 h-0.5 bg-amber-400 transition-all duration-500 mt-2 sm:mt-4 mx-auto rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-black/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-amber-600/20 w-full sm:w-auto">
            <div className="text-center sm:text-left">
              <div className="text-white font-semibold text-base sm:text-lg">
                Ready to experience the difference?
              </div>
              <div className="text-amber-400 text-sm">
                Join thousands of satisfied coffee lovers
              </div>
            </div>
            <button className="bg-amber-600 hover:bg-amber-700 text-black px-5 py-2 sm:px-6 sm:py-3 font-semibold rounded-lg sm:rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-600/25 whitespace-nowrap text-sm sm:text-base w-full sm:w-auto">
              Visit Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
