export const overlay = {
  position: 'fixed',
  top: 0, left: 0,
  width: '100vw', height: '100vh',
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

export const modalBox = {
  backgroundColor: '#fff',
  borderRadius: '12px',
  maxWidth: '800px',
  width: '90%',
  maxHeight: '90%',
  overflowY: 'auto',
  padding: '1.5rem',
  position: 'relative',
};

export const header = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '1rem',
};

export const title = {
  margin: 0,
  fontSize: '24px',
  fontWeight: 700,
  color: '#5A2D82',
};

export const date = {
  fontSize: '14px',
  color: '#777',
};

export const closeBtn = {
  background: 'none',
  border: 'none',
  fontSize: '24px',
  cursor: 'pointer',
};

export const description = {
  fontSize: '16px',
  color: '#555',
  lineHeight: 1.5,
  marginBottom: '1rem',
};

export const imageGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
  gap: '0.5rem',
};

export const imageItem = {
  width: '100%',
  height: '80px',
  objectFit: 'cover',
  borderRadius: '8px',
};
