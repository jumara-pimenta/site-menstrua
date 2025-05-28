import { footerContainer, logoContainer, footerSection, logoImagem, footerLinks, contactInfo, copyright, iconStyle, linkStyle } from "./footerStyles";
import { FaInstagram, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import logoImage from "../../assets/logo2.png";
import { linkList } from "./footerStyles";
import { linkItem } from "./footerStyles";
import { hrStyle } from "./footerStyles";

const Footer = () => {
  return (
    <footer style={footerContainer}>
      <div style={footerSection}>
        <div style={logoContainer}>
          {/* Logo */}
          <img src={logoImage} alt="Logo menstRUA" style={logoImagem} />
          
          <div style={footerLinks}>
            <h3>Siga-nos</h3>
            <p>
            <a href="https://www.instagram.com/projetomenstrua/" target="_blank" rel="noreferrer">
                <FaInstagram style={iconStyle} />
            </a>
            <a href="https://www.linkedin.com/company/projetomenstrua/" target="_blank" rel="noreferrer">
                <FaLinkedin style={iconStyle} />
            </a> 
            <a href="https://www.facebook.com/projetomenstrua" target="_blank" rel="noreferrer">
                <FaFacebook style={iconStyle} />
            </a>
            </p>
          </div>
          <div style={contactInfo}>
            <h3>Contato</h3>
            <p>
              <FaEnvelope style={iconStyle} /> projetomenstrua@gmail.com
            </p>
          </div>
        </div>
        
        <div>
          <ul style={linkList}>
            <li style={linkItem} onClick={() => document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' })}>Sobre o projeto</li>
            <li style={linkItem} onClick={() => document.getElementById('acoes').scrollIntoView({ behavior: 'smooth' })}>Ações</li>
            <li style={linkItem} onClick={() => document.getElementById('integrantes').scrollIntoView({ behavior: 'smooth' })}>Coordenadoras</li>
          </ul>
        </div>
        
        <div>
          <ul style={linkList}>
            <li style={linkItem} onClick={() => document.getElementById('contribua').scrollIntoView({ behavior: 'smooth' })}>Contribua</li>
            <li style={linkItem} onClick={() => document.getElementById('midia').scrollIntoView({ behavior: 'smooth' })}>Entrevistas</li>
            <li style={linkItem} onClick={() => document.getElementById('voluntariado').scrollIntoView({ behavior: 'smooth' })}>Voluntariado</li>
          </ul>
        </div>
      </div>
      <div style={copyright}>
    <hr style={hrStyle} />
    <p>2024 | Site desenvolvido por <a href="https://github.com/jumara-pimenta" target="_blank" rel="noreferrer" style={linkStyle}>Jumara Pimenta</a> | menstRUA © Todos os direitos reservados</p>
</div>
    </footer>
  );
};

export default Footer;
