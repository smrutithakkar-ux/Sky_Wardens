export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductCardItem {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  role?: string;
}

export interface AerospaceCategory {
  id: string;
  number: string;
  name: string;
  tagline?: string;
  description?: string;
  highlights?: string[];
  specs?: ProductSpec[];
  products?: ProductCardItem[];
}

export const aerospaceCategories: AerospaceCategory[] = [
  {
    id: "surveillance-systems",
    number: "01",
    name: "Surveillance Systems",
    tagline: "Reconnaissance, ISR, and persistent observation platforms.",
    products: [
      {
        id: "arrow-drone",
        name: "Arrow Drone",
        description:
          "Tactical aerospace platform with mission-focused capability presentation and technical specification view.",
        imageSrc: "/images/aerospace-products/arrow.png",
        imageAlt: "Arrow Drone tactical aerospace surveillance platform",
        role: "Tactical Reconnaissance",
      },
      {
        id: "ranger-drone",
        name: "Ranger Drone",
        description:
          "Fixed-wing surveillance platform shaped for endurance, area coverage, and field reconnaissance.",
        imageSrc: "/images/aerospace-products/ranger-drone.png",
        imageAlt: "Ranger Drone fixed-wing surveillance platform",
        role: "Area Surveillance & Mapping",
      },
      {
        id: "raven-eye",
        name: "Raven Eye",
        description:
          "Raven Eye surveillance drone designed for observation, tracking, and persistent mission awareness.",
        imageSrc: "/images/aerospace-products/raven-eye.png",
        imageAlt: "Raven Eye observation and tracking surveillance drone",
        role: "Persistent ISR Hybrid VTOL",
      },
      {
        id: "ghost-piston-engine",
        name: "Ghost (Piston Engine)",
        description:
          "Long-endurance tactical UAV with heavy-lift capability for surveillance, logistics, and extended-range missions.",
        imageSrc: "/images/aerospace-products/ghost-drone.png",
        imageAlt: "Ghost Piston Engine long-endurance tactical UAV",
        role: "Heavy-Lift & Extended Range",
      },
      {
        id: "ghost-electric-motor",
        name: "Ghost (Electric Motor)",
        description:
          "Silent electric UAV engineered for reconnaissance, mapping, inspection, and precision aerial operations.",
        imageSrc: "/images/aerospace-products/ghost-drone.png",
        imageAlt: "Ghost Electric Motor silent surveillance UAV",
        role: "Low-Acoustic Silent ISR",
      },
      {
        id: "scout-1-alpha",
        name: "Scout 1 Alpha Surveillance Drone",
        description:
          "Dedicated surveillance quadcopter designed for observation, monitoring, and tactical field intelligence.",
        imageSrc: "/images/aerospace-products/scout-1-alpha.png",
        imageAlt: "Scout 1 Alpha tactical surveillance quadcopter",
        role: "Tactical Field Intelligence",
      },
      {
        id: "swat-airborne-surveillance",
        name: "SWAT Airborne Surveillance & Support",
        description:
          "Airborne support system intended for tactical overwatch, response coordination, and team visibility.",
        imageSrc: "/images/aerospace-products/swat-airborne.png",
        imageAlt: "SWAT Airborne tactical overwatch and support drone",
        role: "Tactical SWAT Overwatch",
      },
    ],
  },
  {
    id: "tactical-fpv-platforms",
    number: "02",
    name: "Tactical FPV Platforms",
    tagline: "Small agile combat and close-range tactical systems.",
    products: [
      {
        id: "5-inch-fpv-drone",
        name: "5-inch FPV Drone",
        description:
          "Compact FPV surveillance platform configured for agile day operations and payload deployment.",
        imageSrc: "/images/aerospace-products/5-inch-fpv.png",
        imageAlt: "5-inch FPV Drone Day Surveillance and Payload Drop",
        role: "Agile Day Operations & Payload Drop",
      },
      {
        id: "7-inch-fpv-drone",
        name: "7-inch FPV Drone",
        description:
          "Extended FPV platform developed for day camera payloads and precision release missions.",
        imageSrc: "/images/aerospace-products/7-inch-fpv.png",
        imageAlt: "7-inch FPV Drone Day Camera with Weapon Drop Mechanism",
        role: "Day Camera & Precision Release",
      },
      {
        id: "ultra-hardened-training-whooper",
        name: "Ultra Hardened Training Whooper 5-Inch Drone",
        description:
          "Rugged military training UAV for intensive field operations, pilot training, and mission rehearsal.",
        imageSrc: "/images/aerospace-products/whooper-5-inch.png",
        imageAlt: "Ultra Hardened Training Whooper 5-Inch Drone",
        role: "Field Operations & Pilot Training",
      },
    ],
  },
  {
    id: "strike-systems",
    number: "03",
    name: "Strike Systems",
    tagline: "Payload delivery, armed drone, and offensive mission platforms.",
    products: [
      {
        id: "sns-shoot-scoot",
        name: "SNS (Shoot & Scoot)",
        description:
          "SNS Shoot & Scoot quadcopter platform configured for rapid tactical maneuvering and release capability.",
        imageSrc: "/images/aerospace-products/sns-shoot-scoot.png",
        imageAlt: "SNS Shoot and Scoot fast attack quadcopter platform",
        role: "Rapid Tactical Maneuver & Release",
      },
      {
        id: "onyx-dart",
        name: "Onyx Dart",
        description:
          "Onyx Dart multirotor built for controlled aerial release and short-range tactical deployment.",
        imageSrc: "/images/aerospace-products/onyx-dart.png",
        imageAlt: "Onyx Dart bomb-dropping multirotor drone",
        role: "Controlled Aerial Release",
      },
      {
        id: "weaponized-drone",
        name: "Weaponized Drone",
        description:
          "Tactical multirotor platform configured for payload delivery, engagement support, and mission flexibility.",
        imageSrc: "/images/aerospace-products/weaponized-drone.png",
        imageAlt: "Weaponized tactical multirotor drone",
        role: "Engagement Support & Mission Flexibility",
      },
      {
        id: "grenade-dropping-agri-stack",
        name: "Grenade Dropping With Agri Drone Stack",
        description:
          "Adapted agricultural stack platform repurposed for aerial drop and tactical mission support roles.",
        imageSrc: "/images/aerospace-products/grenade-dropping-agri.png",
        imageAlt: "Grenade Dropping with Agri Drone Stack platform",
        role: "Heavy Aerial Drop & Mission Support",
      },
    ],
  },
  {
    id: "loitering-munitions",
    number: "04",
    name: "Loitering Munitions",
    tagline: "Terminal strike systems built for rapid deployment profiles.",
    products: [
      {
        id: "viper-x",
        name: "Viper-X",
        description:
          "Viper-X loitering tactical drone platform configured for precision attack and rapid target engagement.",
        imageSrc: "/images/aerospace-products/viper-x.png",
        imageAlt: "Viper-X loitering tactical attack drone",
        role: "Precision Attack & Rapid Engagement",
      },
      {
        id: "doom-sparrow",
        name: "Doom Sparrow",
        description:
          "Doom Sparrow compact loitering drone concept intended for fast deployment and terminal tactical strike profiles.",
        imageSrc: "/images/aerospace-products/doom-sparrow.png",
        imageAlt: "Doom Sparrow compact loitering strike drone",
        role: "Fast Deployment & Terminal Strike",
      },
      {
        id: "bee-sting-kamikaze",
        name: "Bee Sting (Kamikaze)",
        description:
          "Advanced loitering munition platform for precision strike, real-time reconnaissance, and rapid target interception.",
        imageSrc: "/images/aerospace-products/bee-sting-kamikaze.png",
        imageAlt: "Bee Sting Kamikaze loitering munition drone",
        role: "Precision Strike & Target Interception",
      },
    ],
  },
  {
    id: "heavy-tactical-platforms",
    number: "05",
    name: "Heavy Tactical Platforms",
    tagline: "Large systems with higher payload or specialized capability.",
    products: [
      {
        id: "cargo-drone-stack-quadcopter",
        name: "Cargo Drone Stack Quadcopter",
        description:
          "Heavy-lift quadcopter platform positioned for cargo transfer and logistics-oriented aerial support.",
        imageSrc: "/images/aerospace-products/cargo-drone-stack.png",
        imageAlt: "Cargo Drone Stack Quadcopter logistics platform",
        role: "Cargo Transfer & Logistics Support",
      },
      {
        id: "heavy-lift-drone-50kg",
        name: "Heavy Lift Drone (50kg)",
        description:
          "Heavy-lift tactical resupply drone for equipment transport and operational support with exceptional payload capacity.",
        imageSrc: "/images/aerospace-products/heavy-lift-50kg.png",
        imageAlt: "Heavy Lift Drone 50kg tactical resupply UAV",
        role: "Tactical Resupply & Heavy Equipment Transport",
      },
      {
        id: "raptor-h8-bazz-h8",
        name: "Raptor H8/BAZZ H8",
        description:
          "Heavy tactical aerial system concept built around specialized launch and combat support integration.",
        imageSrc: "/images/aerospace-products/raptor-h8.png",
        imageAlt: "Raptor H8 BAZZ H8 heavy tactical missile launcher aerial system",
        role: "Specialized Launch & Combat Support",
      },
      {
        id: "aerial-recon-node-quadcopter",
        name: "Aerial Recon Node Quadcopter",
        description:
          "Aerial Recon Node quadcopter optimized for quick deployment, inspection, and close-range tactical operations.",
        imageSrc: "/images/aerospace-products/aerial-recon-node.png",
        imageAlt: "Aerial Recon Node Quadcopter tactical inspection platform",
        role: "Quick Deployment & Close-Range Tactical Recon",
      },
    ],
  },
  {
    id: "special-mission-systems",
    number: "06",
    name: "Special Mission Systems",
    tagline: "Mission-specific equipment and tactical support solutions.",
    products: [
      {
        id: "agri-hawk",
        name: "Agri Hawk",
        description:
          "Agriculture spraying drone with smart sensors for obstacle and terrain avoidance.",
        imageSrc: "/images/aerospace-products/agri-hawk.jpg",
        imageAlt: "Agri Hawk agriculture spraying drone",
        role: "Terrain Avoidance & Precision Spraying",
      },
      {
        id: "riot-hawk",
        name: "Riot Hawk",
        description:
          "Tactical aerial riot-control system with a high-precision deployment platform.",
        imageSrc: "/images/aerospace-products/riot-hawk.jpg",
        imageAlt: "Riot Hawk tactical aerial riot-control system",
        role: "Tactical Riot-Control Deployment",
      },
      {
        id: "advanced-ied-detection",
        name: "Advanced IED Detection",
        description:
          "Mission support drone intended for route inspection, detection workflows, and tactical response support.",
        imageSrc: "/images/aerospace-products/advanced-ied-detection.png",
        imageAlt: "Advanced IED Detection mission support drone",
        role: "Route Inspection & Threat Detection",
      },
    ],
  },
  {
    id: "support-infrastructure",
    number: "07",
    name: "Support Infrastructure",
    tagline: "Operational support systems designed to sustain autonomous deployments.",
    products: [
      {
        id: "optional-wireless-charger",
        name: "Optional Wireless Charger For Autonomous Solutions",
        description:
          "Autonomous support module intended to extend field readiness and operational turnaround cycles.",
        imageSrc: "/images/aerospace-products/wireless-charger.png",
        imageAlt: "Optional Wireless Charger for Autonomous Solutions",
        role: "Autonomous Docking & Rapid Wireless Charging",
      },
    ],
  },
];
