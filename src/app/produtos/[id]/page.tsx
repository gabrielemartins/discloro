"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  DropletIcon,
  CheckIcon,
  ArrowRightIcon,
  ShoppingCartIcon,
} from "@/components/ui/Icons";
import { products, categories } from "@/data/products";
import { useQuote } from "@/lib/QuoteContext";

export default function ProductDetailPage() {
  const params = useParams();
  const product = products.find((p) => p.id === params.id);
  const { addItem } = useQuote();
  const [selectedPackaging, setSelectedPackaging] = useState(
    product?.specifications?.packaging?.[0] || ""
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <DropletIcon
            className="text-[var(--muted)] mx-auto mb-4"
            size={64}
          />
          <h1 className="text-2xl font-bold text-[var(--foreground)] mb-2">
            Produto não encontrado
          </h1>
          <p className="text-[var(--muted)] mb-6">
            O produto que você está procurando não existe.
          </p>
          <Button>
            <Link href="/produtos">Ver Todos os Produtos</Link>
          </Button>
        </div>
      </div>
    );
  }

  const category = categories.find((c) => c.id === product.category);
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAddToQuote = () => {
    addItem(product, quantity, selectedPackaging);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4 border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm">
            <Link
              href="/"
              className="text-[var(--muted)] hover:text-[var(--primary)]"
            >
              Home
            </Link>
            <span className="text-[var(--muted)]">/</span>
            <Link
              href="/produtos"
              className="text-[var(--muted)] hover:text-[var(--primary)]"
            >
              Produtos
            </Link>
            <span className="text-[var(--muted)]">/</span>
            <span className="text-[var(--foreground)]">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Product Header - Image and Basic Info */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Product Image */}
            <div className="bg-gradient-to-br from-[var(--primary)]/5 to-[var(--secondary)]/5 rounded-3xl flex items-center justify-center p-12 aspect-square">
              <DropletIcon className="text-[var(--primary)]" size={200} />
            </div>

            {/* Product Basic Info */}
            <div>
              <span className="text-sm font-semibold text-[var(--secondary)] uppercase tracking-wide">
                {category?.name}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mt-2 mb-4">
                {product.name}
              </h1>
              <p className="text-[var(--muted)] text-lg mb-6">
                {product.description}
              </p>

              {/* Quick Add to Quote - Top Section */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-[var(--border)] mt-8">
                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">
                  Solicitar Orçamento
                </h3>

                {/* Packaging Selection */}
                {product.specifications?.packaging && (
                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-[var(--foreground)] mb-2">
                      Escolha a Embalagem
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {product.specifications.packaging.map((pkg) => (
                        <button
                          key={pkg}
                          onClick={() => setSelectedPackaging(pkg)}
                          className={`px-3 py-2 rounded-lg border text-sm transition-colors ${
                            selectedPackaging === pkg
                              ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                              : "border-[var(--border)] bg-white text-[var(--muted)] hover:border-[var(--primary)]"
                          }`}
                        >
                          {pkg}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantity */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-[var(--foreground)] mb-2">
                    Quantidade
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-[var(--border)] rounded-lg bg-white">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-3 py-2 text-[var(--foreground)] hover:bg-gray-50"
                      >
                        -
                      </button>
                      <span className="px-4 py-2 font-semibold min-w-[60px] text-center">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-3 py-2 text-[var(--foreground)] hover:bg-gray-50"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3">
                  <Button
                    size="lg"
                    onClick={handleAddToQuote}
                    className={`w-full ${
                      added
                        ? "bg-[var(--accent)] hover:bg-[var(--accent)]"
                        : ""
                    }`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      {added ? (
                        <>
                          <CheckIcon size={20} />
                          Adicionado!
                        </>
                      ) : (
                        <>
                          <ShoppingCartIcon size={20} />
                          Adicionar ao Orçamento
                        </>
                      )}
                    </span>
                  </Button>
                  <Button variant="outline" size="lg" className="bg-white w-full">
                    <Link href="/contato">Consultar Preço</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Product Information - Full Width Below */}
          <div className="max-w-5xl mx-auto">
            {/* Specifications */}
            {product.specifications && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[var(--foreground)] mb-4">
                  Especificações
                </h3>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {product.specifications.concentration && (
                      <div className="flex items-center gap-2">
                        <CheckIcon
                          className="text-[var(--accent)]"
                          size={18}
                        />
                        <span className="text-[var(--muted)]">
                          Concentração: {product.specifications.concentration}
                        </span>
                      </div>
                    )}
                    {product.specifications.certifications && (
                      <div className="flex items-center gap-2">
                        <CheckIcon
                          className="text-[var(--accent)]"
                          size={18}
                        />
                        <span className="text-[var(--muted)]">
                          Certificações:{" "}
                          {product.specifications.certifications.join(", ")}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Applications */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-4">
                Onde Pode Ser Usado?
              </h3>
              <div className="bg-gray-50 rounded-2xl p-6">
                <ul className="grid sm:grid-cols-2 gap-3">
                  {product.applications.map((application, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckIcon className="text-[var(--accent)] mt-0.5 shrink-0" size={18} />
                      <span className="text-[var(--muted)]">{application}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Usage Instructions */}
            {product.usage && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[var(--foreground)] mb-4">
                  Como Usar?
                </h3>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <ul className="space-y-3">
                    {product.usage.instructions.map((instruction, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckIcon className="text-[var(--accent)] mt-0.5 shrink-0" size={18} />
                        <span className="text-[var(--muted)] text-sm">{instruction}</span>
                      </li>
                    ))}
                  </ul>
                  {product.usage.dosage && (
                    <div className="mt-4 p-4 bg-[var(--primary)]/5 rounded-lg border border-[var(--primary)]/20">
                      <p className="text-sm text-[var(--foreground)]">
                        <span className="font-semibold">Dosagem: </span>
                        {product.usage.dosage}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Storage */}
            {product.storage && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[var(--foreground)] mb-4">
                  Como Armazenar?
                </h3>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <ul className="space-y-3">
                    {product.storage.conditions.map((condition, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckIcon className="text-[var(--accent)] mt-0.5 shrink-0" size={18} />
                        <span className="text-[var(--muted)] text-sm">{condition}</span>
                      </li>
                    ))}
                  </ul>
                  {product.storage.shelfLife && (
                    <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
                      <p className="text-sm text-amber-900">
                        <span className="font-semibold">Validade: </span>
                        {product.storage.shelfLife}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Safety & PPE */}
            {product.safety && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[var(--foreground)] mb-4">
                  EPIs Necessários
                </h3>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <ul className="grid sm:grid-cols-2 gap-3 mb-4">
                    {product.safety.ppe.map((ppe, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckIcon className="text-[var(--accent)] mt-0.5 shrink-0" size={18} />
                        <span className="text-[var(--muted)] text-sm">{ppe}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-900 mb-3 text-sm">
                      ⚠️ Avisos de Segurança
                    </h4>
                    <ul className="space-y-2">
                      {product.safety.warnings.map((warning, index) => (
                        <li key={index} className="text-xs text-red-800">
                          • {warning}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Packaging Selection and Quantity - Centered Card */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-[var(--border)]">
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-6 text-center">
                Solicitar Orçamento
              </h3>

              {/* Packaging Selection */}
              {product.specifications?.packaging && (
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-[var(--foreground)] mb-3">
                    Escolha a Embalagem
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.specifications.packaging.map((pkg) => (
                      <button
                        key={pkg}
                        onClick={() => setSelectedPackaging(pkg)}
                        className={`px-4 py-2 rounded-lg border transition-colors ${
                          selectedPackaging === pkg
                            ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                            : "border-[var(--border)] bg-white text-[var(--muted)] hover:border-[var(--primary)]"
                        }`}
                      >
                        {pkg}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-[var(--foreground)] mb-3">
                  Quantidade
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-[var(--border)] rounded-lg bg-white">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 text-[var(--foreground)] hover:bg-gray-50"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 font-semibold min-w-[60px] text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 text-[var(--foreground)] hover:bg-gray-50"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={handleAddToQuote}
                  className={`flex-1 ${
                    added
                      ? "bg-[var(--accent)] hover:bg-[var(--accent)]"
                      : ""
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    {added ? (
                      <>
                        <CheckIcon size={20} />
                        Adicionado!
                      </>
                    ) : (
                      <>
                        <ShoppingCartIcon size={20} />
                        Adicionar ao Orçamento
                      </>
                    )}
                  </span>
                </Button>
                <Button variant="outline" size="lg" className="bg-white">
                  <Link href="/contato">Consultar Preço</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-8">
              <h2 className="text-2xl font-bold text-[var(--foreground)]">
                Produtos Relacionados
              </h2>
              <Link
                href={`/produtos?categoria=${product.category}`}
                className="hidden md:flex items-center gap-2 text-[var(--primary)] font-semibold hover:gap-3 transition-all"
              >
                Ver Mais
                <ArrowRightIcon size={20} />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[var(--border)] group"
                >
                  <div className="aspect-video bg-gradient-to-br from-[var(--primary)]/5 to-[var(--secondary)]/5 flex items-center justify-center p-8">
                    <DropletIcon
                      className="text-[var(--primary)] group-hover:scale-110 transition-transform"
                      size={60}
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-[var(--muted)] text-sm mb-4 line-clamp-2">
                      {relatedProduct.description}
                    </p>
                    <Link
                      href={`/produtos/${relatedProduct.id}`}
                      className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold text-sm hover:gap-3 transition-all"
                    >
                      Ver Detalhes
                      <ArrowRightIcon size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
