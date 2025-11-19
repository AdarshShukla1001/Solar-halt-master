"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("Submitting...");
    const form = e.currentTarget;

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFormStatus("Message sent successfully!");
        form.reset();
      } else {
        setFormStatus("Error sending message. Please try again.");
      }
    } catch (error) {
      setFormStatus("Error sending message. Please try again.");
    }
    setIsSubmitting(false);
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
                    content: "+1 (555) 123-4567",
                    link: "tel:+15551234567"
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    content: "info@santori-solar.com",
                    link: "mailto:info@santori-solar.com"
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
            <div className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-slate-200">
              <form onSubmit={handleSubmit} action="/api/contact" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="mt-1 block w-full rounded-md border-slate-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="mt-1 block w-full rounded-md border-slate-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="mt-1 block w-full rounded-md border-slate-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    className="mt-1 block w-full rounded-md border-slate-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                  {formStatus && (
                    <p className={`mt-2 text-sm ${formStatus.includes("Error") ? "text-red-600" : "text-green-600"}`}>
                      {formStatus}
                    </p>
                  )}
                </div>
              </form>
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