import { Fragment } from "react";
import { Route, Routes } from "react-router-dom"; // Removemos o "BrowserRouter" e o "Router" import e adicionamos Route e Routes diretamente
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Navbar from '../components/navbar'
import Cursos from '../pages/Cursos'
import Sobre from '../pages/Sobre'
import Linguistica from '../pages/Linguistica'
import Politica from '../pages/Policy'
import Usuario from '../pages/usuario'

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <Fragment>
      <Navbar/>
      <Routes>
      <Route exact path="/usuario" element={<Private Item={Usuario} />} />
       <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Signin />} />
        <Route path="/cadastro" element={<Signup />} />
        <Route path="/cursos" element={<Cursos/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/linguistica" element={<Linguistica/>}/>
        <Route path="/politica-de-privacidade" element={<Politica/>}/>
      </Routes>
    </Fragment>
  );
};

export default RoutesApp;
