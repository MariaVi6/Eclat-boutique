import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao48Home from "../Components/Descricao48Home";

const ColarCorrentes = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao48Home/>
    <Footer/>
    </> );
}

export default ColarCorrentes;