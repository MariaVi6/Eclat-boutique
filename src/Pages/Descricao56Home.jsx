import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao56Home from "../Components/Descricao56Home";

const CalcaJeansCoracao = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao56Home/>
    <Footer/>
    </> );
}

export default CalcaJeansCoracao;