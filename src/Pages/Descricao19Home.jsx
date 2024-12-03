import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao19Home from "../Components/Descricao19Home";

const AnelRedondoAzul = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao19Home/>
    <Footer/>
    </> );
}

export default AnelRedondoAzul;