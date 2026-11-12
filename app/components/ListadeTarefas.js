"use client"
import { useState } from "react"
import  {tarefasIniciais}  from "./Dados";
import TarefaItem from "./TarefaItem";
import FormTarefa from "./formTarefa";

export default function ListaDeTarefas() {
  const[tarefas, setTarefas] = useState(tarefasIniciais);
  const concluir =(id)=>{
    setTarefas(tarefas.map((tarefa) => tarefa.id === id ? {...tarefa, concluida: !tarefa.concluida} : tarefa));
  }
  return (
    <section>
      <FormTarefa aoAdicionar={adicionar}/>
<ul className="lista">
      {tarefas.map((tarefa) => (
        <TarefaItem key={tarefa.id} tarefa={tarefa} aoConcluir={concluir} />
      ))}
    </ul>
    </section>
    
  );
}

const adicionar = (descricao) =>{
  const nova = {id: Date.now(), descricao: descricao, concluida: false}
  setTarefas([...tarefas, nova]);
};