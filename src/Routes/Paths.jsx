import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Produtos from "../Pages/Produtos";
import Produtos2 from"../Pages/Produtos2"

const Paths = () => {
    return ( 
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/produtos" element={<Produtos/>}/>
        <Route path="/produtos2" element={<Produtos2/>}/>

    </Routes>
    </BrowserRouter>
    </> );
}

export default Paths;