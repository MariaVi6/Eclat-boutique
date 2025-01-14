import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao71Home from "../Components/Descricao71Home";

const ConjuntoPoloVermelho = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao71Home/>
    <Footer/>
    </> );
}

export default ConjuntoPoloVermelho;