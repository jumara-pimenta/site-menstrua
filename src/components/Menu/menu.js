import { useState } from "react";
import {
  Header,
  Logo,
  Nav,
  Lista,
  Item,
  LinkMenu,
  BotaoHamburguer,
  MenuMobile,
  Overlay
} from "./styles";
import logo from "../../assets/logo.svg";

const Menu = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <>
      <Header>
        {/* Logo sempre visível */}
        <Logo href="#topo">
          <img src={logo} alt="logo do projeto" />
        </Logo>

        {/* Botão hamburguer aparece só em telas pequenas */}
        <BotaoHamburguer onClick={() => setMenuAberto(!menuAberto)}>
          ☰
        </BotaoHamburguer>

        {/* Menu desktop (normal) */}
        <Nav>
          <Lista>
            <Item><LinkMenu href="#topo">Home</LinkMenu></Item>
            <Item><LinkMenu href="#sobre">Sobre</LinkMenu></Item>
            <Item><LinkMenu href="#acoes">Ações</LinkMenu></Item>
            <Item><LinkMenu href="#integrantes">Integrantes</LinkMenu></Item>
            <Item><LinkMenu href="#contribua">Contribua</LinkMenu></Item>
            <Item><LinkMenu href="#midia">Mídia</LinkMenu></Item>
            <Item><LinkMenu href="#voluntariado">Voluntariado</LinkMenu></Item>
          </Lista>
        </Nav>
      </Header>

      {/* Menu mobile (abre quando o hambúrguer é clicado) */}
      {menuAberto && (
        <>
          <Overlay onClick={() => setMenuAberto(false)} />
          <MenuMobile>
            <LinkMenu href="#topo" onClick={() => setMenuAberto(false)}>Home</LinkMenu>
            <LinkMenu href="#sobre" onClick={() => setMenuAberto(false)}>Sobre</LinkMenu>
            <LinkMenu href="#acoes" onClick={() => setMenuAberto(false)}>Ações</LinkMenu>
            <LinkMenu href="#integrantes" onClick={() => setMenuAberto(false)}>Integrantes</LinkMenu>
            <LinkMenu href="#contribua" onClick={() => setMenuAberto(false)}>Contribua</LinkMenu>
            <LinkMenu href="#midia" onClick={() => setMenuAberto(false)}>Mídia</LinkMenu>
            <LinkMenu href="#voluntariado" onClick={() => setMenuAberto(false)}>Voluntariado</LinkMenu>
          </MenuMobile>
        </>
      )}
    </>
  );
};

export default Menu;
