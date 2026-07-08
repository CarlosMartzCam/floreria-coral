import Link from "next/link";
import { categories } from "@/data/products";

export default function CategoryTags({ active }: { active?: string }) {
  return (
    <div className="flex gap-6 flex-wrap">
      {categories.map((cat) => {
        const isActive = cat.slug === active;
        return (
          <Link
            key={cat.slug}
            href={`/catalogo/${cat.slug}`}
            className={`relative rounded border font-body font-medium text-sm px-5 py-4 pt-4
              before:content-[''] before:absolute before:-top-[9px] before:left-1/2 before:-translate-x-1/2
              before:w-2 before:h-2 before:rounded-full before:border before:border-tinta
              after:content-[''] after:absolute after:-top-[22px] after:left-1/2
              after:w-px after:h-3.5 after:bg-cordel
              transition-transform hover:-translate-y-0.5
              ${isActive
                ? "bg-coral text-papel border-coral-dark before:bg-coral"
                : "bg-papel text-tinta border-tinta before:bg-papel"}`}
          >
            {cat.label}
          </Link>
        );
      })}
    </div>
  );
}
