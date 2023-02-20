import { Link } from "react-router-dom";
import { imagemLogo, li, link, lista, menu, menuStyle } from "./styles";
import logo from "../../assets/logo.svg";

const Menu = () => {
  return (
    <header style={menuStyle}>
      <div>
        <Link style={link} to="/">
          <img style={imagemLogo} src={logo} alt="logo do projeto" />
        </Link>
      </div>
      <div style={menu}>
        <ul style={lista}>
          <li style={li}>
            <Link style={link} to="/">
              Home
            </Link>
          </li>
          <li style={li}>
            <Link style={link} to="/sobre">
              Sobre
            </Link>
          </li>
          <li style={li}>
            <Link style={link} to="/midia">
              Mídia
            </Link>
          </li>
          <li style={li}>
            <Link style={link} to="/acoes">
              Ações
            </Link>
          </li>
          <li style={li}>
            <Link style={link} to="/integrantes">
              Integrantes
            </Link>
          </li>
          <li style={li}>
            <Link style={link} to="/contribua">
              Contribua
            </Link>
          </li>
          <li style={li}>
            <Link style={link} to="/voluntariado">
              Voluntariado
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Menu;
