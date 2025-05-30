import React, { useState} from 'react';
import {
  overlay,
  modalBox,
  header,
  title,
  date,
  closeBtn,
  description,
  imageGrid,
  imageItem,
  closeZoomBtn,
  navZoomBtn,
  prevBtn,
  nextBtn
} from './modalStyles';

const Modal = ({ acao, onClose }) => {
  const [zoomIndex, setZoomIndex] = useState(null);
  if (!acao) return null; 

  const openZoom = idx => setZoomIndex(idx);
  const closeZoom = () => setZoomIndex(null)

  const prev = () => {
    setZoomIndex(i => (i > 0 ? i - 1 : acao.fotosExtras.length - 1));
  };
  const next = () => {
    setZoomIndex(i => (i < acao.fotosExtras.length - 1 ? i + 1 : 0));
  };

  return (
    <>
    <div style={overlay} onClick={onClose}>
      <div style={modalBox} onClick={e => e.stopPropagation()}>
        <div style={header}>
          <div>
            <h2 style={title}>{acao.titulo}</h2>
            <span style={date}>{acao.data}</span>
          </div>
          <button style={closeBtn} onClick={onClose}>×</button>
        </div>
        <p style={description}>{acao.fullDescricao}</p>
        <div style={imageGrid}>
          {acao.fotosExtras.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${acao.titulo} ${i+1}`}
              style={imageItem}
              onClick={() => openZoom(i)}
           />
          ))}
        </div>
      </div>
    </div>

     {zoomIndex !== null && (
       <div style={overlay} onClick={(closeZoom) => setZoomIndex(null)}>
         <div
           style={{
             ...modalBox,
             backgroundColor: 'transparent',
             boxShadow: 'none',
             maxWidth: 'none',
             maxHeight: 'none',
             padding: 0,
             position: 'relative'
           }}
           onClick={e => e.stopPropagation()}
         >
           {/* botão de fechar */}
            <button style={closeZoomBtn} onClick={closeZoom}>
              ×
            </button>

            <button
              style={{ ...navZoomBtn, ...prevBtn }}
              onClick={prev}
            >
              ‹
            </button>

           <img
             src={acao.fotosExtras[zoomIndex]}
             alt="Ampliada"
             style={{
               maxWidth: '90vw',
               maxHeight: '90vh',
               borderRadius: '8px',
               display: 'block',
               margin: '0 auto'
             }}
           />

          <button
             style={{ ...navZoomBtn, ...nextBtn }}
             onClick={next}
           >
             ›
           </button>
         </div>
       </div>
     )}
    </>
  );
};

export default Modal;
