import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao15Home from "../Components/Descricao15Home";

const JaquetaRecortes = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao15Home/>
    <Footer/>
    </> );
}

export default JaquetaRecortes;