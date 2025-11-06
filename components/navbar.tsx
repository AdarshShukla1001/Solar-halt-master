"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Sun, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg" 
          : "bg-white shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 lg:w-14 lg:h-14 overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-shadow">
              <Image
                src="/img/logo_new.png"
                alt="Santori Solar"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="hidden sm:block">
              <h2 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                Santori Solar
              </h2>
              <p className="text-xs text-slate-500 -mt-1">Clean Energy Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: "Projects", path: "/projects" },
              { name: "Calculator", path: "/calculator" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                  isActive(item.path)
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-slate-700 hover:text-indigo-600 hover:bg-slate-50"
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-indigo-600 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Call Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="tel:+919818716079"
              className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-5 py-2.5 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>+91 98187 16079</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 py-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col space-y-2 pt-2 border-t">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Projects", path: "/projects" },
              { name: "Calculator", path: "/calculator" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  isActive(item.path)
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="tel:+919818716079"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold mt-2"
              onClick={() => setIsOpen(false)}
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
