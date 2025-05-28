// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// const navItems = [
//   { name: "Home", href: "#home" },
//   { name: "Chapters", href: "#chapters" },
//   { name: "Faculty", href: "#faculty" },
//   { name: "Gallery", href: "#gallery" },
//   { name: "Contact", href: "#contact" },
// ];
// const Navbar: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
//   }, [isMenuOpen]);
//   return (
//     <>
//       {" "}
//       {/* Navbar */}
//       <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(10,25,41,0.8)] backdrop-blur-md border-b border-[#00A3FF]/30 py-4 px-6 md:px-12">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           {/* Logo */}
//           <div className="text-[#00A3FF] font-['Space_Grotesk',sans-serif] font-bold text-2xl cursor-pointer">
//             <span className="text-[#00A3FF]">IEEE </span>
//             <span className="text-white">RIT-B</span>
//           </div>
//           {/* Desktop Nav */}
//           <div className=" hidden md:flex items-center space-x-8 z-10">

//             {navItems.map(({ name, href }) => (
//               <a
//                 key={name}
//                 href={href}
//                 className="text-white hover:text-[#00A3FF] transition-colors duration-300 font-medium cursor-pointer whitespace-nowrap"
//               >

//                 {name}
//               </a>
//             ))}
//           </div>
//           {/* Hamburger Menu Icon */}
//           <button
//             aria-label="Toggle menu"
//             className="block md:hidden "
//             onClick={() => setIsMenuOpen((prev) => !prev)}
//           >

//             <FontAwesomeIcon
//               icon={isMenuOpen ? faTimes : faBars}
//               className="text-2xl text-[#00A3FF]"
//             />
//           </button>
//         </div>
//       </nav>
//       {/* AnimatePresence handles mounting/unmounting */}
//       <AnimatePresence>

//         {isMenuOpen && (
//           <>

//             {/* Backdrop */}
//             <motion.div
//               className="fixed inset-0 bg-black/50 z-40"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsMenuOpen(false)}
//             />
//             {/* Side Menu */}
//             <motion.div
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ type: "tween", duration: 0.3 }}
//               className="fixed top-0 right-0 h-screen w-64 bg-[#0A1929]/95 backdrop-blur-md flex flex-col items-start px-6 pt-24 space-y-6 z-50"
//             >

//               {navItems.map(({ name, href }) => (
//                 <a
//                   key={name}
//                   href={href}
//                   className="text-white text-lg font-medium hover:text-[#00A3FF] transition-colors duration-300"
//                   onClick={() => setIsMenuOpen(false)}
//                 >

//                   {name}
//                 </a>
//               ))}
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };
// export default Navbar;
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Chapters", href: "#chapters" },
  { name: "Faculty", href: "#faculty" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(10,25,41,0.8)] backdrop-blur-md border-b border-[#00A3FF]/30 py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-[#00A3FF] font-bold text-2xl cursor-pointer">
            <span className="text-[#00A3FF]">IEEE </span>
            <span className="text-white">RIT-B</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  className="text-white hover:text-[#00A3FF] transition-colors duration-300 font-medium cursor-pointer whitespace-nowrap inline-block"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Menu Icon */}
          <button
            aria-label="Toggle menu"
            className="md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`bg-[#00A3FF] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                }`}
              ></span>
              <span
                className={`bg-[#00A3FF] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`bg-[#00A3FF] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </nav>

      {/* handles mounting/unmounting */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Side Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-screen w-64 bg-[#0A1929]/95 backdrop-blur-md flex flex-col items-start px-6 pt-24 space-y-6 z-50"
            >
              {navItems.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  className="text-white text-lg font-medium hover:text-[#00A3FF] transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {name}
                </a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
