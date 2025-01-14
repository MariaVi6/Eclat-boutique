import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao72Home from "../Components/Descricao72Home";

const TenisSportivoRosa = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao72Home/>
    <Footer/>
    </> );
}

export default TenisSportivoRosa;