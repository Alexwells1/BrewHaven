import React from "react";
import { Search, ExternalLink } from "lucide-react";

const Gallery: React.FC = () => {
  const galleryItems = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Coffee Roasting",
      description: "Behind the scenes of our artisan roasting process",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Brewing Station",
      description: "Our baristas crafting perfect cups",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Coffee Tasting",
      description: "Expert cupping sessions and quality control",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Cafe Ambiance",
      description: "Our welcoming space and community events",
    },
  ];

  return (
    <section
      id="gallery"
      className="py-8 sm:py-12 lg:py-20 bg-gradient-to-br from-gray-50 to-amber-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-4 sm:top-20 sm:left-10 w-16 h-16 sm:w-24 sm:h-24 bg-amber-600 rounded-full"></div>
        <div className="absolute bottom-10 right-4 sm:bottom-20 sm:right-10 w-20 h-20 sm:w-32 sm:h-32 bg-amber-600 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="inline-block bg-amber-600 text-white px-4 py-1 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 shadow-lg">
            Behind the Scenes
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-josefin text-gray-900 font-bold mb-4 sm:mb-6">
            Our Coffee
            <span className="text-amber-600"> Journey</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Take a visual tour through our world of coffee—from bean sourcing
            and roasting to brewing and the vibrant community we've built
            together.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative h-60 sm:h-72 lg:h-80 bg-cover bg-center rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl overflow-hidden cursor-pointer transition-all duration-500"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform translate-y-6 sm:translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-josefin text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  {item.description}
                </p>
              </div>

              {/* Hover Icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                <div className="flex gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-600 rounded-full flex items-center justify-center transform rotate-0 group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                    <Search className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center transform rotate-0 group-hover:-rotate-12 transition-transform duration-500 shadow-lg">
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" />
                  </div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-600/50 rounded-xl sm:rounded-2xl transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <button className="bg-gray-900 hover:bg-black text-white px-6 py-3 sm:px-8 sm:py-4 font-semibold rounded-lg sm:rounded-xl transition-all duration-300 hover:shadow-xl sm:hover:shadow-2xl flex items-center gap-2 sm:gap-3 mx-auto group text-sm sm:text-base">
            View Full Gallery
            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
