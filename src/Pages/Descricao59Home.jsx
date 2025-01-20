import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao59Home from "../Components/Descricao59Home";

const CalcaLeggingPreta = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao59Home/>
    <Footer/>
    </> );
}

export default CalcaLeggingPreta;