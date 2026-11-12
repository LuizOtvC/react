import Cabecalho from "./components/Cabecalho";
import Lista from "./components/ListadeTarefas";
export default function Home() {
  const nome = "Luiz";
  
  return (
    <>
     <Cabecalho titulo="To Do List" subtitulo="Meu primeiro projeto em React"></Cabecalho>
      <main className="conteudo">
        <h1 className="titulo">Olá, {nome}!</h1>
        <input type="text" />
        <p>{2 + 2} tarefas</p>
        <Lista />
      </main>
    </>
  );
}