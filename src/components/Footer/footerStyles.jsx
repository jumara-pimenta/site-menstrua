import { useState, useEffect } from 'react';

export const useFooterStyles = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = width <= 600;

  return {
    footerContainer: {
      backgroundColor: '#111',
      color: '#FFF',
      padding: '2rem 0',
      textAlign: 'center',
    },

    logoContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },

    logoImagem: {
      width: '120px',
      marginBottom: '1rem',
    },

    footerSection: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: isMobile ? 'flex-start' : 'space-around',
      alignItems: 'flex-start',
      padding: isMobile ? '0 1.5rem' : '0',
      gap: isMobile ? '1.5rem' : '0',
    },

    footerLinks: {
      textAlign: 'left',
    },

    contactInfo: {
      textAlign: 'left',
    },

    linkList: {
      listStyleType: 'none',
      paddingLeft: '0',
      margin: '0',
      textAlign: 'left',
    },

    linkItem: {
      color: '#FFF',
      cursor: 'pointer',
      marginBottom: isMobile ? '1rem' : '2rem',
      fontSize: '14px',
    },

    copyright: {
      marginTop: '1.5rem',
      fontSize: '14px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    hrStyle: {
      width: isMobile ? '90%' : '50rem',
      borderTop: '1px solid #E72360',
      borderBottom: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      marginBottom: '0.5rem',
    },

    iconStyle: {
      color: '#F08892',
      fontSize: '20px',
      marginRight: '8px',
      cursor: 'pointer',
    },
  };
};
