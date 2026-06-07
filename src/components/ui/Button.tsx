"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-950 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-neutral-950 text-neutral-50 hover:bg-neutral-800 shadow-sm border border-neutral-800",
    secondary:
      "bg-white text-neutral-900 border border-neutral-200/80 hover:bg-neutral-50 hover:border-neutral-300/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)]",
    ghost:
      "bg-transparent text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/60",
  };

  const sizes = "px-6 py-2.5 md:px-8 md:py-3";

  const buttonContent = (
    <motion.span
      whileTap={{ scale: 0.98 }}
      className="flex items-center justify-center gap-2"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseStyles} ${variants[variant]} ${sizes} ${className}`}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes} ${className}`}
    >
      {buttonContent}
    </button>
  );
}
