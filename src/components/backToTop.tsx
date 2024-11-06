"use client";

import { useCallback, useEffect, useState } from "react";
import { RxDoubleArrowUp } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";

export const BackToTop = () => {
  const [show, setShow] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleScroll = useCallback(() => {
    if (!show && window.scrollY > 500) setShow(true);
    if (show && window.scrollY <= 500) setShow(false);
  }, [show]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed bottom-4 right-4 z-20"
          initial={{ opacity: 0, right: -10 }}
          animate={{ opacity: 1, right: 16 }}
          exit={{ opacity: 0, right: -10 }}
        >
          <div
            onClick={scrollToTop}
            className="flex cursor-pointer items-center justify-center rounded-full border bg-white p-1 shadow-sm dark:bg-zinc-950"
          >
            <RxDoubleArrowUp className="size-8 text-slate-800 dark:text-zinc-50 lg:size-9" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
