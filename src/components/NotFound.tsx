// components/NotFound.tsx - Minimal Version
import React from "react";
import { Link } from "react-router-dom";
import {  ArrowLeft } from "lucide-react";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center px-4">
      <div className="text-center">
        {/* Error Code */}
        <div className="mb-8">
          <h1 className="text-8xl lg:text-9xl font-josefin font-bold text-amber-400 mb-4">
            404
          </h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>

        {/* Message */}
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl lg:text-3xl font-josefin text-white font-semibold">
            Lost in the Aroma
          </h2>
          <p className="text-gray-400 text-lg max-w-md mx-auto">
            This page seems to have evaporated like morning mist. Let's get you
            back to brewing.
          </p>
        </div>

        {/* Back Home Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-amber-600/25 hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5" />
          Return to BrewHaven
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
