// src/components/Acoes/acoesStyles.jsx
import { useState, useEffect } from 'react';

export const useAcoesStyles = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = width <= 600;
  const isTablet = width > 600 && width <= 1024;

  return {
    sectionAcoes: {
      position: 'relative',
      padding: '4rem 0',
      textAlign: 'center'
    },

    tituloAcoes: {
      fontSize: '32px',
      fontWeight: '700',
      color: '#E72360',
      marginBottom: '2rem'
    },

    containerCartoes: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '1.5rem',
      padding: isMobile ? '0 1.25rem' : '0 2rem',
    },

    cartaoAcao: {
      backgroundColor: '#FFF',
      borderRadius: '12px',
      boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
      padding: '1rem',
      textAlign: 'left',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: isMobile ? '100%' : isTablet ? 'calc(50% - 0.75rem)' : '220px',
    },

    imagemAcao: {
      width: '100%',
      height: '160px',
      objectFit: 'cover',
      borderRadius: '8px'
    },

    conteudoAcao: {
      marginTop: '1rem',
      flexGrow: 1
    },

    tituloAcao: {
      fontSize: '18px',
      fontWeight: '700',
      color: '#5A2D82',
      marginTop: '0.5rem',
    },

    descricaoAcao: {
      fontSize: '14px',
      color: '#555',
      lineHeight: '1.4',
      marginBottom: '1rem'
    },

    linkVerMais: {
      fontSize: '14px',
      color: '#E72360',
      backgroundColor: 'transparent',
      border: 'none',
      textDecoration: 'none',
      fontWeight: '500',
      alignSelf: 'flex-end',
      cursor: 'pointer',
    },

    hrStyle: {
      width: '10rem',
      borderTop: '1px solid #E72360',
      borderBottom: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      marginBottom: '0.5rem',
    },
  };
};
