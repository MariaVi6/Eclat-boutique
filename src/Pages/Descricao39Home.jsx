import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao39Home from "../Components/Descricao39Home";

const SobretudoVerde = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao39Home/>
    <Footer/>
    </> );
}

export default SobretudoVerde;