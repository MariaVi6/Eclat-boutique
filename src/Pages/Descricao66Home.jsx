import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao66Home from "../Components/Descricao66Home";

const ColarDream = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao66Home/>
    <Footer/>
    </> );
}

export default ColarDream;