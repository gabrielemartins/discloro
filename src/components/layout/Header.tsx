"use client";

import Link from "next/link";
import { useState } from "react";
import { useQuote } from "@/lib/QuoteContext";
import { Button } from "@/components/ui/Button";
import {
  MenuIcon,
  XIcon,
  ShoppingCartIcon,
  DropletIcon,
} from "@/components/ui/Icons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/produtos", label: "Produtos" },
  { href: "/servicos", label: "Serviços" },
  { href: "/faq", label: "FAQ" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemCount } = useQuote();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-lg flex items-center justify-center">
              <DropletIcon className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold text-[var(--foreground)]">
              Dis<span className="text-[var(--primary)]">cloro</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--foreground)] hover:text-[var(--primary)] font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Quote Cart & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/orcamento" className="relative">
              <ShoppingCartIcon
                className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
                size={24}
              />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[var(--accent)] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            <Button size="sm">
              <Link href="/contato">Solicitar Orçamento</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <Link href="/orcamento" className="relative">
              <ShoppingCartIcon
                className="text-[var(--foreground)]"
                size={24}
              />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[var(--accent)] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[var(--foreground)]"
            >
              {isMenuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-[var(--border)]">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[var(--foreground)] hover:text-[var(--primary)] font-medium transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Button className="mt-2">
                <Link href="/contato">Solicitar Orçamento</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
