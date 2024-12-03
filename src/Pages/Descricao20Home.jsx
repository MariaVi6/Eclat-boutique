import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao20Home from "../Components/Descricao20Home";

const BrincoVerde = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao20Home/>
    <Footer/>
    </> );
}

export default BrincoVerde;