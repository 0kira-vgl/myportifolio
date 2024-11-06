import Notes from "@/assets/thumbnails/notes.png";
import PizzaShop from "@/assets/thumbnails/pizzaShop.png";
import InOrbit from "@/assets/thumbnails/inOrbit.png";
import Planner from "@/assets/thumbnails/planner.png";
import ToDoApp from "@/assets/thumbnails/toDoApp.png";
import { BigCard } from "../cards/bigCard";
import { SmallCard } from "../cards/smallCard";

export function Cards() {
  return (
    <main>
      <div className="mb-8 gap-8 space-y-8 lg:grid lg:grid-cols-2 lg:space-y-0">
        <BigCard
          title="Notes"
          description="Expert Notes é um aplicativo de notas que permite ao usuário criar e gerenciar notas de forma simples e eficiente."
          src={Notes}
          alt="Notes Project"
          demo="https://nlwnotes.vercel.app/"
          repository="https://github.com/0kira-vgl/nlwNotes"
        />

        <BigCard
          title="PizzaShop"
          description="Expert Notes é um aplicativo de notas que permite ao usuário criar e gerenciar notas de forma simples e eficiente."
          src={PizzaShop}
          alt="PizzaShop Project Project"
          demo="https://github.com/0kira-vgl"
          repository="https://github.com/0kira-vgl/pizzashop"
        />
      </div>

      <div className="gap-8 space-y-8 lg:grid lg:grid-cols-3 lg:space-y-0">
        <BigCard
          title="In Orbit"
          description="O projeto é um site desktop de registro de metas com progresso semanal."
          src={InOrbit}
          alt="InOrbit Project"
          demo="https://inorbit-two.vercel.app/"
          repository="https://github.com/0kira-vgl/inorbit"
        />

        <BigCard
          title="Planner"
          description="O projeto é um site desktop para montar planos de viagem com amigos, registrar atividades e links úteis."
          src={Planner}
          alt="Planner Project"
          demo="https://github.com/0kira-vgl"
          repository="https://github.com/0kira-vgl/planner"
        />

        <BigCard
          title="ToDo App"
          description="Uma de lista de tarefas onde os usuários podem adicionar, marcar como concluídas e excluir tarefas."
          src={ToDoApp}
          alt="ToDoApp Project"
          demo="https://to-do-list-0kira-vgl.vercel.app"
          repository="https://github.com/0kira-vgl/toDoList"
        />
      </div>
    </main>
  );
}
