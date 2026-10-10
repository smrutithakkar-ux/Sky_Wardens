export interface SpecItem {
  label: string;
  value: string;
  icon?: string;
}

export interface TableRow {
  label: string;
  value: string;
}

export type ProductDetailSection =
  | {
      type: "spec-grid";
      items: SpecItem[];
    }
  | {
      type: "table";
      title?: string;
      rows: TableRow[];
    }
  | {
      type: "list";
      title: string;
      items: string[];
    }
  | {
      type: "text";
      title: string;
      body: string;
    };

export interface ProductCardItem {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  role?: string;
  categoryName?: string;
  details: ProductDetailSection[];
}

export interface DefenceCategory {
  id: string;
  number: string;
  name: string;
  tagline?: string;
  products: ProductCardItem[];
}

export const defenceCategories: DefenceCategory[] = [
  {
    "id": "helmets",
    "number": "01",
    "name": "Helmets",
    "tagline": "Certified ballistic head protection, impact mitigation, and tactical mounting shells.",
    "products": [
      {
        "id": "abhedya-level-iii-helmet",
        "name": "Abhedya Level III Helmet",
        "description": "Protective headgear solution designed for defence and tactical deployment requirements.",
        "imageSrc": "/images/2. Defence Page/Abhedya-Level-III-Helmet.png",
        "imageAlt": "Abhedya Level III Helmet",
        "categoryName": "Helmets",
        "details": [
          {
            "type": "text",
            "title": "Overview",
            "body": "Protective headgear solution designed for defence and tactical deployment requirements."
          },
          {
            "type": "text",
            "title": "Information",
            "body": "Detailed specifications, sizing, and procurement information are available on request."
          }
        ]
      },
      {
        "id": "ballistic-helmet-nij",
        "name": "Ballistic Helmet NIJ",
        "description": "Ballistic helmet platform positioned for operational head protection and readiness.",
        "imageSrc": "/images/2. Defence Page/Ballistic-Helmet-NIJ.png",
        "imageAlt": "Ballistic Helmet NIJ",
        "categoryName": "Helmets",
        "details": [
          {
            "type": "text",
            "title": "Overview",
            "body": "Ballistic helmet platform positioned for operational head protection and readiness."
          },
          {
            "type": "text",
            "title": "Information",
            "body": "Detailed specifications, sizing, and procurement information are available on request."
          }
        ]
      },
      {
        "id": "vajra-helmet",
        "name": "Vajra Helmet",
        "description": "Tactical helmet offering structured protection for frontline and response roles.",
        "imageSrc": "/images/2. Defence Page/Vajra-Helmet.png",
        "imageAlt": "Vajra Helmet",
        "categoryName": "Helmets",
        "details": [
          {
            "type": "text",
            "title": "Overview",
            "body": "Tactical helmet offering structured protection for frontline and response roles."
          },
          {
            "type": "text",
            "title": "Information",
            "body": "Detailed specifications, sizing, and procurement information are available on request."
          }
        ]
      }
    ]
  },
  {
    "id": "shoes-boots",
    "number": "02",
    "name": "Shoes & Boots",
    "tagline": "Military-grade all-terrain footwear engineered for extreme climates, anti-spike defense, and rapid mobility.",
    "products": [
      {
        "id": "canvas-jungle-anti-spike-military-boots",
        "name": "Canvas Jungle Anti-Spike Military Boots",
        "description": "Jungle-oriented anti-spike boots built for demanding terrain and field movement.",
        "imageSrc": "/images/2. Defence Page/Canvas-Jungle-Anti-Spike-Military-Boots.png",
        "imageAlt": "Canvas Jungle Anti-Spike Military Boots",
        "categoryName": "Shoes & Boots",
        "details": [
          {
            "type": "text",
            "title": "Overview",
            "body": "Jungle-oriented anti-spike boots built for demanding terrain and field movement."
          },
          {
            "type": "text",
            "title": "Information",
            "body": "Detailed specifications, sizing, and procurement information are available on request."
          }
        ]
      },
      {
        "id": "leather-jungle-anti-spike-military-boots",
        "name": "Leather Jungle Anti-Spike Military Boots",
        "description": "Leather anti-spike jungle boots configured for sustained outdoor defence use.",
        "imageSrc": "/images/2. Defence Page/Leather-Jungle-Anti-Spike-Military-Boots.png",
        "imageAlt": "Leather Jungle Anti-Spike Military Boots",
        "categoryName": "Shoes & Boots",
        "details": [
          {
            "type": "text",
            "title": "Overview",
            "body": "Leather anti-spike jungle boots configured for sustained outdoor defence use."
          },
          {
            "type": "text",
            "title": "Information",
            "body": "Detailed specifications, sizing, and procurement information are available on request."
          }
        ]
      },
      {
        "id": "leather-snow-adventure-military-boots",
        "name": "Leather Snow Adventure Military Boots",
        "description": "Cold-condition military boots developed for extreme and high-exposure environments.",
        "imageSrc": "/images/2. Defence Page/Leather-Snow-Adventure-Military-Boots.png",
        "imageAlt": "Leather Snow Adventure Military Boots",
        "categoryName": "Shoes & Boots",
        "details": [
          {
            "type": "text",
            "title": "Overview",
            "body": "Cold-condition military boots developed for extreme and high-exposure environments."
          },
          {
            "type": "text",
            "title": "Information",
            "body": "Detailed specifications, sizing, and procurement information are available on request."
          }
        ]
      }
    ]
  },
  {
    "id": "gloves",
    "number": "03",
    "name": "Gloves",
    "tagline": "Flame-resistant, puncture-proof, and stun-shock insulated combat gloves for frontline operators.",
    "products": [
      {
        "id": "stun-shock-proof-dorsal-half-finger-military-gloves",
        "name": "Stun Shock Proof Dorsal Half Finger Military Gloves",
        "description": "Half-finger protective clothings shaped for tactical grip and shock-resistant handling.",
        "imageSrc": "/images/2. Defence Page/Stun-Shock-Proof-Dorsal-Half-Finger-Military-Gloves.png",
        "imageAlt": "Stun Shock Proof Dorsal Half Finger Military Gloves",
        "categoryName": "Gloves",
        "details": [
          {
            "type": "text",
            "title": "Overview",
            "body": "Half-finger protective clothings shaped for tactical grip and shock-resistant handling."
          },
          {
            "type": "text",
            "title": "Information",
            "body": "Detailed specifications, sizing, and procurement information are available on request."
          }
        ]
      },
      {
        "id": "stun-shock-proof-full-finger-military-gloves",
        "name": "Stun Shock Proof Full Finger Military Gloves",
        "description": "Full-finger military gloves built for protected frontline and operational warfare.",
        "imageSrc": "/images/2. Defence Page/Stun-Shock-Proof-Full-Finger-Military-Gloves.png",
        "imageAlt": "Stun Shock Proof Full Finger Military Gloves",
        "categoryName": "Gloves",
        "details": [
          {
            "type": "text",
            "title": "Overview",
            "body": "Full-finger military gloves built for protected frontline and operational warfare."
          },
          {
            "type": "text",
            "title": "Information",
            "body": "Detailed specifications, sizing, and procurement information are available on request."
          }
        ]
      },
      {
        "id": "stun-shock-proof-military-half-finger-gloves",
        "name": "Stun Shock Proof Military Half Finger Gloves",
        "description": "Shock-resistant half-finger gloves intended for fast movement and tactical handling.",
        "imageSrc": "/images/2. Defence Page/Stun-Shock-Proof-Military-Half-Finger-Gloves.png",
        "imageAlt": "Stun Shock Proof Military Half Finger Gloves",
        "categoryName": "Gloves",
        "details": [
          {
            "type": "text",
            "title": "Overview",
            "body": "Shock-resistant half-finger gloves intended for fast movement and tactical handling."
          },
          {
            "type": "text",
            "title": "Information",
            "body": "Detailed specifications, sizing, and procurement information are available on request."
          }
        ]
      },
      {
        "id": "stun-shock-proof-tactical-half-finger-military-glove",
        "name": "Stun Shock Proof Tactical Half Finger Military Glove",
        "description": "Tactical half-finger gloves configured for dexterity, grip, and field protection.",
        "imageSrc": "/images/2. Defence Page/Stun-Shock-Proof-Tactical-Half-Finger-Military-Glove.png",
        "imageAlt": "Stun Shock Proof Tactical Half Finger Military Glove",
        "categoryName": "Gloves",
        "details": [
          {
            "type": "text",
            "title": "Overview",
            "body": "Tactical half-finger gloves configured for dexterity, grip, and field protection."
          },
          {
            "type": "text",
            "title": "Information",
            "body": "Detailed specifications, sizing, and procurement information are available on request."
          }
        ]
      }
    ]
  },
  {
    "id": "jackets-outerwear",
    "number": "04",
    "name": "Jackets & Outerwear",
    "tagline": "NIJ certified ballistic vests, concealed armor, and combat plate carriers engineered for survival.",
    "products": [
      {
        "id": "shakti-marine-jacket",
        "name": "Shakti Marine Jacket",
        "description": "Operational marine outerwear tailored for maritime deployment and special activities.",
        "imageSrc": "/images/2. Defence Page/Shakti-Marine-Jacket.png",
        "imageAlt": "Shakti Marine Jacket",
        "categoryName": "Jackets & Outerwear",
        "details": [
          {
            "type": "text",
            "title": "Overview",
            "body": "Operational marine outerwear tailored for maritime deployment and special activities."
          },
          {
            "type": "text",
            "title": "Information",
            "body": "Detailed specifications, sizing, and procurement information are available on request."
          }
        ]
      },
      {
        "id": "shakti-vip-jackets",
        "name": "Shakti VIP Jackets",
        "description": "Executive protection outerwear dressed for understated and discreet personal protection.",
        "imageSrc": "/images/2. Defence Page/Shakti-VIP-Jackets.png",
        "imageAlt": "Shakti VIP Jackets",
        "categoryName": "Jackets & Outerwear",
        "details": [
          {
            "type": "text",
            "title": "Overview",
            "body": "Executive protection outerwear dressed for understated and discreet personal protection."
          },
          {
            "type": "text",
            "title": "Information",
            "body": "Detailed specifications, sizing, and procurement information are available on request."
          }
        ]
      },
      {
        "id": "shakti-level-iii-bulletproof-jacket",
        "name": "Shakti - Level III bulletproof Jacket",
        "description": "Ballistic defense protection configured for frontline defense applications.",
        "imageSrc": "/images/2. Defence Page/Shakti-Level-III-bulletproof-Jacket.png",
        "imageAlt": "Shakti - Level III bulletproof Jacket",
        "categoryName": "Jackets & Outerwear",
        "details": [
          {
            "type": "text",
            "title": "Overview",
            "body": "Ballistic defense protection configured for frontline defense applications."
          },
          {
            "type": "text",
            "title": "Information",
            "body": "Detailed specifications, sizing, and procurement information are available on request."
          }
        ]
      },
      {
        "id": "shakti-level-iv-bulletproof-jacket",
        "name": "Shakti Level IV bulletproof Jacket",
        "description": "Highest protection ballistic outerwear platform for extreme-threat environments.",
        "imageSrc": "/images/2. Defence Page/Shakti-Level-Iv-bulletproof-Jacket.png",
        "imageAlt": "Shakti Level IV bulletproof Jacket",
        "categoryName": "Jackets & Outerwear",
        "details": [
          {
            "type": "text",
            "title": "Overview",
            "body": "Highest protection ballistic outerwear platform for extreme-threat environments."
          },
          {
            "type": "text",
            "title": "Information",
            "body": "Detailed specifications, sizing, and procurement information are available on request."
          }
        ]
      },
      {
        "id": "shakti-tactical-jacket",
        "name": "Shakti Tactical Jacket",
        "description": "Tactical protective jacket adapted for operational mobility and field readiness.",
        "imageSrc": "/images/2. Defence Page/Shakti-Tactical-Jacket.png",
        "imageAlt": "Shakti Tactical Jacket",
        "categoryName": "Jackets & Outerwear",
        "details": [
          {
            "type": "text",
            "title": "Overview",
            "body": "Tactical protective jacket adapted for operational mobility and field readiness."
          },
          {
            "type": "text",
            "title": "Information",
            "body": "Detailed specifications, sizing, and procurement information are available on request."
          }
        ]
      }
    ]
  },
  {
    "id": "riot-control",
    "number": "05",
    "name": "Riot Control",
    "tagline": "Full-body impact armor, ballistic shields, and crowd mitigation solutions for public safety forces.",
    "products": [
      {
        "id": "riot-shield",
        "name": "Riot Shield",
        "description": "Protective shield solution for public order response and controlled engagement.",
        "imageSrc": "/images/2. Defence Page/Riot-Shield.png",
        "imageAlt": "Riot Shield",
        "categoryName": "Riot Control",
        "details": [
          {
            "type": "text",
            "title": "Overview",
            "body": "Protective shield solution for public order response and controlled engagement."
          },
          {
            "type": "text",
            "title": "Information",
            "body": "Detailed specifications, sizing, and procurement information are available on request."
          }
        ]
      },
      {
        "id": "vajra-riot-control-female-suit",
        "name": "Vajra Riot Control Female Suit",
        "description": "Riot-control protective suit structured for female response personnel.",
        "imageSrc": "/images/2. Defence Page/Vajra-Riot-Control-Female-Suit.png",
        "imageAlt": "Vajra Riot Control Female Suit",
        "categoryName": "Riot Control",
        "details": [
          {
            "type": "text",
            "title": "Overview",
            "body": "Riot-control protective suit structured for female response personnel."
          },
          {
            "type": "text",
            "title": "Information",
            "body": "Detailed specifications, sizing, and procurement information are available on request."
          }
        ]
      },
      {
        "id": "vajra-riot-control-male-suit",
        "name": "Vajra Riot Control Male Suit",
        "description": "Male-oriented protective suit built for frontline crowd-response teams.",
        "imageSrc": "/images/2. Defence Page/Vajra-Riot-Control-Male-Suit.png",
        "imageAlt": "Vajra Riot Control Male Suit",
        "categoryName": "Riot Control",
        "details": [
          {
            "type": "text",
            "title": "Overview",
            "body": "Male-oriented protective suit built for frontline crowd-response teams."
          },
          {
            "type": "text",
            "title": "Information",
            "body": "Detailed specifications, sizing, and procurement information are available on request."
          }
        ]
      },
      {
        "id": "vajra-riot-control-suit",
        "name": "Vajra Riot Control Suit",
        "description": "Protective suit system intended for riot control and public order deployment.",
        "imageSrc": "/images/2. Defence Page/Vajra-Riot-Control-Suit.png",
        "imageAlt": "Vajra Riot Control Suit",
        "categoryName": "Riot Control",
        "details": [
          {
            "type": "text",
            "title": "Overview",
            "body": "Protective suit system intended for riot control and public order deployment."
          },
          {
            "type": "text",
            "title": "Information",
            "body": "Detailed specifications, sizing, and procurement information are available on request."
          }
        ]
      }
    ]
  },
  {
    "id": "impact-tools",
    "number": "06",
    "name": "Impact Tools",
    "tagline": "Tactical batons, electro-shock deterrents, and non-lethal crowd mitigation implements.",
    "products": [
      {
        "id": "dandd-stun-baton",
        "name": "Dandd Stun Baton",
        "description": "Crowd-restraint stun baton designed for controlled activation and patrol.",
        "imageSrc": "/images/2. Defence Page/Dandd-Stun-Baton.png",
        "imageAlt": "Dandd Stun Baton",
        "categoryName": "Impact Tools",
        "details": [
          {
            "type": "text",
            "title": "Overview",
            "body": "Crowd-restraint stun baton designed for controlled activation and patrol."
          },
          {
            "type": "text",
            "title": "Information",
            "body": "Detailed specifications, sizing, and procurement information are available on request."
          }
        ]
      },
      {
        "id": "vajra-stun-baton",
        "name": "Vajra Stun Baton",
        "description": "High-power stun baton platform intended for security, control, and field operations.",
        "imageSrc": "/images/2. Defence Page/Vajra-Stun-Baton.png",
        "imageAlt": "Vajra Stun Baton",
        "categoryName": "Impact Tools",
        "details": [
          {
            "type": "text",
            "title": "Overview",
            "body": "High-power stun baton platform intended for security, control, and field operations."
          },
          {
            "type": "text",
            "title": "Information",
            "body": "Detailed specifications, sizing, and procurement information are available on request."
          }
        ]
      }
    ]
  }
];
