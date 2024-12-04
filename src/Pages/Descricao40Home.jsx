import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao40Home from "../Components/Descricao40Home";

const VestidoBrancoFlorido = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao40Home/>
    <Footer/>
    </> );
}

export default VestidoBrancoFlorido;