import  {tarefasIniciais}  from "./components/Dados";
import TarefaItem from ".components/TarefaItem";

export default function ListaDeTarefas() {
  return (
    <ul className="lista">
      {tarefasIniciais.map((tarefa) => (
        <TarefaItem key={tarefa.id} tarefa={tarefa} />
      ))}
    </ul>
  );
}