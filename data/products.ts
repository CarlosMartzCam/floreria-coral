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
  "arreglo-07": "Pasíon de rosas",
  "arreglo-09": "Jardín Encantado",
  "arreglo-10": "Espiral de Luz",
  "arreglo-12": "Canasta Campestre",
  "arreglo-13": "Amanecer Radiante",
  "arreglo-14": "Sinfonía de Primavera",
  "arreglo-15": "Canasta de Ensueño",
  "arreglo-16": "Canasta Destellos de Luna",
  "arreglo-17": "Sol de Amor",
  "arreglo-18": "Campos de Oro",
  "arreglo-19": "Pureza Celestial",
  "arreglo-20": "Encanto de Acuarela",
  "arreglo-21": "Encanto rústico",
  "arreglo-22": "Elegancia de Zafiro",
  "arreglo-23": "Canasta Atardecer",
  "arreglo-24": "Luz de Verano",
  "arreglo-25": "Elegancia Pastel",
  "arreglo-26": "Fantasía de Lavanda",
  "arreglo-27": "Esfera de Alegría",
  "arreglo-28": "Elegancia Silvestre",
  "arreglo-29": "Nube de Ensueño",
  "arreglo-290": "",
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
  "arreglo-12": "Llena el día de alguien con alegría pura a través de esta encantadora combinación de colores y texturas. Este diseño reúne la elegancia de una rosa central en tono salmón/coral, rodeada de una vibrante mezcla de crisantemos, margaritas y flores silvestres en tonos morados, amarillos y blancos que evocan la belleza de un campo florido. Presentado en una delicada canasta de mimbre con asa, es un detalle sumamente tierno, versátil y colorido. Es la opción ideal para desear un feliz cumpleaños, enviar una pronta recuperación o simplemente para sorprender y arrancar una sonrisa espontánea.",
  "arreglo-13": "Un estallido de energía positiva y calidez. Este hermoso diseño destaca por sus imponentes rosas amarillas—símbolo de alegría, éxito y amistad sincera—perfectamente combinadas con una alegre variedad de crisantemos y margaritas en tonos blanco, magenta y verde lima que le otorgan un aspecto fresco y festivo. Cuidadosamente montado en una clásica canasta artesanal de mimbre, es el obsequio ideal para felicitar a alguien por un logro, celebrar un cumpleaños, o simplemente llenar de luz y buena vibra el espacio de un ser querido.",
  "arreglo-14": "Una verdadera obra de arte floral de gran formato, ideal para quienes buscan impresionar con abundancia y elegancia. Este majestuoso arreglo combina la sofisticada presencia de lirios (liliums) en tonos rosa pastel y encendido con una densa y espectacular variedad de gerberas, crisantemos y margaritas en gamas que van desde el blanco puro hasta profundos tonos magenta y violeta. Montado con gran maestría sobre una sutil canasta artesanal que sirve como base para este despliegue de color, su diseño semicircular y tupido lo convierte en la pieza central perfecta para eventos importantes, aniversarios memorables, felicitaciones corporativas o un gran gesto para conmover a alguien especial.",
  "arreglo-15": "Un diseño tierno, delicado y repleto de encanto. Este arreglo es una sutil caricia visual que combina la elegancia de rosas en un suave tono salmón con una preciosa variedad de crisantemos, margaritas y dalias en una romántica paleta de rosas, magentas, lilas y blancos. Presentado en una bonita canasta de mimbre tejida con asa tradicional, su forma redondeada y tupida evoca la frescura de un jardín secreto. Es el detalle perfecto para expresar cariño sincero, celebrar el nacimiento de un bebé, felicitar a mamá o endulzar el día de esa persona especial con un toque de sutil sofisticación.",
  "arreglo-16": "Una combinación festiva y llena de dinamismo que destaca por sus contrastes alegres. Este diseño reúne la elegancia clásica de rosas en tono betabel y rosa pálido, rodeadas por una generosa y fresca variedad de crisantemos blancos con centros verde lima y pequeñas dalias moradas que simulan destellos naturales en todo el arreglo. Acomodado con delicadeza en una tradicional canasta de mimbre tejida con asa, su forma compacta y repleta de detalles lo convierte en un obsequio sumamente alegre. Es la opción ideal para celebrar un cumpleaños, enviar un cálido saludo de agradecimiento o sorprender con un detalle espontáneo que llene de color cualquier rincón.",
  "arreglo-17": "Un diseño que cautiva desde el primer vistazo por su impecable simetría y el vibrante contraste de sus componentes. En el corazón del arreglo destaca un imponente girasol, rodeado por una corona perfecta de rosas rojas premium que simbolizan la pasión y la admiración profunda. El conjunto descansa sobre una base texturizada de follaje verde brillante, delicadamente enmarcada con sutiles toques de gipsofila (nube blanca) que aportan frescura y ligereza. Presentado en una clásica canasta artesanal de mimbre con asa, es el detalle ideal para aniversarios, conquistas románticas o para sorprender a esa persona que ilumina tus días.",
  "arreglo-18": "Un diseño que desborda vitalidad, energía positiva y calidez natural. Este hermoso arreglo destaca por la imponente presencia de girasoles abiertos y radiantes, combinados en perfecta armonía con rosas rojas premium y alegres crisantemos en tonos magenta con contornos amarillos que añaden textura y dinamismo visual. Enmarcado en un denso follaje verde con sutiles acentos silvestres y presentado en una hermosa canasta artesanal de mimbre con asa, es el obsequio ideal para transmitir buenos deseos, celebrar un cumpleaños lleno de optimismo, felicitar por un logro o simplemente contagiar alegría en un día cualquiera.",
  "arreglo-19": "Un diseño que irradia paz, elegancia impecable y distinción absoluta. Este majestuoso arreglo monocromático reúne una refinada selección de flores blancas de calidad premium, combinando la textura clásica de los claveles y crisantemos con la sofisticación de delicadas rosas y estilizados botones que añaden altura y estructura al conjunto. El diseño se complementa de forma sutil con follaje texturizado en tonos verde claro y hojas de eucalipto, todo presentado con delicadeza en una tradicional canasta artesanal de mimbre. Por su paleta de color limpia y armoniosa, es la elección ideal para celebraciones solemnes como bautizos y primeras comuniones, para expresar condolencias y apoyo con el más profundo respeto, o simplemente para decorar un espacio con un toque de luz y calma.",
  "arreglo-20": "Una combinación delicada y sumamente femenina que equilibra a la perfección la suavidad con destellos de color vibrante. Este arreglo destaca por la presencia de elegantes rosas y claveles en tonos rosa pastel y blanco puro, rodeados de una alegre selección de crisantemos morados y margaritas que añaden un toque festivo y dinámico al conjunto. Presentado en una hermosa canasta artesanal de mimbre con asa tradicional, su diseño redondeado y compacto es perfecto para expresar cariño, desear un feliz cumpleaños, celebrar la llegada de un bebé o simplemente iluminar el día de alguien especial con un detalle lleno de ternura y frescura natural.",
  "arreglo-21": "Una propuesta sofisticada de alta floristería que combina la calidez campestre con una elegancia impecable. Este espectacular diseño destaca por sus texturas y alturas, reuniendo hermosas rosas rosadas, crisantemos en tonos pastel y la majestuosa verticalidad de los perritos (antirrinos), complementados con sutiles acentos de flores silvestres en gamas violeta y follaje de eucalipto. Presentado de forma exclusiva en una distinguida base de madera de estilo rústico y coronado con un fino listón satinado a juego, este arreglo es la pieza perfecta para celebrar aniversarios, expresar una felicitación distinguida o sorprender a alguien especial con un detalle único y lleno de buen gusto.",
  "arreglo-22": "Un diseño exclusivo que cautiva por su sofisticación mística y su impecable contraste frío. Este arreglo destaca por la pulcritud de hermosas rosas blancas premium, bellamente entrelazadas con los vibrantes tonos violeta y azul profundo de los agapantos, creando una atmósfera de misterio y distinción. Envuelto en una densa nube de gipsofila (nube blanca) que emula un cielo estrellado y enmarcado por follaje verde brillante, el conjunto se presenta de forma impecable en un jarrón estilizado y se adorna con un listón satinado a juego. Es la opción ideal para eventos formales, cenas elegantes, aniversarios de plata o para sorprender con un detalle único que desborda originalidad y buen gusto.",
  "arreglo-23": "Una propuesta vibrante y llena de luz que captura la calidez de un atardecer perfecto. Este encantador diseño destaca por el contraste de sus hermosas rosas en un cautivador tono coral, acompañadas por la sofisticada textura de lisiantos blancos y la alegre presencia de crisantemos amarillos y bicolores. Elevando la estructura del arreglo, sutiles botones de lirios (liliums) añaden verticalidad y elegancia. Presentado en una hermosa canasta tejida de mimbre con un diseño compacto y tupido, es el obsequio ideal para transmitir optimismo, celebrar cumpleaños, enviar agradecimientos o simplemente sorprender con un estallido de frescura y color.",
  "arreglo-24": "Un diseño vibrante y esférico que irradia una energía desbordante y alegre. Este espectacular arreglo destaca por la imponente presencia de girasoles radiantes que capturan toda la atención, perfectamente combinados con rosas en un profundo tono magenta y una densa corona de crisantemos bicolores amarillos con centros rojizos. Presentado de forma impecable en un jarrón de vidrio estilizado que resalta su silueta redondeada y tupida, es el obsequio perfecto para celebrar cumpleaños llenos de optimismo, desear éxito en un nuevo proyecto, enviar una pronta recuperación o simplemente contagiar de luz y buena vibra el día de alguien especial.",
  "arreglo-25": "Un diseño que cautiva por su delicadeza, ternura y sutil romanticismo. Este encantador arreglo destaca por una hermosa corona superior de rosas rosa pastel premium en perfecta apertura, acompañadas en la parte baja por pequeños crisantemos o dalias en el mismo tono que aportan una textura única y juguetona. Todo el conjunto descansa sobre un denso y fresco follaje verde brillante, presentado elegantemente en un jarrón estilizado y decorado con un fino listón satinado de color lila/rosa a juego. Es el detalle ideal para celebrar un mesiversario, expresar cariño sincero, festejar un cumpleaños dulce o sorprender con un gesto lleno de poesía y suavidad.",
  "arreglo-26": "Un diseño tierno y elegante que evoca la serenidad de una tarde de primavera. Este encantador arreglo semicircular destaca por una delicada combinación de rosas en tonos rosa y lila pastel, acompañadas de una densa y variada cama de crisantemos y gerberas en matices que van desde el blanco puro hasta suaves tonos lavanda y acentos en morado profundo. Coronando el diseño, sutiles botones de lirios (liliums) emergen para aportar una nota extra de distinción y frescura. Presentado en una hermosa canasta artesanal de mimbre, es el obsequio perfecto para celebrar el Día de las Madres, felicitar por un cumpleaños, desear una pronta recuperación o simplemente envolver el día de alguien especial con un detalle repleto de luz y ternura.",
  "arreglo-27": "Un diseño radiante y lleno de festividad que destaca por su perfecta silueta esférica y una paleta multicolor sumamente vibrante. Este arreglo captura las miradas gracias a una imponente gerbera roja central, rodeada de manera densa y armoniosa por rosas coral, claveles encendidos y una tupida variedad de crisantemos y margaritas en tonos magenta, amarillo brillante y rosa pastel. Presentado de forma impecable en un jarrón de vidrio estilizado que aporta altura y distinción, su diseño redondo y compacto lo convierte en el obsequio ideal para celebrar cumpleaños, enviar una felicitación entusiasta, desear éxito o simplemente transformar cualquier espacio con un estallido de energía positiva y frescura natural.",
  "arreglo-28": "Una propuesta que fusiona la imponente energía del campo con la delicadeza de la alta floristería. Este hermoso diseño destaca por una corona superior de girasoles radiantes plenamente abiertos, elegantemente intercalados con rosas rojas premium que aportan un contraste apasionado y vibrante. Pequeños crisantemos amarillos y sutiles texturas silvestres se distribuyen sobre una generosa base de follaje verde brillante, logrando un aspecto fresco, tupido y natural. Presentado de forma impecable en un jarrón estilizado, es el obsequio ideal para desear éxito, celebrar un cumpleaños con optimismo o sorprender a alguien especial con un detalle que desborda calidez y distinción.",
  "arreglo-29": "Un diseño espectacular que cautiva por su majestuosa silueta esférica y una delicada armonía de texturas. Este arreglo de alta floristería está compuesto por una densa y abundante combinación de crisantemos, margaritas y dalias en una romántica paleta que transita entre el blanco puro, el rosa pálido, suaves tonos lavanda y vibrantes destellos en tono magenta. Su perfecta forma redondeada y tupida evoca la ligereza de una nube primaveral en pleno esplendor. Presentado con gran elegancia en un jarrón de vidrio estilizado que le aporta una magnífica presencia y altura, es el obsequio ideal para celebrar un aniversario, sorprender en un cumpleaños, felicitar a mamá o engalanar un espacio especial con un toque de sutil sofisticación y frescura.",
  "arreglo-290": "",
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
