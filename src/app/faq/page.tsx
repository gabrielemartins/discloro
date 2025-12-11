"use client";

import { useState } from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { ChevronDownIcon } from "@/components/ui/Icons";
import { faqs } from "@/data/faq";

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border border-[var(--border)] rounded-2xl overflow-hidden">
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-[var(--foreground)] pr-4">
          {question}
        </span>
        <ChevronDownIcon
          className={`text-[var(--primary)] shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          size={24}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-5 text-[var(--muted)]">{answer}</div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--foreground)] via-[#1a2d47] to-[var(--primary-dark)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Perguntas{" "}
              <span className="text-[var(--secondary)]">Frequentes</span>
            </h1>
            <p className="text-lg text-gray-300">
              Encontre respostas para as dúvidas mais comuns sobre nossos
              produtos, serviços e processos.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            Não encontrou sua resposta?
          </h2>
          <p className="text-[var(--muted)] mb-6 max-w-xl mx-auto">
            Nossa equipe está pronta para ajudar. Entre em contato conosco e
            teremos prazer em esclarecer suas dúvidas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button>
              <Link href="/contato">Fale Conosco</Link>
            </Button>
            <Button variant="outline">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
