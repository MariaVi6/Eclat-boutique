import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao27Home from "../Components/Descricao27Home";

const JaquetaPretaListrada = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao27Home/>
    <Footer/>
    </> );
}

export default JaquetaPretaListrada;