"use client";

import { useEffect } from "react";

export function ScrollRestorer() {
  useEffect(() => {
    const saved = sessionStorage.getItem("scrollY");
    if (saved) {
      sessionStorage.removeItem("scrollY");
      const y = parseInt(saved, 10);
      requestAnimationFrame(() => {
        window.scrollTo({ top: y, behavior: "instant" });
      });
    }
  }, []);

  return null;
}
