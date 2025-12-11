"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  WhatsAppIcon,
  ClockIcon,
  CheckIcon,
} from "@/components/ui/Icons";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--foreground)] via-[#1a2d47] to-[var(--primary-dark)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Entre em <span className="text-[var(--secondary)]">Contato</span>
            </h1>
            <p className="text-lg text-gray-300 mb-4">
              Estamos prontos para atender você. Solicite um orçamento, tire
              dúvidas ou agende uma visita técnica.
            </p>
            <div className="inline-block px-4 py-2 bg-[var(--accent)]/20 text-[var(--accent)] rounded-full text-sm font-semibold">
              📍 Atendemos todo o Estado do Rio de Janeiro
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">
                Informações de Contato
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center shrink-0">
                    <PhoneIcon className="text-[var(--primary)]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)]">
                      Telefone
                    </h3>
                    <a
                      href="tel:+552127778900"
                      className="text-[var(--muted)] hover:text-[var(--primary)]"
                    >
                      (21) 2777-8900
                    </a>
                    <p className="text-[var(--muted)] text-sm">
                      (21) 2676-3342
                    </p>
                    <p className="text-[var(--muted)] text-sm mt-1">
                      Celular: (21) 97386-2892
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center shrink-0">
                    <WhatsAppIcon className="text-[var(--primary)]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)]">
                      WhatsApp
                    </h3>
                    <a
                      href="https://wa.me/5521988890604"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--muted)] hover:text-[var(--primary)]"
                    >
                      (21) 98889-0604
                    </a>
                    <p className="text-[var(--muted)] text-sm">
                      Atendimento rápido
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center shrink-0">
                    <MailIcon className="text-[var(--primary)]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)]">
                      E-mail
                    </h3>
                    <a
                      href="mailto:contato@discloro.com.br"
                      className="text-[var(--muted)] hover:text-[var(--primary)]"
                    >
                      contato@discloro.com.br
                    </a>
                    <p className="text-[var(--muted)] text-sm">
                      vendas@discloro.com.br
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPinIcon className="text-[var(--primary)]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)]">
                      Endereço
                    </h3>
                    <p className="text-[var(--muted)]">
                      Rua Moacyr Padilha, 1000
                      <br />
                      Jardim Primavera
                      <br />
                      Duque de Caxias - RJ, 00000-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center shrink-0">
                    <ClockIcon className="text-[var(--primary)]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)]">
                      Horário de Atendimento
                    </h3>
                    <p className="text-[var(--muted)]">
                      Segunda a Sexta: 8h às 18h
                      <br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">
                  Envie sua Mensagem
                </h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-[var(--accent)] rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckIcon className="text-white" size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">
                      Mensagem Enviada!
                    </h3>
                    <p className="text-[var(--muted)] mb-6">
                      Recebemos sua mensagem e entraremos em contato em breve.
                    </p>
                    <Button onClick={() => setSubmitted(false)}>
                      Enviar Nova Mensagem
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-[var(--foreground)] mb-2"
                        >
                          Nome Completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
                          placeholder="Seu nome"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-[var(--foreground)] mb-2"
                        >
                          E-mail *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-[var(--foreground)] mb-2"
                        >
                          Telefone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
                          placeholder="(00) 00000-0000"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-[var(--foreground)] mb-2"
                        >
                          Empresa
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
                          placeholder="Nome da empresa"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-[var(--foreground)] mb-2"
                      >
                        Assunto *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 bg-white"
                      >
                        <option value="">Selecione um assunto</option>
                        <option value="orcamento">Solicitar Orçamento</option>
                        <option value="duvida">Dúvida sobre Produtos</option>
                        <option value="suporte">Suporte Técnico</option>
                        <option value="contrato">Contrato de Fornecimento</option>
                        <option value="outro">Outro Assunto</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[var(--foreground)] mb-2"
                      >
                        Mensagem *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 resize-none"
                        placeholder="Descreva sua necessidade..."
                      ></textarea>
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="privacy"
                        required
                        className="mt-1"
                      />
                      <label
                        htmlFor="privacy"
                        className="text-sm text-[var(--muted)]"
                      >
                        Li e concordo com a{" "}
                        <a
                          href="/privacidade"
                          className="text-[var(--primary)] hover:underline"
                        >
                          Política de Privacidade
                        </a>
                      </label>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Enviar Mensagem
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-gray-100">
        <div className="h-96 w-full bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/10 flex items-center justify-center">
          <div className="text-center">
            <MapPinIcon
              className="text-[var(--primary)] mx-auto mb-4"
              size={48}
            />
            <p className="text-[var(--foreground)] font-semibold mb-2">
              Discloro - Rio de Janeiro
            </p>
            <p className="text-[var(--muted)] text-sm">
              Rua Moacir Padilha, 000 - Jardim Primavera, Duque de Caxias
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-[var(--primary)] font-semibold hover:underline"
            >
              Abrir no Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
