import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  DropletIcon,
  ShieldCheckIcon,
  TruckIcon,
  UsersIcon,
  AwardIcon,
  CheckIcon,
} from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Sobre Nós | Discloro",
  description:
    "Conheça a Discloro, sua distribuidora de confiança de Hipoclorito de Sódio e produtos químicos. Mais de 15 anos de experiência no mercado brasileiro.",
};

const values = [
  {
    icon: ShieldCheckIcon,
    title: "Qualidade",
    description:
      "Todos os nossos produtos passam por rigoroso controle de qualidade e possuem certificação ANVISA.",
  },
  {
    icon: TruckIcon,
    title: "Agilidade",
    description:
      "Entrega rápida com frota própria todo o Rio de Janeiro.",
  },
  {
    icon: UsersIcon,
    title: "Compromisso",
    description:
      "Relacionamento de longo prazo com nossos clientes, baseado em confiança e transparência.",
  },
  {
    icon: AwardIcon,
    title: "Excelência",
    description:
      "Busca constante pela melhoria contínua em todos os processos e serviços.",
  },
];

const timeline = [
  {
    year: "2008",
    title: "Fundação",
    description:
      "A Discloro nasce em Duque de Caxias com o objetivo de fornecer produtos químicos de qualidade para o mercado caxiense.",
  },
  {
    year: "2012",
    title: "Expansão Regional",
    description:
      "Ampliamos nossa área de atuação para todo o estado de Rio de Janeiro.",
  },
  {
    year: "2016",
    title: "Frota Própria",
    description:
      "Investimos em frota própria especializada para transporte seguro de produtos químicos.",
  },
  {
    year: "2020",
    title: "Presença Nacional",
    description:
      "Consolidamos nossa presença em todo território nacional com parcerias logísticas estratégicas.",
  },
  {
    year: "2026",
    title: "Inovação Digital",
    description:
      "Lançamos nossa plataforma digital para facilitar orçamentos e pedidos online.",
  },
];

export default function SobrePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--foreground)] via-[#1a2d47] to-[var(--primary-dark)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre a <span className="text-[var(--secondary)]">Discloro</span>
            </h1>
            <p className="text-lg text-gray-300">
              Há mais de 15 anos fornecendo soluções em cloro e produtos
              químicos para empresas e profissionais em todo o Brasil. Nossa
              missão é garantir qualidade, segurança e eficiência em cada
              entrega.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--foreground)] mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-[var(--muted)]">
                <p>
                  A Discloro foi fundada em 2008 com uma visão clara: ser a
                  distribuidora de referência em produtos químicos no Brasil,
                  oferecendo qualidade, preço justo e atendimento excepcional.
                </p>
                <p>
                  Ao longo dos anos, construímos relacionamentos sólidos com
                  fabricantes e clientes, sempre priorizando a segurança no
                  manuseio e transporte de produtos químicos.
                </p>
                <p>
                  Hoje, atendemos mais de 500 clientes ativos em todo o
                  território nacional, incluindo empresas de tratamento de água,
                  clubes, condomínios, indústrias e prestadores de serviços.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/10 rounded-3xl p-12 flex items-center justify-center">
              <div className="text-center">
                <DropletIcon
                  className="text-[var(--primary)] mx-auto mb-6"
                  size={120}
                />
                <p className="text-4xl font-bold text-[var(--primary)] mb-2">
                  15+
                </p>
                <p className="text-[var(--muted)]">Anos de Experiência</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">
                Missão
              </h3>
              <p className="text-[var(--muted)]">
                Fornecer produtos químicos de alta qualidade com excelência em
                atendimento e logística, contribuindo para a saúde e bem-estar
                da sociedade.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">
                Visão
              </h3>
              <p className="text-[var(--muted)]">
                Ser reconhecida como a principal distribuidora de cloro e
                produtos químicos do Brasil, referência em qualidade e
                atendimento.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">
                Valores
              </h3>
              <p className="text-[var(--muted)]">
                Ética, transparência, compromisso com o cliente, segurança,
                sustentabilidade e melhoria contínua em tudo que fazemos.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[var(--foreground)] text-center mb-12">
            Nossos Pilares
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                  {value.title}
                </h3>
                <p className="text-[var(--muted)] text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[var(--foreground)] text-center mb-12">
            Nossa Trajetória
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[var(--border)]"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="hidden md:block w-1/2"></div>
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[var(--primary)] rounded-full items-center justify-center text-white font-bold text-sm">
                    {item.year.slice(2)}
                  </div>
                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? "md:pl-12" : "md:pr-12"
                    }`}
                  >
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <span className="text-[var(--primary)] font-bold">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-semibold text-[var(--foreground)] mt-1 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[var(--muted)] text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
              Certificações e Conformidade
            </h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              Trabalhamos em conformidade com todas as regulamentações vigentes,
              garantindo segurança e qualidade em nossos produtos e processos.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <CheckIcon className="text-[var(--accent)] shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-[var(--foreground)] mb-1">
                    ANVISA
                  </h3>
                  <p className="text-[var(--muted)] text-sm">
                    Produtos registrados e em conformidade com a Agência
                    Nacional de Vigilância Sanitária.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <CheckIcon className="text-[var(--accent)] shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-[var(--foreground)] mb-1">
                    INMETRO
                  </h3>
                  <p className="text-[var(--muted)] text-sm">
                    Embalagens e processos certificados pelo Instituto Nacional
                    de Metrologia.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <CheckIcon className="text-[var(--accent)] shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-[var(--foreground)] mb-1">
                    IBAMA
                  </h3>
                  <p className="text-[var(--muted)] text-sm">
                    Licenciamento ambiental e práticas sustentáveis em todas as
                    operações.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <CheckIcon className="text-[var(--accent)] shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-[var(--foreground)] mb-1">
                    FISPQ
                  </h3>
                  <p className="text-[var(--muted)] text-sm">
                    Ficha de Informação de Segurança disponível para todos os
                    produtos.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <CheckIcon className="text-[var(--accent)] shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-[var(--foreground)] mb-1">
                    MOPP
                  </h3>
                  <p className="text-[var(--muted)] text-sm">
                    Motoristas certificados para transporte de produtos
                    perigosos.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <CheckIcon className="text-[var(--accent)] shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-[var(--foreground)] mb-1">
                    NR-20
                  </h3>
                  <p className="text-[var(--muted)] text-sm">
                    Conformidade com normas de segurança para inflamáveis e
                    combustíveis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--primary)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para trabalhar conosco?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Entre em contato e descubra como podemos ajudar sua empresa com
            soluções em cloro e produtos químicos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              className="border-white text-white hover:bg-blue-500"
            >
              <Link href="/produtos">Ver Produtos</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
