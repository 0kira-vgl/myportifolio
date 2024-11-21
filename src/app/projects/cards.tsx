import Notes from "@/assets/thumbnails/notes.png";
import PizzaShop from "@/assets/thumbnails/pizzaShop.png";
import InOrbit from "@/assets/thumbnails/inOrbit.png";
import Planner from "@/assets/thumbnails/planner.png";
import ToDoApp from "@/assets/thumbnails/toDoApp.png";
import { notes, pizzaShop, inOrbit, planner, toDoApp } from "./links.json";
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
        />

        <Card
          title="PizzaShop"
          description="Expert Notes é um aplicativo de notas que permite ao usuário criar e gerenciar notas de forma simples e eficiente."
          src={PizzaShop}
          alt="PizzaShop Project Project"
          demo={pizzaShop.demo}
          repository={pizzaShop.repository}
        />
      </div>

      <div className="gap-8 space-y-8 lg:grid lg:grid-cols-3 lg:space-y-0">
        <Card
          title="In Orbit"
          description="O projeto é um site desktop de registro de metas com progresso semanal."
          src={InOrbit}
          alt="InOrbit Project"
          demo={inOrbit.demo}
          repository={inOrbit.repository}
        />

        <Card
          title="Planner"
          description="O projeto é um site desktop para montar planos de viagem com amigos, registrar atividades e links úteis."
          src={Planner}
          alt="Planner Project"
          demo={planner.demo}
          repository={planner.repository}
        />

        <Card
          title="ToDo App"
          description="Uma de lista de tarefas onde os usuários podem adicionar, marcar como concluídas e excluir tarefas."
          src={ToDoApp}
          alt="ToDoApp Project"
          demo={toDoApp.demo}
          repository={toDoApp.repository}
        />
      </div>
    </main>
  );
}
