import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao29Home from "../Components/Descricao29Home";

const CamisaSportCinza = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao29Home/>
    <Footer/>
    </> );
}

export default CamisaSportCinza;