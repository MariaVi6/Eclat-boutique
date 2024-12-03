import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Produtos from "../Pages/Produtos";
import Produtos2 from"../Pages/Produtos2"
import Descricao1Home from "../Pages/Descricao1Home"
import Descricao2Home from "../Pages/Descricao2Home"
import Descricao3Home from "../Pages/Descricao3Home"
import Descricao4Home from "../Pages/Descricao4Home"
import Descricao13Home from "../Pages/Descricao13Home";
import Descricao14Home from "../Pages/Descricao14Home";
import Descricao15Home from "../Pages/Descricao15Home";
import Descricao16Home from "../Pages/Descricao16Home";
import Descricao17Home from "../Pages/Descricao17Home"
import Descricao18Home from "../Pages/Descricao18Home";
import Descricao19Home from "../Pages/Descricao19Home";
import Descricao20Home from "../Pages/Descricao20Home";
import Inventario from "../Components/inventario";


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
        <Route path="/descricao13" element={<Descricao13Home/>}/>
        <Route path="/descricao14" element={<Descricao14Home/>}/>
        <Route path="/descricao15" element={<Descricao15Home/>}/>
        <Route path="/descricao16" element={<Descricao16Home/>}/>
        <Route path="/descricao17" element={<Descricao17Home/>}/>
        <Route path="/descricao18" element={<Descricao18Home/>}/>
        <Route path="/descricao19" element={<Descricao19Home/>}/>
        <Route path="/descricao20" element={<Descricao20Home/>}/>
        <Route path="/inventario" element={<Inventario/>}/>
    </Routes>
    </BrowserRouter>
    </> );
}

export default Paths;