import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao52Home from "../Components/Descricao52Home";

const CasacoMarrom = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao52Home/>
    <Footer/>
    </> );
}

export default CasacoMarrom;