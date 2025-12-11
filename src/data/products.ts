import { Product, Category } from "@/types";

export const categories: Category[] = [
  {
    id: "tratamento-agua",
    name: "Tratamento de Água",
    description: "Produtos para tratamento e purificação de água",
    icon: "droplet",
  },
  {
    id: "piscinas",
    name: "Piscinas",
    description: "Soluções completas para manutenção de piscinas",
    icon: "waves",
  },
  {
    id: "industrial",
    name: "Industrial",
    description: "Produtos para aplicações industriais",
    icon: "factory",
  },
  {
    id: "limpeza",
    name: "Limpeza Profissional",
    description: "Produtos de limpeza e higienização",
    icon: "sparkles",
  },
];

export const products: Product[] = [
  {
    id: "hipoclorito-sodio-12",
    name: "Hipoclorito de Sódio 12%",
    description:
      "Solução de hipoclorito de sódio com 12% de cloro ativo, ideal para tratamento de água e desinfecção industrial. Produto principal da Discloro, amplamente utilizado para purificação e desinfecção em diversos segmentos.",
    category: "tratamento-agua",
    image: "/images/products/hipoclorito-12.jpg",
    applications: [
      "Tratamento de água potável em estações de tratamento (ETA)",
      "Desinfecção de reservatórios e caixas d'água",
      "Tratamento de efluentes industriais e sanitários",
      "Desinfecção de superfícies em indústrias alimentícias",
      "Branqueamento de papel e celulose",
      "Controle microbiológico em processos industriais",
    ],
    specifications: {
      concentration: "12% de cloro ativo",
      packaging: ["Bombona 50L", "Container 1000L", "Granel"],
      certifications: ["ANVISA", "INMETRO"],
    },
    usage: {
      instructions: [
        "Para tratamento de água potável: dosagem de 2-5 ppm (mg/L) de cloro livre residual",
        "Para desinfecção de reservatórios: 10-15 ppm, com tempo de contato mínimo de 30 minutos",
        "Diluir o produto em água antes da aplicação",
        "Aplicar preferencialmente com dosadores automáticos ou bombas dosadoras",
        "Realizar testes de cloro residual após aplicação para garantir eficácia",
        "Não misturar com outros produtos químicos, especialmente ácidos",
      ],
      dosage: "Varia conforme aplicação: 2-15 ppm para tratamento de água, até 200 ppm para desinfecção de superfícies",
    },
    storage: {
      conditions: [
        "Armazenar em local fresco, seco e bem ventilado",
        "Manter afastado de luz solar direta e fontes de calor",
        "Temperatura ideal de armazenamento: 15-25°C",
        "Manter embalagens bem fechadas quando não estiver em uso",
        "Armazenar afastado de ácidos, produtos inflamáveis e materiais orgânicos",
        "Não armazenar em recipientes metálicos (usar apenas plástico/polietileno)",
      ],
      shelfLife: "6 meses a partir da data de fabricação, se armazenado adequadamente",
    },
    safety: {
      ppe: [
        "Luvas de nitrila ou PVC",
        "Óculos de segurança ou protetor facial",
        "Avental ou roupa de proteção impermeável",
        "Botas de borracha (para manuseio de grandes volumes)",
        "Máscara com filtro para vapores em ambientes com pouca ventilação",
      ],
      warnings: [
        "Produto corrosivo - pode causar queimaduras na pele e olhos",
        "Em caso de contato com a pele, lavar imediatamente com água em abundância",
        "Em caso de contato com os olhos, lavar com água corrente por 15 minutos e procurar atendimento médico",
        "Não ingerir - em caso de ingestão, não provocar vômito e procurar atendimento médico imediatamente",
        "Usar apenas em áreas bem ventiladas",
        "Manter fora do alcance de crianças e animais domésticos",
        "Não misturar com produtos ácidos ou outros produtos de limpeza",
      ],
    },
  },
  {
    id: "hipoclorito-sodio-5",
    name: "Hipoclorito de Sódio 5%",
    description:
      "Solução de hipoclorito de sódio com 5% de cloro ativo, perfeito para uso doméstico e comercial. Versão diluída ideal para limpeza profissional e desinfecção de ambientes.",
    category: "limpeza",
    image: "/images/products/hipoclorito-5.jpg",
    applications: [
      "Limpeza e desinfecção de pisos, azulejos e superfícies",
      "Higienização de banheiros e áreas molhadas",
      "Desinfecção em hospitais, clínicas e consultórios",
      "Lavagem de roupas brancas e coloridas (diluído)",
      "Limpeza de cozinhas industriais e restaurantes",
      "Desinfecção de equipamentos e utensílios",
    ],
    specifications: {
      concentration: "5% de cloro ativo",
      packaging: ["Galão 5L", "Bombona 20L", "Bombona 50L"],
      certifications: ["ANVISA"],
    },
    usage: {
      instructions: [
        "Para desinfecção de superfícies: diluir 100ml em 10L de água (solução 0,05%)",
        "Para lavagem de roupas: adicionar 50ml por 10L de água no enxágue final",
        "Para limpeza de pisos: diluir 50-100ml em 10L de água",
        "Aplicar a solução diluída sobre a superfície limpa",
        "Deixar agir por 10-15 minutos",
        "Enxaguar com água limpa após o tempo de contato",
        "Não misturar com outros produtos de limpeza",
      ],
      dosage: "50-100ml por 10L de água para limpeza geral; 100ml por 10L para desinfecção",
    },
    storage: {
      conditions: [
        "Armazenar em local fresco, seco e bem ventilado",
        "Manter afastado de luz solar direta",
        "Temperatura ideal: 15-25°C",
        "Manter embalagem bem fechada",
        "Não armazenar próximo a alimentos",
        "Manter afastado de produtos ácidos e inflamáveis",
      ],
      shelfLife: "6 meses a partir da data de fabricação, se armazenado adequadamente",
    },
    safety: {
      ppe: [
        "Luvas de borracha ou nitrila",
        "Óculos de proteção (recomendado)",
        "Avental (para uso profissional)",
      ],
      warnings: [
        "Produto corrosivo - evitar contato com pele e olhos",
        "Em caso de contato com a pele, lavar com água em abundância",
        "Em caso de contato com os olhos, lavar com água por 15 minutos e procurar médico",
        "Não ingerir - manter fora do alcance de crianças",
        "Usar em ambientes ventilados",
        "Não misturar com produtos ácidos, vinagre ou outros produtos de limpeza",
        "Pode descolorir tecidos e superfícies coloridas - testar antes em área pequena",
      ],
    },
  },
  {
    id: "acido-sulfonico",
    name: "Ácido Sulfônico 90%",
    description:
      "Ácido sulfônico de alta concentração, matéria-prima essencial para fabricação de detergentes e produtos de limpeza.",
    category: "limpeza",
    image: "/images/products/acido-sulfonico.jpg",
    applications: [
      "Fabricação de detergentes líquidos",
      "Produção de produtos de limpeza industrial",
      "Base para formulações de limpeza",
    ],
    specifications: {
      concentration: "90%",
      packaging: ["Bombona 50L", "Container 1000L"],
      certifications: ["ANVISA"],
    },
  },
  {
    id: "amida",
    name: "Amida 60%",
    description:
      "Agente espessante e estabilizante de espuma para produtos de limpeza e detergentes.",
    category: "limpeza",
    image: "/images/products/amida.jpg",
    applications: [
      "Espessante para detergentes",
      "Estabilizante de espuma",
      "Formulação de produtos de limpeza",
    ],
    specifications: {
      concentration: "60%",
      packaging: ["Bombona 20L", "Bombona 50L"],
      certifications: ["ANVISA"],
    },
  },
  {
    id: "barrilha",
    name: "Barrilha Leve (Carbonato de Sódio)",
    description:
      "Carbonato de sódio para elevação de pH, alcalinidade da água e fabricação de produtos de limpeza.",
    category: "industrial",
    image: "/images/products/barrilha.jpg",
    applications: [
      "Elevação de pH",
      "Correção de alcalinidade",
      "Tratamento de água",
      "Fabricação de detergentes",
    ],
    specifications: {
      packaging: ["Saco 25kg", "Big Bag 1000kg"],
      certifications: ["ANVISA"],
    },
  },
  {
    id: "base-amaciante",
    name: "Base para Amaciante",
    description:
      "Base concentrada para fabricação de amaciantes de roupas com excelente performance.",
    category: "limpeza",
    image: "/images/products/base-amaciante.jpg",
    applications: [
      "Fabricação de amaciantes de roupas",
      "Produção de produtos para lavanderia",
      "Base para formulações aromáticas",
    ],
    specifications: {
      packaging: ["Bombona 20L", "Bombona 50L", "Container 1000L"],
      certifications: ["ANVISA"],
    },
  },
  {
    id: "base-detergente",
    name: "Base para Detergente",
    description:
      "Base concentrada para fabricação de detergentes líquidos de alta qualidade e eficiência.",
    category: "limpeza",
    image: "/images/products/base-detergente.jpg",
    applications: [
      "Fabricação de detergentes líquidos",
      "Produção de produtos para lavagem de louças",
      "Base para formulações de limpeza",
    ],
    specifications: {
      packaging: ["Bombona 20L", "Bombona 50L", "Container 1000L"],
      certifications: ["ANVISA"],
    },
  },
  {
    id: "bicromato-sodio",
    name: "Bicromato de Sódio Hidratado",
    description:
      "Produto químico industrial utilizado em processos de oxidação e tratamento de superfícies.",
    category: "industrial",
    image: "/images/products/bicromato-sodio.jpg",
    applications: [
      "Processos industriais de oxidação",
      "Tratamento de superfícies metálicas",
      "Aplicações químicas especializadas",
    ],
    specifications: {
      packaging: ["Saco 25kg"],
      certifications: ["ANVISA"],
    },
  },
  {
    id: "brancol",
    name: "Brancol 30%",
    description:
      "Agente alvejante e branqueador para produtos de limpeza e tratamento têxtil.",
    category: "limpeza",
    image: "/images/products/brancol.jpg",
    applications: [
      "Alvejamento de tecidos",
      "Branqueamento em processos têxteis",
      "Formulação de produtos de limpeza",
    ],
    specifications: {
      concentration: "30%",
      packaging: ["Bombona 20L", "Bombona 50L"],
      certifications: ["ANVISA"],
    },
  },
  {
    id: "cloreto-benzalconio",
    name: "Cloreto de Benzalcônico",
    description:
      "Agente bactericida e algicida de amplo espectro, ideal para desinfecção e formulação de produtos de limpeza.",
    category: "limpeza",
    image: "/images/products/cloreto-benzalconio.jpg",
    applications: [
      "Desinfecção de superfícies",
      "Controle de algas e bactérias",
      "Formulação de produtos sanitizantes",
      "Desinfecção hospitalar",
    ],
    specifications: {
      packaging: ["Bombona 20L", "Bombona 50L"],
      certifications: ["ANVISA"],
    },
  },
  {
    id: "corantes-po",
    name: "Corantes em Pó",
    description:
      "Corantes de alta qualidade para coloração de amaciantes, desinfetantes e detergentes em diversas tonalidades.",
    category: "limpeza",
    image: "/images/products/corantes.jpg",
    applications: [
      "Coloração de amaciantes de roupas",
      "Coloração de desinfetantes",
      "Coloração de detergentes líquidos",
      "Produtos de limpeza personalizados",
    ],
    specifications: {
      packaging: ["Pote 100g", "Pote 500g", "Pote 1kg"],
      certifications: ["ANVISA"],
    },
  },
  {
    id: "isobac-ig",
    name: "Isobac IG (Substituto do Formol)",
    description:
      "Conservante e bactericida alternativo ao formol, mais seguro e eficaz para produtos de limpeza e cosméticos.",
    category: "industrial",
    image: "/images/products/isobac.jpg",
    applications: [
      "Conservante para produtos de limpeza",
      "Bactericida para formulações cosméticas",
      "Substituto do formol em diversas aplicações",
      "Preservação de produtos químicos",
    ],
    specifications: {
      packaging: ["Bombona 20L", "Bombona 50L"],
      certifications: ["ANVISA"],
    },
  },
  {
    id: "lauril-eter-sulfato",
    name: "Lauril Éter Sulfato de Sódio",
    description:
      "Tensoativo aniônico de alto poder de limpeza e formação de espuma, base para diversos produtos de higiene e limpeza.",
    category: "limpeza",
    image: "/images/products/lauril.jpg",
    applications: [
      "Fabricação de shampoos e sabonetes líquidos",
      "Produção de detergentes líquidos",
      "Base para produtos de limpeza",
      "Formulação de produtos de higiene pessoal",
    ],
    specifications: {
      packaging: ["Bombona 20L", "Bombona 50L", "Container 1000L"],
      certifications: ["ANVISA"],
    },
  },
  {
    id: "renex",
    name: "Renex 95% (Nonifenol)",
    description:
      "Tensoativo não-iônico de alta eficiência, usado em formulações de limpeza industrial e detergentes.",
    category: "industrial",
    image: "/images/products/renex.jpg",
    applications: [
      "Formulação de detergentes industriais",
      "Emulsificante em produtos de limpeza",
      "Agente molhante em processos industriais",
      "Dispersante em formulações químicas",
    ],
    specifications: {
      concentration: "95%",
      packaging: ["Bombona 20L", "Bombona 50L", "Container 1000L"],
      certifications: ["ANVISA"],
    },
  },
  {
    id: "soda-caustica",
    name: "Soda Cáustica Escamas Rayon",
    description:
      "Hidróxido de sódio em escamas de alta pureza, utilizado em diversos processos industriais e fabricação de produtos de limpeza.",
    category: "industrial",
    image: "/images/products/soda-caustica.jpg",
    applications: [
      "Fabricação de sabões e detergentes",
      "Regulagem de pH em processos industriais",
      "Limpeza pesada industrial",
      "Tratamento de efluentes",
    ],
    specifications: {
      packaging: ["Saco 25kg"],
      certifications: ["ANVISA"],
    },
  },
  {
    id: "sulfato-aluminio",
    name: "Sulfato de Alumínio em Pó",
    description:
      "Coagulante para tratamento de água, clarificação e remoção de impurezas.",
    category: "tratamento-agua",
    image: "/images/products/sulfato-aluminio.jpg",
    applications: [
      "Coagulação de água",
      "Clarificação de água potável",
      "Tratamento de efluentes",
      "Remoção de turbidez",
    ],
    specifications: {
      packaging: ["Saco 25kg", "Big Bag 1000kg", "Granel"],
      certifications: ["ANVISA"],
    },
  },
  {
    id: "sulfato-ferro",
    name: "Sulfato de Ferro",
    description:
      "Produto químico utilizado em tratamento de água, fertilizantes e processos industriais.",
    category: "industrial",
    image: "/images/products/sulfato-ferro.jpg",
    applications: [
      "Tratamento de água e efluentes",
      "Suplemento para agricultura",
      "Processos industriais",
      "Controle de pH",
    ],
    specifications: {
      packaging: ["Saco 25kg", "Big Bag 1000kg"],
      certifications: ["ANVISA"],
    },
  },
];
