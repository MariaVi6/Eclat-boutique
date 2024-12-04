import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao43Home from "../Components/Descricao43Home";

const VestidoBrancoRendado = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao43Home/>
    <Footer/>
    </> );
}

export default VestidoBrancoRendado;