import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        quote: "The best investment we made for our factory! The industrial solar system has significantly reduced our operational costs. The quality and service from the entire team were outstanding from start to finish.",
        name: "Amit Patel",
        role: "Factory Owner",
    },
    {
        quote: "Our home energy bills have dropped dramatically. The installation was seamless and the team was professional.",
        name: "Riya Sharma",
        role: "Homeowner",
    },
    {
        quote: "Switching to solar with Santori was the right choice for our business. Reliable and efficient.",
        name: "Vikram Singh",
        role: "Business Owner",
    },
];

export default function TestimonialsSlider() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const { quote, name, role, img } = testimonials[index];

    const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    const next = () => setIndex((prev) => (prev + 1) % testimonials.length);

    return (
        <div className="relative max-w-4xl mx-auto text-center px-12">
            <Quote className="h-12 w-12 mx-auto text-slate-500" />
            <blockquote className="mt-8 text-xl font-medium text-white sm:text-2xl leading-relaxed">
                <p>&ldquo;{quote}&rdquo;</p>
            </blockquote>
            <figcaption className="mt-8 flex items-center justify-center gap-x-3">
                {/* <img className="h-12 w-12 rounded-full" src={img} alt={name} /> */}
                <div className="text-sm">
                    <div className="font-semibold text-white">{name}</div>
                    <div className="text-slate-400">{role}</div>
                </div>
            </figcaption>
            {/* navigation arrows */}
            <button
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-800/50 text-slate-200 hover:bg-indigo-600 hover:text-white transition-all backdrop-blur-sm"
                aria-label="Previous testimonial"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-800/50 text-slate-200 hover:bg-indigo-600 hover:text-white transition-all backdrop-blur-sm"
                aria-label="Next testimonial"
            >
                <ChevronRight className="w-6 h-6" />
            </button>
        </div>
    );
}
