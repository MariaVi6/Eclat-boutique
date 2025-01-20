import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao55Home from "../Components/Descricao55Home";

const CroopedLaVermelho = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao55Home/>
    <Footer/>
    </> );
}

export default CroopedLaVermelho;