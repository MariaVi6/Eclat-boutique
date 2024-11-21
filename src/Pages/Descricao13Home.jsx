import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao13Home from "../Components/Descricao13Home";

const CalcaMom = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao13Home/>
    <Footer/>
    </> );
}

export default CalcaMom;