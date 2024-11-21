import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao14Home from "../Components/Descricao14Home";

const MoletomJeans = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao14Home/>
    <Footer/>
    </> );
}

export default MoletomJeans;