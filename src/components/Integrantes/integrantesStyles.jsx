import { useState, useEffect } from 'react';

export const useIntegrantesStyles = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = width <= 600;

  return {
    isMobile,

    sectionIntegrantes: {
      textAlign: 'center',
      padding: '4rem 0',
    },

    tituloIntegrantes: {
      fontSize: '32px',
      fontWeight: '700',
      color: '#E72360',
      marginBottom: '2rem',
    },

    containerCartoes: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '1.5rem',
    },

    cartaoIntegrante: {
      backgroundColor: '#FFF',
      borderRadius: '12px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
      width: isMobile ? 'min(75vw, 280px)' : '220px',
      padding: '1rem',
      textAlign: 'center',
    },

    imagemIntegrante: {
      width: '100%',
      height: 'auto',
      borderRadius: '12px 12px 0 0',
    },

    nomeIntegrante: {
      fontSize: '18px',
      fontWeight: '700',
      color: '#5A2D82',
      marginTop: '0.5rem',
    },

    descricaoIntegrante: {
      fontSize: '14px',
      color: '#555',
      marginTop: '0.5rem',
      lineHeight: '1.4',
    },

    dotsContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '0.5rem',
      marginTop: '1.5rem',
    },

    dot: (active) => ({
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: active ? '#E72360' : 'transparent',
      border: '2px solid #E72360',
      cursor: 'pointer',
      padding: 0,
      transition: 'background-color 0.2s',
    }),
  };
};
