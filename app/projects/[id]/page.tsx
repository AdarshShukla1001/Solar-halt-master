import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ProjectDetail({ params }: { params: { id: string } }) {
    const id = parseInt(params.id, 10);
    if (isNaN(id) || id < 1) {
        notFound();
        return null;
    }

    // Simple placeholder data – in a real app this would be fetched from a DB or a shared array.
    const title = `Project ${id}`;
    const description = `Details about project #${id} will be added soon.`;

    return (
        <main className="bg-white text-slate-900 antialiased min-h-screen p-8">
            <section className="container mx-auto">
                <h1 className="text-4xl font-bold mb-4">{title}</h1>
                <p className="text-lg mb-6">{description}</p>
                <Link
                    href="/projects"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
                >
                    Back to Projects <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
            </section>
        </main>
    );
}
