export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  applications: string[];
  specifications?: {
    concentration?: string;
    packaging?: string[];
    certifications?: string[];
  };
  usage?: {
    instructions: string[];
    dosage?: string;
  };
  storage?: {
    conditions: string[];
    shelfLife?: string;
  };
  safety?: {
    ppe: string[];
    warnings: string[];
  };
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface QuoteItem {
  product: Product;
  quantity: number;
  packaging: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}
