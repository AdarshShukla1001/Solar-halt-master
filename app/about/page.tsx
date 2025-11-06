"use client";

import Link from "next/link";
import { Sun, Zap, Award, Users, ArrowRight, Building, Shield, GitBranch } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900 antialiased">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white overflow-hidden">
          <div className="absolute inset-0 z-0">
          <img 
            src="/img/about.jpg" 
            alt="Solar company team" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-6 lg:px-8 py-24 sm:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
                Powering a Sustainable Future
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                At Santori Solar Solutions, we're committed to making clean, renewable energy accessible to everyone. With years of experience and a dedicated team of experts, we're leading the charge towards a greener tomorrow.
              </p>
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
                <Link
                  href="/contact"
                  className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
                >
                  Contact Us
                </Link>
                <Link href="#team" className="text-sm font-semibold leading-6 text-slate-700 group">
                  Meet Our Team <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/img/feature.jpg" 
                  alt="Our team at work" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-indigo-600 rounded-full opacity-10 blur-3xl"></div>
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Core Values</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Built on strong principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Quality Assurance",
                description: "We never compromise on the quality of our products and installations."
              },
              {
                icon: Users,
                title: "Customer First",
                description: "Your satisfaction is our top priority, from consultation to after-service."
              },
              {
                icon: GitBranch,
                title: "Innovation",
                description: "Constantly evolving and adopting the latest solar technologies."
              }
            ].map((value, index) => (
              <div
                key={index}
                className="relative group bg-white p-8 rounded-2xl shadow-sm ring-1 ring-slate-200 hover:shadow-md transition-all duration-200"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-600/10 text-indigo-600 mb-6">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Meet Our Team</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Experts dedicated to bringing solar solutions to life
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "John Smith",
                role: "CEO & Founder",
                image: "/img/team-1.jpg"
              },
              {
                name: "Sarah Johnson",
                role: "Technical Director",
                image: "/img/team-2.jpg"
              },
              {
                name: "Michael Brown",
                role: "Installation Manager",
                image: "/img/team-3.jpg"
              }
            ].map((member, index) => (
              <div key={index} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-slate-900">{member.name}</h3>
                  <p className="text-sm text-slate-600">{member.role}</p>
                </div>
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
              Ready to Switch to Solar?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Join thousands of satisfied customers who have made the switch to clean, renewable energy.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}