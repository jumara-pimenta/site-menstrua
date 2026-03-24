import styled from "styled-components";

export const ProjetoSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ProjetoTexto = styled.div`
  width: 45%;

  @media (max-width: 900px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

export const ProjetoTitulo = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #e72360;
  margin-bottom: 1rem;
  text-align: initial;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 28px;
  }
`;

export const ProjetoDescricao = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  text-align: initial;

  @media (max-width: 768px) {
    text-align: center;
    padding: 0 1rem;
  }
`;

export const ProjetoImagens = styled.div`
  position: relative;
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1048px) and (min-width: 769px) {
    width: 80%;
    justify-content: flex-end;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ImagemContainer1 = styled.div`
  background-color: #e72360;
  padding: 6px;
  border-radius: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  left: -90px;
  top: -40px;
  z-index: 1;

  @media (max-width: 768px) {
    left: 0;
    top: 0;
  }
`;

export const ImagemContainer2 = styled.div`
  background-color: #e72360;
  padding: 6px;
  border-radius: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 100px;
  left: 240px;
  z-index: 2;

  @media (max-width: 768px) {
    position: relative;
    top: 0;
    left: 0;
  }
`;

export const ImagemProjeto1 = styled.img`
  width: 100%;
  max-width: 220px;
  height: auto;
  border-radius: 12px;
`;

export const ImagemProjeto2 = styled.img`
  width: 100%;
  max-width: 220px;
  height: auto;
  border-radius: 12px;
`;


 // @media (max-width: 1024px) and (min-width: 769px)
