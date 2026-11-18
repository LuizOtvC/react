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
export default function Cabecalho({ titulo, subtitulo }) {
  return (
    // Em JSX usamos `className` no lugar de `class`, porque `class`
    // é uma palavra reservada do JavaScript.
    //
    // `style` recebe um OBJETO JavaScript, por isso as chaves duplas:
    //   - as chaves de fora {} dizem "aqui vem JavaScript";
    //   - as chaves de dentro {} são o objeto em si.
    // As propriedades CSS são escritas em camelCase (textAlign, e não
    // text-align). Obs.: a classe .cabecalho no CSS já centraliza o
    // texto, então este estilo inline é só um exemplo da sintaxe.
    <header className="cabecalho" style={{ textAlign: "center" }}>
      {/* Chaves {} dentro do JSX mostram o VALOR de uma variável */}
      <h1>{titulo}</h1>
      <p>{subtitulo}</p>
    </header>
  );
}
