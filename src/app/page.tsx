"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, ChevronRight, ArrowUpRight, Compass, HelpCircle } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Button from "../components/ui/Button";
import { useFormModal } from "../components/ui/FormModalContext";
import GradientMesh from "../components/ui/GradientMesh";
import DotField from "../components/ui/DotField";
import GlareHover from "../components/ui/GlareHover";

// Fade in up viewport component
function ScrollReveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const { openFormModal } = useFormModal();
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const yPos = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-[#F8F9FD]" ref={targetRef}>
      {/* Decorative vibrant glow blobs for modern premium feel */}
      <div className="absolute top-0 right-0 w-[45vw] h-[45vw] rounded-full bg-indigo-200/20 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-[18%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-purple-200/15 blur-[120px] pointer-events-none -z-10" />
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 flex flex-col items-center justify-center text-center px-6 min-h-[90vh] overflow-hidden">
        <GradientMesh />
        
        {/* DotField Component integration from React Bits */}
        <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
          <DotField
            dotRadius={2.0}
            dotSpacing={16}
            bulgeStrength={85}
            glowRadius={240}
            sparkle={true}
            waveAmplitude={4}
            gradientFrom="rgba(99, 102, 241, 0.45)"
            gradientTo="rgba(168, 85, 247, 0.3)"
            glowColor="rgba(99, 102, 241, 0.15)"
          />
        </div>
        
        <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
          {/* Heading */}
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-neutral-900 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-[1.1] max-w-3xl">
              Help Us Build A Better Way To Find Direction.
            </h1>
          </ScrollReveal>
 
          {/* Subheading */}
          <ScrollReveal delay={0.2}>
            <p className="mt-8 text-base sm:text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed">
              We're researching how students and young adults think about their future, responsibilities, strengths, opportunities, and goals. Your participation helps us create a better framework for life decisions.
            </p>
          </ScrollReveal>
 
          {/* CTAs */}
          <ScrollReveal delay={0.3} className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 justify-center items-center">
            <GlareHover
              width="auto"
              height="auto"
              background="transparent"
              borderRadius="9999px"
              borderColor="transparent"
              glareColor="#ffffff"
              glareOpacity={0.6}
              glareAngle={-30}
              glareSize={200}
              transitionDuration={1200}
              className="w-full sm:w-auto shadow-[0_10px_30px_rgba(99,102,241,0.2)] hover:shadow-[0_15px_35px_rgba(99,102,241,0.3)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <Button onClick={openFormModal} variant="primary" className="w-full sm:w-auto px-8 py-4 text-base !shadow-none border-0 hover:bg-neutral-800">
                Participate In Research <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </GlareHover>
            <Button href="#about" variant="secondary" className="w-full sm:w-auto px-8 py-4 text-base hover:-translate-y-0.5 transition-all">
              Learn More
            </Button>
          </ScrollReveal>
 
        </div>
      </section>

      {/* Section 2: Why We're Building This */}
      <section id="about" className="py-20 md:py-32 bg-white relative z-10 border-y border-neutral-100/80">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest block mb-4">
                The Problem
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-neutral-950 via-indigo-900 to-purple-900 bg-clip-text text-transparent leading-tight">
                Most People Choose Paths Before Understanding Themselves.
              </h2>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-8">
              <p className="text-base sm:text-lg text-neutral-500 leading-relaxed">
                Better decisions begin with better self-understanding. However, traditional systems force young adults to lock in pathways based on superficial parameters, leading to misalignment and regret.
              </p>

              {/* Comparison Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                <div className="p-6 sm:p-8 rounded-3xl bg-neutral-50/80 border border-neutral-200/50 flex flex-col gap-5 shadow-[0_4px_20px_rgba(0,0,0,0.01)] backdrop-blur-sm">
                  <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                    What we are usually asked:
                  </span>
                  <ul className="flex flex-col gap-4 text-sm sm:text-base text-neutral-600 font-medium">
                    <li className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-rose-400 ring-4 ring-rose-100 shrink-0" />
                      What course will you choose?
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-rose-400 ring-4 ring-rose-100 shrink-0" />
                      What job do you want?
                    </li>
                  </ul>
                </div>

                <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-50/70 to-purple-50/30 border border-indigo-100/80 flex flex-col gap-5 shadow-[0_4px_30px_rgba(99,102,241,0.04)] backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute right-0 top-0 w-24 h-24 rounded-full bg-indigo-200/20 blur-xl pointer-events-none" />
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider relative z-10">
                    What we should be asked:
                  </span>
                  <ul className="flex flex-col gap-4 text-sm sm:text-base text-neutral-800 font-bold relative z-10">
                    <li className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-indigo-500 ring-4 ring-indigo-100 shrink-0" />
                      What responsibilities do you carry?
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-indigo-500 ring-4 ring-indigo-100 shrink-0" />
                      What are your strengths?
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-indigo-500 ring-4 ring-indigo-100 shrink-0" />
                      What kind of life do you want?
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-indigo-500 ring-4 ring-indigo-100 shrink-0" />
                      What opportunities exist?
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Current Research Goal */}
      <section id="framework" className="py-20 md:py-32 bg-[#F8F9FD] relative z-10">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest block mb-4">
              Focus Areas
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
              Understanding Human Direction.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-500 leading-relaxed">
              Our ongoing study observes human direction across six core components. We analyze patterns to build an objective framework.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Direction Clarity",
                desc: "Understanding why some people have clear goals while others remain confused.",
                color: "bg-indigo-500/10 text-indigo-650 border-indigo-500/20",
                cardStyle: "bg-gradient-to-br from-indigo-50/50 to-white border-indigo-100/70 hover:border-indigo-300 hover:shadow-[0_8px_30px_rgba(99,102,241,0.08)] hover:scale-[1.02]",
                glow: "rgba(99, 102, 241, 0.25)"
              },
              {
                title: "Family Influence",
                desc: "How family dynamics, expectations, and responsibilities shape life decisions.",
                color: "bg-purple-500/10 text-purple-655 border-purple-500/20",
                cardStyle: "bg-gradient-to-br from-purple-50/50 to-white border-purple-100/70 hover:border-purple-300 hover:shadow-[0_8px_30px_rgba(168,85,247,0.08)] hover:scale-[1.02]",
                glow: "rgba(168, 85, 247, 0.25)"
              },
              {
                title: "Exposure & Opportunity",
                desc: "How environmental exposure, resources, and experiences affect path choices.",
                color: "bg-sky-500/10 text-sky-655 border-sky-500/20",
                cardStyle: "bg-gradient-to-br from-sky-50/50 to-white border-sky-100/70 hover:border-sky-300 hover:shadow-[0_8px_30px_rgba(14,165,233,0.08)] hover:scale-[1.02]",
                glow: "rgba(14, 165, 233, 0.25)"
              },
              {
                title: "Motivation Factors",
                desc: "Understanding what truly drives individuals: security, passion, impact, or status.",
                color: "bg-emerald-500/10 text-emerald-655 border-emerald-500/20",
                cardStyle: "bg-gradient-to-br from-emerald-50/50 to-white border-emerald-100/70 hover:border-emerald-300 hover:shadow-[0_8px_30px_rgba(16,185,129,0.08)] hover:scale-[1.02]",
                glow: "rgba(16, 185, 129, 0.25)"
              },
              {
                title: "Strength Discovery",
                desc: "Finding and mapping hidden capabilities, traits, and operational preferences.",
                color: "bg-amber-500/10 text-amber-655 border-amber-500/20",
                cardStyle: "bg-gradient-to-br from-amber-50/50 to-white border-amber-100/70 hover:border-amber-300 hover:shadow-[0_8px_30px_rgba(245,158,11,0.08)] hover:scale-[1.02]",
                glow: "rgba(245, 158, 11, 0.25)"
              },
              {
                title: "Future Vision",
                desc: "Analyzing how people imagine their future, long-term legacy, and success.",
                color: "bg-rose-500/10 text-rose-655 border-rose-500/20",
                cardStyle: "bg-gradient-to-br from-rose-50/50 to-white border-rose-100/70 hover:border-rose-300 hover:shadow-[0_8px_30px_rgba(244,63,94,0.08)] hover:scale-[1.02]",
                glow: "rgba(244, 63, 94, 0.25)"
              },
            ].map((item, idx) => (
              <ScrollReveal delay={idx * 0.1} key={item.title} className="group">
                <div className={`h-full p-8 rounded-3xl border transition-all duration-500 flex flex-col justify-between relative overflow-hidden ${item.cardStyle}`}>
                  {/* Background hover light glow */}
                  <div 
                    className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ backgroundColor: item.glow }}
                  />
                  <div className="relative z-10">
                    <div className={`w-10 h-10 rounded-xl ${item.color} border flex items-center justify-center mb-6`}>
                      <Compass className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-3 transition-colors group-hover:text-indigo-950">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-1.5 text-xs font-semibold text-neutral-400 group-hover:text-neutral-900 transition-colors relative z-10">
                    <span>Component {idx + 1}</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: How It Works */}
      <section className="py-20 md:py-32 bg-white relative z-10 border-y border-neutral-100/80">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest block mb-4">
              Methodology
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
              How It Works
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-500 leading-relaxed">
              We collect anonymous, high-fidelity life profiles to discover patterns of direction and confusion.
            </p>
          </div>

          <div className="relative">
            {/* Timeline connector line (desktop) */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-300 via-purple-300 to-indigo-300 hidden md:block" />

            <div className="flex flex-col gap-12 md:gap-16">
              {[
                {
                  step: "01",
                  title: "Share Your Life Profile",
                  desc: "Describe your current life situation, educational choices, and primary influences in our secure, distraction-free environment.",
                },
                {
                  step: "02",
                  title: "Tell Your Story",
                  desc: "Share critical moments of clarity or confusion, your perceived constraints, and what your day-to-day decisions look like.",
                },
                {
                  step: "03",
                  title: "Help Us Discover Patterns",
                  desc: "Our analytics engine translates your inputs into qualitative traits to cross-reference constraints with clarity scores.",
                },
                {
                  step: "04",
                  title: "Contribute to the Framework",
                  desc: "Your anonymized profile joins a global repository, paving the way for a more alignment-focused model of human navigation.",
                },
              ].map((item, idx) => {
                const stepColors = [
                  "from-blue-500 to-indigo-600 shadow-[0_4px_15px_rgba(99,102,241,0.25)]",
                  "from-purple-500 to-fuchsia-600 shadow-[0_4px_15px_rgba(168,85,247,0.25)]",
                  "from-sky-500 to-blue-600 shadow-[0_4px_15px_rgba(14,165,233,0.25)]",
                  "from-indigo-500 to-purple-600 shadow-[0_4px_15px_rgba(99,102,241,0.25)]",
                ];
                return (
                  <ScrollReveal delay={idx * 0.1} key={item.step} className="flex gap-6 md:gap-8 items-start relative group font-sans">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${stepColors[idx] || "from-neutral-800 to-neutral-950"} flex items-center justify-center font-bold text-white z-10 shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105`}>
                      {item.step}
                    </div>
                    <div className="pt-2">
                      <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-2xl">
                        {item.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Who Should Participate */}
      <section className="py-20 md:py-32 bg-[#F8F9FD] relative z-10 overflow-hidden">
        {/* Glow blobs */}
        <div className="absolute top-[30%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-purple-200/10 blur-[100px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-[-10%] w-[35vw] h-[35vw] rounded-full bg-blue-200/10 blur-[100px] pointer-events-none -z-10" />
        
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest block mb-4">
              Cohorts
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
              Who Should Participate
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-500 leading-relaxed">
              We need perspectives across all states of certainty, background stories, and career stages.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { name: "School Students", gradient: "from-blue-50/80 via-white to-indigo-50/30", border: "border-blue-100/70 hover:border-blue-300", shadow: "hover:shadow-[0_8px_25px_rgba(59,130,246,0.08)]" },
              { name: "College Students", gradient: "from-purple-50/80 via-white to-indigo-50/30", border: "border-purple-100/70 hover:border-purple-300", shadow: "hover:shadow-[0_8px_25px_rgba(168,85,247,0.08)]" },
              { name: "Fresh Graduates", gradient: "from-sky-50/80 via-white to-blue-50/30", border: "border-sky-100/70 hover:border-sky-300", shadow: "hover:shadow-[0_8px_25px_rgba(14,165,233,0.08)]" },
              { name: "Young Professionals", gradient: "from-emerald-50/80 via-white to-teal-50/30", border: "border-emerald-100/70 hover:border-emerald-300", shadow: "hover:shadow-[0_8px_25px_rgba(16,185,129,0.08)]" },
              { name: "Career Explorers", gradient: "from-amber-50/80 via-white to-orange-50/30", border: "border-amber-100/70 hover:border-amber-300", shadow: "hover:shadow-[0_8px_25px_rgba(245,158,11,0.08)]" },
              { name: "Undecided Individuals", gradient: "from-rose-50/80 via-white to-pink-50/30", border: "border-rose-100/70 hover:border-rose-300", shadow: "hover:shadow-[0_8px_25px_rgba(244,63,94,0.08)]" },
            ].map((cohort, idx) => (
              <ScrollReveal delay={idx * 0.05} key={cohort.name} className="h-full group">
                <div className={`p-6 rounded-3xl bg-white border ${cohort.border} bg-gradient-to-tr ${cohort.gradient} text-center flex items-center justify-center h-28 transition-all duration-300 group-hover:scale-[1.03] ${cohort.shadow}`}>
                  <span className="font-bold text-neutral-800 text-sm sm:text-base group-hover:text-indigo-900 transition-colors">{cohort.name}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-sm sm:text-base text-neutral-500 leading-relaxed italic">
              "Whether you're very clear about your future or completely confused, your perspective matters."
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Why This Matters */}
      <section className="py-20 md:py-32 bg-white relative z-10 border-t border-neutral-100/80">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center flex flex-col items-center">
          <span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest block mb-4">
            The Purpose
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-neutral-950 via-indigo-950 to-neutral-950 bg-clip-text text-transparent leading-tight max-w-2xl">
            Direction Shapes Everything.
          </h2>
          <p className="mt-8 text-lg md:text-2xl text-neutral-600 leading-relaxed font-light max-w-3xl">
            The decisions people make about education, careers, business, relationships, and growth often happen without enough self-understanding. We're trying to change that.
          </p>
          <div className="mt-8 w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-neutral-950 text-neutral-50 text-center">
        {/* Animated Background subtle gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.2),transparent_70%)]" />
        <div className="absolute top-[-20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-500/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
          <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest block mb-4">
            Join the Study
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight max-w-2xl bg-gradient-to-r from-white via-indigo-100 to-white bg-clip-text text-transparent">
            Become An Early Research Participant.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-xl mb-10 leading-relaxed">
            Help us understand how people discover direction and contribute to building a better system for future generations.
          </p>
          <GlareHover
            width="auto"
            height="auto"
            background="transparent"
            borderRadius="9999px"
            borderColor="transparent"
            glareColor="#ffffff"
            glareOpacity={0.5}
            glareAngle={-45}
            glareSize={200}
            transitionDuration={1000}
            className="shadow-[0_10px_35px_rgba(99,102,241,0.15)] hover:shadow-[0_15px_40px_rgba(99,102,241,0.25)] transition-all duration-300"
          >
            <Button onClick={openFormModal} variant="secondary" className="px-8 py-3.5 group !shadow-none border-0 hover:bg-neutral-50">
              Start Research Journey <ArrowUpRight className="w-4.5 h-4.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </GlareHover>
        </div>
      </section>

      <Footer />
    </div>
  );
}
