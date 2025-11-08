// components/SurprisePage.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SurprisePage: React.FC = () => {
  const [stage, setStage] = useState(0);
  const [rejectionCount, setRejectionCount] = useState(0);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [timer, setTimer] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [shouldShake, setShouldShake] = useState(false);

  const rejectionReasons = [
    "I'm too handsome 😎",
    "I'm too funny 😂",
    "I'm too good looking ✨",
    "You're scared of how perfect we'd be 💫",
    "You're playing hard to get 🎯",
    "You want me to try harder 💪",
    "You're secretly in love with me already 💘",
    "You think I'm too charming 🎩",
    "You're intimidated by my amazing personality 🌟",
    "You can't handle this much awesome 💥",
    "You're worried you'll fall too hard 💞",
    "You think I'm out of your league 🏆",
    "You're testing my patience 😴",
    "You enjoy seeing me beg 😏",
    "You're waiting for the perfect moment ⏰",
  ];

  const funnyResponses = [
    "Haha, nice try! But we both know that's not true 😏",
    "You're making this really difficult, you know? 😅",
    "I don't believe you for a second!",
    "Come on now, be honest with yourself",
    "We both know what's really going on here",
    "You're too cute when you try to lie",
    "Okay, I see how it is! Playing hard to get",
    "Still going with the games? You're persistent!",
    "You're really determined to say no, huh?",
    "This is getting interesting now",
    "You really know how to keep me guessing!",
    "I admire your dedication to saying no",
    "You're really testing my limits here",
    "This is becoming quite the challenge",
    "Okay, you win this round... just kidding!",
  ];

  const easterEggs = [
    "Psst... I think you're enjoying this too much! 😉",
    "Fun fact: People who play hard to get usually fall the hardest! 💘",
    "Did you know? The best relationships start with a good chase! 🏃‍♂️",
    "Secret message: You have great taste in men! 😎",
    "Shhh... I won't tell anyone you're smiling right now! 😊",
    "Easter egg found! You're officially cute! 🐰",
    "Bonus round: The more you say no, the cuter you get! 🌟",
  ];

  // Timer effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Thinking message effect
  useEffect(() => {
    if (stage === 2 && !isThinking) {
      const timeout = setTimeout(() => {
        setIsThinking(true);
        setTimeout(() => setIsThinking(false), 3000);
      }, 8000); // Show after 8 seconds of inactivity
      return () => clearTimeout(timeout);
    }
  }, [stage, rejectionCount, isThinking]);

  // Random easter eggs effect
  useEffect(() => {
    if (stage === 2 && Math.random() < 0.2 && rejectionCount > 3) {
      const randomEgg =
        easterEggs[Math.floor(Math.random() * easterEggs.length)];
      setPopupMessage(randomEgg);
      setTimeout(() => setPopupMessage(""), 4000);
    }
  }, [rejectionCount, stage]);

  const handleNoClick = () => {
    setShouldShake(true);
    setTimeout(() => setShouldShake(false), 500);

    const newCount = rejectionCount + 1;
    setRejectionCount(newCount);

    // Show random popup every 3 rejections
    if (newCount % 3 === 0) {
      const popups = [
        "I see you're enjoying this! 😏",
        "You're really determined, huh?",
        "This is becoming a game! 🎮",
        "I can do this all day! 💪",
        "You're making me work for it!",
        "We could be doing this forever! ⏳",
      ];
      setPopupMessage(popups[Math.floor(Math.random() * popups.length)]);
      setTimeout(() => setPopupMessage(""), 3000);
    }

    if (newCount >= 15) {
      setShowFinalMessage(true);
    } else {
      setStage(2);
    }
  };

  const handleYesClick = () => {
    setShowConfetti(true);
    setStage(3);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  const getCurrentRejectionReason = () => {
    return rejectionReasons[rejectionCount % rejectionReasons.length];
  };

  const getCurrentFunnyResponse = () => {
    return funnyResponses[rejectionCount % funnyResponses.length];
  };

  const getTimeMessage = () => {
    if (timer > 120) return "2 minutes of saying no? You're committed! ⏰";
    if (timer > 60) return "1 minute in and still going strong! 💪";
    if (timer > 30) return "30 seconds of rejection... impressive! 🎯";
    return "";
  };

  if (showFinalMessage) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-800 flex items-center justify-center p-4 sm:p-6">
        <div className="text-center text-white max-w-md w-full">
          <div className="mb-6 sm:mb-8">
            <div className="text-4xl sm:text-5xl mb-3">💕</div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              Hi Tunmise!
            </h1>
          </div>

          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
            <p>After {rejectionCount} tries, you're still saying no?</p>
            <p>I knew it was you from the start 😅</p>
            <p>I did this whole thing just for you</p>
            <p>Knew it would end like this too</p>
            <p className="text-lg sm:text-xl font-semibold mt-4">
              Just admit it alreadyyy
            </p>
          </div>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => {
                setShowFinalMessage(false);
                setStage(3);
              }}
              className="bg-white text-pink-600 font-semibold py-3 px-6 rounded-lg text-base hover:scale-105 transition-all duration-200"
            >
              Fine, YES 🙃
            </button>
            <Link
              to="/"
              className="border border-white text-white font-semibold py-3 px-6 rounded-lg text-base hover:bg-white hover:text-pink-600 transition-all duration-200"
            >
              Back Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      {/* Confetti */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              {["🎉", "🎊", "💕", "✨", "🌟"][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      )}

      {/* Popup Messages */}
      {popupMessage && (
        <div className="fixed top-4 left-4 right-4 bg-yellow-500 text-white py-3 px-4 rounded-lg text-sm font-medium animate-bounce z-40 shadow-lg">
          {popupMessage}
        </div>
      )}

      {/* Thinking Message */}
      {isThinking && (
        <div className="fixed top-4 left-4 right-4 bg-blue-500 text-white py-3 px-4 rounded-lg text-sm font-medium z-40 shadow-lg">
          Taking your time, huh? Overthinking is a sign you care! 😉
        </div>
      )}

      <div className="text-center text-white max-w-md w-full">
        {stage === 0 && (
          <div className="space-y-6 sm:space-y-8">
            <div className="mb-4 sm:mb-6">
              <div className="text-4xl sm:text-5xl mb-3">💕</div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Surprise
              </h1>
            </div>

            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
              <p>If you can see this page...</p>
              <p className="text-lg sm:text-xl font-semibold">
                I really, really like you
              </p>
              <p>Here's kisses and more kisses 💋</p>
            </div>

            <button
              onClick={() => setStage(1)}
              className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg text-base hover:scale-105 transition-all duration-200"
            >
              Continue
            </button>
          </div>
        )}

        {stage === 1 && (
          <div className="space-y-6 sm:space-y-8">
            <div className="mb-4 sm:mb-6">
              <div className="text-3xl sm:text-4xl mb-3">😊</div>
              <p className="text-lg sm:text-xl font-semibold">
                So... what do you think?
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm sm:text-base">Click 1 for yes, 2 for no</p>

              <div className="flex gap-3 sm:gap-4 justify-center">
                <button
                  onClick={handleYesClick}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 sm:py-4 sm:px-8 rounded-lg text-base sm:text-lg hover:scale-105 transition-all duration-200 flex-1 max-w-[140px]"
                >
                  <span className="text-lg sm:text-xl mr-1">1</span>
                  Yes
                </button>

                <button
                  onClick={handleNoClick}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 sm:py-4 sm:px-8 rounded-lg text-base sm:text-lg hover:scale-105 transition-all duration-200 flex-1 max-w-[140px]"
                >
                  <span className="text-lg sm:text-xl mr-1">2</span>
                  No
                </button>
              </div>
            </div>
          </div>
        )}

        {stage === 2 && (
          <div className="space-y-6 sm:space-y-8">
            {/* Timer Message */}
            {getTimeMessage() && (
              <div className="bg-purple-500/80 text-white py-2 px-4 rounded-lg text-xs">
                {getTimeMessage()}
              </div>
            )}

            {/* Big clear rejection message at the top */}
            <div className="mb-4 sm:mb-6">
              <div className="text-3xl sm:text-4xl mb-3">😂</div>

              {/* Main funny response - big and clear */}
              <div
                className={`bg-white/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 border-2 border-white/30 mb-4 ${
                  shouldShake ? "animate-shake" : ""
                }`}
              >
                <p className="text-lg sm:text-xl font-semibold mb-2">
                  {getCurrentFunnyResponse()}
                </p>
                <p className="text-sm sm:text-base text-white/90">
                  Why don't you like me? 🤔
                </p>
              </div>

              {/* Rejection reason - also clear and prominent */}
              <div className="bg-yellow-500/90 text-white rounded-lg p-3 sm:p-4 border border-yellow-300">
                <p className="text-xs sm:text-sm font-medium mb-1">
                  IS IT BECAUSE:
                </p>
                <p className="text-base sm:text-lg font-semibold">
                  {getCurrentRejectionReason()}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm sm:text-base">
                So... what's your real answer?
              </p>

              {rejectionCount > 2 && (
                <div className="bg-orange-500/80 text-white py-2 px-4 rounded-lg text-xs sm:text-sm">
                  {rejectionCount > 10
                    ? "Seriously, just click 1 already 😭"
                    : rejectionCount > 7
                    ? "You're really testing my patience now 😅"
                    : rejectionCount > 4
                    ? "Come on, just admit the truth"
                    : "Just choose 1 already, we both know you want to"}
                </div>
              )}

              {/* Give Up Button (Teasing) */}
              {rejectionCount > 5 && (
                <button
                  onClick={() => {
                    setPopupMessage(
                      "Aha! I knew you couldn't resist! But I'm not giving up that easy! 😏"
                    );
                    setTimeout(() => setPopupMessage(""), 3000);
                  }}
                  className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-all duration-200"
                >
                  Fine, I give up... (Just kidding! 😂)
                </button>
              )}

              <div className="flex gap-3 sm:gap-4 justify-center">
                <button
                  onClick={handleYesClick}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 sm:py-4 sm:px-8 rounded-lg text-base sm:text-lg hover:scale-105 transition-all duration-200 flex-1 max-w-[140px]"
                >
                  <span className="text-lg sm:text-xl mr-1">1</span>
                  Yes
                </button>

                <button
                  onClick={handleNoClick}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 sm:py-4 sm:px-8 rounded-lg text-base sm:text-lg hover:scale-105 transition-all duration-200 flex-1 max-w-[140px]"
                >
                  <span className="text-lg sm:text-xl mr-1">2</span>
                  No
                </button>
              </div>
            </div>

            {rejectionCount > 0 && (
              <div className="text-xs text-white/70 bg-black/30 rounded-full py-1 px-3 inline-block">
                Times you've said no: {rejectionCount}/15
              </div>
            )}
          </div>
        )}

        {stage === 3 && (
          <div className="space-y-6 sm:space-y-8">
            <div className="mb-4 sm:mb-6">
              <div className="text-4xl sm:text-5xl mb-3">🎉</div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Yay!
              </h1>
            </div>

            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
              <p>I'm happy you feel the same way</p>
              <p>Beautiful segzy hot fine potato 🥔</p>
              <p className="text-lg sm:text-xl font-semibold">
                Let's create something beautiful
              </p>
            </div>

            <div className="flex justify-center">
              <Link
                to="/"
                className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg text-base hover:scale-105 transition-all duration-200"
              >
                Back to BrewHaven
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SurprisePage;
