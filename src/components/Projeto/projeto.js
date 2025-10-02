import React from "react";
import {
  ProjetoSection,
  ProjetoTexto,
  ProjetoTitulo,
  ProjetoDescricao,
  ProjetoImagens,
  ImagemContainer1,
  ImagemContainer2,
  ImagemProjeto,
} from "./projetoStyles";

import fotoprojeto1 from "../../assets/fotoprojeto1.jpg";
import fotoprojeto2 from "../../assets/fotoprojeto2.jpg";


const Projeto = () => {
  return (
    <ProjetoSection>
      <ProjetoTexto>
        <ProjetoTitulo>O projeto menstRUA</ProjetoTitulo>
        <ProjetoDescricao>
          Projeto social que atua na luta pela dignidade menstrual no Amazonas.
          Possui três frentes principais: <b>distribuição de kits menstruais</b>,{" "}
          <b>educação menstrual</b> por meio de oficinas e rodas de conversa, e{" "}
          <b>ativismo menstrual</b> através de projeções em prédios e aplicação
          de lambe-lambe. Atua com pessoas em situação de rua, comunidades
          periféricas, quilombolas, indígenas e em escolas da rede pública.
        </ProjetoDescricao>
      </ProjetoTexto>

      <ProjetoImagens>
        <ImagemContainer1>
          <ImagemProjeto
            src={fotoprojeto1}
            alt="Imagem do projeto menstRUA 1"
          />
        </ImagemContainer1>

        <ImagemContainer2>
          <ImagemProjeto
            src={fotoprojeto2}
            alt="Imagem do projeto menstRUA 2"
          />
        </ImagemContainer2>
      </ProjetoImagens>

    </ProjetoSection>
    
  );
};

export default Projeto;
