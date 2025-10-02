import styled from "styled-components";

export const ProjetoSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ProjetoTexto = styled.div`
  width: 45%;
  margin-left: 94px;

  @media (max-width: 1024px) {
    width: 90%;
    margin-left: 0;
    text-align: center;
  }
`;

export const ProjetoTitulo = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #E72360;
  margin-bottom: 1rem;
  text-align: initial;

  @media (max-width: 1024px) {
    font-size: 26px;
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const ProjetoDescricao = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  text-align: initial;

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

export const ProjetoImagens = styled.div`
  position: relative;
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    width: 90%;
    margin-top: 2rem;
  }
`;

export const ImagemContainer1 = styled.div`
  background-color: #E72360;
  padding: 6px;
  border-radius: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  left: -90px;
  top: -40px;
  z-index: 1;

  @media (max-width: 768px) {
    left: -30px;
    top: -20px;
  }
`;

export const ImagemContainer2 = styled.div`
  background-color: #E72360;
  padding: 6px;
  border-radius: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 100px;
  left: 240px;
  z-index: 2;

  @media (max-width: 768px) {
    top: 60px;
    left: 120px;
  }
`;

export const ImagemProjeto = styled.img`
  width: 100%;
  max-width: 240px;
  height: auto;
  border-radius: 12px;
`;
