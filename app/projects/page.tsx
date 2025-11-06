"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("*");

  const projects = [
    { 
      title: "Residential Solar Installation",
      category: "residential",
      image: "/img/img-600x400-1.jpg",
      description: "A 10kW residential solar installation with battery backup system."
    },
    { 
      title: "Commercial Solar System",
      category: "commercial",
      image: "/img/img-600x400-2.jpg",
      description: "50kW commercial installation for a retail complex."
    },
    { 
      title: "Industrial Solar Plant",
      category: "industrial",
      image: "/img/img-600x400-3.jpg",
      description: "1MW industrial solar plant for manufacturing facility."
    },
    { 
      title: "Rooftop Solar Panel",
      category: "residential",
      image: "/img/img-600x400-4.jpg",
      description: "8kW residential rooftop installation with smart monitoring."
    },
    { 
      title: "Business Solar Solution",
      category: "commercial",
      image: "/img/img-600x400-5.jpg",
      description: "30kW solar system for office building with carport integration."
    },
    { 
      title: "Factory Solar Installation",
      category: "industrial",
      image: "/img/img-600x400-6.jpg",
      description: "500kW solar installation for large industrial complex."
    }
  ];

  const filteredProjects = activeFilter === "*" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <main className="bg-white text-slate-900 antialiased">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/img/gallery-3.jpg" 
            alt="Solar installation project" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-6 lg:px-8 py-24 sm:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
                Our Solar Projects
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Explore our portfolio of successful solar installations across residential, commercial, and industrial sectors.
              </p>
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
                <Link
                  href="/contact"
                  className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
                >
                  Start Your Project
                </Link>
                <Link href="#gallery" className="text-sm font-semibold leading-6 text-slate-700 group">
                  View Gallery <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/img/gallery-5.jpg" 
                  alt="Featured solar project" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-indigo-600 rounded-full opacity-10 blur-3xl"></div>
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Project Gallery</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Browse through our completed solar installations
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { label: "All Projects", value: "*" },
              { label: "Residential", value: "residential" },
              { label: "Commercial", value: "commercial" },
              { label: "Industrial", value: "industrial" }
            ].map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
                  activeFilter === filter.value
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-200 hover:shadow-md transition-all duration-200"
              >
                <div className="aspect-h-9 aspect-w-16 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <Link
                    href={`/projects/${index + 1}`}
                    className="inline-flex items-center text-sm font-semibold text-indigo-600 group-hover:text-indigo-500"
                  >
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "100+", label: "Projects Completed" },
              { number: "50MW+", label: "Total Capacity" },
              { number: "95%", label: "Client Satisfaction" },
              { number: "30%", label: "Average Energy Savings" }
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl sm:text-4xl font-bold tracking-tight text-indigo-600">{stat.number}</p>
                <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
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
              Ready to Start Your Solar Project?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Join our growing list of satisfied customers and make the switch to clean, renewable energy.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}