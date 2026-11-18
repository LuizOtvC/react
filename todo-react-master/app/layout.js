// ============================================================
// layout.js — O "esqueleto" de TODAS as páginas da aplicação
// ============================================================
// No Next.js (App Router), o arquivo `layout.js` dentro da pasta `app/`
// é o LAYOUT RAIZ. Tudo que for renderizado no site passa por aqui.
// É o único lugar onde escrevemos as tags <html> e <body>.

// Importa o CSS global. Por ser importado no layout raiz, esses estilos
// valem para o site inteiro (todas as páginas e componentes).
import "./globals.css";

// `metadata` é um objeto especial que o Next.js lê automaticamente.
// Ele vira as tags do <head> do HTML. Aqui, `title` define o texto
// que aparece na aba do navegador.
export const metadata = {
  title: "To Do List em React",
};

// O componente de layout recebe a prop `children`.
// `children` é o conteúdo da página atual (no nosso caso, o que
// `page.js` retorna). O layout "embrulha" esse conteúdo.
export default function RootLayout({ children }) {
  return (
    // lang="pt-BR" informa ao navegador (e a leitores de tela)
    // que o conteúdo está em português do Brasil.
    <html lang="pt-BR">
      {/* A página atual é inserida aqui dentro do <body> */}
      <body>{children}</body>
    </html>
  );
}
