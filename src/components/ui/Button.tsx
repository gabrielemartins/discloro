"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)] focus:ring-[var(--primary)]",
    secondary:
      "bg-[var(--secondary)] text-white hover:bg-[var(--primary)] focus:ring-[var(--secondary)]",
    outline:
      "border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white focus:ring-[var(--primary)]",
    ghost:
      "text-[var(--primary)] hover:bg-[var(--primary)]/10 focus:ring-[var(--primary)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
