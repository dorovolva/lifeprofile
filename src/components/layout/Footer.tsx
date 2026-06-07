"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-[#F8F9FD] py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & Info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-7 h-7 rounded bg-neutral-950 flex items-center justify-center">
                <span className="text-white font-bold text-xs select-none">H</span>
              </div>
              <span className="font-semibold text-sm tracking-tight text-neutral-900">
                Human Direction Engine
              </span>
            </Link>
            <p className="text-sm text-neutral-500 max-w-sm leading-relaxed">
              Building the future of human direction through research, observation, and human understanding.
            </p>
          </div>
 
          {/* Links */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
              Initiative
            </span>
            <Link
              href="/#about"
              className="text-sm text-neutral-500 hover:text-neutral-950 transition-colors"
            >
              About
            </Link>
            <Link
              href="/research"
              className="text-sm text-neutral-500 hover:text-neutral-950 transition-colors"
            >
              Research
            </Link>
            <Link
              href="/#framework"
              className="text-sm text-neutral-500 hover:text-neutral-950 transition-colors"
            >
              Framework
            </Link>
          </div>
 
          {/* Contact & Support */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
              Legal & Support
            </span>
            <Link
              href="/privacy"
              className="text-sm text-neutral-500 hover:text-neutral-950 transition-colors"
            >
              Privacy
            </Link>
            <a
              href="https://dorovolva.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-500 hover:text-neutral-950 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
 
        <div className="mt-12 pt-8 border-t border-neutral-100/80 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-neutral-400 font-medium">
            © {new Date().getFullYear()} Human Direction Engine. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
