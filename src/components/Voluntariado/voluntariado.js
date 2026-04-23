import React from "react";
import { styles } from "./voluntariadoStyles";
// Substitua por: import vol1 from "../../assets/voluntariado/Voluntariado1.jpg";
// Substitua por: import vol2 from "../../assets/voluntariado/Voluntariado2.jpg";
import vol1 from "../../assets/voluntariado/Voluntariado1.jpeg";
import vol2 from "../../assets/voluntariado/Voluntariado2.jpeg";

const VoluntariadoForms = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Voluntariado</h2>

      <div style={styles.photosWrapper}>
        <div style={styles.photoCard1}>
          <img src={vol1} alt="Voluntários em ação nas ruas" style={styles.photo} />
          <div style={styles.photoLabel}>Distribuição nas ruas</div>
        </div>
        <div style={styles.photoCard2}>
          <img src={vol2} alt="Reunião de voluntários" style={styles.photo} />
          <div style={styles.photoLabel}>Time de voluntariado</div>
        </div>
      </div>

      <p style={styles.callout}>
        Faça parte dessa transformação. <br /> Preencha o formulário abaixo e junte-se ao nosso time!
      </p>

      <div style={styles.formContainer}>
        <iframe
          title="Formulário de Voluntariado"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfFSiAY7FhfrxtHEwWqC-182lMGP6x2iPzNlcFtcnOzn7KVqw/viewform?embedded=true"
          style={{ width: "100%", height: "540px", border: "none", display: "block", margin: 0 }}
        >
          Carregando…
        </iframe>
      </div>
    </section>
  );
};

export default VoluntariadoForms;
