import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  width: 95%;
  height: 94px;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: rgba(77, 32, 62, 0.2) 0px 4px 42px;
  padding: 0 2rem;

  @media (max-width: 850px) {
  width: 90%;
  }
`;

export const Logo = styled.a`
  img {
    width: 160px;
  }
`;

export const Nav = styled.nav`
  @media (max-width: 850px) {
    display: none;
  }
`;

export const Lista = styled.ul`
  display: flex;
  gap: 3rem;
  list-style: none;
  align-items: center;
`;

export const Item = styled.li``;

export const LinkMenu = styled.a`
  color: #282226;
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  &:hover {
    color: #e72360;
  }
`;

export const BotaoHamburguer = styled.button`
  display: none;
  font-size: 28px;
  background: none;
  border: none;
  cursor: pointer;
  color: #e72360;

  @media (max-width: 850px) {
    display: block;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 900;
`;

export const MenuMobile = styled.div`
  position: fixed;
  top: 94px;
  right: 0;
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  gap: 1rem;
  z-index: 1001;

  a {
    font-size: 18px;
    font-weight: 500;
  }
`;
