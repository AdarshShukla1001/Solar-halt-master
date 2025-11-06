"use client";

import Link from "next/link";
import { 
  ArrowRight, Check, ChevronDown, Award, Users, Wrench, Quote, 
  Sun, Zap, Home, Shield, Building, GitBranch
} from "lucide-react";
import { useState } from "react";

// A Complete Redesign for a Modern, Intuitive, and Clean User Interface
export default function Page() {
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
        setFormStatus("Success! We will be in touch shortly.");
        form.reset();
      } else {
        setFormStatus("Error. Please try again.");
      }
    } catch (error) {
      setFormStatus("Error. Please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <main className="bg-white text-slate-900 antialiased">
      
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/img/carousel-1.jpg" 
            alt="Solar panels on roof" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-6 lg:px-8 py-24 sm:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
                Your Future, Powered by the Sun
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                We design and install high-efficiency solar energy systems for homes and businesses, delivering energy independence and significant long-term savings.
              </p>
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
                <Link
                  href="#quote"
                  className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
                >
                  Get a Free Quote
                </Link>
                <Link href="#process" className="text-sm font-semibold leading-6 text-slate-700 group">
                  How It Works <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/img/solar1.png" 
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

      {/* 2. Key Metrics Section */}
      <section className="container mx-auto px-6 lg:px-8 py-16">
        <div className="border-t border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center pt-16">
            {[
              { number: "208+", label: "Happy Customers" },
              { number: "234+", label: "Projects Completed" },
              { number: "31", label: "Expert Technicians" },
              { number: "99%", label: "Customer Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl sm:text-4xl font-bold tracking-tight text-indigo-600">{stat.number}</p>
                <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Process Section */}
      <section id="process" className="py-20 sm:py-28 bg-white scroll-mt-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                From Consultation to Clean Energy in 4 Simple Steps
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                We've streamlined the entire process to make your transition to solar power seamless and hassle-free.
              </p>
              <div className="mt-12 space-y-8">
                {[
                  { number: '01', name: 'Consultation', description: 'We start with a free consultation to assess your energy needs and site suitability.' },
                  { number: '02', name: 'Custom Design', description: 'Our experts design a bespoke solar system optimized for maximum efficiency.' },
                  { number: '03', name: 'Installation', description: 'Certified technicians handle the complete installation with precision and care.' },
                  { number: '04', name: 'Power On', description: 'Enjoy clean, renewable energy and watch your savings grow from day one.' },
                ].map((step) => (
                  <div key={step.name} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
                        {step.number}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{step.name}</h3>
                      <p className="mt-2 text-slate-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/img/feature.jpg" 
                  alt="Solar installation process" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-indigo-600 rounded-full opacity-10 blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 4. Core Solutions Section */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Comprehensive Solar Solutions</h2>
            <p className="mt-4 text-lg text-slate-600">
              We offer a complete range of services to meet your specific renewable energy goals.
            </p>
          </div>
          
          {/* Feature Image Grid */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="relative rounded-xl overflow-hidden h-64 group">
              <img src="/img/carousel-2.jpg" alt="Residential Solar" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-white font-bold text-xl">Residential</h3>
                  <p className="text-slate-300 text-sm mt-1">Home solar systems</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden h-64 group">
              <img src="/img/service-1.jpg" alt="Commercial Solar" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-white font-bold text-xl">Commercial</h3>
                  <p className="text-slate-300 text-sm mt-1">Business solutions</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden h-64 group">
              <img src="/img/about.jpg" alt="Industrial Solar" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-white font-bold text-xl">Industrial</h3>
                  <p className="text-slate-300 text-sm mt-1">Large-scale installations</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Home, title: "On-Grid & Residential", description: "Integrate with the grid to lower bills and earn credits." },
              { icon: Building, title: "Off-Grid & Commercial", description: "Achieve energy independence for your business or remote property." },
              { icon: GitBranch, title: "Hybrid Solutions", description: "Combine grid-tied benefits with battery backup for uninterrupted power." },
              { icon: Wrench, title: "System Maintenance", description: "Ensure peak performance with our professional maintenance services." },
              { icon: Zap, title: "Energy Audits", description: "Identify opportunities to optimize your energy consumption and savings." },
              { icon: Award, title: "#1 In India", description: "Join hundreds of satisfied clients across the nation." },
            ].map((service) => (
              <div key={service.title} className="p-8 bg-white rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-slate-100">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="mt-6 text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Testimonial Section */}
      <section className="bg-slate-900 py-20 sm:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <figure className="max-w-4xl mx-auto text-center">
            <Quote className="h-12 w-12 mx-auto text-slate-500" />
            <blockquote className="mt-8 text-xl font-medium text-white sm:text-2xl leading-relaxed">
              <p>&ldquo;The best investment we made for our factory! The industrial solar system has significantly reduced our operational costs. The quality and service from the entire team were outstanding from start to finish.&rdquo;</p>
            </blockquote>
            <figcaption className="mt-8 flex items-center justify-center gap-x-3">
              <img className="h-12 w-12 rounded-full" src="/img/testimonial-3.jpg" alt="Amit Patel" />
              <div className="text-sm">
                <div className="font-semibold text-white">Amit Patel</div>
                <div className="text-slate-400">Factory Owner</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
      
      {/* 6. FAQ Section */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-slate-600">
              Everything you need to know before making the switch to solar.
            </p>
          </div>
          <div className="mt-16 max-w-3xl mx-auto divide-y divide-slate-200">
            {[
              { q: 'Why should I choose your company?', a: 'We guarantee Quality Assurance with premium solar panels, provide Expert Consultation, offer Long-Term Support, and ensure Professional Installation by certified technicians.' },
              { q: 'How much can I save on my electricity bills?', a: 'Savings vary, but many of our residential clients see reductions of up to 70% or more. We provide a detailed savings estimate during your free consultation.' },
              { q: 'What kind of warranties do you offer?', a: 'We use Tier-1 solar panels and inverters that come with industry-leading performance and hardware warranties, typically 25 years for panels.' },
              { q: 'How long does the installation process take?', a: 'A typical residential installation is completed within 1-3 days. Commercial projects may vary depending on the system size and complexity.' },
            ].map((faq) => (
              <details key={faq.q} className="group py-6" open={faq.q === 'Why should I choose your company?'}>
                <summary className="flex cursor-pointer items-center justify-between text-lg font-medium list-none">
                  {faq.q}
                  <ChevronDown className="h-6 w-6 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      
      {/* 7. Team Section */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet the Experts</h2>
            <p className="mt-4 text-lg text-slate-600">
              Our experienced leadership team is dedicated to a sustainable future.
            </p>
          </div>
          <div className="mt-16 flex flex-col items-center gap-12 md:flex-row md:justify-center md:gap-20">
            {[
              { name: "Deepak Pandey", role: "CEO & Founder", image: "/team/ceo_Deepak_pandey.jpg" },
              { name: "Rudra Sahani", role: "Sr. Solar Consultant", image: "/team/rudra_sahani_sr_solar_consultant.jpg" },
            ].map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center max-w-xs">
                <div className="relative w-44 h-44 md:w-56 md:h-56 mb-6">
                  <img
                    className="w-full h-full rounded-full object-cover ring-4 ring-white shadow-xl"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{member.name}</h3>
                <p className="text-indigo-600 mt-1 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA & Quote Form Section */}
      <section id="quote" className="py-20 sm:py-28 bg-white scroll-mt-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-slate-900 px-6 py-20 sm:rounded-3xl sm:px-16">
             <div className="absolute top-0 left-0 -z-10 h-full w-full">
              <img src="/img/quote.jpg" alt="Solar panel close up" className="object-cover h-full w-full opacity-20"/>
            </div>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to Make the Switch?</h2>
              <p className="mt-4 text-lg text-slate-300">
                Get a free, personalized quote today and find out how much you can save with solar.
              </p>
              <form onSubmit={handleSubmit} className="mt-10 mx-auto max-w-md space-y-4">
                <input type="text" name="name" placeholder="Your Name" required className="w-full rounded-md border-0 bg-white/5 px-4 py-3 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500" />
                <input type="email" name="email" placeholder="Your Email" required className="w-full rounded-md border-0 bg-white/5 px-4 py-3 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500" />
                <button type="submit" disabled={isSubmitting} className="w-full rounded-md bg-indigo-600 px-6 py-3 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-slate-500 transition-colors">
                  {isSubmitting ? "Sending..." : "Request My Free Quote"}
                </button>
                {formStatus && <p className="text-sm mt-3 text-slate-300">{formStatus}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}