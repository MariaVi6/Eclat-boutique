import { useEffect } from "react";
import Descricao3Home from "../Components/Descricao3Home";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"

const ColarCirculoVerde = () => {
    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])
    return ( <>
    <HeaderProdutos/>
    <Descricao3Home/>
    <Footer/>
    </> );
}
 
export default ColarCirculoVerde;