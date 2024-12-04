import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao23Home from "../Components/Descricao23Home";

const SaiaSocialBege = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao23Home/>
    <Footer/>
    </> );
}

export default SaiaSocialBege;