import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao26Home from "../Components/Descricao26Home";

const JaquetaOffWithe = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao26Home/>
    <Footer/>
    </> );
}

export default JaquetaOffWithe;