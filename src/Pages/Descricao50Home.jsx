import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao50Home from "../Components/Descricao50Home";

const CapaBege = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao50Home/>
    <Footer/>
    </> );
}

export default CapaBege;