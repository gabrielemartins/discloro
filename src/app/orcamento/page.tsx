"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  TrashIcon,
  PlusIcon,
  MinusIcon,
  ShoppingCartIcon,
  CheckIcon,
  ArrowRightIcon,
} from "@/components/ui/Icons";
import { useQuote } from "@/lib/QuoteContext";

export default function OrcamentoPage() {
  const { items, removeItem, updateQuantity, clearCart } = useQuote();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the quote request to your backend
    setSubmitted(true);
    clearCart();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <>
        <section className="bg-gradient-to-br from-[var(--foreground)] via-[#1a2d47] to-[var(--primary-dark)] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Solicitar{" "}
                <span className="text-[var(--secondary)]">Orçamento</span>
              </h1>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-24 h-24 bg-[var(--accent)] rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckIcon className="text-white" size={48} />
            </div>
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
              Orçamento Solicitado!
            </h2>
            <p className="text-[var(--muted)] text-lg mb-8">
              Recebemos sua solicitação e nossa equipe entrará em contato em até
              2 horas durante o horário comercial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button>
                <Link href="/produtos">Continuar Comprando</Link>
              </Button>
              <Button variant="outline">
                <Link href="/">Voltar ao Início</Link>
              </Button>
            </div>
          </div>
        </section>
      </>
    );
  }

  if (items.length === 0) {
    return (
      <>
        <section className="bg-gradient-to-br from-[var(--foreground)] via-[#1a2d47] to-[var(--primary-dark)] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Solicitar{" "}
                <span className="text-[var(--secondary)]">Orçamento</span>
              </h1>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ShoppingCartIcon
              className="text-[var(--muted)] mx-auto mb-6"
              size={80}
            />
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
              Seu carrinho está vazio
            </h2>
            <p className="text-[var(--muted)] mb-8">
              Adicione produtos ao carrinho para solicitar um orçamento.
            </p>
            <Button>
              <Link href="/produtos" className="flex items-center gap-2">
                Ver Produtos
                <ArrowRightIcon size={20} />
              </Link>
            </Button>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--foreground)] via-[#1a2d47] to-[var(--primary-dark)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Solicitar{" "}
              <span className="text-[var(--secondary)]">Orçamento</span>
            </h1>
            <p className="text-lg text-gray-300">
              Revise os produtos selecionados e preencha seus dados para receber
              um orçamento personalizado.
            </p>
          </div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[var(--foreground)]">
                  Produtos Selecionados ({items.length})
                </h2>
                <button
                  onClick={clearCart}
                  className="text-red-500 hover:text-red-600 text-sm font-medium"
                >
                  Limpar Carrinho
                </button>
              </div>

              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.packaging}`}
                    className="bg-gray-50 rounded-2xl p-6 flex flex-col sm:flex-row gap-6"
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/10 rounded-xl flex items-center justify-center shrink-0">
                      <ShoppingCartIcon
                        className="text-[var(--primary)]"
                        size={32}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[var(--foreground)] mb-1">
                        {item.product.name}
                      </h3>
                      <p className="text-[var(--muted)] text-sm mb-2">
                        Embalagem: {item.packaging}
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-[var(--border)] rounded-lg bg-white">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.packaging,
                                Math.max(1, item.quantity - 1)
                              )
                            }
                            className="p-2 hover:bg-gray-50"
                          >
                            <MinusIcon size={16} />
                          </button>
                          <span className="px-4 font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.packaging, item.quantity + 1)
                            }
                            className="p-2 hover:bg-gray-50"
                          >
                            <PlusIcon size={16} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.product.id, item.packaging)}
                          className="text-red-500 hover:text-red-600 p-2"
                        >
                          <TrashIcon size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Button variant="outline">
                  <Link href="/produtos" className="flex items-center gap-2">
                    <PlusIcon size={20} />
                    Adicionar Mais Produtos
                  </Link>
                </Button>
              </div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-3xl p-6 sticky top-28">
                <h2 className="text-xl font-bold text-[var(--foreground)] mb-6">
                  Seus Dados
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[var(--foreground)] mb-1"
                    >
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--primary)]"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[var(--foreground)] mb-1"
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
                      className="w-full px-4 py-2 rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--primary)]"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-[var(--foreground)] mb-1"
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
                      className="w-full px-4 py-2 rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--primary)]"
                      placeholder="(00) 00000-0000"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-[var(--foreground)] mb-1"
                    >
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--primary)]"
                      placeholder="Nome da empresa"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[var(--foreground)] mb-1"
                    >
                      Observações
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--primary)] resize-none"
                      placeholder="Informações adicionais..."
                    ></textarea>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Solicitar Orçamento
                  </Button>

                  <p className="text-[var(--muted)] text-xs text-center">
                    Responderemos em até 2 horas durante o horário comercial.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
