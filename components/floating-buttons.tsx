"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919818716079"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-50 bg-[#25d366] hover:bg-[#1ebe57] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Call Button */}
      <a
        href="tel:+919818716079"
        className="fixed bottom-6 right-6 z-50 bg-[#0771cd] hover:bg-[#055a9e] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Call"
      >
        <Phone className="w-6 h-6" />
      </a>
    </>
  );
}
