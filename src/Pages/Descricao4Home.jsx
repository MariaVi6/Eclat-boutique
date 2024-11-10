import { useEffect } from "react";
import Descricao4Home from "../Components/Descricao4Home";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"

const BrincoCircularVerde = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao4Home/>
    <Footer/>
    </> );
}

export default BrincoCircularVerde;