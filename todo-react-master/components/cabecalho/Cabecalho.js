// ============================================================
// Cabecalho.js — Componente de cabeçalho da página
// ============================================================
// Um componente React é simplesmente uma FUNÇÃO que retorna JSX
// (uma sintaxe parecida com HTML, mas escrita dentro do JavaScript).
//
// Este componente recebe PROPS (propriedades), que são como os
// "parâmetros" de um componente. Usamos DESESTRUTURAÇÃO
// ({ titulo, subtitulo }) para pegar direto os valores que nos
// interessam, em vez de escrever props.titulo e props.subtitulo.
//
// Exemplo de uso (em page.js):
//   <Cabecalho titulo="To do List" subtitulo="Aula 23" />

import styles from "./Cabecalho.module.css";
    export default function Cabecalho({ titulo, subtitulo }) {
    return (
    <header className={styles.cabecalho}>
    <h1 className={styles.titulo}>{titulo}</h1>
      {/* Chaves {} dentro do JSX mostram o VALOR de uma variável */}
      <p>{subtitulo}</p>
    </header>
  );
}
