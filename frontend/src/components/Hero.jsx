import { FiArrowRight, FiPlay, FiShield, FiZap, FiClock, FiMessageCircle, FiUser } from "react-icons/fi";
import { useState } from "react";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen  overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="text-left space-y-8">
            {/* 
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white/90">
              <FiZap className="w-4 h-4 text-yellow-400" />
              <span>24/7 Expert Support Available</span>
            </div>  */}

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold font-sans text-white leading-tight">
                Your Reliable
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Tech Support
                </span>
                Partner
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed">
              Get expert help for any technology issue. From software
              troubleshooting to hardware repairs, we've got you covered with
              professional, reliable service that keeps your business running
              smoothly.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white/90">
                <FiClock className="w-4 h-4 text-green-400" />
                <span className="text-sm">Instant Response</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white/90">
                <FiShield className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Certified Experts</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white/90">
                <FiZap className="w-4 h-4 text-purple-400" />
                <span className="text-sm">99.9% Success Rate</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                className="group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span>Get Started Now</span>
                <FiArrowRight
                  className={`transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-3 backdrop-blur-sm">
                <FiPlay className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10K+</div>
                <div className="text-sm text-white/70">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-white/70">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-sm text-white/70">Uptime Guarantee</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Floating Cards */}
            <div className="absolute -top-8 -left-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 transform rotate-6 hover:rotate-12 transition-transform duration-300">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white text-sm font-medium">
                  Online Support
                </span>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 transform -rotate-6 hover:-rotate-12 transition-transform duration-300">
              <div className="flex items-center space-x-3">
                <FiShield className="w-5 h-5 text-blue-400" />
                <span className="text-white text-sm font-medium">
                  Secure & Trusted
                </span>
              </div>
            </div>

            {/* Main Image Container */}
            <div className="relative group max-w-md mx-auto">
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 rounded-3xl blur-xl transform group-hover:scale-110 transition-transform duration-500"></div>

              {/* Main card */}
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 transform group-hover:scale-105 transition-all duration-500 min-h-[280px] flex flex-col">
                {/* Header with icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl backdrop-blur-sm border border-white/10">
                    <FiMessageCircle className="w-6 h-6 text-blue-300" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-300 text-xs font-medium">
                      ONLINE
                    </span>
                  </div>
                </div>

                {/* Main content */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className=" text-2xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    Live Support Session
                  </h3>
                  <p className="text-white/70 text-base mb-6">
                    Connect with our expert technicians for real-time assistance
                    with any technical issues.
                  </p>

                  {/* Stats row */}
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="flex items-center space-x-2">
                      <FiUser className="w-4 h-4 text-blue-300" />
                      <span className="text-white/80 text-sm">
                        5 experts online
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FiClock className="w-4 h-4 text-purple-300" />
                      <span className="text-white/80 text-sm">
                        Avg. 2min wait
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom action section */}
                <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-semibold mb-1">
                        Ready to Help
                      </div>
                      <div className="text-white/70 text-sm">
                        Expert technician available now
                      </div>
                    </div>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Start Chat
                    </button>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-md"></div>
                <div className="absolute top-8 right-8 w-8 h-8 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-sm"></div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-1/4 -right-12 transform rotate-12 hover:rotate-24 transition-transform duration-300">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-3 rounded-xl shadow-lg">
                <FiZap className="w-6 h-6" />
              </div>
            </div>

            <div className="absolute bottom-1/4 -left-12 transform -rotate-12 hover:-rotate-24 transition-transform duration-300">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-3 rounded-xl shadow-lg">
                <FiShield className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
