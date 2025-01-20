import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao47Home from "../Components/Descricao47Home";

const BotaRoxa = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao47Home/>
    <Footer/>
    </> );
}

export default BotaRoxa;