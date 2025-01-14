import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao54Home from "../Components/Descricao54Home";

const TenisBranco = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao54Home/>
    <Footer/>
    </> );
}

export default TenisBranco;