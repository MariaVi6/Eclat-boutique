import { useEffect } from "react";
import Descricao1Home from "../Components/Descricao1-Home";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"

const BrincoCoracao = () => {
    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])
    return ( <>
    <HeaderProdutos/>
    <Descricao1Home/>
    <Footer/>
    </> );
}
 
export default BrincoCoracao;