import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      background:
        "bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')]",
      subtitle: "Artisan Roasted",
      title: "Handcrafted Coffee Experience",
      description:
        "Every bean tells a story. Our master roasters bring out unique flavors from the world's finest coffee regions.",
      cta: "Explore Our Blends",
      secondaryCta: "Watch Our Story",
    },
    {
      id: 2,
      background:
        "bg-[url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2061&q=80')]",
      subtitle: "Brewed to Perfection",
      title: "Where Every Cup Matters",
      description:
        "From single-origin pour-overs to signature espresso blends, experience coffee crafted with passion and precision.",
      cta: "View Menu",
      secondaryCta: "Visit Us",
    },
    {
      id: 3,
      background:
        "bg-[url('https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')]",
      subtitle: "Sustainable Sourcing",
      title: "Ethical Beans, Exceptional Taste",
      description:
        "We partner directly with farmers who share our commitment to quality, sustainability, and community development.",
      cta: "Our Story",
      secondaryCta: "Learn More",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000 ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            } ${slide.background}`}
          />
        ))}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative w-full min-h-screen flex items-center pt-16 md:pt-20">
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="w-full max-w-full lg:max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            {/* Badge */}
            <div className="w-full flex justify-center lg:justify-start">
              <span className="inline-block bg-amber-600/20 backdrop-blur-sm border border-amber-600/30 text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                {slides[currentSlide].subtitle}
              </span>
            </div>

            {/* Title */}
            <h1 className="w-full text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-josefin text-white font-bold mb-4 sm:mb-6 leading-tight break-words">
              {slides[currentSlide].title}
              <span className="block w-16 sm:w-20 h-1 bg-amber-600 mt-3 sm:mt-4 mx-auto lg:mx-0"></span>
            </h1>

            {/* Description */}
            <p className="w-full text-base sm:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-full lg:max-w-xl mx-auto lg:mx-0 break-words">
              {slides[currentSlide].description}
            </p>

            {/* Buttons */}
            <div className="w-full flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-stretch xs:items-center">
              <button className="w-full xs:w-auto bg-amber-600 hover:bg-amber-700 text-black px-6 sm:px-8 py-3 sm:py-4 font-semibold transition-all duration-300 rounded-lg hover:shadow-xl sm:hover:shadow-2xl hover:shadow-amber-600/25 flex items-center justify-center gap-2 text-sm sm:text-base">
                {slides[currentSlide].cta}
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="w-full xs:w-auto border border-white/30 sm:border-2 text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 sm:py-4 font-semibold transition-all duration-300 rounded-lg backdrop-blur-sm flex items-center justify-center gap-2 text-sm sm:text-base">
                <Play className="w-3 h-3 sm:w-4 sm:h-4" />
                {slides[currentSlide].secondaryCta}
              </button>
            </div>

            {/* Stats - Mobile Only */}
            <div className="w-full flex justify-center gap-6 mt-8 lg:hidden">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-amber-600">
                  15+
                </div>
                <div className="text-xs sm:text-sm text-gray-300">Years</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-amber-600">
                  50+
                </div>
                <div className="text-xs sm:text-sm text-gray-300">
                  Varieties
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-amber-600">
                  10k+
                </div>
                <div className="text-xs sm:text-sm text-gray-300">
                  Customers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute hidden md:flex left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-all duration-300 hover:bg-black/30 p-2 sm:p-3 rounded-full backdrop-blur-sm "
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute hidden right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-all duration-300 hover:bg-black/30 p-2 sm:p-3 rounded-full backdrop-blur-sm md:flex"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Desktop Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-all duration-300 hover:bg-black/30 p-3 rounded-full backdrop-blur-sm hidden md:flex"
      >
        <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-all duration-300 hover:bg-black/30 p-3 rounded-full backdrop-blur-sm hidden md:flex"
      >
        <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
      </button>

      {/* Slide Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-amber-600 w-4 sm:w-6 md:w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator - Desktop Only */}
      <div className="absolute bottom-8 right-4 sm:right-6 md:right-8 hidden lg:block">
        <div className="flex flex-col items-center text-white/60">
          <span className="text-xs sm:text-sm mb-2 rotate-90 origin-center whitespace-nowrap">
            Scroll Down
          </span>
          <div className="w-px h-12 sm:h-16 bg-white/30">
            <div className="w-px h-6 sm:h-8 bg-amber-600 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Social Links - Desktop Only */}
      <div className="absolute right-4 sm:right-6 md:right-8 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col space-y-3">
        {[
          {
            icon: (
              <svg
                className="w-4 h-4 lg:w-5 lg:h-5"
                fill="#1DA1F2"
                viewBox="0 0 24 24"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            ),
            href: "#",
            label: "Twitter",
            color: "hover:border-[#1DA1F2] hover:bg-[#1DA1F2]/10",
          },
          {
            icon: (
              <svg
                className="w-4 h-4 lg:w-5 lg:h-5"
                fill="#1877F2"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            ),
            href: "#",
            label: "Facebook",
            color: "hover:border-[#1877F2] hover:bg-[#1877F2]/10",
          },
          {
            icon: (
              <svg
                className="w-4 h-4 lg:w-5 lg:h-5"
                fill="url(#instagram-gradient)"
                viewBox="0 0 24 24"
              >
                <defs>
                  <linearGradient
                    id="instagram-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#FD1D1D" />
                    <stop offset="50%" stopColor="#E1306C" />
                    <stop offset="100%" stopColor="#833AB4" />
                  </linearGradient>
                </defs>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            ),
            href: "#",
            label: "Instagram",
            color: "hover:border-[#E1306C] hover:bg-[#E1306C]/10",
          },
        ].map((social) => (
          <a
            key={social.label}
            href={social.href}
            className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-white/30 text-white/70 hover:text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm hover:scale-110 ${social.color}`}
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Hero;
