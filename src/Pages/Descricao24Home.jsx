import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao24Home from "../Components/Descricao24Home";

const CalcaSocialPreta = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao24Home/>
    <Footer/>
    </> );
}

export default CalcaSocialPreta;