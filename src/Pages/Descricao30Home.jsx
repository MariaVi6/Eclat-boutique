import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao30Home from "../Components/Descricao30Home";

const CamisaSportBranca = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao30Home/>
    <Footer/>
    </> );
}

export default CamisaSportBranca;