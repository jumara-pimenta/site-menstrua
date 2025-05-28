import {
  banner,
  botaoDoar,
  botaoVoluntariar,
  botoes,
  info,
  infoPobreza,
  infoPobreza_fonte,
  textoCaixa,
  titulo,
} from "./styles";

const Banner = () => {
  return (
    <section style={banner}>
      <div style={info}>
        <h1 style={titulo}>O menstRUA atua na luta contra a pobreza menstrual</h1>
        <p style={infoPobreza}>
          Pobreza menstrual é um conceito que reúne em duas palavras um
          fenômeno complexo, transdisciplinar e multidimensional, vivenciado
          por meninas e mulheres devido à falta de acesso a recursos,
          infraestrutura e conhecimento para que tenham plena capacidade de
          cuidar da sua menstruação.
        </p>
        <p style={infoPobreza_fonte}>Fonte: Relatório Unicef UNFPA</p>
      </div>

      {/* Botões */}
      <div style={botoes}>
        <a style={botaoDoar} href="#contribua" rel="noreferrer">
          Quero doar
        </a>
        <a style={botaoVoluntariar} href="#voluntariado" rel="noreferrer">
          Quero me voluntariar
        </a>
      </div>

      {/* Caixas de Informação posicionadas */}
      <div style={{ ...textoCaixa, top: "15%", right: "25%" }}>
        321 mil alunas, 3,0% estudam em escolas que não possuem banheiro em condições de uso
      </div>
      <div style={{ ...textoCaixa, top: "45%", right: "30%" }}>
        440 mil meninas, 4,1% do total, que estudam em escolas que não possuem separação de banheiros por sexo
      </div>
      <div style={{ ...textoCaixa, top: "30%", right: "8%" }}>
        121 mil meninas estão no Nordeste, ou seja, 37,8% do total de meninas que estudam em escolas sem banheiro
      </div>
      <div style={{ ...textoCaixa, top: "60%", right: "12%" }}>
        Estima-se que no Brasil 1,24 milhão de meninas, não tenham à sua disposição papel higiênico nos banheiros das escolas em que estudam
      </div>
    </section>
  );
};

export default Banner;
