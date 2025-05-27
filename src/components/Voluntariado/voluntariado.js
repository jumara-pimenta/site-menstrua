import React from "react";
import { styles } from "./voluntariadoStyles";

const VoluntariadoForms = () => {
  return (
    <section className="volunteer-section">
      <h2 style={styles.title}>Voluntariado</h2>
      <div className="form-container">
      <iframe  title="Formulário de Voluntariado"
      src="https://docs.google.com/forms/d/e/1FAIpQLSfFSiAY7FhfrxtHEwWqC-182lMGP6x2iPzNlcFtcnOzn7KVqw/viewform?embedded=true" 
      width="680" height="540" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
      </div>
    </section>
  );
};

export default VoluntariadoForms;
