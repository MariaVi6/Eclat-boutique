import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao42Home from "../Components/Descricao42Home";

const VestidoBrancoLongo = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao42Home/>
    <Footer/>
    </> );
}

export default VestidoBrancoLongo;