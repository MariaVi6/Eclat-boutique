import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao67Home from "../Components/Descricao67Home";

const ConjuntoColarFlores = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao67Home/>
    <Footer/>
    </> );
}

export default ConjuntoColarFlores;