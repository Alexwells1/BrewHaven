import React from "react";
import { Star, Clock, Plus } from "lucide-react";

const Products: React.FC = () => {
  const products = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      name: "Ethiopian Yirgacheffe",
      description:
        "Bright citrus notes with floral aromas and a clean finish. Single-origin from family farms.",
      price: 18.99,
      rating: 4.9,
      brewTime: "4-5 min",
      category: "Single Origin",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      name: "Colombian Supremo",
      description:
        "Rich chocolate undertones with nutty sweetness and balanced acidity. Medium roast perfection.",
      price: 16.5,
      rating: 4.7,
      brewTime: "3-4 min",
      category: "Single Origin",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      name: "Morning Bliss Blend",
      description:
        "Our signature breakfast blend with caramel notes and smooth finish. The perfect wake-up call.",
      price: 15.75,
      rating: 4.8,
      brewTime: "2-3 min",
      category: "House Blend",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      name: "Decaf Dark Roast",
      description:
        "Full-bodied decaf with dark chocolate notes. All the flavor without the caffeine.",
      price: 17.25,
      rating: 4.6,
      brewTime: "3-4 min",
      category: "Decaf",
    },
  ];

  return (
    <section
      id="products"
      className="py-8 sm:py-12 lg:py-20 bg-gradient-to-b from-gray-50 to-amber-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-20 h-20 sm:w-32 sm:h-32 bg-amber-600 rounded-full"></div>
        <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-16 h-16 sm:w-24 sm:h-24 bg-amber-600 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="inline-block bg-amber-600 text-white px-4 py-1 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 shadow-lg">
            Fresh Roasts
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-josefin text-gray-900 font-bold mb-4 sm:mb-6">
            Premium Coffee
            <span className="text-amber-600"> Beans</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Discover our carefully curated selection of specialty coffee beans,
            roasted fresh daily to bring out their unique characteristics and
            flavors.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:transform hover:-translate-y-1 sm:hover:-translate-y-2 overflow-hidden border border-amber-100"
            >
              {/* Image */}
              <div
                className="h-40 sm:h-48 bg-cover bg-center relative overflow-hidden"
                style={{ backgroundImage: `url(${product.image})` }}
              >
                {/* Category Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-black/80 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                  {product.category}
                </div>

                {/* Rating */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 text-xs font-semibold">
                  <Star className="w-3 h-3 text-amber-400 fill-current" />
                  {product.rating}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-josefin text-gray-900 font-semibold mb-2 sm:mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  {product.description}
                </p>

                {/* Brew Time */}
                <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Brew: {product.brewTime}</span>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="text-xl sm:text-2xl font-josefin text-amber-600 font-bold">
                    ${product.price}
                    <span className="text-xs sm:text-sm text-gray-500 font-normal">
                      {" "}
                      / 12oz
                    </span>
                  </div>
                  <button className="bg-amber-600 hover:bg-amber-700 text-white p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 sm:hover:scale-110 hover:shadow-lg group/btn">
                    <Plus className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:rotate-90 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <button className="bg-gray-900 hover:bg-black text-white px-6 py-3 sm:px-8 sm:py-4 font-semibold rounded-lg sm:rounded-xl transition-all duration-300 hover:shadow-xl sm:hover:shadow-2xl flex items-center gap-2 sm:gap-3 mx-auto text-sm sm:text-base">
            View All Products
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
        </div>
      </div>
    </section>
  );
};

export default Products;
