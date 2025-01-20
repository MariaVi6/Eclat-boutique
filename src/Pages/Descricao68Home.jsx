import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao68Home from "../Components/Descricao68Home";

const ConjuntoPulseirasSmiles = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao68Home/>
    <Footer/>
    </> );
}

export default ConjuntoPulseirasSmiles;