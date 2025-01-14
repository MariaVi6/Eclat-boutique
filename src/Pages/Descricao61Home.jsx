import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao61Home from "../Components/Descricao61Home";

const CalcaMoletomPreta = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao61Home/>
    <Footer/>
    </> );
}

export default CalcaMoletomPreta;