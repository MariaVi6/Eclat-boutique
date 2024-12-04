import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao25Home from "../Components/Descricao25Home";

const SobretudoBege = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao25Home/>
    <Footer/>
    </> );
}

export default SobretudoBege;