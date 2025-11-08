import React, { useState } from "react";
import { Calendar, Clock, MapPin, Users, Phone } from "lucide-react";

const Appointment: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    date: "",
    time: "",
    guests: "2",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert(
      "Thank you! Your reservation request has been received. We'll confirm shortly."
    );
  };

  const timeSlots = [
    "08:00 AM",
    "08:30 AM",
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
    "06:30 PM",
    "07:00 PM",
    "07:30 PM",
  ];

  return (
    <section
      id="reservations"
      className="py-8 sm:py-12 lg:py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-amber-600/5 rounded-full blur-2xl sm:blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-amber-600/5 rounded-full blur-2xl sm:blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-stretch">
          {/* Location & Info Section */}
          <div className="lg:w-1/2">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-amber-600/20 h-full">
              {/* Header */}
              <div className="mb-6 sm:mb-8">
                <span className="inline-block bg-amber-600 text-black px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                  Visit Us
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-josefin text-white font-bold mb-3 sm:mb-4">
                  Reserve Your
                  <span className="text-amber-400"> Table</span>
                </h2>
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg">
                  Secure your spot at our cozy cafe. Whether it's for a quick
                  coffee meeting or a relaxed afternoon, we'll make sure your
                  experience is perfect.
                </p>
              </div>

              {/* Location Details */}
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-600/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                      Our Location
                    </h4>
                    <p className="text-gray-300 text-xs sm:text-sm">
                      123 Coffee Street
                      <br />
                      Downtown District
                      <br />
                      San Francisco, CA 94102
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-600/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                      Opening Hours
                    </h4>
                    <p className="text-gray-300 text-xs sm:text-sm">
                      Monday - Friday: 6:00 AM - 8:00 PM
                      <br />
                      Saturday - Sunday: 7:00 AM - 9:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-600/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                      Contact Info
                    </h4>
                    <p className="text-gray-300 text-xs sm:text-sm">
                      Phone: (415) 555-0123
                      <br />
                      Email: hello@brewhaven.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
                {[
                  { label: "Free WiFi", value: "Available" },
                  { label: "Outdoor Seating", value: "12 Tables" },
                  { label: "Parking", value: "Validated" },
                  { label: "Group Bookings", value: "Up to 20" },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="text-center bg-black/30 rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4"
                  >
                    <div className="text-amber-400 font-bold text-sm sm:text-base lg:text-lg">
                      {feature.value}
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm">
                      {feature.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Appointment Form */}
          <div className="lg:w-1/2">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-amber-600/20 h-full">
              <h3 className="text-xl sm:text-2xl font-josefin text-white mb-1 sm:mb-2">
                Make a Reservation
              </h3>
              <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8">
                We'll get back to you within 30 minutes to confirm
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name *"
                      className="w-full bg-black/30 border border-gray-600 text-white placeholder-gray-400 py-3 sm:py-4 px-4 rounded-lg sm:rounded-xl focus:border-amber-600 focus:outline-none transition-colors backdrop-blur-sm text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name *"
                      className="w-full bg-black/30 border border-gray-600 text-white placeholder-gray-400 py-3 sm:py-4 px-4 rounded-lg sm:rounded-xl focus:border-amber-600 focus:outline-none transition-colors backdrop-blur-sm text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>

                {/* Contact & Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number *"
                      className="w-full bg-black/30 border border-gray-600 text-white placeholder-gray-400 py-3 sm:py-4 px-4 pr-10 rounded-lg sm:rounded-xl focus:border-amber-600 focus:outline-none transition-colors backdrop-blur-sm text-sm sm:text-base"
                      required
                    />
                    <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="relative">
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full bg-black/30 border border-gray-600 text-white py-3 sm:py-4 px-4 pr-10 rounded-lg sm:rounded-xl focus:border-amber-600 focus:outline-none transition-colors backdrop-blur-sm appearance-none text-sm sm:text-base"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                    </select>
                    <Users className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="relative">
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-black/30 border border-gray-600 text-white py-3 sm:py-4 px-4 pr-10 rounded-lg sm:rounded-xl focus:border-amber-600 focus:outline-none transition-colors backdrop-blur-sm text-sm sm:text-base"
                      required
                    />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="relative">
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-black/30 border border-gray-600 text-white py-3 sm:py-4 px-4 pr-10 rounded-lg sm:rounded-xl focus:border-amber-600 focus:outline-none transition-colors backdrop-blur-sm appearance-none text-sm sm:text-base"
                      required
                    >
                      <option value="">Select Time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                    <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Special requests or dietary restrictions..."
                    rows={3}
                    className="w-full bg-black/30 border border-gray-600 text-white placeholder-gray-400 py-3 sm:py-4 px-4 rounded-lg sm:rounded-xl focus:border-amber-600 focus:outline-none transition-colors resize-none backdrop-blur-sm text-sm sm:text-base"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-black font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl transition-all duration-300 hover:shadow-xl sm:hover:shadow-2xl hover:shadow-amber-600/25 text-base sm:text-lg"
                >
                  Reserve Table
                </button>

                {/* Note */}
                <p className="text-gray-400 text-xs sm:text-sm text-center">
                  We'll contact you to confirm your reservation. For same-day
                  bookings, please call us directly.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
