
import { useState, useEffect } from "react";
import { FiSquare, FiStar } from "react-icons/fi";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      image: "/professional-woman-headshot.png",
      quote:
        "TechFix saved my business when our entire network went down. Their quick response and expertise got us back online in no time.",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "Freelance Designer",
      image: "/professional-man-headshot.png",
      quote:
        "I've been using TechFix for all my computer issues. Their technicians are knowledgeable and always explain everything clearly.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Manager",
      image: "/professional-woman-headshot.png",
      quote:
        "Excellent service! They fixed my laptop's hardware issue and optimized its performance. Highly recommend their services.",
      rating: 5,
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/30 mb-6">
            <FiSquare className="text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">
              Client Testimonials
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from satisfied customers who
            trust TechFix
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="relative mb-16">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-3xl border border-slate-600/30 p-12 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Quote Section */}
              <div className="flex-1 text-center lg:text-left">
                <div className="relative">
                  <FiSquare className="absolute -top-4 -left-4 text-6xl text-purple-400/30" />
                  <blockquote className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-8 relative z-10">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>
                </div>

                {/* Star Rating */}
                <div className="flex justify-center lg:justify-start gap-1 mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current transform transition-transform hover:scale-110"
                    />
                  ))}
                </div>
              </div>

              {/* Author Section */}
              <div className="flex flex-col items-center lg:items-end">
                <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 p-1">
                    <div className="w-full h-full rounded-full bg-slate-700 flex items-center justify-center text-2xl font-bold text-white">
                      {testimonials[activeIndex].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-800 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-white mb-1">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-purple-300 font-medium">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-purple-500 scale-125"
                  : "bg-slate-600 hover:bg-slate-500"
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-600/20 p-8 h-full hover:border-purple-500/40 transition-all duration-300 group-hover:transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-purple-500/10">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  {/* Quote */}
                  <div className="relative mb-6">
                    <FiSquare className="absolute -top-2 -left-2 text-3xl text-purple-400/20" />
                    <p className="text-slate-200 leading-relaxed italic pl-6">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 p-0.5">
                        <div className="w-full h-full rounded-full bg-slate-700 flex items-center justify-center text-sm font-bold text-white">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold group-hover:text-purple-300 transition-colors">
                        {testimonial.name}
                      </h4>
                      <p className="text-slate-400 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25">
              Share Your Experience
            </button>
            <button className="px-8 py-4 border-2 border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 font-semibold rounded-full transition-all duration-300">
              View All Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
