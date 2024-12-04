import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao32Home from "../Components/Descricao32Home";

const MoletomSportVerde = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao32Home/>
    <Footer/>
    </> );
}

export default MoletomSportVerde;