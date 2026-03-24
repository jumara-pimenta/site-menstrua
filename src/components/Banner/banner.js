import {
  BannerSection,
  Info,
  Titulo,
  InfoPobreza,
  InfoFonte,
  Botoes,
  BotaoDoar,
  BotaoVoluntariar,
  TextoCaixa,
  ContainerCaixas,
} from "./styles";

const Banner = () => {
  return (
    <BannerSection>
      <Info>
        <Titulo>
          O menstRUA atua na luta contra a pobreza menstrual
        </Titulo>
        <InfoPobreza>
          Pobreza menstrual é um conceito que reúne em duas palavras um
          fenômeno complexo, transdisciplinar e multidimensional, vivenciado
          por meninas e mulheres devido à falta de acesso a recursos,
          infraestrutura e conhecimento para que tenham plena capacidade de
          cuidar da sua menstruação.
        </InfoPobreza>
        <InfoFonte>Fonte: Relatório Unicef UNFPA</InfoFonte>
      </Info>

      <Botoes>
        <BotaoDoar href="#contribua" rel="noreferrer">
          Quero doar
        </BotaoDoar>
        <BotaoVoluntariar href="#voluntariado" rel="noreferrer">
          Quero me voluntariar
        </BotaoVoluntariar>
      </Botoes>
     <ContainerCaixas>
        <TextoCaixa top="10%" left="58%">
          321 mil alunas, 3,0% estudam em escolas que não possuem banheiro em
          condições de uso
        </TextoCaixa>
        <TextoCaixa top="18%" right="6%">
          121 mil meninas estão no Nordeste, ou seja, 37,8% do total de meninas
          que estudam em escolas sem banheiro
        </TextoCaixa>
        <TextoCaixa top="40%" left="58%">
          440 mil meninas, 4,1% do total, que estudam em escolas que não possuem
          separação de banheiros por sexo
        </TextoCaixa>
        <TextoCaixa top="50%" right="7%">
          Estima-se que no Brasil 1,24 milhão de meninas, não tenham à sua
          disposição papel higiênico nos banheiros das escolas em que estudam
        </TextoCaixa>
      </ContainerCaixas>
    </BannerSection>
  );
};

export default Banner;
