import React from "react";
import { styles } from "./voluntariadoStyles";

const VoluntariadoForms = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Voluntariado</h2>
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
