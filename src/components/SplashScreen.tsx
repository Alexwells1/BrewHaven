// components/SplashScreen.tsx
import React, { useEffect, useState } from "react";

interface SplashScreenProps {
  onLoadingComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const initializeApp = async () => {
      // Check if user has already seen splash screen in THIS session
      const hasSeenSplash = sessionStorage.getItem("brewhaven-splash-seen");

      if (hasSeenSplash) {
        onLoadingComplete();
        return;
      }

      // Preload images silently in background
      const images = [
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1555507036-ab794f27d2e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      ];

      // Start preloading immediately
      const preloadPromise = Promise.allSettled(
        images.map((src) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = resolve;
            img.src = src;
          });
        })
      );

      // Always show for exactly 4 seconds regardless of loading
      const timerPromise = new Promise((resolve) => setTimeout(resolve, 4000));

      // Wait for both preloading and timer
      await Promise.all([preloadPromise, timerPromise]);

      // Only mark as seen if tab is still active
      if (!document.hidden) {
        sessionStorage.setItem("brewhaven-splash-seen", "true");
      }

      setIsVisible(false);

      // Small delay for smooth exit
      setTimeout(onLoadingComplete, 300);
    };

    initializeApp();
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-amber-900 to-black z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto bg-amber-600 rounded-2xl flex items-center justify-center mb-4 animate-pulse">
            <div className="w-8 h-8 bg-black rounded-lg"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-josefin font-bold text-white animate-fade-in">
            Welcome to
          </h1>
          <h2 className="text-5xl md:text-6xl font-josefin font-bold text-amber-400 animate-fade-in delay-300">
            BrewHaven
          </h2>
          <p className="text-amber-200 text-lg animate-fade-in delay-500">
            Crafting perfect coffee experiences
          </p>
        </div>

        {/* Loading dots */}
        <div className="mt-12 flex justify-center space-x-1">
          <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce delay-150"></div>
          <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce delay-300"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;




