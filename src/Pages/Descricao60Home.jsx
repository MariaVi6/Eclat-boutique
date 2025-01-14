import { useEffect } from "react";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Descricao60Home from "../Components/Descricao60Home";

const MacacaoPreto = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return ( <>
    <HeaderProdutos/>
    <Descricao60Home/>
    <Footer/>
    </> );
}

export default MacacaoPreto;