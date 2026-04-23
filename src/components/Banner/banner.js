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
          O menstRUA atua na luta por Dignidade Menstrual
        </Titulo>
        <InfoPobreza>
          Dignidade menstrual é o direito de todas as pessoas que menstruam de viverem suas vidas com dignidade, segurança e conforto durante o período menstrual. 
          Isso inclui acesso a produtos de manejo menstrual, instalações sanitárias adequadas, educação sobre saúde menstrual e a eliminação do estigma associado à menstruação.
        </InfoPobreza>
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
          321 mil alunas estudam em escolas que não possuem banheiro em
          condições de uso.
        </TextoCaixa>
        <TextoCaixa top="22%" right="6%">
          No Norte o percentual de meninas sem 
          acesso a banheiro em suas escolas chega a quase 8,4%.
        </TextoCaixa>
        <TextoCaixa top="40%" left="58%">
          1 a cada 4 meninas deixam de ir a escola por falta de absorventes.
        </TextoCaixa>
        <TextoCaixa top="50%" right="7%">
          Quase 200 mil alunas estão totalmente privadas 
           de condições mínimas para cuidar da sua menstruação no ambiente escolar.
        </TextoCaixa>
      </ContainerCaixas>
    </BannerSection>
  );
};

export default Banner;
