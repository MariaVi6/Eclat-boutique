import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao18Home from "../Components/Descricao18Home";

const BolsaDeMao = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao18Home/>
    <Footer/>
    </> );
}

export default BolsaDeMao;