import ultratechPpc from "@/assets/products/ultratechcement.png";
import ultratechSuper from "@/assets/products/ultratechsuper.png";
import ramcoSupergrade from "@/assets/products/ramcosupergrade.png";
import ramcoEfc from "@/assets/products/ramcoefc.png";
import ramcoSupersteel from "@/assets/products/ramcosupersteel.png";
import mahaPpc from "@/assets/products/mahacement.png";
import jkCement from "@/assets/products/jksupercement.png";
import tmt8mm from "@/assets/products/tmt-8mm.webp";
import tmt10mm from "@/assets/products/tmt-10mm.webp";
import tmt12mm from "@/assets/products/tmt-12mm.jpg";
import tmt16mm from "@/assets/products/tmt-16mm.jpg";
import classicClayBricks from "@/assets/products/classic_clay_bricks_1772386495892.png";
import premiumCementBricks from "@/assets/products/premium_cement_bricks_1772386518370.png";
import premiumSand from "@/assets/products/user_requested_sand_1772387013236.png";
import bindingWire from "@/assets/binding_wire.jpg";
import roofingSheet8ft from "@/assets/roofing_sheet_8ft.png";
import roofingSheet10ft from "@/assets/roofing_sheet_10ft.png";
import roofingSheet12ft from "@/assets/roofing_sheet_12ft.png";
import chainLinkFence from "@/assets/chain_link_fence.png";
import barbedWire from "@/assets/barbed_wire.jpg";
import aluminiumMesh from "@/assets/aluminium_mesh.jpg";
import nails from "@/assets/nails.jpg";
import nails3Inch from "@/assets/nails_3_inch.png";
import weatherPro1L from "@/assets/products/weather-pro-1L.png";
import weatherPro5L from "@/assets/products/weather-pro-5L.png";
import weatherPro10L from "@/assets/products/weather-pro-10L.png";
import weatherPro20L from "@/assets/products/weather-pro-20L.png";
import tilefixoCt from "@/assets/products/tilefixo_ct.png";
import tilefixoVt from "@/assets/products/tilefixo_vt.png";
import doubleBullCement from "@/assets/products/doublebullcement.png";
import chettinadCement from "@/assets/products/chettinadcement.png";

export type Product = {
  id: string;
  name: string;
  brand: string;
  category: "cement" | "steel" | "bricks" | "sheets" | "fencing" | "nails" | "liquids" | "tile-adhesive";
  price: number | null;
  unit: string;
  inStock: boolean;
  image: string;

  description: string;
  specs: string;
};

export const categories = [
  { id: "all", label: "All Products" },
  { id: "cement", label: "Cement" },
  { id: "steel", label: "Steel & TMT Bars" },
  { id: "bricks", label: "Bricks & Sand" },
  { id: "sheets", label: "Roofing Sheets" },
  { id: "fencing", label: "Fencing & Wire" },
  { id: "nails", label: "Nails" },
  { id: "liquids", label: "Waterproofing Liquids" },
  { id: "tile-adhesive", label: "Tile Adhesives" },
] as const;

export const products: Product[] = [
  // --- CEMENT (1-7) ---
  {
    id: "1",
    name: "Ultratech Cement PPC",
    brand: "UltraTech",
    category: "cement",
    price: null,
    unit: "per bag (50kg)",
    inStock: true,
    image: ultratechPpc,
    description: "High-quality Portland Pozzolana Cement suitable for general construction work. It offers strong bonding, good durability, and smooth finishing for houses, buildings, and plastering works.",
    specs: "50kg bag covers approx. 12â€“14 sq.ft area at 1 inch thickness for plastering. For brickwork, one bag covers approx. 25â€“30 sq.ft. Ideal for residential & commercial projects.",
  },
  {
    id: "2",
    name: "Ultratech Super Cement",
    brand: "UltraTech",
    category: "cement",
    price: null,
    unit: "per bag (50kg)",
    inStock: true,
    image: ultratechSuper,
    description: "Premium quality cement designed for high strength and long-lasting construction. Ideal for slabs, foundations, beams, and heavy structural work.",
    specs: "50kg bag covers approx. 12â€“14 sq.ft for plastering (1 inch thick). For concrete work (1:2:4 mix), one bag yields approx. 3.5 cu.ft. Best for heavy-duty structural applications.",
  },
  {
    id: "3",
    name: "Ramco Supergrade Cement",
    brand: "Ramco",
    category: "cement",
    price: null,
    unit: "per bag (50kg)",
    inStock: true,
    image: ramcoSupergrade,
    description: "Strong and reliable cement made for superior performance in all construction applications. Provides excellent workability and long-term durability.",
    specs: "50kg bag covers approx. 12â€“14 sq.ft for plastering at 1 inch thickness. For flooring (1:2:4 ratio), covers approx. 8â€“10 sq.ft at 2 inch thickness. Great for all-purpose construction.",
  },
  {
    id: "4",
    name: "Ramco EFC Cement",
    brand: "Ramco",
    category: "cement",
    price: null,
    unit: "per bag (50kg)",
    inStock: true,
    image: ramcoEfc,
    description: "Engineered Fine Cement specially developed for smooth finishing and crack resistance. Best suitable for plastering, masonry, and residential construction.",
    specs: "50kg bag covers approx. 14â€“16 sq.ft for fine plastering at 12mm thickness due to its superior spreadability. For masonry work, covers approx. 25â€“30 sq.ft. Excellent crack-resistant finish.",
  },
  {
    id: "5",
    name: "Ramco Supersteel Cement",
    brand: "Ramco",
    category: "cement",
    price: null,
    unit: "per bag (50kg)",
    inStock: true,
    image: ramcoSupersteel,
    description: "High-strength cement designed for RCC structures and steel-based construction. Ensures better load-bearing capacity and long-lasting structural stability.",
    specs: "50kg bag covers approx. 12â€“14 sq.ft for plastering (1 inch thick). For RCC concrete (1:1.5:3 mix), one bag yields approx. 2.5 cu.ft. Specially formulated for steel-reinforced structures.",
  },
  {
    id: "6",
    name: "Maha PPC Cement",
    brand: "Maha",
    category: "cement",
    price: null,
    unit: "per bag (50kg)",
    inStock: true,
    image: mahaPpc,
    description: "Durable PPC cement ideal for residential and commercial construction. Offers good resistance against cracks and improves overall strength of buildings.",
    specs: "50kg bag covers approx. 12â€“14 sq.ft for plastering at 1 inch thickness. For brickwork, covers approx. 25â€“30 sq.ft. Provides superior crack resistance and long-term durability.",
  },
  {
    id: "7",
    name: "JK Cement",
    brand: "JK",
    category: "cement",
    price: null,
    unit: "per bag (50kg)",
    inStock: true,
    image: jkCement,
    description: "Trusted cement brand known for consistent quality and strength. Suitable for all types of construction work including residential, commercial, and industrial projects.",
    specs: "50kg bag covers approx. 12â€“14 sq.ft for plastering at 1 inch thickness. For concrete (1:2:4 mix), one bag yields approx. 3.5 cu.ft. Versatile for all construction needs.",
  },
  {
    id: "30",
    name: "Emami Double Bull Cement",
    brand: "Emami",
    category: "cement",
    price: null,
    unit: "per bag (50kg)",
    inStock: true,
    image: doubleBullCement,
    description: "High-quality Portland Slag Cement suitable for all types of construction work. Provides strong bonding, excellent durability, and improved resistance to moisture. Ideal for residential & commercial buildings.",
    specs: "50kg bag covers approx. 12-14 sq.ft area at 1 inch thickness for plastering. For brickwork, one bag covers approx. 25-30 sq.ft. For concrete work (1:2:4 mix), one bag yields approx. 3.5 cu.ft. Best for slabs, beams, columns, and foundations.",
  },
  {
    id: "31",
    name: "Chettinad Cement",
    brand: "Chettinad",
    category: "cement",
    price: null,
    unit: "per bag (50kg)",
    inStock: true,
    image: chettinadCement,
    description: "Premium quality Ordinary Portland Cement designed for high-strength structural construction. Ideal for RCC works like slabs, beams, columns, foundations, and heavy load-bearing structures. Provides excellent early strength, durability, and superior bonding performance.",
    specs: "50kg bag covers approx. 12–14 sq.ft for plastering (1 inch thick). For concrete work (1:2:4 mix), one bag yields approx. 3.5 cu.ft. Best suited for heavy-duty structural applications and fast-track construction projects.",
  },

  // --- STEEL & TMT BARS (8-11) ---
  {
    id: "8",
    name: "Mild Steel 8mm TMT Bars",
    brand: "MS Steel",
    category: "steel",
    price: null,
    unit: "per kg",
    inStock: true,
    image: tmt8mm,
    description: "Lightweight and strong TMT bars mainly used for slabs, stirrups, and small structural applications. Provides good flexibility and strength.",
    specs: "Standard length: 12 meters (40 feet) per rod. Weight: approx. 0.395 kg/meter. One rod weighs approx. 4.74 kg. Commonly used for slab reinforcement, stirrups, and ring beams.",
  },
  {
    id: "9",
    name: "Mild Steel 10mm TMT Bars",
    brand: "MS Steel",
    category: "steel",
    price: null,
    unit: "per kg",
    inStock: true,
    image: tmt10mm,
    description: "Medium-strength reinforcement bars suitable for beams, slabs, and residential construction. Offers excellent durability and corrosion resistance.",
    specs: "Standard length: 12 meters (40 feet) per rod. Weight: approx. 0.617 kg/meter. One rod weighs approx. 7.40 kg. Ideal for beams, lintels, and residential slab reinforcement.",
  },
  {
    id: "10",
    name: "Mild Steel 12mm TMT Bars",
    brand: "MS Steel",
    category: "steel",
    price: null,
    unit: "per kg",
    inStock: true,
    image: tmt12mm,
    description: "High-performance TMT bars commonly used for pillars, foundations, and heavy structural work. Ensures strong reinforcement and safety.",
    specs: "Standard length: 12 meters (40 feet) per rod. Weight: approx. 0.889 kg/meter. One rod weighs approx. 10.67 kg. Used for columns, footings, and heavy structural reinforcement.",
  },
  {
    id: "11",
    name: "Mild Steel 16mm TMT Bars",
    brand: "MS Steel",
    category: "steel",
    price: null,
    unit: "per kg",
    inStock: true,
    image: tmt16mm,
    description: "Heavy-duty reinforcement bars used in large construction projects, columns, and load-bearing structures. Provides maximum strength and stability.",
    specs: "Standard length: 12 meters (40 feet) per rod. Weight: approx. 1.580 kg/meter. One rod weighs approx. 18.96 kg. Best for heavy columns, retaining walls, and large foundations.",
  },

  // --- CONSTRUCTION MATERIALS (12-29) ---
  {
    id: "12",
    name: "Classic Clay Bricks",
    brand: "Local Supply",
    category: "bricks",
    price: null,
    unit: "per 1000 bricks",
    inStock: true,
    image: classicClayBricks,
    description: "Traditional burnt clay bricks suitable for residential and commercial masonry work. Offers good thermal insulation, strong bonding, and long-lasting durability for standard construction applications.",
    specs: "Standard size: approx. 190 Ã— 90 Ã— 90 mm (9 Ã— 4.5 Ã— 3 inches). Approx. 500 bricks required for 100 sq.ft wall area (9-inch wall)."
  },
  {
    id: "13",
    name: "Premium Cement Bricks",
    brand: "Local Supply",
    category: "bricks",
    price: null,
    unit: "per 100 blocks",
    inStock: true,
    image: premiumCementBricks,
    description: "High-strength cement bricks designed for modern construction with superior durability and uniform shape. Ensures faster construction, better load-bearing capacity, and reduced mortar consumption.",
    specs: "Standard size: approx. 400 Ã— 200 Ã— 200 mm (16 Ã— 8 Ã— 8 inches). Ideal for structural walls, foundations, and commercial buildings."
  },
  {
    id: "14",
    name: "Premium Construction Sand",
    brand: "Local Supply",
    category: "bricks",
    price: null,
    unit: "per Tractor Load",
    inStock: true,
    image: premiumSand,
    description: "High-quality construction sand suitable for all types of building and masonry work. Provides excellent bonding, smooth finishing, and strong durability for concrete, plastering, and brickwork applications.",
    specs: "Quantity: approx. 1 Tractor Load (5 â€“ 6 cubic meters). Fine river/construction sand. One tractor covers approx. 250 â€“ 300 sq.ft for plastering."
  },
  {
    id: "15",
    name: "Blue Color Coated Roofing Sheet â€“ 8 Feet",
    brand: "Local Supply",
    category: "bricks",
    price: null,
    unit: "per sheet",
    inStock: true,
    image: roofingSheet8ft,
    description: "Durable and lightweight color-coated mild steel roofing sheet suitable for sheds, backyards, small structures, and household roofing. Provides good weather resistance and long service life.",
    specs: "Standard length: 8 Feet. Color: Blue. Surface Treatment: Color Coated. Material: Mild Steel. Usage: backyards, garden buildings, garages, cladding."
  },
  {
    id: "16",
    name: "Blue Color Coated Roofing Sheet â€“ 10 Feet",
    brand: "Local Supply",
    category: "sheets",
    price: null,
    unit: "per sheet",
    inStock: true,
    image: roofingSheet10ft,
    description: "High-quality coated roofing sheet designed for medium-span roofing applications. Offers strong durability, corrosion resistance, and an attractive finish for modern structures.",
    specs: "Standard length: 10 Feet. Color: Blue. Surface Treatment: Color Coated. Material: Mild Steel. Usage: sheds, warehouses, garages, residential roofing."
  },
  {
    id: "17",
    name: "Blue Color Coated Roofing Sheet â€“ 12 Feet",
    brand: "Local Supply",
    category: "sheets",
    price: null,
    unit: "per sheet",
    inStock: true,
    image: roofingSheet12ft,
    description: "Strong and long-span roofing solution suitable for industrial and residential construction. Designed for long durability with excellent weather protection and clean appearance.",
    specs: "Standard length: 12 Feet. Color: Blue. Surface Treatment: Color Coated. Material: Mild Steel. Usage: backyards, garages, cladding, larger roofing structures."
  },
  {
    id: "18",
    name: "Chain Link Fencing Net 5ft and 6ft",
    brand: "MS Steel",
    category: "fencing",
    price: null,
    unit: "per roll",
    inStock: true,
    image: chainLinkFence,
    description: "Strong galvanized iron chain link fencing mainly used for boundary protection, gardens, farms, construction sites, and industrial areas. Provides excellent strength, rust resistance, and long life with easy installation.",
    specs: "Standard size: 5ft and 6ft height Ã— 50ft length per roll. Wire thickness: approx. 2.6mm GI wire. Diamond mesh pattern for strong grip and durability. Ideal for residential, agricultural, and commercial fencing."
  },
  {
    id: "19",
    name: "Barbed Wire",
    brand: "MS Steel",
    category: "fencing",
    price: null,
    unit: "per coil (50 Kgs)",
    inStock: true,
    image: barbedWire,
    description: "Heavy-duty galvanized barbed wire mainly used for fencing, boundary protection, agricultural lands, and construction site security. Provides strong durability, sharp protection, and long-lasting corrosion resistance.",
    specs: "Standard weight: 50 Kgs per coil. Wire Type: Double strand twisted. Surface Finish: Hot-dip galvanized (rust resistant). Designed for high-tensile strength and long-term outdoor use. Commonly used for farm fencing, plot boundaries, industrial areas, and security applications."
  },
  {
    id: "20",
    name: "Aluminium Mesh (Machar Jali)",
    brand: "MS Steel",
    category: "fencing",
    price: null,
    unit: "per roll",
    inStock: true,
    image: aluminiumMesh,
    description: "Lightweight and durable aluminium mesh mainly used for windows, bathroom ventilation, and balcony protection. Provides excellent airflow while preventing mosquitoes, insects, and dust. Rust-resistant and suitable for long-term indoor and outdoor use.",
    specs: "Standard roll width: 3 feet / 4 feet. Standard length: 30 meters per roll. Thickness: approx. 0.20 â€“ 0.30 mm. Material: High-quality Aluminium wire. Commonly used for window frames, bathroom vents, kitchen windows, and sliding door mesh installation."
  },
  {
    id: "21",
    name: "Binding Wire",
    brand: "MS Steel",
    category: "fencing",
    price: null,
    unit: "per coil (25kg)",
    inStock: true,
    image: bindingWire,
    description: "High-quality mild steel binding wire used for tying TMT bars and reinforcement work in construction. Flexible, durable, and easy to twist, ensuring strong and secure binding for slabs, beams, columns, and foundations.",
    specs: "Gauge: 20 Gauge. Material: Mild Steel. Finish: Black Annealed. Usage: tying reinforcement bars in slabs, beams, columns, and footings."
  },
  {
    id: "22",
    name: "Mild Steel 2 Inch Nails",
    brand: "MS Steel",
    category: "nails",
    price: null,
    unit: "per 25 kg bundle",
    inStock: true,
    image: nails,
    description: "Strong and durable nails commonly used for carpentry, wooden framing, shuttering work, and general construction applications. Provides excellent grip and long-lasting performance.",
    specs: "Standard length: 2 inch (50 mm) per nail. Weight: 25 kg bundle. Made from high-quality mild steel with sharp tip and flat head design. Ideal for wood joining, furniture work, and construction fixing."
  },
  {
    id: "23",
    name: "Mild Steel 3 Inch Nails",
    brand: "MS Steel",
    category: "nails",
    price: null,
    unit: "per 25 kg bundle",
    inStock: true,
    image: nails3Inch,
    description: "Heavy-duty construction nails suitable for wooden structures, frames, roofing work, and industrial applications. Offers strong holding power and reliable durability.",
    specs: "Standard length: 3 inch (75 mm) per nail. Weight: 25 kg bundle. Manufactured from premium mild steel for better strength and corrosion resistance. Widely used in shuttering, carpentry, and structural wood work."
  },
  {
    id: "24",
    name: "UltraTech Cement Weather Pro WP+200 Liquid â€“ 1L",
    brand: "UltraTech",
    category: "liquids",
    price: null,
    unit: "per bottle (1L)",
    inStock: true,
    image: weatherPro1L,
    description: "Integral waterproofing liquid mainly used for plastering, concrete, brickwork, and roof slabs. Reduces water permeability and prevents leakage & dampness.",
    specs: "Standard dosage: 200 ml per 50 kg cement. Weight: Approx. 1 kg per bottle. Suitable for small residential works, bathrooms, patch repairs, and minor concrete jobs."
  },
  {
    id: "25",
    name: "UltraTech Cement Weather Pro WP+200 Liquid â€“ 5L",
    brand: "UltraTech",
    category: "liquids",
    price: null,
    unit: "per can (5L)",
    inStock: true,
    image: weatherPro5L,
    description: "High-performance waterproofing compound ideal for residential construction and medium-sized projects. Improves workability and durability of concrete.",
    specs: "Standard dosage: 200 ml per 50 kg cement. Weight: Approx. 5 kg per can. Commonly used for roof slabs, beams, plastering, and water tanks."
  },
  {
    id: "26",
    name: "UltraTech Cement Weather Pro WP+200 Liquid â€“ 10L",
    brand: "UltraTech",
    category: "liquids",
    price: null,
    unit: "per can (10L)",
    inStock: true,
    image: weatherPro10L,
    description: "Advanced waterproofing solution suitable for larger residential and small commercial construction projects. Enhances bonding and reduces seepage.",
    specs: "Standard dosage: 200 ml per 50 kg cement. Weight: Approx. 10 kg per can. Ideal for slabs, foundations, columns, and external plastering."
  },
  {
    id: "27",
    name: "UltraTech Cement Weather Pro WP+200 Liquid â€“ 20L",
    brand: "UltraTech",
    category: "liquids",
    price: null,
    unit: "per bucket (20L)",
    inStock: true,
    image: weatherPro20L,
    description: "Professional-grade integral waterproofing liquid for heavy construction and commercial projects. Provides superior dampness protection and long-term durability.",
    specs: "Standard dosage: 200 ml per 50 kg cement. Weight: Approx. 20 kg per bucket. Best for large slab casting, footings, basements, and structural concrete works."
  },
  {
    id: "28",
    name: "UltraTech TileFixo CT â€“ Floor Tile Adhesive",
    brand: "UltraTech",
    category: "tile-adhesive",
    price: null,
    unit: "per bag (20kg)",
    inStock: true,
    image: tilefixoCt,
    description: "Polymer-modified cement-based adhesive specially designed for fixing ceramic floor tiles on cement concrete surfaces. Ready to use, provides strong bonding, higher durability, and saves time and labour.",
    specs: "Standard Pack: 20 kg bag. Ideal for ceramic floor tiles on internal floors and smooth cement surfaces."
  },
  {
    id: "29",
    name: "UltraTech TileFixo VT â€“ Floor & Wall Tile Adhesive",
    brand: "UltraTech",
    category: "tile-adhesive",
    price: null,
    unit: "per bag (20kg)",
    inStock: true,
    image: tilefixoVt,
    description: "High-performance polymer-modified adhesive suitable for fixing vitrified tiles on floors and walls. Offers strong adhesion, better crack resistance, smooth application, and durable performance compared to conventional mortar.",
    specs: "Standard Pack: 20 kg bag. Ideal for vitrified tiles, ceramic tiles, and vertical wall applications."
  }
];

