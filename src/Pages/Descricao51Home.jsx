import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao51Home from "../Components/Descricao51Home";

const BrincoOuro = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao51Home/>
    <Footer/>
    </> );
}

export default BrincoOuro;