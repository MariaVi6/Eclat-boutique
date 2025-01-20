import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao45Home from "../Components/Descricao45Home";

const VestidoRosa = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao45Home/>
    <Footer/>
    </> );
}

export default VestidoRosa;