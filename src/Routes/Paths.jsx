import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Produtos from "../Pages/Produtos";
import Registrar from "../Pages/Registar";
import ProdutosLista from "../Pages/ProdutosLista";

const Paths = () => {
    return ( 
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/produtos" element={<Produtos/>}/>
        <Route path="/registrar" element={<Registrar/>}/>
        <Route path="/lista" element={<ProdutosLista/>}/>

    </Routes>
    </BrowserRouter>
    </> );
}

export default Paths;