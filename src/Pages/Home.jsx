import Header from "../Components/Header";
import ProdutosHome from "../Components/ProdutosHome"
import Footer from "../Components/Footer"
import CarroselHome from "../Components/CarroselHome";
import FormasPagamentos from "../Components/FormasPagamentos";
const Home = () => {
    return (
        <>
        <Header/>
        <CarroselHome/>
        <ProdutosHome/>
        <FormasPagamentos/>
        <Footer/>
        </> 
        );
}

export default Home;