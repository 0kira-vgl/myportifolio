import Notes from "@/assets/thumbnails/notes.png";
import DailyDiet from "@/assets/thumbnails/dailyDiet.png";
import ReadFy from "@/assets/thumbnails/readFy.png";
import NoteLy from "@/assets/thumbnails/noteLy.png";
import ToDoApp from "@/assets/thumbnails/toDoApp.png";
import { notes, dailyDiet, readFy, noteLy, toDoApp } from "./links.json";
import { Card } from "./card";

export function Cards() {
  return (
    <main>
      <div className="mb-8 gap-8 space-y-8 lg:grid lg:grid-cols-2 lg:space-y-0">
        <Card
          title="Notes"
          description="Expert Notes é um aplicativo de notas que permite ao usuário criar e gerenciar notas de forma simples e eficiente."
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

        <Card
          title="Daily Diet"
          description="DailyDiet rastreia as refeições, monitora o progresso da dieta e fornece feedback motivacional com uma interface codificada por cores fácil de usar."
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
          description="Uma de lista de tarefas onde os usuários podem adicionar, marcar como concluídas e excluir tarefas."
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
          description="Este é o projeto do meu TCC, um app que visa incentivar a leitura por meio de metas, lista de livros, lembretes e mais!"
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
          title="NoteLy"
          description="Um bloco de notas minimalista com login e proteção por senha para suas anotações. Ainda em desenvolvimento."
          src={NoteLy}
          alt="NoteLy Project"
          demo={noteLy.demo}
          repository={noteLy.repository}
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
          ]}
        />
      </div>
    </main>
  );
}
