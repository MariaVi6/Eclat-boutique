import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao64Home from "../Components/Descricao64Home";

const JaquetaVerde = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao64Home/>
    <Footer/>
    </> );
}

export default JaquetaVerde;