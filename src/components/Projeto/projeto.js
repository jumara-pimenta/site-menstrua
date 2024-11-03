import { imagemContainer1, imagemContainer2, imagemProjeto, projetoDescricao, projetoImagens, projetoSection, projetoTexto, projetoTitulo } from "./projetoStyles";
import fotoprojeto1 from "../../assets/fotoprojeto1.jpg"
import fotoprojeto2 from "../../assets/fotoprojeto2.jpg"


const Projeto = () => {
    return (
        <section style={projetoSection}>
            <div style={projetoTexto}>
                <h2 style={projetoTitulo}>O projeto menstRUA</h2>
                <p style={projetoDescricao}>
                    Projeto social que atua na luta pela dignidade menstrual no Amazonas. Possui três frentes principais: distribuição de kits menstruais, educação menstrual por meio de oficinas e rodas de conversa, e ativismo menstrual através de projeções em prédios e aplicação de lambe-lambe. Atua com pessoas em situação de rua, comunidades periféricas, quilombolas, indígenas e em escolas da rede pública.
                </p>
            </div>
            <div style={projetoImagens}>
                <div style={imagemContainer1}>
                    <img src={fotoprojeto1} alt="Imagem do projeto menstRUA 1" style={imagemProjeto} />
                </div>
                <div style={imagemContainer2}>
                    <img src={fotoprojeto2} alt="Imagem do projeto menstRUA 2" style={imagemProjeto} />
                </div>
            </div>
        </section>
    );
};

export default Projeto;
