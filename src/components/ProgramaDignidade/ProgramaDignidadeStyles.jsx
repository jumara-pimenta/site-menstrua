import styled from "styled-components";

export const Section = styled.section`
  padding: 4rem 2rem;
  background-color: #f8f9fa;
  text-align: center;
`;

export const Titulo = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #e72360;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

export const Intro = styled.div`
  display: flex;
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto 2rem;
  text-align: left;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const IntroDestaque = styled.div`
  background-color: #e72360;
  color: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  font-size: 15px;
  line-height: 1.6;
  flex: 1;

  strong {
    font-weight: 700;
  }
`;

export const IntroDesc = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  font-size: 15px;
  line-height: 1.6;
  color: #333;
  border: 1px solid #f0d0dc;
  flex: 1;
`;

export const Botoes = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

export const BotaoSaibaMais = styled.button`
  background-color: ${({ ativo }) => (ativo ? "#c41d52" : "#e72360")};
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  padding: 14px 36px;
  border-radius: 2rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #c41d52;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 12px 24px;
  }
`;

export const BotaoOndeRetirar = styled.button`
  display: block;
  margin-top: 1rem;
  background-color: ${({ ativo }) => (ativo ? "#e72360" : "transparent")};
  color: ${({ ativo }) => (ativo ? "#fff" : "#e72360")};
  font-size: 14px;
  font-weight: 700;
  padding: 10px 24px;
  border-radius: 2rem;
  border: 2px solid #e72360;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;

  &:hover {
    background-color: #e72360;
    color: #fff;
  }
`;

export const Painel = styled.div`
  max-width: 900px;
  margin: 0 auto;
  animation: fadeIn 0.25s ease;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  text-align: left;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background-color: #fff5f8;
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid #f0d0dc;

  p {
    font-size: 14px;
    color: #333;
    margin-bottom: 0.75rem;
    line-height: 1.5;

    strong {
      color: #5a2d82;
    }
  }
`;

export const CardTitulo = styled.h3`
  background-color: #5a2d82;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  border-radius: 20px;
  padding: 6px 16px;
  display: inline-block;
  margin-bottom: 1rem;
`;

export const Lista = styled.ul`
  list-style: disc;
  padding-left: 1.2rem;
  margin: 0;
`;

export const Item = styled.li`
  font-size: 14px;
  color: #333;
  line-height: 1.6;
  margin-bottom: 0.4rem;

  strong {
    color: #e72360;
  }
`;

export const PassoLista = styled.ol`
  padding-left: 1.2rem;
  margin: 0;
`;

export const PassoItem = styled.li`
  font-size: 14px;
  color: #333;
  line-height: 1.6;
  margin-bottom: 0.5rem;

  strong {
    color: #e72360;
  }
`;

export const RetiradaBox = styled.div`
  background-color: #fff5f8;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: left;
  border: 1px solid #f0d0dc;

  ol {
    padding-left: 1.2rem;
    margin: 0;
  }

  li {
    font-size: 14px;
    color: #333;
    line-height: 1.6;
    margin-bottom: 0.5rem;
  }
`;

export const RetiradaTitulo = styled.h3`
  font-size: 14px;
  font-weight: 700;
  background-color: #5a2d82;
  border-radius: 20px;
  padding: 6px 16px;
  display: inline-block;
  margin-bottom: 1rem;
  color: #fff;
`;

export const RetiradaTexto = styled.p`
  font-size: 14px;
  margin-bottom: 0.75rem;
  line-height: 1.5;
  color: #333;

  strong {
    font-weight: 700;
    color: #e72360;
  }
`;

export const MapaWrapper = styled.div.withConfig({ displayName: "MapaWrapper" })`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  margin-top: 1.5rem;
  scroll-margin-top: 1rem;
`;

export const ModalTitulo = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: #5a2d82;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 17px;
  }
`;

export const ModalBox = styled.div`
  background-color: #fff;
  border-radius: 12px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 1.5rem;
  position: relative;
`;
