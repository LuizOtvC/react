// ============================================================
// page.js — A página inicial (rota "/")
// ============================================================
// No Next.js, o arquivo `page.js` dentro de `app/` corresponde à
// rota raiz do site (http://localhost:3000/).
// O que este componente retornar será colocado no lugar de
// `children` lá no `layout.js`.

// Importamos os componentes que vamos usar.
// O "@/" é um atalho (alias) para a raiz do projeto, configurado
// no jsconfig.json. Assim evitamos caminhos como "../../components".
import Cabecalho from "@/components/Cabecalho";
import ListaDeTarefas from "@/components/ListaDeTarefas";

// Por padrão, componentes no App Router são SERVER COMPONENTS
// (renderizados no servidor). Esta página não usa estado nem
// eventos, então pode continuar sendo um Server Component.
export default function Home() {
  return (
    // <> ... </> é um FRAGMENT: permite retornar vários elementos
    // juntos sem criar uma <div> extra no HTML final.
    <>
      {/* Passamos dados para o Cabecalho através de PROPS.
          `titulo` e `subtitulo` chegarão como parâmetros lá dentro. */}
      <Cabecalho titulo="To do List" subtitulo="Aula 23" />

      {/* <main> marca o conteúdo principal da página (boa prática
          de HTML semântico e acessibilidade). */}
      <main>
        {/* Componente que cuida de toda a lógica da lista de tarefas */}
        <ListaDeTarefas />
      </main>
    </>
  );
}
