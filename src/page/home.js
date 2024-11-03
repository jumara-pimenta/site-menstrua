import Banner from "../components/Banner/banner";
import Integrantes from "../components/Integrantes/integrantes";
import Menu from "../components/Menu/menu";
import Projeto from "../components/Projeto/projeto";

const Home = () => {
  return (
    <>
      <Menu />
      <Banner />
      <Projeto />
      <Integrantes />
    </>
  );
};

export default Home;
