import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao41Home from "../Components/Descricao41Home";

const VestidoBrancoFlorido = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao41Home/>
    <Footer/>
    </> );
}

export default VestidoBrancoFlorido;