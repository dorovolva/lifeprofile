"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  ChevronDown, 
  ArrowRight, 
  Compass, 
  Database, 
  ShieldCheck, 
  HelpCircle, 
  BookOpen, 
  Sparkles,
  Info,
  X
} from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Button from "../../components/ui/Button";
import GradientMesh from "../../components/ui/GradientMesh";
import { useFormModal } from "../../components/ui/FormModalContext";

interface FAQItem {
  id: string;
  number: number;
  question: string;
  category: "about" | "participation" | "future";
  keywords: string;
  answer: React.ReactNode;
}

export default function FAQPage() {
  const { openFormModal } = useFormModal();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<"all" | "about" | "participation" | "future">("all");
  const [openId, setOpenId] = useState<string | null>("hde-definition");

  const categories = [
    { id: "all", name: "All Questions", icon: <Sparkles className="w-4 h-4" /> },
    { id: "about", name: "About HDE", icon: <HelpCircle className="w-4 h-4" /> },
    { id: "participation", name: "Research & Data", icon: <Database className="w-4 h-4" /> },
    { id: "future", name: "Future Vision", icon: <Compass className="w-4 h-4" /> },
  ] as const;

  const faqData = useMemo<FAQItem[]>(() => [
    {
      id: "hde-definition",
      number: 1,
      question: "What is HDE?",
      category: "about",
      keywords: "what is hde human direction engine independent research initiative students choose future guidance system",
      answer: (
        <div className="flex flex-col gap-3">
          <p className="text-neutral-600 leading-relaxed">
            <strong>Human Direction Engine (HDE)</strong> is an independent research initiative designed to understand how students navigate their future decisions and to build a highly aligned guidance system for life after school.
          </p>
          <p className="text-neutral-600 leading-relaxed">
            We are deeply studying how an ecosystem of factors—including family parameters, academic conditions, latent skills, interests, financial responsibilities, and personal aspirations—influence a student's long-term direction.
          </p>
        </div>
      ),
    },
    {
      id: "why-building",
      number: 2,
      question: "Why are we building it?",
      category: "about",
      keywords: "why building guidance systems careers subject likes responsibilities financials strengths exposure skills",
      answer: (
        <div className="flex flex-col gap-4">
          <p className="text-neutral-600 leading-relaxed">
            Today's guidance systems often ask narrow questions:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-2">
            <div className="p-3 rounded-xl bg-rose-50/50 border border-rose-100/30 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
              <span className="text-xs text-rose-800 font-medium">"Which subject do you like?"</span>
            </div>
            <div className="p-3 rounded-xl bg-rose-50/50 border border-rose-100/30 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
              <span className="text-xs text-rose-800 font-medium">"Which career interests you?"</span>
            </div>
          </div>
          <p className="text-neutral-600 leading-relaxed">
            But real life decisions depend on far more complex variables. HDE aims to understand the <strong>whole person</strong> before suggesting a direction, accounting for:
          </p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 pl-4 list-disc text-sm text-neutral-500 font-medium">
            <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-indigo-500" /> Family responsibilities</span>
            <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-indigo-500" /> Financial constraints</span>
            <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-indigo-500" /> Personal strengths & grit</span>
            <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-indigo-500" /> Level of exposure</span>
            <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-indigo-500" /> Current skill levels</span>
            <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-indigo-500" /> Long-term personal goals</span>
          </div>
        </div>
      ),
    },
    {
      id: "problems-solved",
      number: 3,
      question: "What problem are we trying to solve?",
      category: "about",
      keywords: "problems solved wrong course college career path self understanding confusion",
      answer: (
        <div className="flex flex-col gap-3">
          <p className="text-neutral-600 leading-relaxed">
            Every year, thousands of students choose the <strong>wrong course</strong>, the <strong>wrong college</strong>, or the <strong>wrong career path</strong>.
          </p>
          <div className="p-4 rounded-2xl bg-indigo-50/30 border border-indigo-100/40 text-sm text-indigo-950 font-medium leading-relaxed my-1">
            "They make these wrong choices not because they lack raw capability, but because they lack structured self-understanding and real-world exposure."
          </div>
          <p className="text-neutral-600 leading-relaxed">
            Our goal is to eliminate this systemic confusion by providing students with an objective, data-backed reflection system.
          </p>
        </div>
      ),
    },
    {
      id: "current-status",
      number: 4,
      question: "What is happening now?",
      category: "participation",
      keywords: "current status research development phase anonymous life profiles students clarity model",
      answer: (
        <div className="flex flex-col gap-3">
          <p className="text-neutral-600 leading-relaxed">
            HDE is currently in its active <strong>Research & Development phase</strong>.
          </p>
          <p className="text-neutral-600 leading-relaxed">
            We are collecting anonymous <strong>Life Profiles</strong> from students globally to study:
          </p>
          <ul className="flex flex-col gap-2 pl-4 text-sm text-neutral-500 font-medium">
            <li className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              How students think and construct decisions
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              What core obstacles and constraints they struggle with
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              What background factors influence their choices the most
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              What variables correlate directly with path clarity
            </li>
          </ul>
          <p className="text-neutral-600 leading-relaxed mt-1">
            This mapping will shape the framework of the next-generation Human Direction Engine.
          </p>
        </div>
      ),
    },
    {
      id: "why-participate",
      number: 5,
      question: "Why should you participate?",
      category: "participation",
      keywords: "why participate decision mistakes fears thinking patterns framework improvement",
      answer: (
        <div className="flex flex-col gap-3">
          <p className="text-neutral-600 leading-relaxed">
            Your response helps us understand the reality of decision-making on the ground:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-2">
            <div className="p-4 rounded-2xl bg-white border border-neutral-200/50 flex flex-col gap-1 shadow-sm">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Observe</span>
              <span className="text-xs font-semibold text-neutral-800">Common Mistakes</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-neutral-200/50 flex flex-col gap-1 shadow-sm">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Uncover</span>
              <span className="text-xs font-semibold text-neutral-800">Common Fears</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-neutral-200/50 flex flex-col gap-1 shadow-sm">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Map Out</span>
              <span className="text-xs font-semibold text-neutral-800">Thinking Patterns</span>
            </div>
          </div>
          <p className="text-neutral-600 leading-relaxed">
            Every submitted profile plays a direct role in improving and refining the guidance framework for thousands of students who will come after you.
          </p>
        </div>
      ),
    },
    {
      id: "data-privacy",
      number: 6,
      question: "What happens to your data?",
      category: "participation",
      keywords: "data privacy safety anonymous research confidentiality security",
      answer: (
        <div className="flex flex-col gap-3">
          <p className="text-neutral-600 leading-relaxed">
            Your privacy is our highest priority. All profile responses are used <strong>exclusively for research and framework development</strong>.
          </p>
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100/60 text-emerald-900 mt-1">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="flex flex-col gap-1 text-xs">
              <span className="font-bold">Confidentiality Assured</span>
              <span>
                We study aggregate patterns and cohorts, not individuals. No individual identifiers are sold, shared, or compiled for marketing. Everything is stored with high-level encryption.
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "future-roadmap",
      number: 7,
      question: "What are we building in the future?",
      category: "future",
      keywords: "future roadmap study plus two careers strengths skills mistakes five years",
      answer: (
        <div className="flex flex-col gap-3">
          <p className="text-neutral-600 leading-relaxed">
            The long-term goal is to build an intelligent, open-access platform designed to help students resolve critical path decisions:
          </p>
          <div className="border border-neutral-200/50 rounded-2xl overflow-hidden bg-white shadow-[0_2px_8px_rgba(0,0,0,0.01)] text-xs font-semibold">
            <div className="flex items-center gap-3 p-3.5 border-b border-neutral-100">
              <span className="w-5 h-5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center font-bold">1</span>
              <span className="text-neutral-700">What should I study after Plus Two / High School?</span>
            </div>
            <div className="flex items-center gap-3 p-3.5 border-b border-neutral-100">
              <span className="w-5 h-5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center font-bold">2</span>
              <span className="text-neutral-700">Which specific careers align organicially with my latent strengths?</span>
            </div>
            <div className="flex items-center gap-3 p-3.5 border-b border-neutral-100">
              <span className="w-5 h-5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center font-bold">3</span>
              <span className="text-neutral-700">What roadmap and skills should I develop to achieve my goals?</span>
            </div>
            <div className="flex items-center gap-3 p-3.5">
              <span className="w-5 h-5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center font-bold">4</span>
              <span className="text-neutral-700">What major pitfalls and mistakes should I avoid in the next 5 years?</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "cohorts",
      number: 8,
      question: "Who can participate?",
      category: "participation",
      keywords: "cohorts participate plus one plus two college graduates professionals perspectives",
      answer: (
        <div className="flex flex-col gap-3">
          <p className="text-neutral-600 leading-relaxed">
            We require diverse perspectives to represent the full spectrum of educational and early-career paths. We are actively looking for:
          </p>
          <div className="flex flex-wrap gap-2 my-1">
            {["Plus One Students", "Plus Two Students", "College Students", "Fresh Graduates", "Young Professionals"].map((item) => (
              <span key={item} className="px-3 py-1.5 rounded-full bg-neutral-100 text-neutral-800 text-xs font-semibold border border-neutral-200/50">
                {item}
              </span>
            ))}
          </div>
          <p className="text-neutral-600 leading-relaxed text-sm">
            Whether your path is crystal clear or highly uncertain, your story is equally valuable to our research database.
          </p>
        </div>
      ),
    },
    {
      id: "contribute-ways",
      number: 9,
      question: "How can you contribute?",
      category: "participation",
      keywords: "how contribute ways participate share assessment feedback interview others",
      answer: (
        <div className="flex flex-col gap-4 text-sm font-semibold">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-white border border-neutral-200/60 shadow-sm flex flex-col gap-1.5">
              <span className="text-indigo-600 font-bold">1. Participate</span>
              <span className="text-neutral-500 font-medium text-xs">Complete the anonymous Life Profile assessment.</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-neutral-200/60 shadow-sm flex flex-col gap-1.5">
              <span className="text-indigo-600 font-bold">2. Share</span>
              <span className="text-neutral-500 font-medium text-xs">Share the research portal with friends, classmates, and family.</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-neutral-200/60 shadow-sm flex flex-col gap-1.5">
              <span className="text-indigo-600 font-bold">3. Suggest Feedback</span>
              <span className="text-neutral-500 font-medium text-xs">Give inputs to refine our assessment questions or research metrics.</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-neutral-200/60 shadow-sm flex flex-col gap-1.5">
              <span className="text-indigo-600 font-bold">4. Interview Others</span>
              <span className="text-neutral-500 font-medium text-xs">Help us collect structured Life Profiles from more students in your region.</span>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-indigo-950 text-white border border-indigo-900 flex flex-col gap-1.5 md:col-span-2">
            <span className="font-bold text-white flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-indigo-400" /> 5. Become a Contributor</span>
            <span className="text-indigo-200 font-medium text-xs leading-relaxed">Collaborate directly with our core research team to analyze aggregate data or build out components of the Human Direction Engine.</span>
          </div>
        </div>
      ),
    },
    {
      id: "our-mission",
      number: 10,
      question: "Our Mission",
      category: "about",
      keywords: "mission values goals help students educational career life decisions self understanding guesswork",
      answer: (
        <div className="flex flex-col gap-3">
          <p className="text-neutral-700 leading-relaxed font-semibold text-lg md:text-xl text-center md:text-left py-2 bg-gradient-to-r from-indigo-950 via-indigo-900 to-indigo-950 bg-clip-text text-transparent italic">
            "To help every student make better educational, career, and life decisions through deeper self-understanding rather than guesswork."
          </p>
        </div>
      ),
    },
  ], []);

  // Filter based on active category and search query
  const filteredFAQs = useMemo(() => {
    return faqData.filter((item) => {
      // Category filter
      if (activeCategory !== "all" && item.category !== activeCategory) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesQuestion = item.question.toLowerCase().includes(query);
        const matchesKeywords = item.keywords.toLowerCase().includes(query);
        return matchesQuestion || matchesKeywords;
      }
      return true;
    });
  }, [faqData, activeCategory, searchQuery]);

  return (
    <div className="relative min-h-screen flex flex-col bg-[#FAFAFA] overflow-hidden">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-6 md:px-8 pt-32 pb-20 md:pt-40 md:pb-28 w-full z-10">
        <GradientMesh />

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs font-semibold text-indigo-500 uppercase tracking-widest block mb-4"
          >
            FAQ & Documentation
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-tight"
          >
            Ask Us Anything About HDE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base md:text-lg text-neutral-500 leading-relaxed"
          >
            Find answers to commonly asked questions about our R&D initiative, data standards, and roadmap.
          </motion.p>
        </div>

        {/* Search Bar Block */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-5 h-5 text-neutral-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search questions (e.g. privacy, mission, participation...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-4 rounded-2xl border border-neutral-200/80 bg-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-sm shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")} 
                className="absolute right-4 p-1 rounded-full text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
        
        {/* Category Selector Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 max-w-full no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 border ${
                  isActive
                    ? "bg-neutral-950 border-neutral-950 text-white shadow-sm"
                    : "bg-white border-neutral-200/80 text-neutral-500 hover:border-neutral-300 hover:text-neutral-800"
                }`}
              >
                {cat.icon}
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
        
        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/75 border border-neutral-200/50 rounded-3xl p-3 shadow-md backdrop-blur-md">
            <AnimatePresence mode="wait">
              {filteredFAQs.length > 0 ? (
                <motion.div 
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col"
                >
                  {filteredFAQs.map((faq, idx) => {
                    const isOpen = openId === faq.id;
                    return (
                      <motion.div
                        layout
                        key={faq.id}
                        className={`group px-6 transition-colors ${
                          idx < filteredFAQs.length - 1 ? "border-b border-neutral-100" : ""
                        }`}
                      >
                        <button
                          onClick={() => setOpenId(isOpen ? null : faq.id)}
                          className="w-full flex items-center justify-between py-6 text-left gap-4 cursor-pointer"
                        >
                          <span className="flex items-center gap-3.5">
                            <span className="text-xs font-bold font-mono text-neutral-400 w-5">
                              {String(faq.number).padStart(2, "0")}
                            </span>
                            <span className="text-sm md:text-base font-bold text-neutral-800 group-hover:text-neutral-950 transition-colors">
                              {faq.question}
                            </span>
                          </span>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-500 border border-neutral-100 shrink-0 group-hover:bg-neutral-100/70 transition-colors"
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="pb-6 pt-1 text-sm md:text-[15px] font-normal">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="py-16 text-center flex flex-col items-center justify-center text-neutral-500"
                >
                  <Info className="w-8 h-8 text-neutral-300 mb-3" />
                  <span className="text-sm font-semibold">No questions matched your query.</span>
                  <span className="text-xs text-neutral-400 mt-1">Try searching another topic or clear filters.</span>
                  <button 
                    onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
                    className="mt-4 text-xs font-semibold text-indigo-500 hover:text-indigo-650 underline cursor-pointer"
                  >
                    Clear all filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Interactive Mission Card Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl mx-auto p-8 rounded-3xl bg-neutral-900 text-neutral-50 border border-neutral-800 relative overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
        >
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-5 pointer-events-none">
            <Compass className="w-72 h-72" />
          </div>
          
          <div className="relative z-10 flex flex-col gap-4">
            <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Our North Star
            </span>
            <h3 className="text-2xl font-bold text-white">Empowering Self-Discovery</h3>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              By collecting anonymous Life Profiles, HDE maps how various life parameters, responsibilities, and strengths correlate with real clarity. We build roadmaps that replace guess-work with alignment.
            </p>
          </div>
        </motion.div>

        {/* Call to Action Section */}
        <div className="flex flex-col items-center border-t border-neutral-200/50 mt-20 pt-16">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-4">
            Join the Initiative
          </span>
          <Button onClick={openFormModal} variant="primary" className="px-10 py-4 text-base font-semibold shadow-md group">
            Begin Life Discovery Journey 
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
