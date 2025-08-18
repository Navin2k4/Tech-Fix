import React, { useState } from "react";
import {
  FiMonitor,
  FiHardDrive,
  FiWifi,
  FiSmartphone,
  FiShield,
  FiSettings,
  FiArrowRight,
  FiZap,
} from "react-icons/fi";

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      icon: <FiMonitor className="w-8 h-8" />,
      title: "Software Issues",
      description:
        "Troubleshoot and fix software problems, installations, and performance issues.",
      gradient: "from-blue-500/20 via-cyan-500/20 to-blue-600/20",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
      delay: "0ms",
    },
    {
      icon: <FiHardDrive className="w-8 h-8" />,
      title: "Hardware Repair",
      description:
        "Professional repair services for computers, laptops, and other devices.",
      gradient: "from-purple-500/20 via-pink-500/20 to-purple-600/20",
      iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
      delay: "100ms",
    },
    {
      icon: <FiWifi className="w-8 h-8" />,
      title: "Network Setup",
      description:
        "Configure and optimize your home or office network for peak performance.",
      gradient: "from-emerald-500/20 via-teal-500/20 to-emerald-600/20",
      iconBg: "bg-gradient-to-br from-emerald-500 to-teal-500",
      delay: "200ms",
    },
    {
      icon: <FiSmartphone className="w-8 h-8" />,
      title: "Mobile Support",
      description:
        "Get help with smartphones, tablets, and mobile device configurations.",
      gradient: "from-orange-500/20 via-amber-500/20 to-orange-600/20",
      iconBg: "bg-gradient-to-br from-orange-500 to-amber-500",
      delay: "300ms",
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Security Solutions",
      description:
        "Protect your devices and data with comprehensive security setups.",
      gradient: "from-red-500/20 via-rose-500/20 to-red-600/20",
      iconBg: "bg-gradient-to-br from-red-500 to-rose-500",
      delay: "400ms",
    },
    {
      icon: <FiSettings className="w-8 h-8" />,
      title: "System Optimization",
      description:
        "Improve your system's performance and ensure smooth operation.",
      gradient: "from-indigo-500/20 via-violet-500/20 to-indigo-600/20",
      iconBg: "bg-gradient-to-br from-indigo-500 to-violet-500",
      delay: "500ms",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-32  bg-gradient-to-tr  from-slate-900 via-blue-900 to-indigo-900 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-cyan-400 text-sm font-medium mb-6">
            <FiZap className="w-4 h-4" />
            EXPERT SERVICES
          </div>

          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent mb-6 leading-tight">
            Tech Solutions
            <br />
            <span className="text-cyan-400">That Work</span>
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology support services designed to keep your
            digital world running at peak performance
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animation: `fadeInUp 0.8s ease-out forwards`,
                animationDelay: service.delay,
                opacity: 0,
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Background with Glassmorphism */}
              <div
                className={`
                relative p-8 rounded-2xl backdrop-blur-xl border border-white/10
                bg-gradient-to-br ${service.gradient}
                transition-all duration-500 ease-out
                ${
                  hoveredCard === index
                    ? "transform scale-105 shadow-2xl shadow-cyan-500/20 border-cyan-500/30"
                    : "hover:scale-102 hover:shadow-xl hover:border-white/20"
                }
              `}
              >
                {/* Hover Glow Effect */}
                <div
                  className={`
                  absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500
                  bg-gradient-to-r from-cyan-500/10 to-blue-500/10
                  ${hoveredCard === index ? "opacity-100" : "group-hover:opacity-50"}
                `}
                ></div>

                {/* Icon Container */}
                <div
                  className={`
                  relative inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6
                  ${service.iconBg} shadow-lg transition-transform duration-300
                  ${hoveredCard === index ? "scale-110 shadow-xl" : "group-hover:scale-105"}
                `}
                >
                  <div className="text-white">{service.icon}</div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-100 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 mb-6 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* CTA Button */}
                  <button
                    className={`
                    inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium
                    transition-all duration-300 border
                    ${
                      hoveredCard === index
                        ? "bg-cyan-500 text-white border-cyan-500 shadow-lg shadow-cyan-500/25"
                        : "bg-white/5 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-500/50"
                    }
                  `}
                  >
                    Learn More
                    <FiArrowRight
                      className={`
                      w-4 h-4 transition-transform duration-300
                      ${hoveredCard === index ? "translate-x-1" : "group-hover:translate-x-1"}
                    `}
                    />
                  </button>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                  <div
                    className={`
                    absolute top-4 right-4 w-2 h-2 bg-cyan-400/60 rounded-full
                    transition-all duration-700 ${hoveredCard === index ? "animate-ping" : ""}
                  `}
                  ></div>
                  <div
                    className={`
                    absolute bottom-8 left-6 w-1 h-1 bg-blue-400/40 rounded-full
                    transition-all duration-700 ${hoveredCard === index ? "animate-pulse" : ""}
                  `}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Get Free Consultation
            </button>
            <button className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-medium rounded-xl border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-300">
              View All Services
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
