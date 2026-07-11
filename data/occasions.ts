export type Occasion = {
  slug: string;
  label: string;
  emoji: string;
  folder: string; // carpeta dentro de /public/fotos/eventos/
  count: number;
};

export const occasions: Occasion[] = [
  { slug: "cumpleanos", label: "Cumpleaños", emoji: "🎂", folder: "cumpleanos", count: 9 },
  { slug: "graduaciones", label: "Graduaciones", emoji: "🎓", folder: "graduaciones", count: 3 },
  { slug: "condolencias", label: "Condolencias", emoji: "🕊️", folder: "condolencias", count: 2 },
  { slug: "san-valentin", label: "San Valentín", emoji: "❤️", folder: "san-valentin", count: 17 },
];

export function occasionPhotos(occasion: Occasion): string[] {
  return Array.from({ length: occasion.count }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return `/fotos/eventos/${occasion.folder}/${occasion.folder}-${n}.jpg`;
  });
}
