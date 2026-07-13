"use client";

import { useEffect, useRef, useState } from "react";
import { RxDoubleArrowUp } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";

export const BackToTop = () => {
  const [show, setShow] = useState(false);
  const showRef = useRef(show);
  showRef.current = show;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        if (!showRef.current && window.scrollY > 500) setShow(true);
        if (showRef.current && window.scrollY <= 500) setShow(false);
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed bottom-6 right-6 z-20"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
        >
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800"
          >
            <RxDoubleArrowUp className="size-4 text-zinc-700 dark:text-zinc-200" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
