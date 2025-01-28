import { useEffect } from "react";
import CorpoProdutos from "../Components/CorpoProdutos";
import HeaderProdutos from "../Components/HeaderProdutos";
import Footer from "../Components/Footer"
import Pagination from "../Components/pagination";

const Produtos = () => {
    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])
    return ( <>
    <HeaderProdutos/>
    <CorpoProdutos/>
    <Pagination/>
    <Footer/>
    
    
   
    </> );
}
 
export default Produtos;