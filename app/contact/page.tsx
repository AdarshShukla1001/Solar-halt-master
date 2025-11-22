"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <main className="bg-white text-slate-900 antialiased">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/img/carousel-1.jpg"
            alt="Customer service"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-6 lg:px-8 py-24 sm:py-32 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
              Let's Talk Solar
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Have questions about solar energy? Want to get started with your installation? We're here to help every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-12">
                Get In Touch
              </h2>
              <div className="space-y-8">
                {[
                  {
                    icon: MapPin,
                    title: "HQ Address",
                    content: "Mariahu Road, near City Station, Jaunpur Uttar Pradesh 222001",
                    link: "https://maps.google.com/?q=Mariahu+Road,+near+City+Station,+Jaunpur+Uttar+Pradesh+222001"
                  },
                  {
                    icon: MapPin,
                    title: "Regional Office",
                    content: "1st floor Trilochan Vatika Building, Rananagar Colony, Lahartara Boulia Varanasi UP 221002",
                    link: "https://maps.google.com/?q=1st+floor+Trilochan+Vatika+Building,+Rananagar+Colony,+Lahartara+Boulia+Varanasi+UP+221002"
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    content: "+91 98187 16079",
                    link: "tel:+919818716079"
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    content: "support@santorisolarsolutions.com",
                    link: "mailto:support@santorisolarsolutions.com"
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    content: "Mon-Fri: 9:00 AM - 6:00 PM",
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-600/10 text-indigo-600">
                        <item.icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                      {item.link ? (
                        <Link
                          href={item.link}
                          className="text-slate-600 hover:text-indigo-600 transition-colors"
                        >
                          {item.content}
                        </Link>
                      ) : (
                        <p className="text-slate-600">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg ring-1 ring-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
              
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h4>
                  <p className="text-slate-600 text-center mb-6">
                    We appreciate your interest in Santori Solar Solutions. Our team will get back to you shortly with more information.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-indigo-600 hover:text-indigo-700 font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} action="https://api.web3forms.com/submit" method="POST" className="space-y-5">
                  <input type="hidden" name="access_key" value="f7fca587-9f13-4790-836e-6baeefa917a6" />
                  <input type="hidden" name="from_name" value="Santori Solar Contact" />
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                      placeholder="+91 (10 digits)"
                    />
                  </div>
                  <div>
                    <label htmlFor="pincode" className="block text-sm font-semibold text-slate-700 mb-2">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      id="pincode"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                      placeholder="e.g., 222001"
                    />
                  </div>
                  <div>
                    <label htmlFor="monthly_bill" className="block text-sm font-semibold text-slate-700 mb-2">
                      Monthly Bill *
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-2.5 text-slate-700 font-semibold">₹</span>
                      <input
                        type="text"
                        name="monthly_bill"
                        id="monthly_bill"
                        required
                        className="w-full pl-8 pr-4 py-2.5 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                        placeholder="e.g., 2500"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all resize-none"
                      placeholder="Tell us about your solar requirements..."
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-700 active:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Find quick answers to common questions about our solar solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "How much does a solar installation cost?",
                a: "The cost varies depending on system size, location, and energy needs. We provide free consultations to give you an accurate quote."
              },
              {
                q: "How long does installation take?",
                a: "A typical residential installation takes 1-3 days, while commercial projects may take longer depending on size and complexity."
              },
              {
                q: "What maintenance is required?",
                a: "Solar panels need minimal maintenance. We recommend annual inspections and occasional cleaning to ensure optimal performance."
              },
              {
                q: "What warranties do you offer?",
                a: "We provide comprehensive warranties covering equipment, installation, and performance, typically ranging from 10-25 years."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}