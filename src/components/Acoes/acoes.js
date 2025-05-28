
import React, { useRef, useState } from 'react';
import {
  sectionAcoes,
  tituloAcoes,
  containerCartoes,
  cartaoAcao,
  imagemAcao,
  conteudoAcao,
  dataAcao,
  tituloAcao,
  descricaoAcao,
  linkVerMais
} from './acoesStyles';
import Modal from '../Modal/modal';

import img1 from '../../assets/fotoprojeto1.jpg';
import img2 from '../../assets/fotoprojeto2.jpg';
import img3 from '../../assets/banner.svg';

const acoes = [
  {
    titulo: 'Distribuição de kits menstruais',
    descricao:
      'Que alegria poder dizer: ação no Parque das Tribos realizada com...',
    fullDescricao: 'Aqui vai o texto completo sobre a Primeira ação, contanto detalhes, depoimentos, resultados, …',
    fotosExtras: [
     require('../../assets/fotoprojeto1.jpg'),
     require('../../assets/fotoprojeto2.jpg'),
    ],    
    imagem: img1,
    link: '/acoes/1'
  },
  {
    titulo: 'Educação Menstrual',
    descricao:
      'Que alegria poder dizer: ação no Parque das Tribos realizada com...',
    fullDescricao: 'Aqui vai o texto completo sobre a Primeira ação, contanto detalhes, depoimentos, resultados, …',
    fotosExtras: [
     require('../../assets/fotoprojeto1.jpg'),
     require('../../assets/fotoprojeto2.jpg'),
    ], 
    imagem: img2,
    link: '/acoes/2'
  },
  {
    titulo: 'Ativismo Menstrual',
    descricao:
      'De acordo com o relatório "Pobreza menstrual no Brasil - Desigualdades e violações"...',
    fullDescricao: 'Aqui vai o texto completo sobre a Primeira ação, contanto detalhes, depoimentos, resultados, …',
    fotosExtras: [
     require('../../assets/fotoprojeto1.jpg'),
     require('../../assets/fotoprojeto2.jpg'),
    ], 
    imagem: img3,
    link: '/acoes/3'
  }
];

const Acoes = () => {
  const listaRef = useRef(null);
  const [selectedAcao, setSelectedAcao] = useState(null);

  const scroll = (dir) => {
    const container = listaRef.current;
    if (!container) return;
    const desloc = dir === 'left' ? -container.offsetWidth : container.offsetWidth;
    container.scrollBy({ left: desloc, behavior: 'smooth' });
  };

  return (
  <>
    <section style={sectionAcoes}>
      <h2 style={tituloAcoes}>Ações</h2>
      <div style={containerCartoes} ref={listaRef}>
        {acoes.map((acao, i) => (
          <div key={i} style={cartaoAcao}>
            <img src={acao.imagem} alt={acao.titulo} style={imagemAcao} />
            <div style={conteudoAcao}>
              <div style={dataAcao}>{acao.data}</div>
              <h3 style={tituloAcao}>{acao.titulo}</h3>
              <p style={descricaoAcao}>{acao.descricao}</p>
            </div>
            <button
               style={linkVerMais}
               onClick={() => setSelectedAcao(acao)}
            >
               Ver mais →
            </button>
          </div>
        ))}
      </div>
    </section>
    <Modal
       acao={selectedAcao}
       onClose={() => setSelectedAcao(null)}
    />
  </>
  );
};

export default Acoes;
