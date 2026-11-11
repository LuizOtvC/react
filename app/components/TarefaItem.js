 // components/TarefaItem.js
 export default function TarefaItem({ tarefa }) {
    return (
      <li className={tarefa.concluida ? "tarefa concluida" : "tarefa"}>
        <label>
          <input type="checkbox" checked={tarefa.concluida} readOnly />
          <span>{tarefa.descricao}</span>
        </label>
      </li>
    );
  }
  