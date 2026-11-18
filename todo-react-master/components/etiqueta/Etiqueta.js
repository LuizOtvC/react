import styles from "./Etiqueta.module.css";

const PRIORIDADES = {
    Alta: "Alta",
    Media: "Media",
    Baixa: "Baixa"
  };

  export default function Etiqueta({ prioridade }) {
    const config = PRIORIDADES[prioridade];
  
    if (!config) return null;
  
    return (
      <span className={`${styles.etiqueta} ${styles[prioridade]}`}>
        {TEXTOS[prioridade] || prioridade}
      </span>
    );
  }