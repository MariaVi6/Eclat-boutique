import Header from "../Components/Header";
// import Carrosel from "../Components/Carrosel"
import ProdutosHome from "../Components/ProdutosHome"
import Footer from "../Components/Footer"
import { Carousel } from "bootstrap";
const Home = () => {
    return (
        <>
        <Header/>
        {/* <Carrosel/> */}
        <Carousel/>
        <ProdutosHome/>
        <Footer/>
        </> 
        );
}

export default Home;