"use client";

import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { scrollToSection } from "@/lib/scrollToSection";

// Monograma em pixel art 8-bit: o "M" desenhado num grid 8x8 de blocos,
// com uma sombra pixelada offset (estilo sprite de jogo retro) atrás do
// glyph principal.
function PortfolioMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" className={className}>
      <g className="fill-violet-500 dark:fill-violet-400">
        <rect x="4" y="4" width="3" height="3" />
        <rect x="25" y="4" width="3" height="3" />
        <rect x="4" y="7" width="3" height="3" />
        <rect x="7" y="7" width="3" height="3" />
        <rect x="22" y="7" width="3" height="3" />
        <rect x="25" y="7" width="3" height="3" />
        <rect x="4" y="10" width="3" height="3" />
        <rect x="10" y="10" width="3" height="3" />
        <rect x="19" y="10" width="3" height="3" />
        <rect x="25" y="10" width="3" height="3" />
        <rect x="4" y="13" width="3" height="3" />
        <rect x="13" y="13" width="3" height="3" />
        <rect x="16" y="13" width="3" height="3" />
        <rect x="25" y="13" width="3" height="3" />
        <rect x="4" y="16" width="3" height="3" />
        <rect x="25" y="16" width="3" height="3" />
        <rect x="4" y="19" width="3" height="3" />
        <rect x="25" y="19" width="3" height="3" />
        <rect x="4" y="22" width="3" height="3" />
        <rect x="25" y="22" width="3" height="3" />
        <rect x="4" y="25" width="3" height="3" />
        <rect x="25" y="25" width="3" height="3" />
      </g>
      <g className="fill-zinc-900 dark:fill-zinc-50">
        <rect x="2" y="2" width="3" height="3" />
        <rect x="23" y="2" width="3" height="3" />
        <rect x="2" y="5" width="3" height="3" />
        <rect x="5" y="5" width="3" height="3" />
        <rect x="20" y="5" width="3" height="3" />
        <rect x="23" y="5" width="3" height="3" />
        <rect x="2" y="8" width="3" height="3" />
        <rect x="8" y="8" width="3" height="3" />
        <rect x="17" y="8" width="3" height="3" />
        <rect x="23" y="8" width="3" height="3" />
        <rect x="2" y="11" width="3" height="3" />
        <rect x="11" y="11" width="3" height="3" />
        <rect x="14" y="11" width="3" height="3" />
        <rect x="23" y="11" width="3" height="3" />
        <rect x="2" y="14" width="3" height="3" />
        <rect x="23" y="14" width="3" height="3" />
        <rect x="2" y="17" width="3" height="3" />
        <rect x="23" y="17" width="3" height="3" />
        <rect x="2" y="20" width="3" height="3" />
        <rect x="23" y="20" width="3" height="3" />
        <rect x="2" y="23" width="3" height="3" />
        <rect x="23" y="23" width="3" height="3" />
      </g>
    </svg>
  );
}

interface NameLogoProps extends ComponentProps<"h3"> {
  children?: string;
}

export function NameLogo(props: NameLogoProps) {
  return (
    <a
      href="#home"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection("home");
      }}
      className="group flex items-center gap-2.5"
    >
      <PortfolioMark className="h-8 w-8 shrink-0 transition-transform duration-300 ease-out group-hover:scale-105 md:h-9 md:w-9" />
      <h3
        {...props}
        className={twMerge("text-shadow font-mono text-4xl", props.className)}
      >
        &lt;Matheus /&gt;
      </h3>
    </a>
  );
}
