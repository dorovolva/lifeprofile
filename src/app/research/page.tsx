"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Database, Eye, HeartHandshake, HelpCircle } from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Button from "../../components/ui/Button";
import GradientMesh from "../../components/ui/GradientMesh";
import { useFormModal } from "../../components/ui/FormModalContext";

export default function ResearchPage() {
  const { openFormModal } = useFormModal();
  const animations = {
    fadeUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const sections = [
    {
      title: "Why we are collecting data",
      desc: "Traditional career assessments focus entirely on matching skills to jobs. We believe this is a backwards approach. We are collecting detailed 'Life Profiles' to study how background constraints, family responsibilities, exposure to opportunities, and core strengths correlate with long-term direction clarity.",
      icon: <Database className="w-5 h-5 text-indigo-500" />,
    },
    {
      title: "What we are learning",
      desc: "Our primary objective is to identify the critical patterns that lead to path-uncertainty and misaligned commitments. By mapping out a multidimensional dataset of young adults, we aim to design a better navigation engine that helps people locate their ideal trajectory organically.",
      icon: <HelpCircle className="w-5 h-5 text-indigo-500" />,
    },
    {
      title: "How data is used",
      desc: "Your responses will be aggregated, de-identified, and parsed through structural classification models. The results will contribute directly to academic-grade papers and the development of the open-source Human Direction Engine framework.",
      icon: <Eye className="w-5 h-5 text-indigo-500" />,
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-[#FAFAFA]">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-6 md:px-8 pt-32 pb-20 md:pt-40 md:pb-28">
        <GradientMesh />

        {/* Hero Section */}
        <div className="text-center md:text-left mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs font-semibold text-indigo-500 uppercase tracking-widest block mb-4"
          >
            Laboratory Workspace
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 leading-tight"
          >
            Human Direction Research
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg text-neutral-500 max-w-2xl leading-relaxed"
          >
            Welcome to the R&D initiative of the Human Direction Engine. We study the core forces that guide life choices. Read our parameters below, then begin your discovery journey.
          </motion.p>
        </div>

        {/* Lab Parameters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/50 flex flex-col gap-1.5">
            <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">
              Verification Code
            </span>
            <span className="text-sm font-bold text-neutral-800 font-mono">HDE-RD-2026</span>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/50 flex flex-col gap-1.5">
            <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">
              Anonymity Level
            </span>
            <span className="text-sm font-bold text-emerald-600 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> 100% Fully Anonymous
            </span>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/50 flex flex-col gap-1.5">
            <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">
              Completion Rate
            </span>
            <span className="text-sm font-bold text-neutral-800">Average 6.4 minutes</span>
          </div>
        </div>

        {/* Structured Editorial content */}
        <div className="flex flex-col gap-12 mb-20">
          {sections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={animations.fadeUp}
              className="flex flex-col md:flex-row gap-6 md:gap-10 items-start border-b border-neutral-100 pb-10 last:border-b-0"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200/60 shadow-sm flex items-center justify-center shrink-0">
                {section.icon}
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-bold text-neutral-900">{section.title}</h3>
                <p className="text-neutral-500 text-sm md:text-base leading-relaxed">
                  {section.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Privacy commitment panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl bg-neutral-900 text-neutral-50 border border-neutral-800 mb-16 relative overflow-hidden"
        >
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-5 pointer-events-none">
            <HeartHandshake className="w-72 h-72" />
          </div>
          
          <div className="relative z-10 flex flex-col gap-4">
            <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">
              Strict Privacy Commitment
            </span>
            <h3 className="text-xl font-bold text-white">Your Profile is Completely Protected.</h3>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-2xl">
              We do not sell, share, or lease any individual profile information. No trackers, no pixel tags, no advertisements, and no user tracking. All inputs are securely encrypted. We only analyze aggregated, de-identified findings.
            </p>
          </div>
        </motion.div>

        {/* Large CTA */}
        <div className="flex flex-col items-center border-t border-neutral-100 pt-16">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-4">
            Ready to Begin
          </span>
          <Button onClick={openFormModal} variant="primary" className="px-10 py-4 text-base font-medium shadow-md">
            Begin Life Discovery Journey <ArrowRight className="w-5 h-5 ml-2" />
          </Button></div>
      </main>

      <Footer />
    </div>
  );
}
