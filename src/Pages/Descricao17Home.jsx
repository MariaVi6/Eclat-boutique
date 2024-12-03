import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao17Home from "../Components/Descricao17Home";

const ColarPrataVerde = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao17Home/>
    <Footer/>
    </> );
}

export default ColarPrataVerde;