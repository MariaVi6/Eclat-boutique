import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao44Home from "../Components/Descricao44Home";

const VestidoBrancoLiso = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao44Home/>
    <Footer/>
    </> );
}

export default VestidoBrancoLiso;