export type Category = {
  slug: string;
  label: string;
  hasPhotos: boolean;
};

export const categories: Category[] = [
  { slug: "arreglos", label: "Arreglos", hasPhotos: true },
  { slug: "ramos", label: "Ramos", hasPhotos: true },
  { slug: "eventos", label: "Eventos", hasPhotos: false },
  { slug: "orquideas", label: "Orquídeas", hasPhotos: false },
];

export type Product = {
  id: string;
  name: string;
  category: string; // matches Category.slug
  image: string; // path under /public
};

// Generado a partir de las fotos ya nombradas: arreglo-01..52, ramo-01..15+
// Reemplaza "name" con el nombre real de cada arreglo/ramo cuando lo tengas;
// por ahora usa un nombre genérico + número para no bloquear el desarrollo.

const EXCLUDED_ARREGLOS = new Set(["01", "03", "06", "08", "11"]);

function buildRange(prefix: string, category: string, count: number): Product[] {
  return Array.from({ length: count }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return { n, valid: !(prefix === "arreglo" && EXCLUDED_ARREGLOS.has(n)) };
  })
    .filter((item) => item.valid)
    .map(({ n }) => ({
      id: `${prefix}-${n}`,
      name: `${prefix === "arreglo" ? "Arreglo" : "Ramo"} ${n}`,
      category,
      image: `/fotos/${prefix}/${prefix}-${n}.jpg`,
    }));
}

export const products: Product[] = [
  ...buildRange("arreglo", "arreglos", 52),
  ...buildRange("ramo", "ramos", 15), // ajusta el 15 si al final tienes más fotos de ramo
];
