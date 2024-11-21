import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao16Home from "../Components/Descricao16Home";

const JaquetaJeans = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao16Home/>
    <Footer/>
    </> );
}

export default JaquetaJeans;