import { useState, useEffect } from 'react';

export const useMidiaStyles = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = width <= 600;
  const isTablet = width > 600 && width <= 1024;

  const videosPerPage = isMobile ? 1 : isTablet ? 2 : 3;

  return {
    videosPerPage,

    midiaSection: {
      textAlign: 'center',
      padding: '4rem 0',
    },

    tituloMidia: {
      fontSize: '32px',
      fontWeight: '700',
      color: '#E72360',
      marginBottom: '2rem',
    },

    containerVideos: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1rem',
      flex: 1,
      minWidth: 0,
    },

    videoContainer: {
      position: 'relative',
      flex: 1,
      minWidth: 0,
      maxWidth: '320px',
      height: isMobile ? '190px' : '180px',
      borderRadius: '5px',
      overflow: 'hidden',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    },

    iframeStyle: {
      width: '100%',
      height: '100%',
      border: 'none',
    },

    arrowStyle: {
      background: 'none',
      border: 'none',
      fontSize: '2rem',
      color: '#E72360',
      cursor: 'pointer',
      padding: '0 1rem',
    },
  };
};
