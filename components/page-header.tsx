import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  breadcrumbs?: { name: string; href?: string }[];
}

export default function PageHeader({ title, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="relative bg-gradient-to-r from-[#0771cd] to-[#055a9e] py-20 mb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slideInDown">
          {title}
        </h1>
        {breadcrumbs && (
          <nav className="flex items-center gap-2 text-white/90 animate-slideInDown" aria-label="breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.name}
                  </Link>
                ) : (
                  <span>{crumb.name}</span>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
}
