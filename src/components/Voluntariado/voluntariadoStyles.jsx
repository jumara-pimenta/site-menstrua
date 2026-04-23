import React from "react";

export const styles = {
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "60px 20px",
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#E72360",
    textAlign: "center",
    marginBottom: "40px",
  },
  photosWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom: "40px",
    flexWrap: "wrap",
    gap: "0px",
  },
  photoCard1: {
    position: "relative",
    width: "clamp(200px, 28vw, 320px)",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 8px 32px rgba(231,35,96,0.18)",
    transform: "rotate(-2deg)",
    zIndex: 1,
    border: "4px solid #fff",
    marginRight: "clamp(-30px, -4vw, -45px)",
  },
  photoCard2: {
    position: "relative",
    width: "clamp(200px, 28vw, 320px)",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 8px 32px rgba(231,35,96,0.25)",
    transform: "rotate(2deg)",
    zIndex: 2,
    border: "4px solid #fff",
    marginBottom: "10px",
  },
  photo: {
    width: "100%",
    height: "clamp(150px, 20vw, 250px)",
    objectFit: "cover",
    display: "block",
  },
  photoLabel: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    background: "linear-gradient(transparent, rgba(231,35,96,0.85))",
    color: "#fff",
    fontWeight: "600",
    fontSize: "14px",
    padding: "24px 14px 12px",
    textAlign: "center",
  },
  callout: {
    fontSize: "16px",
    color: "#555",
    textAlign: "center",
    maxWidth: "600px",
    marginBottom: "32px",
    lineHeight: "1.6",
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
      @media (max-width: 600px) {
        .vol-photos-wrapper {
          flex-direction: column !important;
          align-items: center !important;
        }
        .vol-card-1, .vol-card-2 {
          margin-right: 0 !important;
          transform: none !important;
        }
      }
    `}
  </style>
);

export default VoluntariadoFormsStyles;
