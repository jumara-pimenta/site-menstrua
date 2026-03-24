
import React, { useRef, useState } from 'react';
import { useAcoesStyles } from './acoesStyles';
import Modal from '../Modal/modal';

import img1 from '../../assets/kitsMenstruais/kitsmenstruais16.JPG';
import img2 from '../../assets/educacaoMenstrual/capa.jpg';
import img3 from '../../assets/ativismo/Ativismo7.JPG';
import img4 from '../../assets/propagacao/Propagacao4.png';

function importAll(r) {
  return r.keys().map(r)
}
const ativismoImgs = importAll(
  require.context('../../assets/ativismo', false, /\.(jpe?g|png|jpg|JPG)$/)
)

const kitsImgs = importAll(
  require.context('../../assets/kitsMenstruais', false, /\.(jpe?g|png|jpg|JPG)$/)
)

const educacaoImgs = importAll(
  require.context('../../assets/educacaoMenstrual', false, /\.(jpe?g|png|jpg|JPG)$/)
)

const propagacaoImgs = importAll(
  require.context('../../assets/propagacao', false, /\.(jpe?g|png|jpg|JPG)$/)
)

const acoes = [
  {
    titulo: 'Distribuição de kits menstruais',
    descricao:
      'Nossas ações de distribuição de kits menstruais acontecem com...',
    fullDescricao: 'Nossas ações de distribuição de kits menstruais acontecem com pessoas em situação de rua, comunidades periféricas, \
    quilombolas, indígenas e em escolas da rede pública, com a frequência de uma ou duas vezes por mês. Essas ações são fundamentais para promover a dignidade e o bem-estar das pessoas atendidas, contribuindo para a redução da precariedade menstrual e para um período menstrual mais seguro.',
    fotosExtras: kitsImgs,   
    imagem: img1,
    link: '/acoes/1'
  },
  {
    titulo: 'Educação Menstrual',
    descricao:
      'Realizamos ações de educação menstrual por meio de...',
    fullDescricao: 'Realizamos ações de educação menstrual por meio de rodas de conversa, palestras e oficinas em comunidades e escolas, promovendo diálogos abertos sobre mitos, tabus e saúde menstrual. As atividades buscam ampliar o acesso à informação, fortalecer a autoestima das pessoas que menstruam e incentivar a construção de uma cultura de respeito e dignidade em torno da menstruação.',
    fotosExtras: educacaoImgs,
    imagem: img2,
    link: '/acoes/2'
  },
  {
    titulo: 'Ativismo Menstrual',
    descricao:
      'Atuamos no campo do ativismo menstrual por meio de...',
    fullDescricao: 'Atuamos no campo do ativismo menstrual por meio de intervenções urbanas, como projeções em prédios, adesivagens e lambe-lambe. \
    Essas ações ocupam o espaço público de forma criativa e provocativa, tornando a menstruação visível em lugares onde normalmente é silenciada. \
    Ao inserir a temática no cotidiano da cidade, nosso objetivo é romper com o tabu, gerar reflexão coletiva e mobilizar a sociedade para reconhecer a menstruação como uma questão de direitos, dignidade e justiça social. Além disso, participamos de manifestações e atos públicos.',
    fotosExtras: ativismoImgs,
    imagem: img3,
    link: '/acoes/3'
  },
  {
    titulo: 'Propagação da causa',
    descricao:
      'Propagamos a causa menstrual por meio de participações em rádios, TVs, eventos...',
    fullDescricao: 'Propagamos a causa menstrual por meio de participações em rádios, televisões, eventos culturais, congressos e feiras populares, ampliando o alcance do debate para além das ruas. Essas presenças são fundamentais para inserir a menstruação na agenda pública, alcançar novos públicos e fortalecer a rede de pessoas e organizações comprometidas com a justiça menstrual. Ao ocupar diferentes espaços de fala, contribuímos para normalizar o tema e pressionar por políticas que garantam dignidade a todas as pessoas que menstruam.',
    fotosExtras: propagacaoImgs,
    imagem: img4,
    link: '/acoes/4'
  }
];

const Acoes = () => {
  const listaRef = useRef(null);
  const [selectedAcao, setSelectedAcao] = useState(null);
  const { sectionAcoes, tituloAcoes, containerCartoes, cartaoAcao, imagemAcao, conteudoAcao, tituloAcao, descricaoAcao, linkVerMais } = useAcoesStyles();

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
