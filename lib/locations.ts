export type Location = {
  slug: string;
  name: string;
  county: string;
};

export const LOCATIONS: Location[] = [
  { slug: "salt-lake-city", name: "Salt Lake City", county: "Salt Lake County" },
  { slug: "sandy", name: "Sandy", county: "Salt Lake County" },
  { slug: "draper", name: "Draper", county: "Salt Lake County" },
  { slug: "lehi", name: "Lehi", county: "Utah County" },
  { slug: "american-fork", name: "American Fork", county: "Utah County" },
  { slug: "provo", name: "Provo", county: "Utah County" },
  { slug: "orem", name: "Orem", county: "Utah County" },
  { slug: "south-jordan", name: "South Jordan", county: "Salt Lake County" },
  { slug: "herriman", name: "Herriman", county: "Salt Lake County" },
  { slug: "bountiful", name: "Bountiful", county: "Davis County" },
  { slug: "layton", name: "Layton", county: "Davis County" },
  { slug: "park-city", name: "Park City", county: "Summit County" },
];
