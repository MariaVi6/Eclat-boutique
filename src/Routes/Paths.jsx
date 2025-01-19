import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
// import Login from "../Pages/Login";
import Produtos from "../Pages/Produtos";
import Produtos2 from"../Pages/Produtos2"
import Descricao1Home from "../Pages/Descricao1Home"
import Descricao2Home from "../Pages/Descricao2Home"
import Descricao3Home from "../Pages/Descricao3Home"
import Descricao4Home from "../Pages/Descricao4Home"
import Descricao13Home from "../Pages/Descricao13Home";
import Descricao14Home from "../Pages/Descricao14Home";
import Descricao15Home from "../Pages/Descricao15Home";
import Descricao16Home from "../Pages/Descricao16Home";
import Descricao17Home from "../Pages/Descricao17Home"
import Descricao18Home from "../Pages/Descricao18Home";
import Descricao19Home from "../Pages/Descricao19Home";
import Descricao20Home from "../Pages/Descricao20Home";
import Descricao21Home from "../Pages/Descricao21Home";
import Descricao22Home from "../Pages/Descricao22Home";
import Descricao23Home from "../Pages/Descricao23Home";
import Descricao24Home from "../Pages/Descricao24Home";
import Descricao25Home from "../Pages/Descricao25Home";
import Descricao26Home from "../Pages/Descricao26Home";
import Descricao27Home from "../Pages/Descricao27Home";
import Descricao28Home from "../Pages/Descricao28Home";
import Descricao29Home from "../Pages/Descricao29Home";
import Descricao30Home from "../Pages/Descricao30Home";
import Descricao31Home from "../Pages/Descricao31Home";
import Descricao32Home from "../Pages/Descricao32Home";
import Descricao33Home from "../Pages/Descricao33Home";
import Descricao34Home from "../Pages/Descricao34Home";
import Descricao35Home from "../Pages/Descricao35Home";
import Descricao36Home from "../Pages/Descricao36Home";
import Descricao37Home from "../Pages/Descricao37Home";
import Descricao38Home from "../Pages/Descricao38Home";
import Descricao39Home from "../Pages/Descricao39Home";
import Descricao40Home from "../Pages/Descricao40Home";
import Descricao41Home from "../Pages/Descricao41Home";
import Descricao42Home from "../Pages/Descricao42Home";
import Descricao43Home from "../Pages/Descricao43Home";
import Descricao44Home from "../Pages/Descricao44Home";
import ItemCard from "../Components/itemCard";
import ItemPost from "../Components/ItemPost";


const Paths = () => {
    return ( 
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/login" element={<Login/>}/> */}
        <Route path="/produtos" element={<Produtos/>}/>
        <Route path="/produtos2" element={<Produtos2/>}/>
        <Route path="/descricao1" element={<Descricao1Home/>}/>
        <Route path="/descricao2" element={<Descricao2Home/>}/>
        <Route path="/descricao3" element={<Descricao3Home/>}/>
        <Route path="/descricao4" element={<Descricao4Home/>}/>
        <Route path="/descricao13" element={<Descricao13Home/>}/>
        <Route path="/descricao14" element={<Descricao14Home/>}/>
        <Route path="/descricao15" element={<Descricao15Home/>}/>
        <Route path="/descricao16" element={<Descricao16Home/>}/>
        <Route path="/descricao17" element={<Descricao17Home/>}/>
        <Route path="/descricao18" element={<Descricao18Home/>}/>
        <Route path="/descricao19" element={<Descricao19Home/>}/>
        <Route path="/descricao20" element={<Descricao20Home/>}/>
        <Route path="/descricao21" element={<Descricao21Home/>}/>
        <Route path="/descricao22" element={<Descricao22Home/>}/>
        <Route path="/descricao23" element={<Descricao23Home/>}/>
        <Route path="/descricao24" element={<Descricao24Home/>}/>
        <Route path="/descricao25" element={<Descricao25Home/>}/>
        <Route path="/descricao26" element={<Descricao26Home/>}/>
        <Route path="/descricao27" element={<Descricao27Home/>}/>
        <Route path="/descricao28" element={<Descricao28Home/>}/>
        <Route path="/descricao29" element={<Descricao29Home/>}/>
        <Route path="/descricao30" element={<Descricao30Home/>}/>
        <Route path="/descricao31" element={<Descricao31Home/>}/>
        <Route path="/descricao32" element={<Descricao32Home/>}/>
        <Route path="/descricao33" element={<Descricao33Home/>}/>
        <Route path="/descricao34" element={<Descricao34Home/>}/>
        <Route path="/descricao35" element={<Descricao35Home/>}/>
        <Route path="/descricao36" element={<Descricao36Home/>}/>
        <Route path="/descricao37" element={<Descricao37Home/>}/>
        <Route path="/descricao38" element={<Descricao38Home/>}/>
        <Route path="/descricao39" element={<Descricao39Home/>}/>
        <Route path="/descricao40" element={<Descricao40Home/>}/>
        <Route path="/descricao41" element={<Descricao41Home/>}/>
        <Route path="/descricao42" element={<Descricao42Home/>}/>
        <Route path="/descricao43" element={<Descricao43Home/>}/>
        <Route path="/descricao44" element={<Descricao44Home/>}/>
        <Route path="/itemcard" element={<ItemCard/>}/>
        <Route path="/itempost/:id" element={<ItemPost />}/>
    </Routes>
    </BrowserRouter>
    </> );
}

export default Paths;