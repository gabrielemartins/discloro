import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "distribuicao",
    title: "Distribuição Especializada",
    description:
      "Entrega rápida e segura de produtos químicos em todo o Brasil, com frota própria e rastreamento em tempo real.",
    icon: "truck",
    features: [
      "Entrega em todo território nacional",
      "Frota própria especializada",
      "Rastreamento em tempo real",
      "Embalagens adequadas para transporte",
      "Documentação completa (FISPQ, Ficha de Emergência)",
    ],
  },
  {
    id: "assessoria",
    title: "Assessoria Técnica",
    description:
      "Equipe de especialistas para orientação sobre dosagem, aplicação e manuseio seguro dos produtos.",
    icon: "clipboard",
    features: [
      "Consultoria personalizada",
      "Treinamento para equipes",
      "Orientação sobre dosagem",
      "Suporte técnico contínuo",
      "Análise de necessidades específicas",
    ],
  },
  {
    id: "tratamento-piscinas",
    title: "Tratamento de Piscinas",
    description:
      "Serviço completo de análise, tratamento e manutenção de piscinas residenciais e comerciais.",
    icon: "waves",
    features: [
      "Análise de qualidade da água",
      "Tratamento químico completo",
      "Manutenção preventiva",
      "Recuperação de água verde",
      "Contratos de manutenção",
    ],
  },
  {
    id: "tratamento-agua",
    title: "Tratamento de Água",
    description:
      "Soluções customizadas para tratamento de água potável, industrial e efluentes.",
    icon: "droplet",
    features: [
      "Análise laboratorial",
      "Projeto de sistemas de tratamento",
      "Fornecimento de equipamentos",
      "Monitoramento contínuo",
      "Conformidade com normas ANVISA",
    ],
  },
];
