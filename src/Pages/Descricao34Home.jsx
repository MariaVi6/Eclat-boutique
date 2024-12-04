import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao34Home from "../Components/Descricao34Home";

const BlazerBranco = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao34Home/>
    <Footer/>
    </> );
}

export default BlazerBranco;