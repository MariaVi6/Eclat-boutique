import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao35Home from "../Components/Descricao35Home";

const BlazerAzul = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao35Home/>
    <Footer/>
    </> );
}

export default BlazerAzul;