// Base de données complète des projets CTRP
// Données importées depuis l'ancien site avec placeholders pour images

// Type pour les chaînes traduites
export type TranslatedString = {
  fr: string;
  pt: string;
  en: string;
};

export interface ProjectData {
  id: string;
  code: string;
  title: TranslatedString;
  type: 'Rénovations' | 'Neufs' | 'Habitations' | 'Services';
  typeTranslated: TranslatedString;
  category: TranslatedString;
  intervention: TranslatedString;
  projectScope: TranslatedString;
  location: {
    district?: string;
    city: string;
    country: string;
    fullLocation: string;
  };
  timeline: {
    startYear: number;
    endYear: number;
    duration: string;
  };
  specifications: {
    area: string;
    garden?: string;
    budget: TranslatedString;
    rooms?: number;
    floors?: number;
  };
  descriptions: {
    short: TranslatedString;
    long: TranslatedString;
    concept?: TranslatedString;
    technicalSolutions?: TranslatedString;
  };
  images: {
    hero: string;
    gallery: string[];
  };
  status: 'completed' | 'in-progress' | 'planned';
  featured: boolean;
  tags: string[];
}

export const projectsDatabase: ProjectData[] = [
  // ✅ Projet 1 - DJS20
  {
    id: 'djs20',
    code: 'DJS20',
    title: { fr: 'Maison DJS20', pt: 'Casa DJS20', en: 'House DJS20' },
    type: 'Habitations',
    typeTranslated: { fr: 'Habitations', pt: 'Habitações', en: 'Residential' },
    category: { fr: 'Réhabilitation', pt: 'Reabilitação', en: 'Rehabilitation' },
    intervention: { fr: 'Rénovation et extension', pt: 'Renovação e ampliação', en: 'Renovation and extension' },
    projectScope: { fr: 'Projet et chantier', pt: 'Projeto e obra', en: 'Project and construction' },
    location: {
      district: 'Restelo',
      city: 'Lisboa',
      country: 'Portugal',
      fullLocation: 'Restelo, Lisboa'
    },
    timeline: {
      startYear: 2013,
      endYear: 2017,
      duration: '2013-2017'
    },
    specifications: {
      area: '150 m²',
      garden: '70 m²',
      budget: { fr: '250.000€', pt: '250.000€', en: '€250,000' },
      rooms: 5,
      floors: 2
    },
    descriptions: {
      short: {
        fr: 'Villa M5 - Rénovation et extension d\'une habitation familiale',
        pt: 'Moradia M5 - Renovação e ampliação de habitação familiar',
        en: 'M5 Villa - Renovation and extension of a family home'
      },
      long: {
        fr: 'Rénovation et agrandissement d\'une villa située dans le quartier social de Restelo, Lisbonne. L\'intervention visait à adapter la maison aux besoins des nouveaux occupants avec une augmentation de la superficie et réorganisation des espaces pour plus de fluidité et ouverture sur le jardin. Le grenier a été occupé.',
        pt: 'Renovação e ampliação de uma moradia localizada no bairro social do Restelo, Lisboa. A intervenção visou adaptar a casa às necessidades dos novos ocupantes com aumento da área e reorganização dos espaços para maior fluidez e abertura para o jardim. O sótão foi ocupado.',
        en: 'Renovation and extension of a villa located in the Restelo social neighbourhood, Lisbon. The intervention aimed to adapt the house to the needs of new occupants with increased area and reorganisation of spaces for greater fluidity and openness to the garden. The attic was converted.'
      }
    },
    images: {
      hero: '/images/djs20-hero.jpg',
      gallery: [
        '/images/djs20-gallery-1.jpg',
        '/images/djs20-gallery-2.jpg',
        '/images/djs20-gallery-3.jpg',
        '/images/djs20-gallery-4.jpg',
        '/images/djs20-gallery-5.jpg',
        '/images/djs20-gallery-6.jpg'
      ]
    },
    status: 'completed',
    featured: true,
    tags: ['villa', 'extension', 'jardin', 'suite', 'restelo']
  },

  // ✅ Projet 2 - PD25
  {
    id: 'pd25',
    code: 'PD25',
    title: { fr: 'Bâtiment PD25', pt: 'Edifício PD25', en: 'Building PD25' },
    type: 'Habitations',
    typeTranslated: { fr: 'Habitations', pt: 'Habitações', en: 'Residential' },
    category: { fr: 'Rénovation', pt: 'Renovação', en: 'Renovation' },
    intervention: { fr: 'Rénovation', pt: 'Renovação', en: 'Renovation' },
    projectScope: { fr: 'Projet et chantier', pt: 'Projeto e obra', en: 'Project and construction' },
    location: {
      district: 'Cruz Quebrada',
      city: 'Oeiras',
      country: 'Portugal',
      fullLocation: 'Cruz Quebrada, Oeiras'
    },
    timeline: {
      startYear: 2017,
      endYear: 2018,
      duration: '2017-2018'
    },
    specifications: {
      area: '90 m²',
      budget: { fr: '100.000€', pt: '100.000€', en: '€100,000' },
      floors: 3
    },
    descriptions: {
      short: {
        fr: 'Bâtiment avec deux appartements T0+T2 - Rénovation complète',
        pt: 'Edifício com dois apartamentos T0+T2 - Renovação completa',
        en: 'Building with two apartments T0+T2 - Complete renovation'
      },
      long: {
        fr: 'Rénovation d\'un bâtiment de trois étages à Dafundo, Oeiras. Transformation du rez-de-chaussée en studio, réouverture d\'un patio, création d\'un petit duplex 2 chambres.',
        pt: 'Renovação de um edifício de três pisos em Dafundo, Oeiras. Transformação do rés-do-chão em estúdio, reabertura de um pátio, criação de um pequeno duplex de 2 quartos.',
        en: 'Renovation of a three-storey building in Dafundo, Oeiras. Ground floor transformation into studio, patio reopening, creation of a small 2-bedroom duplex.'
      }
    },
    images: {
      hero: '/images/pexels-1643383-luxury-house.jpeg',
      gallery: [
        '/images/pexels-2029673-architecture.jpeg',
        '/images/pexels-1396122-modern-house.jpeg',
        '/images/pexels-2343465-bathroom.jpeg',
        '/images/pexels-1438832-bedroom.jpeg'
      ]
    },
    status: 'completed',
    featured: false,
    tags: ['duplex', 'studio', 'patio', 'oeiras']
  },

  // ✅ Projet 3 - SM30P4
  {
    id: 'sm30p4',
    code: 'SM30P4',
    title: { fr: 'Studio Alfama', pt: 'Estúdio Alfama', en: 'Alfama Studio' },
    type: 'Habitations',
    typeTranslated: { fr: 'Habitations', pt: 'Habitações', en: 'Residential' },
    category: { fr: 'Rénovation', pt: 'Renovação', en: 'Renovation' },
    intervention: { fr: 'Rénovation', pt: 'Renovação', en: 'Renovation' },
    projectScope: { fr: 'Achat, projet, chantier et bail', pt: 'Compra, projeto, obra e arrendamento', en: 'Purchase, project, construction and lease' },
    location: {
      district: 'Alfama',
      city: 'Lisboa',
      country: 'Portugal',
      fullLocation: 'Alfama, Lisboa'
    },
    timeline: {
      startYear: 2013,
      endYear: 2013,
      duration: '2013'
    },
    specifications: {
      area: '25 m²',
      budget: { fr: '40.000€', pt: '40.000€', en: '€40,000' },
      rooms: 1
    },
    descriptions: {
      short: {
        fr: 'Appartement T0 - Rénovation complète d\'un comble',
        pt: 'Apartamento T0 - Renovação completa de sótão',
        en: 'T0 Apartment - Complete attic renovation'
      },
      long: {
        fr: 'Rénovation complète d\'un comble à Alfama, Lisbonne, en collaboration avec LxB. Création d\'un petit studio sous toiture mal agencée, avec correction de la structure et gain de volume.',
        pt: 'Renovação completa de um sótão em Alfama, Lisboa, em colaboração com LxB. Criação de um pequeno estúdio sob cobertura mal organizada, com correção da estrutura e ganho de volume.',
        en: 'Complete renovation of an attic in Alfama, Lisbon, in collaboration with LxB. Creation of a small studio under poorly arranged roofing, with structure correction and volume gain.'
      }
    },
    images: {
      hero: '/images/pexels-2029673-architecture.jpeg',
      gallery: [
        '/images/pexels-1571460-interior.jpeg',
        '/images/pexels-1370704-living-room.jpeg',
        '/images/pexels-2724749-dining-room.jpeg'
      ]
    },
    status: 'completed',
    featured: false,
    tags: ['studio', 'combles', 'alfama', 'structure']
  },

  // ✅ Projet 4 - RF5A9
  {
    id: 'rf5a9',
    code: 'RF5A9',
    title: { fr: 'Appartement Cabanas', pt: 'Apartamento Cabanas', en: 'Cabanas Apartment' },
    type: 'Habitations',
    typeTranslated: { fr: 'Habitations', pt: 'Habitações', en: 'Residential' },
    category: { fr: 'Rénovation', pt: 'Renovação', en: 'Renovation' },
    intervention: { fr: 'Rénovation', pt: 'Renovação', en: 'Renovation' },
    projectScope: { fr: 'Projet et chantier', pt: 'Projeto e obra', en: 'Project and construction' },
    location: {
      city: 'Cabanas de Tavira',
      country: 'Portugal',
      fullLocation: 'Cabanas de Tavira, Portugal'
    },
    timeline: {
      startYear: 2010,
      endYear: 2010,
      duration: '2010'
    },
    specifications: {
      area: '65 m²',
      budget: { fr: '12.000€', pt: '12.000€', en: '€12,000' },
      rooms: 1
    },
    descriptions: {
      short: {
        fr: 'T1 - Réaménagement d\'appartement de vacances',
        pt: 'T1 - Remodelação de apartamento de férias',
        en: 'T1 - Holiday apartment renovation'
      },
      long: {
        fr: 'Réaménagement d\'un appartement de vacances datant des années 80 avec rénovation salle de bain, cuisine et sols, budget restreint, solutions simples mais résistantes.',
        pt: 'Remodelação de um apartamento de férias dos anos 80 com renovação de casa de banho, cozinha e pavimentos, orçamento limitado, soluções simples mas resistentes.',
        en: 'Renovation of an 80s holiday apartment with bathroom, kitchen and floor renovation, limited budget, simple but durable solutions.'
      }
    },
    images: {
      hero: '/images/pexels-1571460-interior.jpeg',
      gallery: [
        '/images/pexels-1370704-living-room.jpeg',
        '/images/pexels-2343465-bathroom.jpeg',
        '/images/pexels-1438832-bedroom.jpeg'
      ]
    },
    status: 'completed',
    featured: false,
    tags: ['vacances', 'budget', 'tavira', 'renovation']
  },

  // ✅ Projet 5 - QF8P5D
  {
    id: 'qf8p5d',
    code: 'QF8P5D',
    title: { fr: 'Appartement Alameda', pt: 'Apartamento Alameda', en: 'Alameda Apartment' },
    type: 'Habitations',
    typeTranslated: { fr: 'Habitations', pt: 'Habitações', en: 'Residential' },
    category: { fr: 'Rénovation', pt: 'Renovação', en: 'Renovation' },
    intervention: { fr: 'Rénovation', pt: 'Renovação', en: 'Renovation' },
    projectScope: { fr: 'Achat, projet, chantier et vente', pt: 'Compra, projeto, obra e venda', en: 'Purchase, project, construction and sale' },
    location: {
      district: 'Alameda',
      city: 'Lisboa',
      country: 'Portugal',
      fullLocation: 'Alameda, Lisboa'
    },
    timeline: {
      startYear: 2009,
      endYear: 2013,
      duration: '2009-2013'
    },
    specifications: {
      area: '70 m²',
      budget: { fr: '35.000€', pt: '35.000€', en: '€35,000' },
      rooms: 2
    },
    descriptions: {
      short: {
        fr: 'Appartement T2 - Rénovation sous toiture',
        pt: 'Apartamento T2 - Renovação sob cobertura',
        en: 'T2 Apartment - Under-roof renovation'
      },
      long: {
        fr: 'Rénovation d\'un appartement sous toiture en très mauvais état, intervention sur la structure du toit et les murs, réorganisation pour créer un salon ouvert et supprimer des chambres intérieures.',
        pt: 'Renovação de um apartamento sob cobertura em muito mau estado, intervenção na estrutura do telhado e paredes, reorganização para criar uma sala aberta e eliminar quartos interiores.',
        en: 'Renovation of an under-roof apartment in very poor condition, intervention on roof structure and walls, reorganisation to create open living room and remove interior bedrooms.'
      }
    },
    images: {
      hero: '/images/pexels-1370704-living-room.jpeg',
      gallery: [
        '/images/pexels-2343465-bathroom.jpeg',
        '/images/pexels-1438832-bedroom.jpeg',
        '/images/pexels-2724749-dining-room.jpeg'
      ]
    },
    status: 'completed',
    featured: false,
    tags: ['toiture', 'structure', 'alameda', 'salon-ouvert']
  },

  // ✅ Projet 6 - PGT7P4D
  {
    id: 'pgt7p4d',
    code: 'PGT7P4D',
    title: { fr: 'Appartement Campo Ourique', pt: 'Apartamento Campo Ourique', en: 'Campo Ourique Apartment' },
    type: 'Rénovations',
    typeTranslated: { fr: 'Rénovations', pt: 'Renovações', en: 'Renovations' },
    category: { fr: 'Rénovation', pt: 'Renovação', en: 'Renovation' },
    intervention: { fr: 'Rénovation', pt: 'Renovação', en: 'Renovation' },
    projectScope: { fr: 'Projet et chantier', pt: 'Projeto e obra', en: 'Project and construction' },
    location: {
      district: 'Campo Ourique',
      city: 'Lisboa',
      country: 'Portugal',
      fullLocation: 'Campo Ourique, Lisboa'
    },
    timeline: {
      startYear: 2016,
      endYear: 2016,
      duration: '2016'
    },
    specifications: {
      area: '70 m²',
      budget: { fr: '30.000€', pt: '30.000€', en: '€30,000' },
      rooms: 2
    },
    descriptions: {
      short: {
        fr: 'Appartement T2 - Modernisation années 50',
        pt: 'Apartamento T2 - Modernização anos 50',
        en: 'T2 Apartment - 1950s modernisation'
      },
      long: {
        fr: 'Rénovation d\'un appartement des années 50, mise à jour cuisine et salle de bain, matériaux simples déjà existants, modernisation avec respect du mobilier initial.',
        pt: 'Renovação de um apartamento dos anos 50, atualização de cozinha e casa de banho, materiais simples já existentes, modernização respeitando o mobiliário original.',
        en: 'Renovation of a 1950s apartment, kitchen and bathroom update, simple existing materials, modernisation respecting original furniture.'
      }
    },
    images: {
      hero: '/images/pexels-2343465-bathroom.jpeg',
      gallery: [
        '/images/pexels-1438832-bedroom.jpeg',
        '/images/pexels-2724749-dining-room.jpeg',
        '/images/pexels-1396132-office.jpeg'
      ]
    },
    status: 'completed',
    featured: false,
    tags: ['annees-50', 'modernisation', 'campo-ourique', 'mobilier']
  },

  // ✅ Projet 7 - PF111A
  {
    id: 'pf111a',
    code: 'PF111A',
    title: { fr: 'Loft Penha França', pt: 'Loft Penha França', en: 'Penha França Loft' },
    type: 'Services',
    typeTranslated: { fr: 'Services', pt: 'Serviços', en: 'Services' },
    category: { fr: 'Conversion', pt: 'Conversão', en: 'Conversion' },
    intervention: { fr: 'Conversion', pt: 'Conversão', en: 'Conversion' },
    projectScope: { fr: 'Achat, projet, chantier', pt: 'Compra, projeto, obra', en: 'Purchase, project, construction' },
    location: {
      district: 'Penha de França',
      city: 'Lisboa',
      country: 'Portugal',
      fullLocation: 'Penha de França, Lisboa'
    },
    timeline: {
      startYear: 2018,
      endYear: 2018,
      duration: '2018'
    },
    specifications: {
      area: '120 m²',
      budget: { fr: '80.000€', pt: '80.000€', en: '€80,000' }
    },
    descriptions: {
      short: {
        fr: 'Loft ou atelier - Conversion d\'entrepôt',
        pt: 'Loft ou atelier - Conversão de armazém',
        en: 'Loft or studio - Warehouse conversion'
      },
      long: {
        fr: 'Conversion d\'un entrepôt en loft avec jardin et patio d\'entrée pour améliorer l\'éclairage et l\'intimité, espace flexible et lumineux.',
        pt: 'Conversão de um armazém em loft com jardim e pátio de entrada para melhorar a iluminação e privacidade, espaço flexível e luminoso.',
        en: 'Warehouse conversion into loft with garden and entrance patio to improve lighting and privacy, flexible and bright space.'
      }
    },
    images: {
      hero: '/images/pexels-1438832-bedroom.jpeg',
      gallery: [
        '/images/pexels-2724749-dining-room.jpeg',
        '/images/pexels-1396132-office.jpeg',
        '/images/pexels-1396122-modern-house.jpeg'
      ]
    },
    status: 'completed',
    featured: false,
    tags: ['loft', 'entrepot', 'jardin', 'atelier']
  },

  // ✅ Projet 8 - PA6P8
  {
    id: 'pa6p8',
    code: 'PA6P8',
    title: { fr: 'Appartement Alvalade', pt: 'Apartamento Alvalade', en: 'Alvalade Apartment' },
    type: 'Habitations',
    typeTranslated: { fr: 'Habitations', pt: 'Habitações', en: 'Residential' },
    category: { fr: 'Rénovation', pt: 'Renovação', en: 'Renovation' },
    intervention: { fr: 'Rénovation', pt: 'Renovação', en: 'Renovation' },
    projectScope: { fr: 'Achat, projet, chantier', pt: 'Compra, projeto, obra', en: 'Purchase, project, construction' },
    location: {
      district: 'Alvalade',
      city: 'Lisboa',
      country: 'Portugal',
      fullLocation: 'Alvalade, Lisboa'
    },
    timeline: {
      startYear: 2007,
      endYear: 2009,
      duration: '2007-2009'
    },
    specifications: {
      area: '140 m²',
      garden: '70 m²',
      budget: { fr: '150.000€', pt: '150.000€', en: '€150,000' },
      rooms: 5
    },
    descriptions: {
      short: {
        fr: 'Appartement T4+1 - Rénovation années 60 avec terrasse',
        pt: 'Apartamento T4+1 - Renovação anos 60 com terraço',
        en: 'T4+1 Apartment - 1960s renovation with terrace'
      },
      long: {
        fr: 'Rénovation d\'un appartement des années 60, ouverture des espaces pour fluidité et luminosité, modernisation des finitions et équipements, ouverture vers la terrasse.',
        pt: 'Renovação de um apartamento dos anos 60, abertura dos espaços para fluidez e luminosidade, modernização dos acabamentos e equipamentos, abertura para o terraço.',
        en: 'Renovation of a 1960s apartment, opening spaces for fluidity and light, modernisation of finishes and equipment, opening to the terrace.'
      }
    },
    images: {
      hero: '/images/pexels-2724749-dining-room.jpeg',
      gallery: [
        '/images/pexels-1396132-office.jpeg',
        '/images/pexels-1396122-modern-house.jpeg',
        '/images/pexels-1643383-luxury-house.jpeg'
      ]
    },
    status: 'completed',
    featured: false,
    tags: ['terrasse', 'annees-60', 'alvalade', 'fluidite']
  },

  // ✅ Projet 9 - P58
  {
    id: 'p58',
    code: 'P58',
    title: { fr: 'Villa Penina', pt: 'Moradia Penina', en: 'Penina Villa' },
    type: 'Neufs',
    typeTranslated: { fr: 'Neufs', pt: 'Novos', en: 'New' },
    category: { fr: 'Construction Neuve', pt: 'Construção Nova', en: 'New Construction' },
    intervention: { fr: 'Construction neuve', pt: 'Construção nova', en: 'New construction' },
    projectScope: { fr: 'En projet', pt: 'Em projeto', en: 'In project' },
    location: {
      district: 'Penina',
      city: 'Alvor',
      country: 'Portugal',
      fullLocation: 'Penina, Alvor'
    },
    timeline: {
      startYear: 2018,
      endYear: 2024,
      duration: '2018-'
    },
    specifications: {
      area: '620 m²',
      budget: { fr: '560.000€ (estimation)', pt: '560.000€ (estimativa)', en: '€560,000 (estimate)' },
      rooms: 6,
      floors: 2
    },
    descriptions: {
      short: {
        fr: 'Villa V6 - Projet construction neuve dans golf',
        pt: 'Moradia V6 - Projeto de construção nova em golfe',
        en: 'V6 Villa - New construction project in golf course'
      },
      long: {
        fr: 'Projet d\'une villa V6 dans le golf de Penina à Alvor. Deux étages, espace social au rez-de-chaussée, chambres et bureaux à l\'étage, patios aux extrémités et salon en double hauteur.',
        pt: 'Projeto de uma moradia V6 no golfe de Penina em Alvor. Dois pisos, espaço social no rés-do-chão, quartos e escritórios no andar, pátios nas extremidades e sala com pé-direito duplo.',
        en: 'V6 villa project in Penina golf course in Alvor. Two floors, social space on ground floor, bedrooms and offices upstairs, patios at ends and double-height living room.'
      }
    },
    images: {
      hero: '/images/pexels-1396132-office.jpeg',
      gallery: [
        '/images/pexels-1396122-modern-house.jpeg',
        '/images/pexels-1643383-luxury-house.jpeg',
        '/images/pexels-2029673-architecture.jpeg'
      ]
    },
    status: 'in-progress',
    featured: true,
    tags: ['villa', 'golf', 'neuf', 'double-hauteur']
  },

  // ✅ Projet 10 - MA51-53
  {
    id: 'ma51-53',
    code: 'MA51-53',
    title: { fr: 'Bâtiment Madragoa', pt: 'Edifício Madragoa', en: 'Madragoa Building' },
    type: 'Habitations',
    typeTranslated: { fr: 'Habitations', pt: 'Habitações', en: 'Residential' },
    category: { fr: 'Rénovation', pt: 'Renovação', en: 'Renovation' },
    intervention: { fr: 'Rénovation', pt: 'Renovação', en: 'Renovation' },
    projectScope: { fr: 'Achat, projet, chantier et location', pt: 'Compra, projeto, obra e arrendamento', en: 'Purchase, project, construction and rental' },
    location: {
      district: 'Madragoa',
      city: 'Lisboa',
      country: 'Portugal',
      fullLocation: 'Madragoa, Lisboa'
    },
    timeline: {
      startYear: 2007,
      endYear: 2012,
      duration: '2007-2012'
    },
    specifications: {
      area: '80 m²',
      budget: { fr: '18.000€', pt: '18.000€', en: '€18,000' },
      floors: 3
    },
    descriptions: {
      short: {
        fr: 'Bâtiment avec 2 appartements T0+T1 - Rénovation complète',
        pt: 'Edifício com 2 apartamentos T0+T1 - Renovação completa',
        en: 'Building with 2 apartments T0+T1 - Complete renovation'
      },
      long: {
        fr: 'Rénovation d\'un petit bâtiment de trois étages comprenant un duplex avec sous-sol et un studio, assainissement global, rénovation des salles de bain et réouverture d\'une cour.',
        pt: 'Renovação de um pequeno edifício de três pisos incluindo um duplex com cave e um estúdio, saneamento global, renovação das casas de banho e reabertura de um pátio.',
        en: 'Renovation of a small three-storey building including a duplex with basement and a studio, overall sanitation, bathroom renovation and courtyard reopening.'
      }
    },
    images: {
      hero: '/images/pexels-1396122-modern-house.jpeg',
      gallery: [
        '/images/pexels-1643383-luxury-house.jpeg',
        '/images/pexels-2029673-architecture.jpeg',
        '/images/pexels-1571460-interior.jpeg'
      ]
    },
    status: 'completed',
    featured: true,
    tags: ['duplex', 'studio', 'cour', 'madragoa']
  },

  // ✅ Projet 11 - GR141P1F
  {
    id: 'gr141p1f',
    code: 'GR141P1F',
    title: { fr: 'Logement T1', pt: 'Habitação T1', en: 'T1 Housing' },
    type: 'Habitations',
    typeTranslated: { fr: 'Habitations', pt: 'Habitações', en: 'Residential' },
    category: { fr: 'Rénovation', pt: 'Renovação', en: 'Renovation' },
    intervention: { fr: 'Rénovation', pt: 'Renovação', en: 'Renovation' },
    projectScope: { fr: 'Projet et chantier', pt: 'Projeto e obra', en: 'Project and construction' },
    location: {
      district: 'Penha de França',
      city: 'Lisboa',
      country: 'Portugal',
      fullLocation: 'Penha de França, Lisboa'
    },
    timeline: {
      startYear: 2017,
      endYear: 2017,
      duration: '2017'
    },
    specifications: {
      area: '-',
      budget: { fr: '-', pt: '-', en: '-' },
      rooms: 1
    },
    descriptions: {
      short: {
        fr: 'Logement T1 - Rénovation dans quartier résidentiel',
        pt: 'Habitação T1 - Renovação em bairro residencial',
        en: 'T1 Housing - Renovation in residential neighbourhood'
      },
      long: {
        fr: 'Projet de rénovation d\'un appartement T1 situé dans le quartier de Penha de França à Lisbonne. Intervention ciblée pour optimiser l\'espace et moderniser les équipements.',
        pt: 'Projeto de renovação de um apartamento T1 localizado no bairro de Penha de França em Lisboa. Intervenção direcionada para otimizar o espaço e modernizar os equipamentos.',
        en: 'Renovation project of a T1 apartment located in Penha de França neighbourhood in Lisbon. Targeted intervention to optimise space and modernise equipment.'
      }
    },
    images: {
      hero: '/images/pexels-2724749-dining-room.jpeg',
      gallery: [
        '/images/pexels-1396132-office.jpeg',
        '/images/pexels-1396122-modern-house.jpeg',
        '/images/pexels-1643383-luxury-house.jpeg'
      ]
    },
    status: 'completed',
    featured: false,
    tags: ['t1', 'penha-franca', 'renovation', 'urbain']
  },

  // ✅ Projet 12 - CF11
  {
    id: 'cf11',
    code: 'CF11',
    title: { fr: 'Loft & Atelier CF11', pt: 'Loft & Atelier CF11', en: 'Loft & Studio CF11' },
    type: 'Services',
    typeTranslated: { fr: 'Services', pt: 'Serviços', en: 'Services' },
    category: { fr: 'Conversion', pt: 'Conversão', en: 'Conversion' },
    intervention: { fr: 'Reconversion', pt: 'Reconversão', en: 'Reconversion' },
    projectScope: { fr: 'Projet et chantier', pt: 'Projeto e obra', en: 'Project and construction' },
    location: {
      district: 'Penha de França',
      city: 'Lisboa',
      country: 'Portugal',
      fullLocation: 'Penha de França, Lisboa'
    },
    timeline: {
      startYear: 2018,
      endYear: 2018,
      duration: '2018'
    },
    specifications: {
      area: '180 m²',
      budget: { fr: '120.000€', pt: '120.000€', en: '€120,000' }
    },
    descriptions: {
      short: {
        fr: 'Loft ou atelier - Reconversion d\'entrepôt avec cour',
        pt: 'Loft ou atelier - Reconversão de armazém com pátio',
        en: 'Loft or studio - Warehouse reconversion with courtyard'
      },
      long: {
        fr: 'Reconversion d\'un entrepôt dans un atelier et un loft. Deux espaces au rez-de-chaussée d\'un bâtiment de logement. L\'un est un petit magasin avec un sous-sol ; l\'autre est un entrepôt s\'étendant sur tout le terrain. Le projet prévoit l\'ouverture d\'une cour à l\'extrémité opposée pour éclairage et ventilation, le maintien de deux espaces indépendants et un patio arrière. Le magasin devrait devenir un loft ou un bureau ; dans l\'entrepôt, l\'atelier de CTRP.',
        pt: 'Reconversão de um armazém em atelier e loft. Dois espaços no rés-do-chão de um edifício de habitação. Um é uma pequena loja com cave; o outro é um armazém que se estende por todo o terreno. O projeto prevê a abertura de um pátio na extremidade oposta para iluminação e ventilação, a manutenção de dois espaços independentes e um pátio traseiro. A loja deverá tornar-se um loft ou escritório; no armazém, o atelier da CTRP.',
        en: 'Warehouse reconversion into studio and loft. Two spaces on the ground floor of a housing building. One is a small shop with basement; the other is a warehouse extending across the entire plot. The project includes opening a courtyard at the opposite end for lighting and ventilation, maintaining two independent spaces and a rear patio. The shop should become a loft or office; in the warehouse, CTRP\'s studio.'
      }
    },
    images: {
      hero: '/images/pexels-1438832-bedroom.jpeg',
      gallery: [
        '/images/pexels-2724749-dining-room.jpeg',
        '/images/pexels-1396132-office.jpeg',
        '/images/pexels-1396122-modern-house.jpeg',
        '/images/pexels-1643383-luxury-house.jpeg'
      ]
    },
    status: 'completed',
    featured: false,
    tags: ['loft', 'atelier', 'entrepot', 'cour', 'ctrp-office']
  },

  // ✅ Projet 13 - A12P3E
  {
    id: 'a12p3e',
    code: 'A12P3E',
    title: { fr: 'Appartement Santa Catarina', pt: 'Apartamento Santa Catarina', en: 'Santa Catarina Apartment' },
    type: 'Habitations',
    typeTranslated: { fr: 'Habitations', pt: 'Habitações', en: 'Residential' },
    category: { fr: 'Rénovation', pt: 'Renovação', en: 'Renovation' },
    intervention: { fr: 'Rénovation', pt: 'Renovação', en: 'Renovation' },
    projectScope: { fr: 'Projet et chantier', pt: 'Projeto e obra', en: 'Project and construction' },
    location: {
      district: 'Santa Catarina',
      city: 'Lisboa',
      country: 'Portugal',
      fullLocation: 'Santa Catarina, Lisboa'
    },
    timeline: {
      startYear: 2001,
      endYear: 2002,
      duration: '2001-2002'
    },
    specifications: {
      area: '70 m²',
      budget: { fr: '35.000€', pt: '35.000€', en: '€35,000' },
      rooms: 3
    },
    descriptions: {
      short: {
        fr: 'Logement T2+1 - Rénovation début XXe siècle',
        pt: 'Habitação T2+1 - Renovação início séc. XX',
        en: 'T2+1 Housing - Early 20th century renovation'
      },
      long: {
        fr: 'Rénovation d\'un appartement à Santa Catarina, Lisbonne. Appartement dans un bâtiment du début du XXe s. L\'intervention a créé une salle de bain, une cuisine fonctionnelle et augmenté les compartiments en façade au détriment des intérieurs.',
        pt: 'Renovação de um apartamento em Santa Catarina, Lisboa. Apartamento num edifício do início do séc. XX. A intervenção criou uma casa de banho, uma cozinha funcional e aumentou os compartimentos na fachada em detrimento dos interiores.',
        en: 'Apartment renovation in Santa Catarina, Lisbon. Apartment in an early 20th century building. The intervention created a bathroom, functional kitchen and increased façade compartments at the expense of interior ones.'
      }
    },
    images: {
      hero: '/images/pexels-1396122-modern-house.jpeg',
      gallery: [
        '/images/pexels-1643383-luxury-house.jpeg',
        '/images/pexels-2029673-architecture.jpeg',
        '/images/pexels-1571460-interior.jpeg',
        '/images/pexels-1370704-living-room.jpeg'
      ]
    },
    status: 'completed',
    featured: false,
    tags: ['xxe-siecle', 'santa-catarina', 'facade', 'historique']
  }
];

// Fonctions utilitaires
export const getProjectsByType = (type: ProjectData['type']) => {
  return projectsDatabase.filter(project => project.type === type);
};

export const getFeaturedProjects = () => {
  return projectsDatabase.filter(project => project.featured);
};

export const getProjectById = (id: string) => {
  return projectsDatabase.find(project => project.id === id);
};

export const getAllProjects = () => {
  return projectsDatabase;
};

export const getProjectsByStatus = (status: ProjectData['status']) => {
  return projectsDatabase.filter(project => project.status === status);
};

export const getProjectsByLocation = (city: string) => {
  return projectsDatabase.filter(project =>
    project.location.city.toLowerCase().includes(city.toLowerCase())
  );
};

// Fonction pour récupérer les projets les plus récents
export const getRecentProjects = (limit: number = 3) => {
  return projectsDatabase
    .sort((a, b) => {
      if (b.timeline.endYear !== a.timeline.endYear) {
        return b.timeline.endYear - a.timeline.endYear;
      }
      return b.timeline.startYear - a.timeline.startYear;
    })
    .slice(0, limit);
};

// Statistiques
export const getProjectStats = () => {
  const total = projectsDatabase.length;
  const completed = projectsDatabase.filter(p => p.status === 'completed').length;
  const inProgress = projectsDatabase.filter(p => p.status === 'in-progress').length;
  const byType = {
    renovations: getProjectsByType('Rénovations').length,
    neufs: getProjectsByType('Neufs').length,
    habitations: getProjectsByType('Habitations').length,
    services: getProjectsByType('Services').length
  };

  return {
    total,
    completed,
    inProgress,
    byType
  };
};
