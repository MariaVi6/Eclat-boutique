import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao70Home from "../Components/Descricao70Home";

const TenisSportivoBranco = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao70Home/>
    <Footer/>
    </> );
}

export default TenisSportivoBranco;