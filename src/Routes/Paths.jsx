import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Produtos from "../Pages/Produtos";
import { Carousel } from "bootstrap";
import Carrosel from "../Components/Carrosel";

const Paths = () => {
    return ( 
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/produtos" element={<Produtos/>}/>
        <Route path="/carousel" element={<Carousel/>}/>
        <Route path="/carrosel" element={<Carrosel/>}/>
    </Routes>
    </BrowserRouter>
    </> );
}

export default Paths;