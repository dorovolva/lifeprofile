"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import GradientMesh from "../../components/ui/GradientMesh";

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#FAFAFA]">
      <Navbar />

      <main className="flex-1 max-w-3xl mx-auto px-6 md:px-8 pt-32 pb-20">
        <GradientMesh />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
        >
          <span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest block mb-4">
            Legal Parameters
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-8 leading-tight">
            Privacy Policy
          </h1>

          <div className="prose prose-neutral max-w-none text-neutral-600 flex flex-col gap-6 text-sm sm:text-base leading-relaxed">
            <p className="font-semibold text-neutral-800">
              Last updated: June 7, 2026
            </p>
            
            <p>
              The Human Direction Engine (HDE) is a research and development initiative focused on studying how individuals navigate choices, responsibilities, and strengths. We respect your privacy and are committed to protecting it.
            </p>

            <h2 className="text-lg font-bold text-neutral-900 mt-6 mb-2">1. Data Collection & De-identification</h2>
            <p>
              All profiles submitted via the discovery journey are 100% anonymous. We do not collect names, email addresses, IP addresses, browser agents, or any other identifying credentials. We do not use third-party analytics pixels, cookies, or trackers.
            </p>

            <h2 className="text-lg font-bold text-neutral-900 mt-6 mb-2">2. How Data is Utilized</h2>
            <p>
              The gathered data is processed to map structural trends across different student and professional cohorts. It will be used for:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>Developing open-source human direction models.</li>
              <li>Academic publication and qualitative research papers.</li>
              <li>Refining our understanding of career and life trajectory alignment.</li>
            </ul>

            <h2 className="text-lg font-bold text-neutral-900 mt-6 mb-2">3. Third-party Platforms</h2>
            <p>
              Our database architecture is designed with high privacy and encryption standards. We do not share individual profiles with any commercial entities or advertisers.
            </p>

            <h2 className="text-lg font-bold text-neutral-900 mt-6 mb-2">4. Retaining Data</h2>
            <p>
              De-identified data is retained indefinitely to support long-term research models and help refine our historical datasets.
            </p>

            <h2 className="text-lg font-bold text-neutral-900 mt-6 mb-2">5. Contact Information</h2>
            <p>
              If you have questions regarding this privacy policy or HDE research ethics, please contact us at: <a href="mailto:research@humandirection.org" className="underline font-medium text-neutral-900">research@humandirection.org</a>.
            </p>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
