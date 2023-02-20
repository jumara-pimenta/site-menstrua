import {
  banner,
  botaoDoar,
  botaoVoluntariar,
  botoes,
  info,
  infoPobreza,
  titulo,
} from "./styles";

const Banner = () => {
  return (
    <>
      <section style={banner}>
        <div style={info}>
          <h1 style={titulo}>
            O menstRUA atua na luta contra a pobreza menstrual
          </h1>
          <p style={infoPobreza}>
            Pobreza menstrual é um conceito que reúne em duas palavras um
            fenômeno complexo, transdisciplinar e multidimensional, vivenciado
            por meninas e mulheres devido à falta de acesso a recursos,
            infraestrutura e conhecimento para que tenham plena capacidade de
            cuidar da sua menstruação.
          </p>
          <p style={infoPobreza}>Relatório Unicef UNFPA</p>
        </div>
        <div style={botoes}>
          <div>
            <a
              style={botaoDoar}
              href="./"
              class="button"
              rel="noreferrer"
              target="_blank"
            >
              Quero doar
            </a>
          </div>
          <div>
            <a
              style={botaoVoluntariar}
              href="./"
              class="button"
              rel="noreferrer"
              target="_blank"
            >
              Quero me voluntariar
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
