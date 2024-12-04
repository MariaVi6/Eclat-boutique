import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao21Home from "../Components/Descricao21Home";

const CamisalAzul = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao21Home/>
    <Footer/>
    </> );
}

export default CamisalAzul;