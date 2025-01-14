import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao46Home from "../Components/Descricao46Home";

const ConjuntoColarCorrentes = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao46Home/>
    <Footer/>
    </> );
}

export default ConjuntoColarCorrentes;