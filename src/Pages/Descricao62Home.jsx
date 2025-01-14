import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao62Home from "../Components/Descricao62Home";

const CalcaBranca = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao62Home/>
    <Footer/>
    </> );
}

export default CalcaBranca;