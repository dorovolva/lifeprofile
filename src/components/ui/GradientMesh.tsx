"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GradientMesh() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-[#F8F9FD]">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
 
      {/* Floating Animated Color Blobs for a premium alive feel */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-blue-300/40 blur-[130px] mix-blend-multiply"
      />
 
      <motion.div
        animate={{
          x: [0, -70, 60, 0],
          y: [0, 80, -50, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-15%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-300/35 blur-[120px] mix-blend-multiply"
      />
 
      <motion.div
        animate={{
          x: [0, 50, -60, 0],
          y: [0, 70, 50, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[30%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-amber-200/30 blur-[100px]"
      />
 
      <motion.div
        animate={{
          x: [0, -40, 50, 0],
          y: [0, -50, -40, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[10%] right-[30%] w-[45vw] h-[45vw] rounded-full bg-sky-200/35 blur-[110px]"
      />
 
      {/* Grid overlay for a structural feel */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-overlay">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-mesh"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-mesh)" />
        </svg>
      </div>
 
      {/* Smooth vignette to fade to background at the bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F8F9FD]/40 to-[#F8F9FD]" />
    </div>
  );
}
