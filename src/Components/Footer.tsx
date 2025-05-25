import React from "react";
import { useFooterGlow } from "./useFooterGlow";

const Footer: React.FC = () => {
  const footerRef = useFooterGlow();

  return (
    <footer
      ref={footerRef}
      id="footer"
      className="glass footer-hover-effect footer-sliding-gradient relative py-20 px-6 overflow-hidden bg-gray-900 text-white"
    >
      <div
        id="glow"
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-20"
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
        {/* Logo + Quote */}
        <div>
          <h1 className="text-3xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
            IEEE RIT-B
          </h1>
          <p className="text-gray-400 mt-3 italic">“a cool deep quote”</p>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-white">Explore</h2>
          <ul className="space-y-2 text-gray-400">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a href="#" className="block p-2 rounded-md glow-hover">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-white">Connect</h2>
          <ul className="flex space-x-4 text-xl">
            <li>
              <a
                href="#"
                className="icon-hover"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="icon-hover"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="icon-hover"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="icon-hover"
                aria-label="Twitter"
              >
                <i className="fab fa-x-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Newsletter Box */}
      <div className="newsletter-bottom relative z-10 max-w-4xl mx-auto mt-10 rounded-2xl p-6 text-center">
        <h3 className="text-xl font-semibold mb-2">Stay updated!!</h3>
        <p className="text-gray-400 text-sm mb-4">Get updates about our latest activitieees.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            required
            placeholder="your@email.com"
            className="w-full sm:w-auto px-4 py-2 rounded-lg bg-black text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-blue-700 hover:to-cyan-700 transition-all">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500 relative z-10">
        &copy; 2025 IEEE RIT-B. Crafted skillfully.
      </div>
    </footer>
  );
};

export default Footer;