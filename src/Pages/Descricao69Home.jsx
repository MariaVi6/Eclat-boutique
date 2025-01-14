import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao69Home from "../Components/Descricao69Home";

const ViseiraVermelha = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao69Home/>
    <Footer/>
    </> );
}

export default ViseiraVermelha;