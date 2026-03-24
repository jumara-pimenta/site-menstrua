import styled from "styled-components";

export const ImpactoWrapper = styled.div``;

export const StatsSection = styled.section`
  background-color: #111;
  padding: 4rem 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;

  @media (max-width: 768px) {
    padding: 2.5rem 1.25rem;
    gap: 2rem;
  }
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  width: 160px;

  @media (max-width: 600px) {
    width: 130px;
  }
`;

export const StatIcone = styled.div`
  font-size: 3rem;
  color: #e72360;

  @media (max-width: 600px) {
    font-size: 2.25rem;
  }
`;

export const StatNumero = styled.span`
  font-size: 2rem;
  font-weight: 800;
  color: #fff;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const StatLabel = styled.span`
  font-size: 14px;
  color: #ccc;
  text-align: center;
  line-height: 1.4;
`;

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 420px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

export const HeroImagem = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
`;

export const HeroConteudo = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 0 2rem;
`;

export const HeroSubtitulo = styled.p`
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 0.75rem;
`;

export const HeroLinha = styled.hr`
  width: 80px;
  border: 1px solid #fff;
  margin: 0 auto 1.25rem;
`;

export const HeroTitulo = styled.h2`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: #fff;
  line-height: 1.1;

  span {
    color: #e72360;
  }
`;
