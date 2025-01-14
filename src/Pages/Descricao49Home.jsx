import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao49Home from "../Components/Descricao49Home";

const SaltoPlataformaTransparente = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao49Home/>
    <Footer/>
    </> );
}

export default SaltoPlataformaTransparente;