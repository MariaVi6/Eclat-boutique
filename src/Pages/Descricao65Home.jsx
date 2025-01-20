import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao65Home from "../Components/Descricao65Home";

const ConjuntoDeAneisSmile = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao65Home/>
    <Footer/>
    </> );
}

export default ConjuntoDeAneisSmile;