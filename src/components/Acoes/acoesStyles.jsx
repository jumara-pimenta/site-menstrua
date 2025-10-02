// src/components/Acoes/acoesStyles.jsx

export const sectionAcoes = {
  position: 'relative',
  padding: '4rem 0',
  textAlign: 'center'
};

export const tituloAcoes = {
  fontSize: '32px',
  fontWeight: '700',
  color: '#E72360',
  marginBottom: '2rem'
};

export const containerCartoes = {
  display: 'flex',
  scrollSnapType: 'x mandatory',
  padding: '0 9rem',
  justifyContent: 'space-between',
};

export const cartaoAcao = {
  flex: '0 0 220px',
  backgroundColor: '#FFF',
  borderRadius: '12px',
  boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
  scrollSnapAlign: 'start',
  padding: '1rem',
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
};

export const imagemAcao = {
  width: '100%',
  height: '160px',
  objectFit: 'cover',
  borderRadius: '8px'
};

export const conteudoAcao = {
  marginTop: '1rem',
  flexGrow: 1
};

export const tituloAcao = {
  fontSize: '18px',
  fontWeight: '700',
  color: '#5A2D82',
  marginTop: '0.5rem',
};

export const descricaoAcao = {
  fontSize: '14px',
  color: '#555',
  lineHeight: '1.4',
  marginBottom: '1rem'
};

export const linkVerMais = {
  fontSize: '14px',
  color: '#E72360',
  backgroundColor: 'transparent',
  border: 'none',
  textDecoration: 'none',
  fontWeight: '500',
  alignSelf: 'flex-end',
  cursor: 'pointer',
};

export const hrStyle = {
    width: '10rem', 
    borderTop: '1px solid #E72360', 
    borderBottom: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    marginBottom: '0.5rem',
};