/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "হোম", href: "/" },
  { label: "আমাদের সম্পর্কে", href: "/about" },
  { label: "জীবনী", href: "/biography" },
  { label: "গ্যালারি", href: "/gallery" },
  { label: "স্বেচ্ছাসেবক হোন", href: "/volunteer/new" },
  { label: "যোগাযোগ", href: "/contact" },
  { label: "অভিযোগ", href: "/complaint" },
  { label: "লগইন", href: "/login" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // react-router-dom থেকে current location
  const location = window.location.pathname;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-sm sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            data-testid="link-home-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="flex items-center gap-3 mr-8">
              <div className="flex flex-col justify-center">
                <div className="text-green-700 font-extrabold text-2xl md:text-2xl lg:text-3xl  tracking-wider leading-tight font-bangla  mt-8">
                  হামিদুর <span className="text-political-red">রহমান</span>
                </div>
              </div>
              <img
                src="/images/logo-1.jpg"
                alt="Campaign Logo"
                className="h-20 w-20 object-contain  hover:scale-105
                hover:drop-shadow-[0_6px_18px_rgba(0,0,0,0.25)] md:mt-0 mt-4"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.children && setOpenDropdown(item.label)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.children ? (
                  <button
                    className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                      item.children.some((c) => c.href === location)
                        ? "text-political-red"
                        : "text-political-dark hover:text-political-blue"
                    }`}
                    data-testid={`nav-${item.label
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `text-sm font-medium transition-colors ${
                        isActive
                          ? "text-political-red"
                          : "text-political-dark hover:text-political-blue"
                      }`
                    }
                    data-testid={`nav-${item.label
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {item.label}
                  </NavLink>
                )}

                <AnimatePresence>
                  {item.children && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 min-w-[160px] z-50"
                    >
                      {item.children.map((child) => (
                        <NavLink
                          key={child.label}
                          to={child.href}
                          className={({ isActive }) =>
                            `block px-4 py-2 text-sm text-political-dark hover:bg-political-light hover:text-political-blue transition-colors ${
                              isActive ? "text-political-red" : ""
                            }`
                          }
                          data-testid={`nav-${child.label
                            .toLowerCase()
                            .replace(" ", "-")}`}
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() =>
                            setOpenDropdown(
                              openDropdown === item.label ? null : item.label
                            )
                          }
                          className="flex items-center justify-between w-full py-2 text-political-dark font-medium"
                        >
                          {item.label}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              openDropdown === item.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {openDropdown === item.label && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: "auto" }}
                              exit={{ height: 0 }}
                              className="overflow-hidden pl-4"
                            >
                              {item.children.map((child) => (
                                <NavLink
                                  key={child.label}
                                  to={child.href}
                                  className={({ isActive }) =>
                                    `block py-2 text-political-dark/80 hover:text-political-blue ${
                                      isActive ? "text-political-red" : ""
                                    }`
                                  }
                                  onClick={() => setIsOpen(false)}
                                >
                                  {child.label}
                                </NavLink>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <NavLink
                        to={item.href}
                        className={({ isActive }) =>
                          `block py-2 font-medium ${
                            isActive
                              ? "text-political-red"
                              : "text-political-dark"
                          }`
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </NavLink>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
