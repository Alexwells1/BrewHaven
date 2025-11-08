import React from "react";
import { Star, Quote } from "lucide-react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "The attention to detail in every cup is remarkable. As a coffee enthusiast who's traveled the world tasting different brews, BrewHaven stands out for their consistency and quality. The Ethiopian pour-over is simply exceptional.",
      author: "Sarah Chen",
      position: "Food Critic & Blogger",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rating: 5,
      featured: true,
    },
    {
      id: 2,
      quote:
        "I've been coming here every morning for the past two years. The baristas remember my name and my usual order. It's more than just coffee—it's the warm welcome and sense of community that keeps me coming back.",
      author: "Michael Rodriguez",
      position: "Regular Customer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rating: 5,
      featured: false,
    },
    {
      id: 3,
      quote:
        "As someone who works remotely, BrewHaven has become my second office. The atmosphere is perfect for focusing, the WiFi is reliable, and the coffee is consistently excellent. The cold brew is my go-to for long work sessions.",
      author: "Jessica Williams",
      position: "Digital Nomad",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rating: 4,
      featured: false,
    },
    {
      id: 4,
      quote:
        "The seasonal specials are always creative and delicious. I love how they incorporate local ingredients and rotate their single-origin offerings. It keeps the experience fresh and exciting with each visit.",
      author: "David Thompson",
      position: "Local Artist",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rating: 5,
      featured: true,
    },
    {
      id: 5,
      quote:
        "I hosted a private event here last month and the service was outstanding. They created custom drink menus for our guests and the staff was incredibly professional. Everyone commented on how amazing the coffee tasted.",
      author: "Emily Parker",
      position: "Event Planner",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rating: 5,
      featured: false,
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-8 sm:py-12 lg:py-20 bg-gradient-to-br from-amber-900 via-black to-gray-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-20 h-20 sm:w-32 sm:h-32 bg-amber-600 rounded-full"></div>
        <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 bg-amber-600 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="inline-block bg-amber-600/20 text-amber-400 px-4 py-1 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 border border-amber-600/30 backdrop-blur-sm">
            Customer Stories
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-josefin text-white font-bold mb-4 sm:mb-6">
            What Our Customers
            <span className="text-amber-400"> Say</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our community of coffee
            lovers has to say about their experiences at BrewHaven.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`group p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl backdrop-blur-sm border transition-all duration-500 hover:transform hover:-translate-y-1 sm:hover:-translate-y-2 ${
                testimonial.featured
                  ? "bg-amber-600/10 border-amber-600/30 hover:shadow-xl sm:hover:shadow-2xl hover:shadow-amber-600/20"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
            >
              {/* Quote Icon */}
              <div className="mb-4 sm:mb-6">
                <Quote
                  className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 ${
                    testimonial.featured ? "text-amber-400" : "text-gray-400"
                  }`}
                />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 sm:w-4 sm:h-4 ${
                      i < testimonial.rating
                        ? "text-amber-400 fill-current"
                        : "text-gray-600"
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base lg:text-lg">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cover bg-center mr-3 sm:mr-4 border-2 border-amber-600/50 flex-shrink-0"
                  style={{ backgroundImage: `url(${testimonial.image})` }}
                />
                <div className="min-w-0">
                  <div className="text-white font-semibold text-sm sm:text-base truncate">
                    {testimonial.author}
                  </div>
                  <div
                    className={`text-xs sm:text-sm ${
                      testimonial.featured ? "text-amber-300" : "text-gray-400"
                    } truncate`}
                  >
                    {testimonial.position}
                  </div>
                </div>
              </div>

              {/* Featured Badge */}
              {testimonial.featured && (
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-amber-600 text-black px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold">
                  Featured
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="text-center mt-8 sm:mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8 bg-black/40 backdrop-blur-sm rounded-xl sm:rounded-2xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-6 border border-amber-600/20 w-full sm:w-auto">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-amber-400">
                4.9/5
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">
                Average Rating
              </div>
            </div>
            <div className="w-8 sm:w-px h-px sm:h-8 bg-amber-600/30"></div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-amber-400">
                500+
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">
                5-Star Reviews
              </div>
            </div>
            <div className="w-8 sm:w-px h-px sm:h-8 bg-amber-600/30"></div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-amber-400">
                98%
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">
                Would Recommend
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
 