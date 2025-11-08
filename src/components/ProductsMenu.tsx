import React, { useState } from "react";
import { Star, Clock, Plus, Award } from "lucide-react";
import type { MenuItem } from "@/types";



interface MenuData {
  coffee: MenuItem[];
  tea: MenuItem[];
  pastries: MenuItem[];
}

const ProductsMenu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<keyof MenuData>("coffee");

  const menuData: MenuData = {
    coffee: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        name: "Signature Espresso",
        description:
          "Our house blend with notes of dark chocolate and caramel. Perfect for classic espresso drinks.",
        price: 4.5,
        rating: 4.9,
        brewTime: "2-3 min",
        featured: true,
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        name: "Pour Over Single Origin",
        description:
          "Ethiopian Yirgacheffe with bright citrus notes and floral aroma. Brewed to order.",
        price: 5.75,
        rating: 4.8,
        brewTime: "4-5 min",
        featured: false,
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        name: "Cold Brew Toddy",
        description:
          "Smooth, low-acidity cold brew steeped for 18 hours. Served over ice.",
        price: 5.25,
        rating: 4.7,
        brewTime: "Ready",
        featured: true,
      },
    ],
    tea: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        name: "Earl Grey Lavender",
        description:
          "Classic Earl Grey with soothing lavender notes. Perfect afternoon treat.",
        price: 4.25,
        rating: 4.6,
        brewTime: "3-4 min",
        featured: false,
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1597481499750-3e11b43f4ed7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        name: "Matcha Latte",
        description:
          "Premium ceremonial grade matcha whisked to perfection with steamed milk.",
        price: 5.5,
        rating: 4.9,
        brewTime: "3-4 min",
        featured: true,
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1597481499750-3e11b43f4ed7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        name: "Herbal Infusion",
        description:
          "Caffeine-free blend of chamomile, mint, and lemon verbena. Soothing and refreshing.",
        price: 4.0,
        rating: 4.5,
        brewTime: "4-5 min",
        featured: false,
      },
    ],
    pastries: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1555507036-ab794f27d2e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        name: "Almond Croissant",
        description:
          "Flaky croissant filled with almond paste and topped with sliced almonds. Baked fresh daily.",
        price: 4.75,
        rating: 4.9,
        featured: true,
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        name: "Morning Muffin",
        description:
          "Blueberry bran muffin with oats and honey. Wholesome and delicious.",
        price: 3.5,
        rating: 4.7,
        featured: false,
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        name: "Chocolate Chip Cookie",
        description:
          "Warm, chewy cookie with premium dark chocolate chunks. Irresistible.",
        price: 3.25,
        rating: 5.0,
        featured: true,
      },
    ],
  };

  const tabs = [
    { id: "coffee", name: "Coffee Drinks" },
    { id: "tea", name: "Tea Selection" },
    { id: "pastries", name: "Fresh Pastries" },
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
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="inline-block bg-amber-600/20 text-amber-400 px-4 py-1 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 border border-amber-600/30">
            Cafe Menu
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-josefin text-white font-bold mb-4 sm:mb-6">
            Handcrafted
            <span className="text-amber-600"> Delights</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Explore our carefully curated menu featuring specialty coffee
            drinks, premium teas, and freshly baked pastries. Every item is
            crafted with attention to detail and quality ingredients.
          </p>
        </div>

        {/* Tabs - Redesigned */}
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as keyof MenuData)}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base ${
                activeTab === tab.id
                  ? "bg-amber-600 text-black shadow-lg shadow-amber-600/25 scale-105"
                  : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white backdrop-blur-sm"
              }`}
            >
              {tab.name}
              {activeTab === tab.id && (
                <Award className="w-3 h-3 sm:w-4 sm:h-4" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="transition-all duration-500">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {menuData[activeTab]?.map((item: MenuItem) => (
              <div
                key={item.id}
                className="group bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-amber-600/30 transition-all duration-500 hover:transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-xl sm:hover:shadow-2xl"
              >
                {/* Image */}
                <div
                  className="h-40 sm:h-48 bg-cover bg-center rounded-lg sm:rounded-xl mb-4 sm:mb-6 relative overflow-hidden"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  {/* Featured Badge */}
                  {item.featured && (
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-amber-600 text-black px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      Featured
                    </div>
                  )}

                  {/* Rating */}
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-black/80 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1 backdrop-blur-sm">
                    <Star className="w-3 h-3 text-amber-400 fill-current" />
                    {item.rating}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-josefin text-white font-semibold mb-2 sm:mb-3">
                  {item.name}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  {item.description}
                </p>

                {/* Brew Time - Only show if brewTime exists */}
                {item.brewTime && (
                  <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{item.brewTime}</span>
                  </div>
                )}

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="text-xl sm:text-2xl font-josefin text-amber-600 font-bold">
                    ${item.price}
                  </div>
                  <button className="bg-amber-600 hover:bg-amber-700 text-black px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-amber-600/25 flex items-center gap-1 sm:gap-2 group/btn text-xs sm:text-sm">
                    <Plus className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:rotate-90 transition-transform duration-300" />
                    <span className="hidden sm:inline">Add to Order</span>
                    <span className="sm:hidden">Add</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <button className="bg-amber-600 hover:bg-amber-700 text-black px-6 py-3 sm:px-8 sm:py-4 font-semibold rounded-lg sm:rounded-xl transition-all duration-300 hover:shadow-xl sm:hover:shadow-2xl hover:shadow-amber-600/25 flex items-center gap-2 sm:gap-3 mx-auto text-sm sm:text-base">
            Download Full Menu
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
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsMenu;

