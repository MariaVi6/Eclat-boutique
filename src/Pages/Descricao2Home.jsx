import { useEffect } from "react";
import Descricao2Home from "../Components/Descricao2Home";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"

const ColarCirculoVerde = () => {
    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])
    return ( <>
    <HeaderProdutos/>
    <Descricao2Home/>
    <Footer/>
    </> );
}
 
export default ColarCirculoVerde;