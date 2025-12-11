"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Product, QuoteItem } from "@/types";

interface QuoteContextType {
  items: QuoteItem[];
  addItem: (product: Product, quantity: number, packaging: string) => void;
  removeItem: (productId: string, packaging: string) => void;
  updateQuantity: (productId: string, packaging: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<QuoteItem[]>([]);

  const addItem = (product: Product, quantity: number, packaging: string) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.packaging === packaging
      );

      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }

      return [...prev, { product, quantity, packaging }];
    });
  };

  const removeItem = (productId: string, packaging: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId || item.packaging !== packaging));
  };

  const updateQuantity = (productId: string, packaging: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId, packaging);
      return;
    }

    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.packaging === packaging ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <QuoteContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, itemCount }}
    >
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (context === undefined) {
    throw new Error("useQuote must be used within a QuoteProvider");
  }
  return context;
}
