import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao31Home from "../Components/Descricao31Home";

const MoletomSportAzul = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao31Home/>
    <Footer/>
    </> );
}

export default MoletomSportAzul;