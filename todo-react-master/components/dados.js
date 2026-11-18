// ============================================================
// dados.js — Dados iniciais da aplicação
// ============================================================
// Separar os dados em um arquivo próprio deixa os componentes mais
// limpos e facilita trocar esses dados no futuro (por exemplo, por
// dados vindos de uma API ou de um banco de dados).
//
// Usamos `export const` (exportação NOMEADA). Por isso, quem for
// importar precisa usar chaves com o mesmo nome:
//   import { tarefasIniciais } from "./dados";
//
// É um ARRAY (lista) de OBJETOS. Cada objeto representa uma tarefa:
//   - id:        identificador único (o React usa isso na prop `key`)
//   - descricao: o texto da tarefa
//   - concluida: true (feita) ou false (pendente)
export const tarefasIniciais = [
  { id: 1, descricao: "Aprender React/Next", concluida: true },
  { id: 2, descricao: "Dominar o Mundo", concluida: false },
  { id: 3, descricao: "Criar o editar tarefa", concluida: false },
  { id: 4, descricao: "Estudar UI/UX", concluida: true },
];
