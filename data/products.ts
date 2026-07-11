export type Category = {
  slug: string;
  label: string;
  hasPhotos: boolean;
};

export const categories: Category[] = [
  { slug: "arreglos", label: "Arreglos", hasPhotos: true },
  { slug: "ramos", label: "Ramos", hasPhotos: true },
  { slug: "tulipanes", label: "Tulipanes", hasPhotos: true },
  { slug: "orquideas", label: "Orquídeas", hasPhotos: true },
  { slug: "eventos", label: "Eventos", hasPhotos: false },
];

export type Product = {
  id: string;
  name: string;
  category: string; // matches Category.slug
  image: string; // path under /public
  description?: string; // texto breve para la página individual del producto
};

// Generado a partir de las fotos ya nombradas: arreglo-01..52, ramo-01..15+
// Reemplaza "name" con el nombre real de cada arreglo/ramo cuando lo tengas;
// por ahora usa un nombre genérico + número para no bloquear el desarrollo.

const EXCLUDED_ARREGLOS = new Set(["01", "03", "06", "08", "11"]);

const DISPLAY_NAMES: Record<string, string> = {
  arreglo: "Arreglo",
  ramo: "Ramo",
  tulipanes: "Tulipán",
  orquideas: "Orquídea",
};

function buildRange(prefix: string, category: string, count: number): Product[] {
  return Array.from({ length: count }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return { n, valid: !(prefix === "arreglo" && EXCLUDED_ARREGLOS.has(n)) };
  })
    .filter((item) => item.valid)
    .map(({ n }) => ({
      id: `${prefix}-${n}`,
      name: `${DISPLAY_NAMES[prefix] ?? prefix} ${n}`,
      category,
      image: `/fotos/${prefix}/${prefix}-${n}.jpg`,
    }));
}

// Agrega aquí el nombre real de cada producto, usando su id (ej. "arreglo-02", "ramo-01").
// Los que no tengan entrada aquí siguen mostrando el nombre genérico ("Arreglo 02", etc.)
const productNames: Record<string, string> = {
  // "arreglo-02": "Arreglo Tropical Coral",
  // "ramo-01": "Ramo de Rosas Rojas",
};

// Agrega aquí la descripción de cada producto, usando su id (ej. "arreglo-02", "ramo-01").
// Los que no tengan entrada aquí simplemente no muestran descripción en su página.
const productDescriptions: Record<string, string> = {
  // "arreglo-02": "Arreglo tropical con girasoles, rosas y flores de temporada.",
  // "ramo-01": "Ramo de rosas rojas con follaje verde, ideal para aniversarios.",
};

export const products: Product[] = [
  ...buildRange("arreglo", "arreglos", 49),
  ...buildRange("ramo", "ramos", 15), // ajusta el 15 si al final tienes más fotos de ramo
  ...buildRange("tulipanes", "tulipanes", 7),
  ...buildRange("orquideas", "orquideas", 2),
].map((p) => ({
  ...p,
  name: productNames[p.id] ?? p.name,
  description: productDescriptions[p.id],
}));
