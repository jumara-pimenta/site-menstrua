import React from 'react';
import {
  overlay,
  modalBox,
  header,
  title,
  date,
  closeBtn,
  description,
  imageGrid,
  imageItem
} from './modalStyles';

const Modal = ({ acao, onClose }) => {
  if (!acao) return null;

  return (
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
            <img key={i} src={src} alt={`${acao.titulo} ${i+1}`} style={imageItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
