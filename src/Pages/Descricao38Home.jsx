import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao38Home from "../Components/Descricao38Home";

const SobretudoListrado = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao38Home/>
    <Footer/>
    </> );
}

export default SobretudoListrado;