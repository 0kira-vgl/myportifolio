import Notes from "@/assets/thumbnails/notes.png";
import DailyDiet from "@/assets/thumbnails/dailyDiet.png";
import PizzaShop from "@/assets/thumbnails/pizzaShop.png";
import InOrbit from "@/assets/thumbnails/inOrbit.png";
import ToDoApp from "@/assets/thumbnails/toDoApp.png";
import { notes, dailyDiet, pizzaShop, inOrbit, toDoApp } from "./links.json";
import { Card } from "./card";
import { SiExpo } from "react-icons/si";

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
          title="PizzaShop"
          description="O Pizza Shop é um dashboard para lojistas de restaurantes, com métricas de pedidos, gráficos, acompanhar e gerenciar pedidos."
          src={PizzaShop}
          alt="PizzaShop Project Project"
          demo={pizzaShop.demo}
          shortly={true}
          repository={pizzaShop.repository}
          icons={[
            {
              titleicon: "NextJs",
              alt: "React Icon",
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
              titleicon: "ViteJs",
              alt: "ViteJs Icon",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
            },
          ]}
        />

        <Card
          title="In Orbit"
          description="O NLW InOrbit permite criar e gerenciar desafios de diário, com interface interativa, integração com APIs e visualização do progresso do usuário."
          src={InOrbit}
          alt="InOrbit Project"
          demo={inOrbit.demo}
          shortly={true}
          repository={inOrbit.repository}
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
