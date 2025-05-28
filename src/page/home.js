import Banner from "../components/Banner/banner";
import Footer from "../components/Footer/footer";
import Integrantes from "../components/Integrantes/integrantes";
import Menu from "../components/Menu/menu";
import Midia from "../components/Midia/midia";
import Acoes from "../components/Acoes/acoes";
import Projeto from "../components/Projeto/projeto";
import Contribua from "../components/Contribua/contribua";
import VoluntariadoForms from "../components/Voluntariado/voluntariado";

const Home = () => {
  return (
    <>
      <Menu />
      <Banner />
      <section id="sobre">
        <Projeto />
      </section>
      <section id="acoes">
        <Acoes />
      </section>
      <section id="integrantes">
        <Integrantes />
      </section>
      <section id="contribua">
        <Contribua />
      </section>
      <section id="midia">
        <Midia />
      </section>
      <section id="voluntariado">
        <VoluntariadoForms />
      </section>
      <Footer />
    </>
  );
};

export default Home;
