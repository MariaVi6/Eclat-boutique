import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao53Home from "../Components/Descricao53Home";

const JaquetaJeansSemManga = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao53Home/>
    <Footer/>
    </> );
}

export default JaquetaJeansSemManga;