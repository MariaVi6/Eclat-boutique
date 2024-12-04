import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao28Home from "../Components/Descricao28Home";

const SaltoAltoBranco = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao28Home/>
    <Footer/>
    </> );
}

export default SaltoAltoBranco;