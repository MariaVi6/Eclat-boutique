import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao63Home from "../Components/Descricao63Home";

const SaltoFinoPreto = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao63Home/>
    <Footer/>
    </> );
}

export default SaltoFinoPreto;