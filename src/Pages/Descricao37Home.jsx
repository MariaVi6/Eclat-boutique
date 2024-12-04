import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao37Home from "../Components/Descricao37Home";

const SobretudoPreto = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao37Home/>
    <Footer/>
    </> );
}

export default SobretudoPreto;