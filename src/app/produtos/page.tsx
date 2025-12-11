"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import {
  DropletIcon,
  WavesIcon,
  FactoryIcon,
  SparklesIcon,
  ArrowRightIcon,
} from "@/components/ui/Icons";
import { products, categories } from "@/data/products";

const categoryIcons: Record<
  string,
  React.ComponentType<{ className?: string; size?: number }>
> = {
  droplet: DropletIcon,
  waves: WavesIcon,
  factory: FactoryIcon,
  sparkles: SparklesIcon,
};

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("categoria") || "todos";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const categoria = searchParams.get("categoria");
    if (categoria) {
      setSelectedCategory(categoria);
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "todos" || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      {/* Filters */}
      <section className="py-8 bg-white border-b border-[var(--border)] sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
              />
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory("todos")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === "todos"
                    ? "bg-[var(--primary)] text-white"
                    : "bg-gray-100 text-[var(--foreground)] hover:bg-gray-200"
                }`}
              >
                Todos
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? "bg-[var(--primary)] text-white"
                      : "bg-gray-100 text-[var(--foreground)] hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Description */}
          {selectedCategory !== "todos" && (
            <div className="mb-8 p-6 bg-white rounded-2xl shadow-sm">
              {(() => {
                const category = categories.find(
                  (c) => c.id === selectedCategory
                );
                if (!category) return null;
                const IconComponent =
                  categoryIcons[category.icon] || DropletIcon;
                return (
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center">
                      <IconComponent
                        className="text-[var(--primary)]"
                        size={28}
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-[var(--foreground)]">
                        {category.name}
                      </h2>
                      <p className="text-[var(--muted)]">
                        {category.description}
                      </p>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* Results Count */}
          <p className="text-[var(--muted)] mb-6">
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1
              ? "produto encontrado"
              : "produtos encontrados"}
          </p>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[var(--border)] group"
                >
                  <Link href={`/produtos/${product.id}`}>
                    <div className="aspect-square bg-gradient-to-br from-[var(--primary)]/5 to-[var(--secondary)]/5 flex items-center justify-center p-8 cursor-pointer">
                      <DropletIcon
                        className="text-[var(--primary)] group-hover:scale-110 transition-transform"
                        size={80}
                      />
                    </div>
                  </Link>
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
          ) : (
            <div className="text-center py-16">
              <DropletIcon
                className="text-[var(--muted)] mx-auto mb-4"
                size={64}
              />
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                Nenhum produto encontrado
              </h3>
              <p className="text-[var(--muted)] mb-6">
                Tente ajustar os filtros ou buscar por outro termo.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory("todos");
                  setSearchQuery("");
                }}
              >
                Limpar Filtros
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            Não encontrou o que procura?
          </h2>
          <p className="text-[var(--muted)] mb-6 max-w-xl mx-auto">
            Entre em contato conosco. Trabalhamos com diversos outros produtos
            químicos e podemos atender sua necessidade específica.
          </p>
          <Button>
            <Link href="/contato">Fale Conosco</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

export default function ProdutosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--foreground)] via-[#1a2d47] to-[var(--primary-dark)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos <span className="text-[var(--secondary)]">Produtos</span>
            </h1>
            <p className="text-lg text-gray-300">
              Linha completa de cloro e produtos químicos para tratamento de
              água, piscinas, uso industrial e limpeza profissional.
            </p>
          </div>
        </div>
      </section>

      <Suspense
        fallback={
          <div className="py-20 flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--primary)]"></div>
          </div>
        }
      >
        <ProductsContent />
      </Suspense>
    </>
  );
}
