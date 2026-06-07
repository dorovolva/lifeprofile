"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Button from "../ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Research", href: "/research" },
    { name: "Framework", href: "/#framework" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? "glass-panel py-3 shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 rounded-lg bg-neutral-950 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-sm select-none tracking-tight">H</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-neutral-900 leading-none">
                Human Direction Engine
              </span>
              <span className="text-[10px] tracking-wider text-neutral-400 font-medium uppercase mt-0.5">
                R&D Initiative
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-neutral-600 hover:text-neutral-950 transition-colors font-medium relative py-1"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="https://tally.so/r/gDz4Rd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-600 hover:text-neutral-950 transition-colors font-medium"
            >
              Participate
            </Link>
            <Button href="https://tally.so/r/gDz4Rd" variant="primary">
              Start Journey <ArrowUpRight className="w-4 h-4 ml-0.5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 rounded-full text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100/80 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[57px] z-40 bg-white md:hidden flex flex-col justify-between p-6 border-t border-neutral-100"
          >
            <div className="flex flex-col gap-6 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-neutral-800 font-semibold hover:text-neutral-950 transition-colors py-2"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="https://tally.so/r/gDz4Rd"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="text-lg text-neutral-800 font-semibold hover:text-neutral-950 transition-colors py-2 flex items-center justify-between"
              >
                <span>Participate</span>
                <ArrowUpRight className="w-5 h-5 text-neutral-400" />
              </Link>
            </div>

            <div className="pb-8 flex flex-col gap-4">
              <Button
                href="https://tally.so/r/gDz4Rd"
                onClick={() => setIsOpen(false)}
                variant="primary"
                className="w-full text-center"
              >
                Start Journey <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
              <div className="text-center">
                <span className="text-xs text-neutral-400 font-medium">
                  © 2026 Human Direction Engine. All rights reserved.
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
