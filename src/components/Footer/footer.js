import { footerContainer, logoContainer, footerSection, logoImagem, footerLinks, contactInfo, copyright, iconStyle } from "./footerStyles";
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
              <FaInstagram style={iconStyle} /> 
              <FaLinkedin style={iconStyle} /> 
              <FaFacebook style={iconStyle} />
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
            <li style={linkItem} onClick={() => document.getElementById('midia').scrollIntoView({ behavior: 'smooth' })}>Entrevistas</li>
            <li style={linkItem} onClick={() => document.getElementById('acoes').scrollIntoView({ behavior: 'smooth' })}>Ações</li>
          </ul>
        </div>
        
        <div>
          <ul style={linkList}>
            <li style={linkItem} onClick={() => document.getElementById('integrantes').scrollIntoView({ behavior: 'smooth' })}>Coordenadoras</li>
            <li style={linkItem} onClick={() => document.getElementById('contribua').scrollIntoView({ behavior: 'smooth' })}>Contribua</li>
            <li style={linkItem} onClick={() => document.getElementById('voluntariado').scrollIntoView({ behavior: 'smooth' })}>Voluntariado</li>
          </ul>
        </div>
      </div>
      <div style={copyright}>
    <hr style={hrStyle} />
    <p>2024 | Site desenvolvido por Jumara Pimenta | menstRUA ©Todos os direitos reservados</p>
</div>
    </footer>
  );
};

export default Footer;
