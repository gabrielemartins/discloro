import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  TruckIcon,
  ClipboardIcon,
  WavesIcon,
  DropletIcon,
  CheckIcon,
  ArrowRightIcon,
} from "@/components/ui/Icons";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Serviços | Discloro",
  description:
    "Conheça os serviços da Discloro: distribuição especializada, assessoria técnica, tratamento de piscinas e água.",
};

const serviceIcons: Record<
  string,
  React.ComponentType<{ className?: string; size?: number }>
> = {
  truck: TruckIcon,
  clipboard: ClipboardIcon,
  waves: WavesIcon,
  droplet: DropletIcon,
};

export default function ServicosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--foreground)] via-[#1a2d47] to-[var(--primary-dark)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos <span className="text-[var(--secondary)]">Serviços</span>
            </h1>
            <p className="text-lg text-gray-300">
              Além de produtos de qualidade, oferecemos serviços especializados
              para atender todas as suas necessidades em tratamento de água e
              produtos químicos.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = serviceIcons[service.icon] || DropletIcon;
              return (
                <div
                  key={service.id}
                  className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-2xl flex items-center justify-center shrink-0">
                      <IconComponent className="text-white" size={32} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-[var(--foreground)] mb-3">
                        {service.title}
                      </h2>
                      <p className="text-[var(--muted)] mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckIcon
                              className="text-[var(--accent)] shrink-0 mt-0.5"
                              size={18}
                            />
                            <span className="text-[var(--muted)] text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
              Prazos de Entrega
            </h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              Trabalhamos com prazos diferenciados para atender sua necessidade
              com agilidade e eficiência.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="text-4xl font-bold text-[var(--primary)] mb-2">
                72h
              </div>
              <div className="text-[var(--foreground)] font-semibold mb-1">
                Rio de Janeiro e Região
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="text-4xl font-bold text-[var(--primary)] mb-2">
                2-3
              </div>
              <div className="text-[var(--foreground)] font-semibold mb-1">
                Interior de RJ
              </div>
              <div className="text-[var(--muted)] text-sm">
                Dias úteis para todas as cidades
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="text-4xl font-bold text-[var(--primary)] mb-2">
                3-5
              </div>
              <div className="text-[var(--foreground)] font-semibold mb-1">
                Região Sudeste
              </div>
              <div className="text-[var(--muted)] text-sm">
                MG, RJ e ES com frota própria
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="text-4xl font-bold text-[var(--primary)] mb-2">
                5-7
              </div>
              <div className="text-[var(--foreground)] font-semibold mb-1">
                Demais Regiões
              </div>
              <div className="text-[var(--muted)] text-sm">
                Todo Brasil via parceiros
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
              Como Funciona
            </h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              Processo simples e rápido para você receber seus produtos químicos
              com toda segurança.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[var(--primary)]">
                  1
                </span>
              </div>
              <h3 className="font-semibold text-[var(--foreground)] mb-2">
                Solicite seu Orçamento
              </h3>
              <p className="text-[var(--muted)] text-sm">
                Envie sua lista de produtos pelo site, WhatsApp ou telefone.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[var(--primary)]">
                  2
                </span>
              </div>
              <h3 className="font-semibold text-[var(--foreground)] mb-2">
                Receba a Proposta
              </h3>
              <p className="text-[var(--muted)] text-sm">
                Em até 2 horas você recebe o orçamento detalhado.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[var(--primary)]">
                  3
                </span>
              </div>
              <h3 className="font-semibold text-[var(--foreground)] mb-2">
                Confirme o Pedido
              </h3>
              <p className="text-[var(--muted)] text-sm">
                Aprove o orçamento e escolha a forma de pagamento.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[var(--primary)]">
                  4
                </span>
              </div>
              <h3 className="font-semibold text-[var(--foreground)] mb-2">
                Receba com Segurança
              </h3>
              <p className="text-[var(--muted)] text-sm">
                Entrega no prazo com toda documentação necessária.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contract Service */}
      <section className="py-20 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Contratos de Fornecimento
              </h2>
              <p className="text-white/80 mb-8">
                Para empresas com demanda regular, oferecemos contratos de
                fornecimento com vantagens exclusivas.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckIcon
                    className="text-[var(--accent)] shrink-0 mt-1"
                    size={20}
                  />
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon
                    className="text-[var(--accent)] shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <span className="font-semibold">Entrega Programada</span>
                    <p className="text-white/70 text-sm">
                      Defina a periodicidade de entrega conforme sua
                      necessidade.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon
                    className="text-[var(--accent)] shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <span className="font-semibold">Prioridade de Estoque</span>
                    <p className="text-white/70 text-sm">
                      Seus pedidos são atendidos com prioridade
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon
                    className="text-[var(--accent)] shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <span className="font-semibold">Condições Especiais</span>
                    <p className="text-white/70 text-sm">
                      Pagamento a prazo e descontos progressivos por volume.
                    </p>
                  </div>
                </li>
              </ul>
              <Button
                size="lg"
                className="bg-white text-[var(--primary)] hover:bg-gray-100"
              >
                <Link
                  href="/contato"
                  className="flex items-center gap-2"
                >
                  Solicitar Contrato
                  <ArrowRightIcon size={20} />
                </Link>
              </Button>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold mb-2">500+</div>
                  <div className="text-white/70">Clientes com contrato ativo</div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                    <span>Indústrias</span>
                    <span className="font-semibold">45%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                    <span>Empresas de Limpeza</span>
                    <span className="font-semibold">30%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                    <span>Clubes e Condomínios</span>
                    <span className="font-semibold">15%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                    <span>Outros</span>
                    <span className="font-semibold">10%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            Precisa de um serviço personalizado?
          </h2>
          <p className="text-[var(--muted)] mb-6 max-w-xl mx-auto">
            Nossa equipe está pronta para entender suas necessidades e oferecer
            a melhor solução.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button>
              <Link href="/contato">Fale Conosco</Link>
            </Button>
            <Button variant="outline">
              <Link href="/produtos">Ver Produtos</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
