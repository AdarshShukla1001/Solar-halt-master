"use client";

import Link from "next/link";
import { Sun, Home, Building, Factory, Wrench, Users, ArrowRight, Quote } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="bg-white text-slate-900 antialiased">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/img/carousel-3.jpg" 
            alt="Solar installation" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-6 lg:px-8 py-24 sm:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
                Comprehensive Solar Solutions
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                From residential installations to large-scale industrial projects, we provide end-to-end solar energy solutions tailored to your needs.
              </p>
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
                <Link
                  href="/contact"
                  className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
                >
                  Get Started
                </Link>
                <Link href="#services" className="text-sm font-semibold leading-6 text-slate-700 group">
                  View Services <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/img/solar2.jpg" 
                  alt="Solar panel installation" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-indigo-600 rounded-full opacity-10 blur-3xl"></div>
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Services</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Comprehensive solar solutions for every need
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "Residential Solar",
                description: "Custom solar solutions for homes that reduce electricity bills and increase property value."
              },
              {
                icon: Building,
                title: "Commercial Solar",
                description: "Large-scale solar power systems for businesses and commercial establishments."
              },
              {
                icon: Factory,
                title: "Industrial Solar",
                description: "High-capacity industrial installations for manufacturing facilities."
              },
              {
                icon: Sun,
                title: "Solar Panel Installation",
                description: "Professional installation with expert consultation and setup."
              },
              {
                icon: Wrench,
                title: "Maintenance",
                description: "Regular maintenance and repair services to ensure optimal performance."
              },
              {
                icon: Users,
                title: "Consultation",
                description: "Expert advice on solar solutions, energy efficiency, and cost savings."
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-sm ring-1 ring-slate-200 hover:shadow-md transition-all duration-200"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-600/10 text-indigo-600 mb-6">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
                <div className="mt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-sm font-semibold text-indigo-600 group-hover:text-indigo-500"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Process</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Simple and efficient solar installation process
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Initial meeting to understand your needs and assess feasibility."
              },
              {
                step: "02",
                title: "Design",
                description: "Custom system design based on your requirements and site conditions."
              },
              {
                step: "03",
                title: "Installation",
                description: "Professional installation by our certified technicians."
              },
              {
                step: "04",
                title: "Support",
                description: "Ongoing maintenance and support for optimal performance."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white text-2xl font-bold mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Contact us today for a free consultation and quote for your solar energy project.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
              >
                Contact Us
              </Link>
              <Link href="#services" className="text-sm font-semibold leading-6 text-slate-700">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}