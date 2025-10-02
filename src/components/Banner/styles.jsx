// BannerStyles.js
import styled from "styled-components";
import imgBanner from "../../assets/banner.svg";

export const BannerSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 2000px;
  height: 560px;
  margin-top: 80px;
  padding: 2rem;
  background-image: url(${imgBanner});
  background-size: cover;
  background-position: center;
  color: #fff;
  position: relative;

  @media (max-width: 1024px) {
    height: auto;
    padding: 1rem;
    text-align: center;
  }
`;

export const Info = styled.div`
  width: 50%;
  text-align: center;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Titulo = styled.h1`
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  color: white;
  width: 600px;
  text-align: initial;
  margin-left: 94px;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    font-size: 28px;
    line-height: 36px;
    text-align: center;
  }
`;

export const InfoPobreza = styled.p`
  color: #fff;
  width: 550px;
  text-align: initial;
  line-height: 24px;
  margin-left: 94px;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    text-align: center;
  }
`;

export const InfoFonte = styled.p`
  color: #fff;
  width: 500px;
  font-size: 12px;
  text-align: initial;
  line-height: 24px;
  margin-left: 94px;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    text-align: center;
  }
`;

export const Botoes = styled.div`
  display: flex;
  margin-top: 26px;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
  }
`;

export const BotaoDoar = styled.a`
  width: 10rem;
  background-color: #e72360;
  color: #fff;
  font-size: 16px;
  padding: 16px 40px;
  border-radius: 2rem;
  text-decoration: none;
  line-height: 22px;
  margin-left: 94px;
  font-weight: 700;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const BotaoVoluntariar = styled.a`
  width: 12rem;
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  padding: 16px 30px;
  border-radius: 2rem;
  border: 1px solid #efefff;
  line-height: 22px;
  font-weight: 700;
  margin-left: 40px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const TextoCaixa = styled.div`
  position: absolute;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 12px;
  max-width: 220px;
  text-align: center;
  color: black;
  top: ${({ top }) => top || "0"};
  right: ${({ right }) => right || "0"};

  @media (max-width: 768px) {
    position: relative;
    top: auto;
    right: auto;
    margin: 10px auto;
  }
`;
