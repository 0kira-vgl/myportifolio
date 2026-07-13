"use client";

import { createContext, useContext, useEffect, useState } from "react";

const SECTIONS = ["home", "aboutMe", "skills", "projects", "contact"] as const;
export type SectionId = (typeof SECTIONS)[number];

const ActiveSectionContext = createContext<SectionId>("home");

export function ActiveSectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const sectionVisibility: Partial<Record<SectionId, number>> = {};

    const observers = SECTIONS.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          sectionVisibility[id] = entry.intersectionRatio;
          const best = SECTIONS.reduce<SectionId>((acc, s) =>
            (sectionVisibility[s] ?? 0) > (sectionVisibility[acc] ?? 0)
              ? s
              : acc,
            "home"
          );
          setActive(best);
        },
        {
          threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
          rootMargin: "-20% 0px -20% 0px",
        },
      );

      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <ActiveSectionContext.Provider value={active}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  return useContext(ActiveSectionContext);
}
