import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao33Home from "../Components/Descricao33Home";

const BlazerVerde = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao33Home/>
    <Footer/>
    </> );
}

export default BlazerVerde;