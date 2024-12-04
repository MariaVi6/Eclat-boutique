import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao22Home from "../Components/Descricao22Home";

const CamisaSocialAzul = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao22Home/>
    <Footer/>
    </> );
}

export default CamisaSocialAzul;