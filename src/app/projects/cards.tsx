"use client";

import Notes from "@/assets/thumbnails/notes.png";
import DailyDiet from "@/assets/thumbnails/dailyDiet.png";
import ReadFy from "@/assets/thumbnails/readFy.png";
import ToDoApp from "@/assets/thumbnails/toDoApp.png";
import { notes, dailyDiet, readFy, kore, toDoApp } from "./links.json";
import { Card } from "./card";
import { useTranslations } from "next-intl";

export function Cards() {
  const t = useTranslations("Projects.descriptions");

  return (
    <main>
      <div className="mb-8 gap-8 space-y-8 lg:grid lg:grid-cols-2 lg:space-y-0">
        <Card
          title="KORE"
          description={t("kore")}
          src="/projects/kore-preview.png"
          width={1280}
          height={720}
          alt="KORE Project"
          demo={kore.demo}
          repository={kore.repository}
          repositoryShortly={true}
          priority
          icons={[
            {
              titleicon: "NextJs",
              alt: "NextJs Icon",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
            },
            {
              titleicon: "TypeScript",
              alt: "TypeScript Icon",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
            },
            {
              titleicon: "TailwindCSS",
              alt: "TailwindCSS Icon",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
            },
            {
              titleicon: "Firebase",
              alt: "Firebase Icon",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
            },
          ]}
        />

        <Card
          title="Daily Diet"
          description={t("dailyDiet")}
          src={DailyDiet}
          alt="DailyDiet Project"
          demo={dailyDiet.demo}
          shortly={true}
          repository={dailyDiet.repository}
          icons={[
            {
              titleicon: "React Native",
              alt: "React Native Icon",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            },
            {
              titleicon: "Expo",
              alt: "Expo Icon",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original.svg",
            },
            {
              titleicon: "TypeScript",
              alt: "TypeScript Icon",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
            },
            {
              titleicon: "TailwindCSS",
              alt: "TailwindCSS Icon",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
            },
          ]}
        />
      </div>

      <div className="gap-8 space-y-8 lg:grid lg:grid-cols-3 lg:space-y-0">
        <Card
          title="ToDo App"
          description={t("toDoApp")}
          src={ToDoApp}
          alt="ToDoApp Project"
          demo={toDoApp.demo}
          repository={toDoApp.repository}
          icons={[
            {
              titleicon: "ReactJs",
              alt: "React Icon",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            },
            {
              titleicon: "TypeScript",
              alt: "TypeScript Icon",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
            },
            {
              titleicon: "TailwindCSS",
              alt: "TailwindCSS Icon",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
            },
            {
              titleicon: "ViteJs",
              alt: "ViteJs Icon",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
            },
          ]}
        />

        <Card
          title="ReadFy"
          description={t("readFy")}
          src={ReadFy}
          alt="ReadFy Project"
          demo={readFy.demo}
          shortly={true}
          repository={readFy.repository}
          icons={[
            {
              titleicon: "React Native",
              alt: "React Native Icon",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            },
            {
              titleicon: "Expo",
              alt: "Expo Icon",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original.svg",
            },
            {
              titleicon: "TypeScript",
              alt: "TypeScript Icon",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
            },
            {
              titleicon: "TailwindCSS",
              alt: "TailwindCSS Icon",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
            },
          ]}
        />

        <Card
          title="Notes"
          description={t("notes")}
          src={Notes}
          alt="Notes Project"
          demo={notes.demo}
          repository={notes.repository}
          icons={[
            {
              titleicon: "ReactJs",
              alt: "React Icon",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            },
            {
              titleicon: "TypeScript",
              alt: "TypeScript Icon",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
            },
            {
              titleicon: "TailwindCSS",
              alt: "TailwindCSS Icon",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
            },
            {
              titleicon: "ViteJs",
              alt: "ViteJs Icon",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
            },
          ]}
        />
      </div>
    </main>
  );
}
