import React, { useState } from "react";
import {
  Section,
  Titulo,
  Intro,
  IntroDestaque,
  IntroDesc,
  Botoes,
  BotaoSaibaMais,
} from "./ProgramaDignidadeStyles";
import ModalDignidade from "./ModalDignidade";

const ProgramaDignidade = () => {
  const [modalAberto, setModalAberto] = useState(false);
  const [mapaAberto, setMapaAberto] = useState(false);

  return (
    <Section id="programa-dignidade">
      <Titulo>Programa Dignidade Menstrual</Titulo>

      <Intro>
        <IntroDestaque>
          Programa que dá direito a <strong>40 unidades de absorventes a cada 56 dias</strong> pelo Farmácia Popular.
        </IntroDestaque>
        <IntroDesc>
          O Programa Dignidade Menstrual é uma iniciativa do Governo Federal para promover a saúde
          de quem menstrua e dar oportunidades para que acessem espaços e outros direitos sem restrições.
        </IntroDesc>
      </Intro>

      <Botoes>
        <BotaoSaibaMais onClick={() => setModalAberto(true)}>
          Saiba mais
        </BotaoSaibaMais>
      </Botoes>

      <ModalDignidade
        aberto={modalAberto}
        onClose={() => { setModalAberto(false); setMapaAberto(false); }}
        mapaAberto={mapaAberto}
        onToggleMapa={() => setMapaAberto(v => !v)}
      />
    </Section>
  );
};

export default ProgramaDignidade;
