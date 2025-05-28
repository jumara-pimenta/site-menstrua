import React from 'react';
import {
  sectionContribua,
  tituloContribua,
  descricaoContribua,
  containerCards,
  card,
  logo,
  subtituloCartao,
  divider,
  gridConteudo,
  labelField,
  valueField,
  qrImage,
  caption,
  avisoBox,
  avisoIcon,
  avisoText, 
  urlLink
} from './contribuaStyles';

// importe seus logos/QRs de /assets
import bradescoLogo from '../../assets/logo-bradesco.png';
import benfeitoriaLogo from '../../assets/logo-benfeitoria.svg';
import pixLogo from '../../assets/logo-pix.svg';
import pixQR from '../../assets/qr-pix.png';
import avisoIconImage from '../../assets/alert-circle.png';

const Contribua = () => (
  <section style={sectionContribua}>
    <h2 style={tituloContribua}>Contribua</h2>
    <p style={descricaoContribua}>
      Contribua com o nosso projeto e seja um agente de mudança nessa causa.
    </p>

    <div style={containerCards}>
      {/* Cartão Transferência Bradesco */}
      <div style={card}>
        <img src={bradescoLogo} alt="Bradesco" style={logo} />
        <div style={subtituloCartao}>Transferência</div>
        <hr style={divider} />
        <div style={gridConteudo}>
          <div style={labelField}>Agência</div>
          <div style={valueField}>3706</div>
          <div style={labelField}>Conta</div>
          <div style={valueField}>1003795-6</div>
          <div style={labelField}>Tipo</div>
          <div style={valueField}>Poupança</div>
          <div style={labelField}>Titular</div>
          <div style={valueField}>Jumara Souza Pimenta</div>
        </div>
      </div>

      {/* Cartão Benfeitoria */}
      <div style={card}>
        <img src={benfeitoriaLogo} alt="Logo da Benfeitoria" style={logo} />
        <img src={pixQR} alt="QR Benfeitoria" style={qrImage} />
        <div style={caption}>Acesse:</div>
        <a
            href="https://benfeitoria.com/projeto/projetomenstrua"
            target="_blank"
            rel="noopener noreferrer"
            style={urlLink}
        >
        benfeitoria.com/projeto/projetomenstrua
    </a>
      </div>

      {/* Cartão Pix */}
      <div style={card}>
        <img src={pixLogo} alt="Logo do Pix" style={logo} />
        <img src={pixQR} alt="QR Pix" style={qrImage} />
        <div style={caption}>Chave PIX:</div>
        <div style={urlLink}>projetomenstrua@gmail.com</div>
      </div>
    </div>

    {/* Aviso */}
    <div style={avisoBox}>
      <div style={avisoIcon}><img src={avisoIconImage} /></div>
      <p style={avisoText}>
        Você também pode nos ajudar doando os produtos necessários em um ponto de 
        coleta do projeto. <br />
        Entre em contato com a gente através das nossas redes sociais.
      </p>
    </div>
  </section>
);

export default Contribua;
