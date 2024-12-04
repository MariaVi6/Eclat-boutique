import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao36Home from "../Components/Descricao36Home";

const SobretudoPreto = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao36Home/>
    <Footer/>
    </> );
}

export default SobretudoPreto;