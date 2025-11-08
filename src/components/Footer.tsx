import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Twitter,
  Facebook,
  Instagram,
  Calendar,
  MessageCircle,
  Coffee,
  Clock,
  Heart,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Our Story", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Coffee Beans", href: "#products" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
    { name: "Careers", href: "#careers" },
  ];

  const recentPosts = [
    {
      title: "The Science Behind Perfect Espresso Extraction",
      date: "March 12, 2024",
      comments: 8,
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Seasonal Spring Menu Launch - What's New",
      date: "March 5, 2024",
      comments: 12,
      image:
        "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-4 left-4 sm:bottom-10 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-amber-600 rounded-full"></div>
        <div className="absolute top-4 right-4 sm:top-10 sm:right-10 w-16 h-16 sm:w-24 sm:h-24 bg-amber-600 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 py-8 sm:py-12 lg:py-16">
          {/* Brand & About */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-600 rounded-full flex items-center justify-center">
                <Coffee className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-black" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-josefin text-white font-bold">
                  BrewHaven
                </div>
                <div className="text-amber-400 text-xs sm:text-sm">
                  COFFEE ROASTERS
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
              Since 2008, we've been passionate about serving exceptional coffee
              while building a welcoming community space. Every cup tells a
              story of quality, sustainability, and craftsmanship.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {[
                {
                  icon: <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />,
                  href: "#",
                },
                {
                  icon: <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />,
                  href: "#",
                },
                {
                  icon: <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />,
                  href: "#",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-amber-600 hover:scale-105 sm:hover:scale-110 transition-all duration-300 border border-white/10"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-white text-base sm:text-lg font-josefin font-semibold mb-4 sm:mb-6">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-1 sm:gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-amber-400 transition-colors py-1 sm:py-2 flex items-center gap-2 group text-sm sm:text-base"
                >
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Recent Posts */}
          <div className="md:col-span-1">
            <h3 className="text-white text-base sm:text-lg font-josefin font-semibold mb-4 sm:mb-6">
              From Our Blog
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {recentPosts.map((post, index) => (
                <div
                  key={index}
                  className="flex gap-3 sm:gap-4 group cursor-pointer"
                >
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-cover bg-center rounded-lg flex-shrink-0"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white text-xs sm:text-sm mb-1 sm:mb-2 group-hover:text-amber-400 transition-colors leading-tight line-clamp-2">
                      {post.title}
                    </h4>
                    <div className="flex items-center text-gray-400 space-x-2 sm:space-x-3 text-xs">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Hours */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-white text-base sm:text-lg font-josefin font-semibold mb-4 sm:mb-6">
              Visit Us
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 mt-0.5 sm:mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-white font-medium mb-1 text-sm sm:text-base">
                    Our Location
                  </div>
                  <div className="text-gray-300 text-xs sm:text-sm">
                    123 Coffee Street
                    <br />
                    San Francisco, CA 94102
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 mt-0.5 sm:mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-white font-medium mb-1 text-sm sm:text-base">
                    Opening Hours
                  </div>
                  <div className="text-gray-300 text-xs sm:text-sm">
                    Mon-Fri: 6:00 AM - 8:00 PM
                    <br />
                    Sat-Sun: 7:00 AM - 9:00 PM
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 flex-shrink-0" />
                <a
                  href="tel:+14155550123"
                  className="text-gray-300 hover:text-amber-400 transition-colors text-sm sm:text-base"
                >
                  (415) 555-0123
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 flex-shrink-0" />
                <a
                  href="mailto:hello@brewhaven.com"
                  className="text-gray-300 hover:text-amber-400 transition-colors text-sm sm:text-base"
                >
                  hello@brewhaven.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-4 sm:py-6 lg:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} BrewHaven Coffee Roasters. All rights reserved.
            </div>

            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
              <a
                href="#privacy"
                className="hover:text-amber-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="hover:text-amber-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#sitemap"
                className="hover:text-amber-400 transition-colors"
              >
                Sitemap
              </a>
            </div>

            <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
              <span>Made with</span>
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-amber-600 fill-current" />
              <span>for coffee lovers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
