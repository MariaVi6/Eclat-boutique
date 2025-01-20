import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao57Home from "../Components/Descricao57Home";

const TopCaneladoPreto = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao57Home/>
    <Footer/>
    </> );
}

export default TopCaneladoPreto;