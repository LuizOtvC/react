// ============================================================
// FormTarefa.js — Formulário para adicionar uma nova tarefa
// ============================================================

// "use client" avisa ao Next.js que este é um CLIENT COMPONENT,
// ou seja, ele roda no NAVEGADOR. Isso é obrigatório sempre que
// usamos hooks como useState ou eventos como onChange/onSubmit.
// Precisa ser a PRIMEIRA linha de código do arquivo.
"use client";

// useState é um HOOK do React que cria um ESTADO: um valor que,
// quando muda, faz o componente ser desenhado de novo na tela.
import { useState } from "react";

// Este componente recebe a prop `aoAdicionar`, que é uma FUNÇÃO
// vinda do componente pai (ListaDeTarefas).
// Repare: o formulário NÃO guarda a lista de tarefas. Ele só
// "avisa" o pai quando o usuário quer adicionar algo. Isso é
// chamado de "elevar o estado" (lifting state up).
export default function FormTarefa({ aoAdicionar }) {
  // useState devolve um array com 2 itens:
  //   [valorAtual, funcaoParaAlterarOValor]
  // O argumento ("") é o valor inicial.
  const [texto, setTexto] = useState(""); // o que está digitado no input
  const [erro, setErro] = useState(""); // mensagem de erro ("" = sem erro)
  const [prioridade, setPrioridade] = useState("media");

  // Função chamada quando o formulário é enviado (clique no botão
  // ou Enter no input).
  const enviar = (event) => {
    // Por padrão, enviar um <form> RECARREGA a página.
    // preventDefault() impede isso, para o React controlar tudo.
    event.preventDefault();

    // VALIDAÇÃO: trim() remove espaços do começo e do fim.
    // Assim, um texto só com espaços também é considerado vazio.
    if (texto.trim() === "") {
      setErro("Digite uma Tarefa!");
      return; // interrompe a função: não adiciona nada
    }

    // Chama a função do pai, passando o texto digitado.
    aoAdicionar(texto.trim(), prioridade);

    // Limpa o campo e apaga qualquer mensagem de erro anterior.
    setTexto("");
    setErro("");
  };

  return (
    // onSubmit liga o evento de envio do form à nossa função `enviar`.
    <form className="formulario" onSubmit={enviar}>
      {/* INPUT CONTROLADO: o valor exibido vem do estado (`value={texto}`)
          e cada tecla digitada atualiza o estado via onChange.
          Assim o React é sempre a "fonte da verdade" do campo.
          event.target.value é o texto atual dentro do input. */}
      <input value={texto} onChange={(event) => setTexto(event.target.value)} />
<select aria-label="Prioridade"
value={prioridade}
onChange={( evento) => setPrioridade(evento.target.value)}>
  <option value="alta">Alta</option>
  <option value="media">Media</option>
  <option value="baixa">Baixa</option>
</select>
      {/* RENDERIZAÇÃO CONDICIONAL com &&:
          se a condição for verdadeira, o <p> aparece;
          se for falsa, nada é mostrado. */}
      {erro !== "" && <p className="erro">{erro}</p>}

      {/* type="submit" faz o clique no botão disparar o onSubmit do form */}
      <button type="submit">Adicionar</button>
    </form>
  );
}
