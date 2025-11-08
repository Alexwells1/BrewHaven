import React, { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, Search, User, Coffee } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    {
      name: "Store",
      href: "/store",
      dropdown: [
        { name: "Coffee Beans", href: "/beans" },
        { name: "Brewing Gear", href: "/gear" },
        { name: "Merchandise", href: "/merch" },
        { name: "Gift Cards", href: "/gifts" },
      ],
    },
    { name: "Contact", href: "/contact" },
  ];

  const linkBaseStyle =
    "text-white/80 hover:text-amber-400 text-sm font-medium px-3 xl:px-4 py-4 xl:py-6 transition-all duration-300 relative group";
  const activeLinkStyle = "text-amber-400";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-xl border-b border-amber-600/20 shadow-2xl"
          : "bg-transparent backdrop-blur-sm border-b border-white/10"
      }`}
    >
      <div className="w-full max-w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Coffee className="w-4 h-4 sm:w-6 sm:h-6 text-black" />
            </div>
            <div className="text-left">
              <Link
                to="/"
                className="text-xl sm:text-2xl font-josefin text-white font-bold tracking-tight leading-none"
              >
                BrewHaven
              </Link>
              <small className="block text-xs text-amber-400 tracking-widest leading-none">
                COFFEE ROASTERS
              </small>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-0 xl:space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div
                    className={`${linkBaseStyle} cursor-pointer`}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.name}
                    <div className="absolute bottom-0 left-3 xl:left-4 right-3 xl:right-4 h-0.5 bg-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                    {/* Dropdown */}
                    <div
                      className={`absolute top-full left-0 mt-1 w-48 xl:w-56 bg-black/95 backdrop-blur-xl border border-amber-600/20 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 ${
                        activeDropdown === item.name
                          ? "opacity-100 visible translate-y-0"
                          : ""
                      }`}
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <NavLink
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className={({ isActive }) =>
                            `block px-4 xl:px-6 py-2 xl:py-3 text-sm transition-all duration-200 border-b border-white/5 last:border-b-0 group/item ${
                              isActive
                                ? "text-amber-400 bg-amber-600/10"
                                : "text-white/70 hover:text-amber-400 hover:bg-amber-600/10"
                            }`
                          }
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span className="flex items-center gap-2 xl:gap-3">
                            <div className="w-1.5 h-1.5 bg-amber-600 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity flex-shrink-0"></div>
                            <span className="truncate">
                              {dropdownItem.name}
                            </span>
                          </span>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `${linkBaseStyle} ${isActive ? activeLinkStyle : ""}`
                    }
                  >
                    {item.name}
                    <div className="absolute bottom-0 left-3 xl:left-4 right-3 xl:right-4 h-0.5 bg-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          {/* Right icons */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <button className="text-white/70 hover:text-amber-400 transition-colors duration-300 p-2 hover:bg-white/5 rounded-lg">
              <Search className="w-4 h-4 xl:w-5 xl:h-5" />
            </button>
            <button className="text-white/70 hover:text-amber-400 transition-colors duration-300 p-2 hover:bg-white/5 rounded-lg">
              <User className="w-4 h-4 xl:w-5 xl:h-5" />
            </button>
            <Link
              to="/cart"
              className="relative text-white/70 hover:text-amber-400 transition-all duration-300 p-2 hover:bg-white/5 rounded-lg group"
            >
              <ShoppingCart className="w-4 h-4 xl:w-5 xl:h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 xl:w-5 xl:h-5 bg-amber-600 rounded-full flex items-center justify-center text-xs text-black font-bold group-hover:scale-110 transition-transform">
                2
              </span>
            </Link>
            <Link
              to="/order"
              className="bg-amber-600 hover:bg-amber-700 text-black px-4 xl:px-6 py-2 xl:py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-amber-600/25 ml-2 xl:ml-4 whitespace-nowrap"
            >
              Order Online
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white/80 hover:text-amber-400 transition-colors duration-300 p-2 hover:bg-white/5 rounded-lg flex-shrink-0"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-16 sm:top-20 left-0 right-0 w-full bg-black/95 backdrop-blur-xl border-t border-amber-600/20 shadow-2xl max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="px-4 py-4 sm:py-6 space-y-0">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="border-b border-white/5 last:border-b-0"
                >
                  {item.dropdown ? (
                    <div>
                      <div className="text-white/80 text-sm font-medium px-3 py-3 sm:py-4 uppercase tracking-wide">
                        {item.name}
                      </div>
                      <div className="pl-4 sm:pl-6 bg-black/30 rounded-lg">
                        {item.dropdown.map((dropdownItem) => (
                          <NavLink
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className={({ isActive }) =>
                              `block text-sm px-3 py-2 sm:py-3 transition-colors rounded-lg border-b border-white/5 last:border-b-0 ${
                                isActive
                                  ? "text-amber-400 bg-amber-600/10"
                                  : "text-white/60 hover:text-amber-400 hover:bg-amber-600/10"
                              }`
                            }
                            onClick={() => setIsOpen(false)}
                          >
                            {dropdownItem.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        `block text-sm font-medium px-3 py-3 sm:py-4 transition-colors rounded-lg uppercase tracking-wide ${
                          isActive
                            ? "text-amber-400 bg-amber-600/10"
                            : "text-white/80 hover:text-amber-400 hover:bg-amber-600/10"
                        }`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  )}
                </div>
              ))}

              {/* Mobile Bottom Actions */}
              <div className="flex items-center justify-between pt-4 sm:pt-6 mt-4 border-t border-white/10">
                <div className="flex space-x-3 sm:space-x-4">
                  <button className="text-white/70 hover:text-amber-400 transition-colors p-2">
                    <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button className="text-white/70 hover:text-amber-400 transition-colors p-2">
                    <User className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <Link
                    to="/cart"
                    className="text-white/70 hover:text-amber-400 transition-colors p-2 relative"
                  >
                    <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-amber-600 rounded-full flex items-center justify-center text-xs text-black font-bold">
                      2
                    </span>
                  </Link>
                </div>
                <Link
                  to="/order"
                  className="bg-amber-600 hover:bg-amber-700 text-black px-3 sm:px-4 py-2 rounded-lg font-semibold text-sm transition-colors whitespace-nowrap"
                >
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
