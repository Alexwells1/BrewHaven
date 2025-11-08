import React from "react";
import { Calendar, User, MessageCircle, Clock, ArrowRight } from "lucide-react";

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "March 15, 2024",
      author: "Maria Rodriguez",
      comments: 12,
      readTime: "5 min read",
      title: "The Art of Coffee Roasting: From Green Bean to Perfect Cup",
      excerpt:
        "Discover the intricate process behind transforming raw coffee beans into the rich, aromatic brew we love. Learn about different roast profiles and how they affect flavor.",
      category: "Coffee Education",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "March 8, 2024",
      author: "James Wilson",
      comments: 8,
      readTime: "4 min read",
      title: "Sustainable Sourcing: Our Commitment to Ethical Coffee Farming",
      excerpt:
        "How we partner with farmers worldwide to ensure fair trade practices, environmental sustainability, and exceptional quality in every bean.",
      category: "Sustainability",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "February 28, 2024",
      author: "Sarah Chen",
      comments: 15,
      readTime: "6 min read",
      title: "Brewing Methods Compared: Finding Your Perfect Coffee Style",
      excerpt:
        "Explore different brewing techniques from pour-over to French press and discover which method suits your taste preferences and lifestyle.",
      category: "Brewing Guide",
    },
  ];

  return (
    <section
      id="blog"
      className="py-8 sm:py-12 lg:py-20 bg-gradient-to-b from-gray-50 to-amber-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-20 h-20 sm:w-32 sm:h-32 bg-amber-600 rounded-full"></div>
        <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-16 h-16 sm:w-24 sm:h-24 bg-amber-600 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="inline-block bg-amber-600 text-white px-4 py-1 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 shadow-lg">
            Coffee Chronicles
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-josefin text-gray-900 font-bold mb-4 sm:mb-6">
            Latest From
            <span className="text-amber-600"> Our Blog</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Dive into the world of coffee with our latest articles, brewing
            tips, behind-the-scenes stories, and industry insights from our
            expert team.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transition-all duration-500 hover:transform hover:-translate-y-1 sm:hover:-translate-y-2 border border-amber-100"
            >
              {/* Image */}
              <div
                className="h-48 sm:h-56 lg:h-64 bg-cover bg-center relative overflow-hidden"
                style={{ backgroundImage: `url(${post.image})` }}
              >
                {/* Category Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-amber-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold">
                  {post.category}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                {/* Meta Information */}
                <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 flex-wrap gap-2 sm:gap-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{post.comments}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-josefin text-gray-900 font-semibold mb-3 sm:mb-4 group-hover:text-amber-600 transition-colors cursor-pointer leading-tight line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <button className="flex items-center gap-2 text-amber-600 font-semibold group/btn hover:text-amber-700 transition-colors text-sm sm:text-base">
                  Read Full Article
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <button className="bg-gray-900 hover:bg-black text-white px-6 py-3 sm:px-8 sm:py-4 font-semibold rounded-lg sm:rounded-xl transition-all duration-300 hover:shadow-xl sm:hover:shadow-2xl flex items-center gap-2 sm:gap-3 mx-auto group text-sm sm:text-base">
            View All Articles
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
