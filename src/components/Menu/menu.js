import { imagemLogo, li, link, lista, menu, menuStyle } from "./styles";
import logo from "../../assets/logo.svg";

const Menu = () => {
  return (
    <header style={menuStyle}>
      <div>
        <a style={link} href="#topo">
          <img style={imagemLogo} src={logo} alt="logo do projeto" />
        </a>
      </div>
      <div style={menu}>
        <ul style={lista}>
          <li style={li}>
           <a style={link} href="#topo">Home</a>
          </li>
          <li style={li}>
            <a style={link} href="#sobre">Sobre</a>
          </li>
          <li style={li}>
            <a style={link} href="#acoes">Ações</a>
          </li>
          <li style={li}>
            <a style={link} href="#integrantes">Integrantes</a>
          </li>
          <li style={li}>
            <a style={link} href="#contribua">Contribua</a>
          </li>
          <li style={li}>
            <a style={link} href="#midia">Mídia</a>
          </li>
          <li style={li}>
            <a style={link} href="#voluntariado">Voluntariado</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Menu;
