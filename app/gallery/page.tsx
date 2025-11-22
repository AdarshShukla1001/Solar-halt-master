"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Image filenames from public/gallery (spaces are kept as‑is; Next.js will URL‑encode them)
const images = [
    "WhatsApp Image 2025-11-21 at 11.07.16 PM.jpeg",
    "WhatsApp Image 2025-11-21 at 11.07.17 PM (1).jpeg",
    "WhatsApp Image 2025-11-21 at 11.07.17 PM.jpeg",
    "WhatsApp Image 2025-11-21 at 11.07.19 PM.jpeg",
    "WhatsApp Image 2025-11-21 at 11.08.16 PM.jpeg",
    "WhatsApp Image 2025-11-21 at 11.09.41 PM.jpeg",
];

export default function GalleryPage() {
    return (
        <main className="bg-white text-slate-900 antialiased">
            {/* Hero */}
            <section className="relative bg-gradient-to-b from-slate-50 to-white overflow-hidden py-24">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
                        Project Gallery
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
                        Browse our completed solar installations – from residential rooftops to large‑scale industrial plants.
                    </p>
                    <Link
                        href="/"
                        className="mt-10 inline-block rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors"
                    >
                        Back to Home
                    </Link>
                </div>
            </section>

            {/* Image grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {images.map((file, idx) => (
                            <div
                                key={idx}
                                className="relative h-64 overflow-hidden rounded-xl shadow-lg group"
                            >
                                <Image
                                    src={`/gallery/${file}`}
                                    alt={`Gallery image ${idx + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-slate-900">
                        Inspired by what you see?
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto">
                        Let us help you bring clean energy to your home or business.
                    </p>
                    <Link
                        href="/contact"
                        className="mt-8 inline-block rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors"
                    >
                        Get a Free Quote
                    </Link>
                </div>
            </section>
        </main>
    );
}
