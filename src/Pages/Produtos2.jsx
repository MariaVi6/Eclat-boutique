import { useEffect } from "react";
import CorpoProduto2 from "../Components/CorpoProduto2";
import Footer from "../Components/Footer";
import HeaderProdutos from "../Components/HeaderProdutos";
import Pagination from "../Components/Pagination";

const Pagina2Produtos = () => {
    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])
    return ( <>
    <HeaderProdutos/>
    <CorpoProduto2/>
    <Pagination/>
    <Footer/>
    </> );
}
 
export default Pagina2Produtos;