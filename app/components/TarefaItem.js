 // components/TarefaItem.js
 export default function TarefaItem({ tarefa , aoConcluir}) {
    return (
      <li className={tarefa.concluida ? "tarefa concluida" : "tarefa"}>
        <label>
          <input type="checkbox" checked={tarefa.concluida} onChange={() => aoConcluir(tarefa.id)}readOnly />
          <span>{tarefa.descricao}</span>
        </label>
      </li>
    );
  }
  