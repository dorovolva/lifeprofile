"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Compass, ShieldAlert, Send, Loader2, User, Home, BookOpen, Briefcase, FileText } from "lucide-react";
import Link from "next/link";
import Button from "../../components/ui/Button";

interface Question {
  id: string;
  field: string;
  question: string;
  type: "choice" | "rating" | "text" | "checkbox";
  options?: string[];
  placeholder?: string;
  section: string;
}

const QUESTIONS: Question[] = [
  // SECTION 1: BASIC IDENTITY
  {
    id: "name",
    field: "Full Name",
    question: "What is your name?",
    type: "text",
    placeholder: "Full Name",
    section: "Basic Identity",
  },
  {
    id: "age",
    field: "Age",
    question: "What is your age?",
    type: "text",
    placeholder: "e.g., 21",
    section: "Basic Identity",
  },
  {
    id: "educationLevel",
    field: "Education Level",
    question: "What is your current education level?",
    type: "choice",
    options: [
      "High School Student",
      "Undergraduate Student",
      "Postgraduate Student",
      "Doctorate / PhD",
      "Working Professional",
      "Other",
    ],
    section: "Basic Identity",
  },
  {
    id: "locationType",
    field: "Location Type",
    question: "Which option best describes your current location type?",
    type: "choice",
    options: ["Village", "Town", "City", "Metro City"],
    section: "Basic Identity",
  },
  {
    id: "familyPosition",
    field: "Family Position",
    question: "What is your position in your family?",
    type: "choice",
    options: ["First Child", "Middle Child", "Youngest Child", "Only Child"],
    section: "Basic Identity",
  },
  
  // SECTION 2: FAMILY CONTEXT
  {
    id: "financialSituation",
    field: "Family Financials",
    question: "How would you describe your family's financial situation?",
    type: "choice",
    options: ["Struggling", "Moderate", "Stable", "Comfortable"],
    section: "Family Context",
  },
  {
    id: "earnPressure",
    field: "Earning Pressure",
    question: "Do you feel pressure to earn money early?",
    type: "choice",
    options: ["High Pressure", "Medium Pressure", "Low / No Pressure"],
    section: "Family Context",
  },
  {
    id: "responsibilities",
    field: "Future Responsibility",
    question: "Who do you feel responsible for supporting in the future?",
    type: "checkbox",
    options: ["Myself", "Parents", "Siblings", "Family Business", "Community", "No Major Responsibilities"],
    section: "Family Context",
  },
  {
    id: "familyExpectations",
    field: "Family Expectations",
    question: "What primary expectations does your family have for your path?",
    type: "choice",
    options: [
      "Higher Education",
      "Government Job",
      "Private Corporate Job",
      "New Business / Startup",
      "Takeover Family Business",
      "No Clear Expectations",
    ],
    section: "Family Context",
  },

  // SECTION 3: EDUCATION & PATHWAY
  {
    id: "studyStream",
    field: "Study Field",
    question: "What is your current study stream or major?",
    type: "choice",
    options: [
      "Engineering & Technology",
      "Medicine & Healthcare",
      "Commerce, Business & Finance",
      "Arts & Humanities",
      "Pure Sciences",
      "Undecided",
    ],
    section: "Education",
  },
  {
    id: "choiceReason",
    field: "Reason for Choice",
    question: "What was the primary reason for choosing this path?",
    type: "choice",
    options: [
      "Personal interest & passion",
      "Family pressure or legacy",
      "High future earning potential",
      "Peer influence or social status",
      "It was the easiest path available",
      "Accidental or no specific reason",
    ],
    section: "Education",
  },
  {
    id: "pathSatisfaction",
    field: "Path Satisfaction",
    question: "How satisfied are you with your current educational direction?",
    type: "rating",
    section: "Education",
  },

  // SECTION 4: CAREER & OBSTACLES
  {
    id: "careerGoal",
    field: "Primary Career Goal",
    question: "What is your primary long-term career goal?",
    type: "choice",
    options: [
      "Startup / Entrepreneurship",
      "Corporate Leadership / Job",
      "Research & Academia",
      "Social Impact / Non-Profit",
      "Creative Industry / Freelance",
      "Still Searching",
    ],
    section: "Career & Goals",
  },
  {
    id: "biggestObstacle",
    field: "Biggest Obstacle",
    question: "What is the biggest obstacle to finding clear direction?",
    type: "choice",
    options: [
      "Lack of real-world exposure",
      "Financial limitations & anxiety",
      "Parental disagreement or pressure",
      "Mental fatigue & pathway anxiety",
      "No major obstacles, I am clear",
    ],
    section: "Career & Goals",
  },
  {
    id: "mentorshipAccess",
    field: "Mentorship Access",
    question: "Do you have access to mentors who can guide your path?",
    type: "choice",
    options: [
      "Yes, excellent guidance",
      "Yes, some guidance",
      "No, navigating fully on my own",
    ],
    section: "Career & Goals",
  },

  // SECTION 5: REFLECTION
  {
    id: "personalStory",
    field: "Personal Dilemma",
    question: "Share a brief story of your current path. What represents your biggest dilemma or confusion?",
    type: "text",
    placeholder: "Explain your constraints, fears, or goals. This remains fully anonymous.",
    section: "Reflection",
  },
];

const SECTIONS = [
  { name: "Basic Identity", icon: <User className="w-4 h-4" /> },
  { name: "Family Context", icon: <Home className="w-4 h-4" /> },
  { name: "Education", icon: <BookOpen className="w-4 h-4" /> },
  { name: "Career & Goals", icon: <Briefcase className="w-4 h-4" /> },
  { name: "Reflection", icon: <FileText className="w-4 h-4" /> },
];

export default function JourneyPage() {
  const [currentStep, setCurrentStep] = useState<number>(-1); // -1 is intro screen
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleStart = () => {
    setCurrentStep(0);
  };

  const handleSelect = (value: any) => {
    const q = QUESTIONS[currentStep];
    setAnswers((prev) => ({ ...prev, [q.id]: value }));

    // Auto-advance for choice and rating (with a slight delay)
    if (q.type !== "text" && q.type !== "checkbox") {
      setTimeout(() => {
        if (currentStep < QUESTIONS.length) {
          setCurrentStep((prev) => prev + 1);
        }
      }, 300);
    }
  };

  const handleCheckboxSelect = (option: string) => {
    const q = QUESTIONS[currentStep];
    const currentAnswers = answers[q.id] || [];
    let newAnswers: string[];

    if (currentAnswers.includes(option)) {
      newAnswers = currentAnswers.filter((val: string) => val !== option);
    } else {
      newAnswers = [...currentAnswers, option];
    }

    setAnswers((prev) => ({ ...prev, [q.id]: newAnswers }));
  };

  const handleTextChange = (value: string) => {
    const q = QUESTIONS[currentStep];
    setAnswers((prev) => ({ ...prev, [q.id]: value }));
  };

  const handleNext = () => {
    const q = QUESTIONS[currentStep];
    
    // Check validation
    if (q.type === "text" && (!answers[q.id] || answers[q.id].trim() === "")) {
      return;
    }
    if (q.type === "checkbox" && (!answers[q.id] || answers[q.id].length === 0)) {
      return;
    }

    if (currentStep < QUESTIONS.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > -1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Simulate backend transmission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Transmission to HDE Database: ", answers);
    
    setIsSubmitting(false);
    setIsCompleted(true);
  };

  const progressPercentage =
    currentStep === -1
      ? 0
      : currentStep === QUESTIONS.length
      ? 100
      : Math.round((currentStep / QUESTIONS.length) * 100);

  const slideVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  // Find the active section metadata
  const currentQuestion = currentStep >= 0 && currentStep < QUESTIONS.length ? QUESTIONS[currentStep] : null;

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col justify-between text-neutral-900 selection:bg-neutral-200">
      {/* Top bar */}
      <header className="h-16 px-6 border-b border-neutral-100 flex items-center justify-between bg-white/70 backdrop-blur-md sticky top-0 z-30">
        <Link href="/research" className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors text-xs font-semibold uppercase tracking-wider">
          <ArrowLeft className="w-4 h-4" /> Exit Session
        </Link>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-950" />
          <span className="text-xs font-bold font-mono tracking-wider">HDE // RESEARCH PORTAL</span>
        </div>
      </header>

      {/* Main Experience Container */}
      <main className="flex-1 flex flex-col justify-center max-w-2xl w-full mx-auto px-6 py-12 md:py-20">
        
        {/* Section Indicators (Desktop helper) */}
        {currentStep >= 0 && currentStep < QUESTIONS.length && (
          <div className="hidden md:flex gap-4 mb-8 items-center border-b border-neutral-100 pb-4">
            {SECTIONS.map((sec, idx) => {
              const isActive = currentQuestion?.section === sec.name;
              return (
                <div
                  key={sec.name}
                  className={`flex items-center gap-1.5 text-xs font-semibold ${
                    isActive ? "text-indigo-600 font-bold" : "text-neutral-400"
                  }`}
                >
                  {sec.icon}
                  <span>{sec.name}</span>
                  {idx < SECTIONS.length - 1 && <span className="text-neutral-300 ml-2">/</span>}
                </div>
              );
            })}
          </div>
        )}

        <AnimatePresence mode="wait">
          {/* 1. INTRO SCREEN */}
          {currentStep === -1 && (
            <motion.div
              key="intro"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="flex flex-col text-center md:text-left"
            >
              <div className="w-12 h-12 rounded-2xl bg-neutral-950 flex items-center justify-center mb-8 mx-auto md:mx-0">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 leading-tight text-neutral-900">
                Life Profile Researcher
              </h1>
              <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
                This study is structured to understand your situation, family context, strengths, interests, challenges, and future goals. There are no right or wrong answers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button onClick={handleStart} variant="primary" className="w-full sm:w-auto px-8 py-3.5">
                  Begin Discovery Journey <ArrowRight className="w-4.5 h-4.5 ml-1" />
                </Button>
                <span className="text-xs text-neutral-400 font-semibold">
                  ⏱ Takes ~6-8 minutes
                </span>
              </div>
            </motion.div>
          )}

          {/* 2. QUESTION SCREEN */}
          {currentQuestion && (
            <motion.div
              key={`q-${currentStep}`}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="flex flex-col"
            >
              {/* Question metadata */}
              <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-4 flex items-center gap-1.5">
                {currentQuestion.section} — {currentStep + 1} of {QUESTIONS.length}
              </span>

              {/* Question heading */}
              <h2 className="text-2xl md:text-3.5xl font-bold tracking-tight mb-8 leading-snug text-neutral-900">
                {currentQuestion.question}
              </h2>

              {/* Input rendering */}
              <div className="flex flex-col gap-3">
                {/* A. Choice Questions */}
                {currentQuestion.type === "choice" &&
                  currentQuestion.options?.map((option) => {
                    const isSelected = answers[currentQuestion.id] === option;
                    return (
                      <button
                        key={option}
                        onClick={() => handleSelect(option)}
                        className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between relative overflow-hidden group ${
                          isSelected
                            ? "bg-white border-neutral-900 shadow-sm ring-1 ring-neutral-900"
                            : "bg-white border-neutral-200/80 hover:border-neutral-300 hover:bg-neutral-50/50"
                        }`}
                      >
                        <span className={`text-sm md:text-base font-semibold ${isSelected ? "text-neutral-900" : "text-neutral-600 group-hover:text-neutral-900"}`}>
                          {option}
                        </span>
                        {isSelected && (
                          <div className="w-5 h-5 rounded-full bg-neutral-900 flex items-center justify-center text-white">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                        )}
                      </button>
                    );
                  })}

                {/* B. Checkbox (Multi-select) */}
                {currentQuestion.type === "checkbox" && (
                  <div className="flex flex-col gap-3">
                    {currentQuestion.options?.map((option) => {
                      const isSelected = (answers[currentQuestion.id] || []).includes(option);
                      return (
                        <button
                          key={option}
                          onClick={() => handleCheckboxSelect(option)}
                          className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between relative overflow-hidden group ${
                            isSelected
                              ? "bg-white border-neutral-900 shadow-sm ring-1 ring-neutral-900"
                              : "bg-white border-neutral-200/80 hover:border-neutral-300 hover:bg-neutral-50/50"
                          }`}
                        >
                          <span className={`text-sm md:text-base font-semibold ${isSelected ? "text-neutral-900" : "text-neutral-600 group-hover:text-neutral-900"}`}>
                            {option}
                          </span>
                          <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                            isSelected ? "bg-neutral-950 border-neutral-950 text-white" : "border-neutral-300 group-hover:border-neutral-400 bg-white"
                          }`}>
                            {isSelected && <Check className="w-3.5 h-3.5" />}
                          </div>
                        </button>
                      );
                    })}
                    <div className="flex justify-end mt-4">
                      <Button
                        onClick={handleNext}
                        variant="primary"
                        disabled={!answers[currentQuestion.id] || answers[currentQuestion.id].length === 0}
                      >
                        Continue <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* C. Rating Questions */}
                {currentQuestion.type === "rating" && (
                  <div className="flex flex-col gap-6">
                    <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                      {Array.from({ length: 10 }).map((_, idx) => {
                        const val = idx + 1;
                        const isSelected = answers[currentQuestion.id] === val;
                        return (
                          <button
                            key={val}
                            onClick={() => handleSelect(val)}
                            className={`h-12 w-full rounded-xl border flex items-center justify-center font-bold text-sm transition-all duration-200 ${
                              isSelected
                                ? "bg-neutral-900 border-neutral-900 text-white shadow-sm"
                                : "bg-white border-neutral-200/80 text-neutral-500 hover:border-neutral-300 hover:bg-neutral-50"
                            }`}
                          >
                            {val}
                          </button>
                        );
                      })}
                    </div>
                    <div className="flex justify-between text-xs text-neutral-400 font-semibold uppercase tracking-wider px-1">
                      <span>1 — Dissatisfied</span>
                      <span>10 — Fully Satisfied</span>
                    </div>
                  </div>
                )}

                {/* D. Text / Input fields */}
                {currentQuestion.type === "text" && (
                  <div className="flex flex-col gap-4">
                    {currentQuestion.id === "personalStory" ? (
                      <textarea
                        value={answers[currentQuestion.id] || ""}
                        onChange={(e) => handleTextChange(e.target.value)}
                        rows={5}
                        placeholder={currentQuestion.placeholder}
                        className="w-full p-5 rounded-2xl border border-neutral-200/80 bg-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-950 focus:border-neutral-950 text-sm md:text-base leading-relaxed transition-all shadow-[0_1px_2px_rgba(0,0,0,0.01)]"
                      />
                    ) : (
                      <input
                        type="text"
                        value={answers[currentQuestion.id] || ""}
                        onChange={(e) => handleTextChange(e.target.value)}
                        placeholder={currentQuestion.placeholder}
                        className="w-full p-5 rounded-2xl border border-neutral-200/80 bg-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-950 focus:border-neutral-950 text-sm md:text-base leading-relaxed transition-all shadow-[0_1px_2px_rgba(0,0,0,0.01)]"
                      />
                    )}
                    <div className="flex justify-end">
                      <Button
                        onClick={handleNext}
                        variant="primary"
                        disabled={!answers[currentQuestion.id] || answers[currentQuestion.id].trim() === ""}
                      >
                        Continue <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* 3. REVIEW / SUMMARY SCREEN */}
          {currentStep === QUESTIONS.length && !isCompleted && (
            <motion.div
              key="review"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col"
            >
              <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-4">
                Session Overview
              </span>
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-neutral-900">
                Confirm Profile Transmission
              </h2>
              <p className="text-neutral-500 text-sm mb-8 leading-relaxed">
                Please review your profile parameters. Once confirmed, your answers are encrypted, de-identified, and parsed into HDE's R&D models.
              </p>

              {/* Review card list */}
              <div className="flex flex-col gap-3 max-h-[45vh] overflow-y-auto pr-2 border border-neutral-100 rounded-2xl p-4 bg-white shadow-sm mb-8">
                {QUESTIONS.map((q) => (
                  <div
                    key={q.id}
                    className="flex flex-col gap-1 border-b border-neutral-50 pb-3 last:border-b-0 last:pb-0"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                      {q.section} — {q.field}
                    </span>
                    <span className="text-sm font-semibold text-neutral-800 leading-snug">
                      {answers[q.id] ? (
                        q.type === "checkbox" ? (
                          answers[q.id].join(", ")
                        ) : q.type === "rating" ? (
                          `${answers[q.id]}/10 Satisfaction`
                        ) : (
                          answers[q.id]
                        )
                      ) : (
                        <span className="text-neutral-300 italic">Not answered</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>

              {/* Privacy/Encryption standard info */}
              <div className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100/60 text-xs text-indigo-900 leading-relaxed mb-8 flex gap-3">
                <ShieldAlert className="w-5 h-5 text-indigo-500 shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="font-bold">Encryption Protocol Initialized</span>
                  <span>
                    Your profile will be parsed directly into HDE's secure Supabase and Tally-compatible Notion database endpoints with fully de-identified keys.
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                <Button onClick={handleBack} variant="secondary" disabled={isSubmitting}>
                  Go Back
                </Button>
                <Button onClick={handleSubmit} variant="primary" disabled={isSubmitting} className="flex-1">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin mr-1.5" /> Synchronizing...
                    </>
                  ) : (
                    <>
                      Submit Anonymous Profile <Send className="w-4 h-4 ml-1.5" />
                    </>
                  )}
                </Button>
              </div>
            </motion.div>
          )}

          {/* 4. SUCCESS SCREEN */}
          {isCompleted && (
            <motion.div
              key="success"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              className="flex flex-col text-center animate-fade-in"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mb-8 mx-auto shadow-sm">
                <Check className="w-8 h-8" />
              </div>
              <h1 className="text-3xl md:text-4.5xl font-bold tracking-tight mb-4 text-neutral-900">
                Profile Recorded
              </h1>
              <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-8 max-w-md mx-auto">
                Thank you for contributing your life profile. Your parameters will help build a better framework for human direction.
              </p>

              <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/50 max-w-sm mx-auto w-full text-left mb-8">
                <div className="flex flex-col gap-1 text-[11px] text-neutral-400 font-semibold font-mono">
                  <div className="flex justify-between">
                    <span>DATABASE:</span>
                    <span className="text-neutral-800">SUPABASE_HDE_LPs</span>
                  </div>
                  <div className="flex justify-between">
                    <span>STATUS:</span>
                    <span className="text-emerald-600 font-bold">201_CREATED</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ENCRYPTION:</span>
                    <span className="text-neutral-800">AES-256</span>
                  </div>
                </div>
              </div>

              <Button href="/" variant="primary" className="max-w-xs mx-auto w-full">
                Return to Workspace
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Progress Footer indicator */}
      {currentStep >= 0 && !isCompleted && (
        <footer className="h-16 border-t border-neutral-100 bg-white px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={handleBack}
              disabled={currentStep === 0}
              className="p-2 rounded-full border border-neutral-200 hover:border-neutral-300 disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <span className="text-xs text-neutral-400 font-bold uppercase tracking-wider font-mono">
              Progress: {progressPercentage}%
            </span>
          </div>

          <div className="w-40 bg-neutral-100 h-1.5 rounded-full overflow-hidden">
            <motion.div
              className="bg-neutral-900 h-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </footer>
      )}
    </div>
  );
}
