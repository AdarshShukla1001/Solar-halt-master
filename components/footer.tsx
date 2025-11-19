import Link from "next/link";
import { MapPin, Phone, Mail, ChevronRight, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="container mx-auto px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
              <p className="text-slate-400">Subscribe to our newsletter for solar energy tips and updates</p>
            </div>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-md bg-slate-800 border-transparent px-4 py-2 text-slate-300 placeholder:text-slate-500 focus:border-indigo-500 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Santori Solar Solutions</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Leading provider of solar energy solutions, committed to powering a sustainable future across India.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-1" />
                <div className="flex flex-col gap-2">
                  <div>
                    <span className="text-xs font-semibold text-white uppercase tracking-wider">HQ Address</span>
                    <p className="text-sm text-slate-400 mt-1">Mariahu Road, near City Station, Jaunpur Uttar Pradesh 222001</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white uppercase tracking-wider">Regional Office</span>
                    <p className="text-sm text-slate-400 mt-1">1st floor Trilochan Vatika Building, Rananagar Colony, Lahartara Boulia Varanasi UP 221002</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                <a href="tel:+919818716079" className="text-sm hover:text-white transition-colors">
                  +91 98187 16079
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                <a href="mailto:info@santorisolarsolutions.com" className="text-sm hover:text-white transition-colors">
                  info@santorisolarsolutions.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Projects", href: "/projects" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors inline-flex items-center"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Solar Panel Installation",
                "Residential Solar",
                "Commercial Solar",
                "Industrial Solar",
                "Solar Maintenance",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-slate-400 hover:text-white transition-colors inline-flex items-center"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Service Areas</h3>
            <ul className="space-y-3">
              {[
                "Uttar Pradesh",
                "Madhya Pradesh",
                "Uttarakhand",
                "Bihar",
                "Maharashtra",
              ].map((area) => (
                <li key={area}>
                  <span className="text-sm text-slate-400 inline-flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2 text-indigo-500" />
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} <span className="text-indigo-500">Santori Solar Solutions</span>. All Rights Reserved.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
