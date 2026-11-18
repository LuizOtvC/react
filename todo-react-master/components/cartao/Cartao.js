import Etiqueta from "../etiqueta/Etiqueta";
import styles from "./Cartao.module.css";

export default function Cartao({ tarefa }) {
  return (
    <li className={`${styles.cartao} ${styles[tarefa.prioridade] || ""}`}>
      <p className={styles.descricao}>{tarefa.descricao}</p>
      <Etiqueta prioridade={tarefa.prioridade} />
    </li>
  );
}