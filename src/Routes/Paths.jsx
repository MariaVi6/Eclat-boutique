import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Produtos from "../Pages/Produtos";
import Produtos2 from"../Pages/Produtos2"
import Descricao1Home from "../Pages/Descricao1Home"
import Descricao2Home from "../Pages/Descricao2Home"
import Descricao3Home from "../Pages/Descricao3Home"
import Descricao4Home from "../Pages/Descricao4Home"



const Paths = () => {
    return ( 
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/produtos" element={<Produtos/>}/>
        <Route path="/produtos2" element={<Produtos2/>}/>
        <Route path="/descricao1" element={<Descricao1Home/>}/>
        <Route path="/descricao2" element={<Descricao2Home/>}/>
        <Route path="/descricao3" element={<Descricao3Home/>}/>
        <Route path="/descricao4" element={<Descricao4Home/>}/>
    </Routes>
    </BrowserRouter>
    </> );
}

export default Paths;