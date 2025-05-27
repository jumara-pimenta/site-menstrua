import React from "react";

export const styles = {
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#E72360",
    textAlign: "center",
    marginBottom: "20px",
  },
  formContainer: {
    width: "100%",
    maxWidth: "800px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    overflow: "hidden",
  },
};

const VoluntariadoFormsStyles = () => (
  <style>
    {`
      .volunteer-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 40px 20px;
        background-color: #f8f9fa;
      }
      .title {
        fontSize: "32px",
        fontWeight: "700",
        color: "#E72360",
        textAlign: "center",
        marginBottom: "20px",
      }
      .form-container {
        width: 100%;
        max-width: 50px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        overflow: hidden;
      }
    `}
  </style>
);

export default VoluntariadoFormsStyles;
