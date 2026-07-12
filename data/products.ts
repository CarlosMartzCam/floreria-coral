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
  "arreglo-02": "Canasta Primavera Silvestre",
  "arreglo-04": "Torre de Girasoles",
  "arreglo-05": "Torre de Rosas Blancas",
  "arreglo-09": "Jardín Encantado",
  "arreglo-10": "Espiral de Luz",
  "arreglo-11": "",
  "arreglo-12": "",
  "arreglo-13": "",
  "arreglo-14": "",
  "arreglo-15": "",
  "arreglo-16": "",
  "arreglo-17": "",
  "arreglo-18": "",
  "arreglo-19": "",
  "arreglo-20": "",
  "arreglo-21": "",
  "arreglo-22": "",
  "arreglo-23": "",
  "arreglo-24": "",
  "arreglo-25": "",
  "arreglo-26": "",
  "arreglo-27": "",
  "arreglo-28": "",
  "arreglo-29": "",
  "arreglo-30": "",
  "arreglo-31": "",
  "arreglo-32": "",
  "arreglo-33": "",
  "arreglo-34": "",
  "arreglo-35": "",
  "arreglo-36": "",
  "arreglo-37": "",
  "arreglo-38": "",
  "arreglo-39": "",
  "arreglo-40": "",
  "arreglo-41": "",
  "arreglo-42": "",
  "arreglo-43": "",
  "arreglo-44": "",
  "arreglo-45": "",
  "arreglo-46": "",
  "arreglo-47": "",
  "arreglo-48": "",
  "arreglo-49": "",

  // "arreglo-02": "Arreglo Tropical Coral",
  // "ramo-01": "Ramo de Rosas Rojas",
};

// Agrega aquí la descripción de cada producto, usando su id (ej. "arreglo-02", "ramo-01").
// Los que no tengan entrada aquí simplemente no muestran descripción en su página.
const productDescriptions: Record<string, string> = {
  "arreglo-02": "Un diseño clásico que celebra los colores de la naturaleza. Este arreglo combina la elegancia de una rosa blanca central con la energía y calidez de crisantemos y margaritas en tonos amarillos y magenta, complementados con delicado follaje de nube (gypsophila). Todo presentado en una hermosa base de mimbre tradicional, ideal para celebrar cumpleaños, enviar agradecimientos o llenar de vida cualquier espacio.",
  "arreglo-04": "Un diseño vertical e imponente que irradia luz propia. Este arreglo destaca por sus vibrantes girasoles dispuestos en niveles, acompañados por sutiles destellos de flores aster moradas y un denso follaje verde con toques de solidago amarillo. Presentado en una elegante base cilíndrica oscura, es el obsequio perfecto para transmitir energía positiva, éxito, admiración o para celebrar un logro especial.",
  "arreglo-05": "Un diseño vertical de gran elegancia y pureza. Este arreglo destaca por sus impecables rosas blancas dispuestas en niveles, enmarcadas por un manto de pequeñas flores aster en tonos lilas y un denso follaje verde brillante. Presentado en una base cilíndrica oscura, es el detalle ideal para transmitir paz, admiración, felicitar por un aniversario o enviar un mensaje lleno de distinción.",
  "arreglo-07": "Expresa tus sentimientos más profundos con este espectacular arreglo de rosas rojas premium, cuidadosamente seleccionadas por su frescura y color vibrante. Presentadas en una clásica canasta de mimbre hecha a mano, las rosas se elevan sobre una densa cama de follaje verde y sutiles toques de flores de acompañamiento amarillas, creando un contraste natural único. Coronada con un elegante y vistoso listón rojo brillante, esta pieza es el regalo perfecto para aniversarios, cumpleaños o simplemente para recordar a alguien especial cuánto le importas.",
  "arreglo-09": "Captura la frescura de la naturaleza con este diseño floral de altura y gran elegancia. Este arreglo combina la delicadeza de las gerberas y rosas en tonos rosa encendido y pastel, acompañadas por la textura única de los perritos (antirrinos) que aportan una hermosa estructura vertical. Complementado con follaje seleccionado y flores silvestres acentuadas, viene presentado en una distinguida base artesanal. Es una opción ideal para iluminar cualquier espacio, celebrar un cumpleaños, o enviar un mensaje lleno de alegría y sofisticación.",
  "arreglo-10": "Un diseño de alta floristería que destaca por su original estructura arquitectónica en forma de media luna. Este imponente arreglo guía la mirada a través de un vibrante sendero de girasoles radiantes y rosas rojas premium, coronado en lo alto por la elegancia impecable de los lirios (liliums) blancos. En el corazón del diseño, un delicado bouquet envuelto añade un toque extra de textura y color contrastante. Es la pieza perfecta para impresionar en inauguraciones, eventos especiales, graduaciones o para un regalo espectacular que se convertirá en el centro de atención de cualquier espacio.",
  "arreglo-11": "",
  "arreglo-12": "",
  "arreglo-13": "",
  "arreglo-14": "",
  "arreglo-15": "",
  "arreglo-16": "",
  "arreglo-17": "",
  "arreglo-18": "",
  "arreglo-19": "",
  "arreglo-20": "",
  "arreglo-21": "",
  "arreglo-22": "",
  "arreglo-23": "",
  "arreglo-24": "",
  "arreglo-25": "",
  "arreglo-26": "",
  "arreglo-27": "",
  "arreglo-28": "",
  "arreglo-29": "",
  "arreglo-30": "",
  "arreglo-31": "",
  "arreglo-32": "",
  "arreglo-33": "",
  "arreglo-34": "",
  "arreglo-35": "",
  "arreglo-36": "",
  "arreglo-37": "",
  "arreglo-38": "",
  "arreglo-39": "",
  "arreglo-40": "",
  "arreglo-41": "",
  "arreglo-42": "",
  "arreglo-43": "",
  "arreglo-44": "",
  "arreglo-45": "",
  "arreglo-46": "",
  "arreglo-47": "",
  "arreglo-48": "",
  "arreglo-49": "",


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
