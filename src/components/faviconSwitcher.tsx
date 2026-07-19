"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export function FaviconSwitcher() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!resolvedTheme) return;

    const href = resolvedTheme === "dark" ? "/favicon-dark.svg" : "/favicon-light.svg";

    let link = document.querySelector<HTMLLinkElement>("link[rel='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.type = "image/svg+xml";
    link.href = href;
  }, [resolvedTheme]);

  return null;
}
