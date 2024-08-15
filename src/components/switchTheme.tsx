"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export default function SwitchTheme() {
  const { setTheme } = useTheme();

  return (
    <div>
      <Button onClick={() => setTheme("dark")}>Escuro</Button>
      <Button onClick={() => setTheme("light")}>Branco</Button>
    </div>
  );
}
