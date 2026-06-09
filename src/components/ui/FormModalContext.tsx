"use client";

import React, { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, Sparkles, AlertCircle } from "lucide-react";
import Button from "./Button";

interface FormModalContextType {
  isOpen: boolean;
  openFormModal: () => void;
  closeFormModal: () => void;
}

const FormModalContext = createContext<FormModalContextType | undefined>(undefined);

export function FormModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openFormModal = () => setIsOpen(true);
  const closeFormModal = () => setIsOpen(false);

  const handleConfirm = () => {
    window.open("https://tally.so/r/gDz4Rd", "_blank", "noopener,noreferrer");
    closeFormModal();
  };

  return (
    <FormModalContext.Provider value={{ isOpen, openFormModal, closeFormModal }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 font-sans">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeFormModal}
              className="absolute inset-0 bg-neutral-950/45 backdrop-blur-md"
            />

            {/* Modal Body Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-white border border-neutral-200/60 rounded-[32px] max-w-xl w-full p-6 sm:p-8 overflow-hidden shadow-2xl flex flex-col gap-5 z-10"
            >
              {/* Decorative top bar accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500" />

              {/* Close Button */}
              <button
                onClick={closeFormModal}
                className="absolute top-5 right-5 p-1.5 rounded-full text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-3 mt-2">
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-100/50 flex items-center justify-center text-indigo-650 shrink-0">
                  <Heart className="w-5 h-5 fill-indigo-500/20 text-indigo-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 leading-tight">
                    A Note From Our Team
                  </h3>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400">
                    Human Direction Engine
                  </span>
                </div>
              </div>

              {/* Main Content Area (Scrollable to fit on small mobile viewports) */}
              <div className="max-h-[50vh] overflow-y-auto pr-2 text-sm leading-relaxed text-neutral-600 flex flex-col gap-4 font-normal custom-scrollbar">
                <p className="font-semibold text-neutral-800">
                  Hey! 👋
                </p>
                <p>
                  Thanks a lot for taking the time to help with this. It genuinely means a lot.
                </p>
                
                <div className="p-4 rounded-2xl bg-indigo-50/30 border border-indigo-100/40 text-neutral-800 flex items-start gap-3 my-1">
                  <Sparkles className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1 text-xs">
                    <span className="font-bold">Our small request:</span>
                    <span className="leading-relaxed">
                      Please don't think of this as another survey or exam. Instead, imagine you're having a conversation with a friend who's genuinely trying to understand you.
                    </span>
                  </div>
                </div>

                <p>
                  There are no right or wrong answers. You don't have to impress anyone. Be as honest as you can—even if your answer is <span className="italic font-medium text-neutral-850">"I don't know."</span>
                </p>

                <p>
                  For the questions where you can type your own answer, don't hesitate to explain your thoughts in detail. The more context you share about your experiences, family, interests, worries, goals, or current situation, the better we'll be able to understand real student journeys.
                </p>

                <div className="border-l-2 border-indigo-500 pl-4 py-1 flex flex-col gap-1.5 italic text-neutral-500 text-xs sm:text-sm my-1">
                  <p>• If you're confused about your future, say it.</p>
                  <p>• If you're scared about choosing the wrong path, say it.</p>
                  <p>• If you have a dream, even if it sounds unrealistic, write it.</p>
                </div>

                <p>
                  Everything you share helps us build a better understanding of how students actually make life decisions.
                </p>
                <p>
                  Your responses will be kept confidential and used only for research and development of the Human Direction Engine.
                </p>
                
                <div className="flex items-center gap-1 mt-2 text-neutral-800 font-semibold">
                  <span>Take your time, answer with an open heart, and just be yourself.</span>
                </div>

                <p className="font-medium text-neutral-800">
                  Thank you for being part of this journey. ❤️
                </p>
              </div>

              {/* Actions Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-neutral-100 mt-2">
                <Button
                  onClick={closeFormModal}
                  variant="secondary"
                  className="flex-1 text-xs font-semibold py-3"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleConfirm}
                  variant="primary"
                  className="flex-[2] text-xs font-semibold py-3"
                >
                  Go to Form
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </FormModalContext.Provider>
  );
}

export function useFormModal() {
  const context = useContext(FormModalContext);
  if (!context) {
    throw new Error("useFormModal must be used within a FormModalProvider");
  }
  return context;
}
