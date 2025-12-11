import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  DropletIcon,
  WavesIcon,
  FactoryIcon,
  SparklesIcon,
  TruckIcon,
  ShieldCheckIcon,
  ClockIcon,
  AwardIcon,
  ArrowRightIcon,
  CheckIcon,
} from "@/components/ui/Icons";
import { categories } from "@/data/products";
import { products } from "@/data/products";

const stats = [
  { value: "15+", label: "Anos de Experiência" },
  { value: "50+", label: "Clientes Ativos" },
  { value: "1k+", label: "Entregas Realizadas" },
];

const features = [
  {
    icon: TruckIcon,
    title: "Entrega Rápida no RJ",
    description:
      "Atendemos todo o Estado do Rio de Janeiro com entrega rápida e frota própria.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Produtos Certificados",
    description:
      "Todos os produtos com certificação ANVISA e documentação completa.",
  },
  {
    icon: ClockIcon,
    title: "Atendimento Ágil",
    description:
      "Equipe disponível para atender suas necessidades de segunda a sábado.",
  },
  {
    icon: AwardIcon,
    title: "Qualidade Garantida",
    description:
      "Produtos de alta qualidade com garantia de procedência e eficácia.",
  },
];

const categoryIcons: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  droplet: DropletIcon,
  waves: WavesIcon,
  factory: FactoryIcon,
  sparkles: SparklesIcon,
};

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--foreground)] via-[#1a2d47] to-[var(--primary-dark)] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--secondary)] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--accent)] rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-[var(--accent)]/20 text-[var(--accent)] rounded-full text-sm font-semibold mb-6">
                Especialistas em Hipoclorito de Sódio
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Soluções em{" "}
                <span className="text-[var(--secondary)]">Hipoclorito de Sódio</span> e
                Produtos Químicos
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-lg">
                Fornecemos Hipoclorito de Sódio e produtos químicos de alta qualidade para tratamento
                de água, limpeza profissional e uso industrial. Atendemos todo o Estado do Rio de Janeiro
                com entrega rápida e segura.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">
                  <Link href="/produtos" className="flex items-center gap-2">
                    Ver Produtos
                    <ArrowRightIcon size={20} />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white">
                  <Link href="/contato">Solicitar Orçamento</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-full flex items-center justify-center">
                  <DropletIcon className="text-white" size={180} />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--accent)] rounded-2xl flex items-center justify-center shadow-xl">
                  <WavesIcon className="text-white" size={48} />
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[var(--secondary)] rounded-2xl flex items-center justify-center shadow-xl">
                  <SparklesIcon className="text-white" size={40} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-2">
                  {stat.value}
                </p>
                <p className="text-[var(--muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hipoclorito de Sódio Highlight Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-semibold mb-4">
                Nosso Produto Principal
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-6">
                Hipoclorito de Sódio
              </h2>
              <p className="text-[var(--muted)] text-lg mb-6">
                É uma solução aquosa amplamente utilizada para tratamento de água, desinfecção
                e limpeza profissional. Seguro e eficaz para diversas aplicações.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckIcon className="text-[var(--accent)] mt-1 shrink-0" size={20} />
                  <div>
                    <strong className="text-[var(--foreground)]">Tratamento de Água Potável</strong>
                    <p className="text-[var(--muted)] text-sm">Ideal para estações de tratamento e reservatórios</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="text-[var(--accent)] mt-1 shrink-0" size={20} />
                  <div>
                    <strong className="text-[var(--foreground)]">Desinfecção Industrial</strong>
                    <p className="text-[var(--muted)] text-sm">Aplicação em indústrias alimentícias e farmacêuticas</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="text-[var(--accent)] mt-1 shrink-0" size={20} />
                  <div>
                    <strong className="text-[var(--foreground)]">Limpeza Profissional</strong>
                    <p className="text-[var(--muted)] text-sm">Higienização de hospitais, clínicas e ambientes comerciais</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="text-[var(--accent)] mt-1 shrink-0" size={20} />
                  <div>
                    <strong className="text-[var(--foreground)]">Certificações ANVISA e INMETRO</strong>
                    <p className="text-[var(--muted)] text-sm">Produtos com garantia de qualidade e segurança</p>
                  </div>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">
                  <Link href="/produtos/hipoclorito-sodio-12" className="flex items-center gap-2">
                    Ver Hipoclorito de Sódio 12%
                    <ArrowRightIcon size={20} />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link href="/produtos/hipoclorito-sodio-5">Ver Hipoclorito de Sódio 5%</Link>
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-[var(--border)]">
              <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-2xl p-8 mb-6">
                <DropletIcon className="text-white mx-auto" size={120} />
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
                  <p className="text-sm text-amber-900">
                    <strong>⚠️ Importante:</strong> Não comercializamos cloro comum (Cl₂).
                    Trabalhamos exclusivamente com Hipoclorito de Sódio (NaClO), que é mais
                    seguro e versátil.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-xl text-center">
                    <p className="text-2xl font-bold text-[var(--primary)]">12%</p>
                    <p className="text-xs text-[var(--muted)]">Uso Industrial</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl text-center">
                    <p className="text-2xl font-bold text-[var(--primary)]">5%</p>
                    <p className="text-xs text-[var(--muted)]">Uso Doméstico</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Nossas Categorias
            </h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              Oferecemos uma linha completa de produtos químicos para diversas
              aplicações, sempre com a melhor qualidade e preço justo.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const IconComponent = categoryIcons[category.icon] || DropletIcon;
              return (
                <Link
                  key={category.id}
                  href={`/produtos?categoria=${category.id}`}
                  className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-[var(--border)] hover:border-[var(--primary)]"
                >
                  <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[var(--primary)] transition-colors">
                    <IconComponent
                      className="text-[var(--primary)] group-hover:text-white transition-colors"
                      size={28}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                    {category.name}
                  </h3>
                  <p className="text-[var(--muted)] text-sm">
                    {category.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Por que escolher a Discloro?
            </h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              Somos referência no mercado de distribuição de Hipoclorito de Sódio e produtos
              químicos, oferecendo qualidade, agilidade e suporte especializado.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[var(--muted)] text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
                Produtos em Destaque
              </h2>
              <p className="text-[var(--muted)] max-w-xl">
                Conheça nossos produtos mais vendidos e solicite seu orçamento.
              </p>
            </div>
            <Link
              href="/produtos"
              className="hidden md:flex items-center gap-2 text-[var(--primary)] font-semibold hover:gap-3 transition-all"
            >
              Ver Todos
              <ArrowRightIcon size={20} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[var(--border)] group"
              >
                <div className="aspect-square bg-gradient-to-br from-[var(--primary)]/5 to-[var(--secondary)]/5 flex items-center justify-center p-8">
                  <DropletIcon
                    className="text-[var(--primary)] group-hover:scale-110 transition-transform"
                    size={80}
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-[var(--secondary)] uppercase tracking-wide">
                    {categories.find((c) => c.id === product.category)?.name}
                  </span>
                  <h3 className="text-lg font-semibold text-[var(--foreground)] mt-1 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-[var(--muted)] text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <Link
                    href={`/produtos/${product.id}`}
                    className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Ver Detalhes
                    <ArrowRightIcon size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Button variant="outline">
              <Link href="/produtos">Ver Todos os Produtos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pronto para fazer seu pedido?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Entre em contato conosco e receba um orçamento personalizado.
                Oferecemos condições especiais para compras em grande volume.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckIcon className="text-[var(--accent)]" size={20} />
                  <span>Orçamento gratuito em até 2 horas</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="text-[var(--accent)]" size={20} />
                  <span>Condições especiais para empresas</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="text-[var(--accent)]" size={20} />
                  <span>Entrega programada conforme sua necessidade</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="secondary"
                  size="lg"
                  className="text-[var(--primary)] hover:bg-blue-500"
                >
                  <Link href="/contato">Fale Conosco</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:text-[var(--primary)]"
                >
                  <Link href="tel:+552127778900">(21) 2777-8900</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                <h3 className="text-2xl font-semibold mb-6">
                  Solicite um orçamento rápido
                </h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white"
                  />
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white"
                  />
                  <input
                    type="tel"
                    placeholder="Seu telefone"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white"
                  />
                  <textarea
                    placeholder="Descreva seu pedido..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white resize-none"
                  ></textarea>
                  <Button
                    type="submit"
                    className="w-full bg-[var(--accent)] hover:bg-[var(--accent)]/90"
                    size="lg"
                  >
                    Enviar Solicitação
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
