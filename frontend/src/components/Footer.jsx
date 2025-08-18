import React, { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiExternalLink,
  FiCheck,
  FiArrowUp,
} from "react-icons/fi";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail("");

    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t-8 rounded-t-4xl text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold font-sans mb-4 group">
              Tech
              <span className="text-accent transition-all duration-300 group-hover:scale-110 inline-block">
                Fix
              </span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Your trusted partner for all technology support needs.
              Professional, reliable, and always here to help you succeed.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                aria-label="Follow us on Facebook"
                className="p-2 rounded-full hover:bg-accent/20 transition-all duration-300 hover:scale-110"
              >
                <FiFacebook className="w-5 h-5 hover:text-accent transition-colors" />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Follow us on Twitter"
                className="p-2 rounded-full hover:bg-accent/20 transition-all duration-300 hover:scale-110"
              >
                <FiTwitter className="w-5 h-5 hover:text-accent transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="Connect with us on LinkedIn"
                className="p-2 rounded-full hover:bg-accent/20 transition-all duration-300 hover:scale-110"
              >
                <FiLinkedin className="w-5 h-5 hover:text-accent transition-colors" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold font-sans mb-4 text-accent">
              Services
            </h3>
            <ul className="space-y-3 text-primary-foreground/80">
              {[
                { name: "Software Support", href: "/services/software" },
                { name: "Hardware Repair", href: "/services/hardware" },
                { name: "Network Setup", href: "/services/network" },
                { name: "Security Solutions", href: "/services/security" },
                { name: "Cloud Migration", href: "/services/cloud" },
                { name: "24/7 Monitoring", href: "/services/monitoring" },
              ].map((service, index) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="hover:text-accent transition-all duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {service.name}
                    </span>
                    <FiExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold font-sans mb-4 text-accent">
              Get in Touch
            </h3>
            <div className="space-y-4 text-primary-foreground/80">
              <a
                href="tel:+15551234567"
                className="flex items-center group hover:text-accent transition-all duration-300"
              >
                <div className="p-2 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors mr-3">
                  <FiPhone className="w-4 h-4" />
                </div>
                <span>+1 (555) 123-4567</span>
              </a>
              <a
                href="mailto:support@techfix.com"
                className="flex items-center group hover:text-accent transition-all duration-300"
              >
                <div className="p-2 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors mr-3">
                  <FiMail className="w-4 h-4" />
                </div>
                <span>support@techfix.com</span>
              </a>
              <a
                href="https://maps.google.com"
                className="flex items-start group hover:text-accent transition-all duration-300"
              >
                <div className="p-2 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors mr-3 mt-0.5">
                  <FiMapPin className="w-4 h-4" />
                </div>
                <span className="leading-relaxed">
                  123 Tech Street
                  <br />
                  Digital City, DC 12345
                </span>
              </a>
            </div>

            {/* Business Hours */}
            <div className="mt-6 p-4 bg-primary-foreground/5 rounded-lg">
              <h4 className="font-semibold mb-2 text-accent">Business Hours</h4>
              <div className="text-sm text-primary-foreground/70 space-y-1">
                <div>Mon - Fri: 8:00 AM - 8:00 PM</div>
                <div>Saturday: 9:00 AM - 6:00 PM</div>
                <div>Sunday: Emergency Only</div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold font-sans mb-4 text-accent">
              Stay Updated
            </h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Get the latest tech tips, security updates, and exclusive offers
              delivered to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={isLoading || isSubscribed}
                  className="flex-1 px-4 py-3 rounded-l-lg bg-input text-foreground border-0 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 disabled:opacity-50"
                  aria-label="Email address for newsletter subscription"
                />
                <button
                  type="submit"
                  disabled={isLoading || isSubscribed || !email}
                  className="bg-accent text-accent-foreground px-6 py-3 rounded-r-lg hover:bg-accent/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[100px]"
                  aria-label="Subscribe to newsletter"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                  ) : isSubscribed ? (
                    <FiCheck className="w-4 h-4" />
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </div>
              {isSubscribed && (
                <p className="text-accent text-sm animate-fade-in">
                  ✨ Successfully subscribed! Welcome to TechFix updates.
                </p>
              )}
            </form>

            <p className="text-xs text-primary-foreground/60 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-4 md:mb-0">
              <a
                href="/privacy"
                className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
              >
                Terms of Service
              </a>
              <a
                href="/careers"
                className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
              >
                Careers
              </a>
              <a
                href="/blog"
                className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
              >
                Tech Blog
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <p className="text-primary-foreground/60 text-sm">
                &copy; {currentYear} TechFix. All rights reserved.
              </p>
              <button
                onClick={scrollToTop}
                className="p-2 rounded-full bg-accent/10 hover:bg-accent/20 transition-all duration-300 hover:scale-110"
                aria-label="Scroll to top"
              >
                <FiArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
