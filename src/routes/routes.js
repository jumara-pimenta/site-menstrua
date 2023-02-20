import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../page/home";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
