import Banner from "../components/Banner/banner";
import Footer from "../components/Footer/footer";
import Integrantes from "../components/Integrantes/integrantes";
import Menu from "../components/Menu/menu";
import Midia from "../components/Midia/midia";
import Projeto from "../components/Projeto/projeto";

const Home = () => {
  return (
    <>
      <Menu />
      <Banner />
      <section id="sobre">
        <Projeto />
      </section>
      <section id="midia">
        <Midia />
      </section>
      <section id="integrantes">
        <Integrantes />
      </section>
      <Footer />
    </>
  );
};

export default Home;
