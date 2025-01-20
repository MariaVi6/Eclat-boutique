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
import Descricao45Home from "../Pages/Descricao45Home";
import Descricao46Home from "../Pages/Descricao46Home";
import Descricao47Home from "../Pages/Descricao47Home";
import Descricao48Home from "../Pages/Descricao48Home";
import Descricao49Home from "../Pages/Descricao49Home";
import Descricao50Home from "../Pages/Descricao50Home";
import Descricao51Home from "../Pages/Descricao51Home";
import Descricao52Home from "../Pages/Descricao52Home";
import Descricao53Home from "../Pages/Descricao53Home";
import Descricao54Home from "../Pages/Descricao54Home";
import Descricao55Home from "../Pages/Descricao55Home";
import Descricao56Home from "../Pages/Descricao56Home";
import Descricao57Home from "../Pages/Descricao57Home";
import Descricao58Home from "../Pages/Descricao58Home";
import Descricao59Home from "../Pages/Descricao59Home";
import Descricao60Home from "../Pages/Descricao60Home";
import Descricao61Home from "../Pages/Descricao61Home";
import Descricao62Home from "../Pages/Descricao62Home";
import Descricao63Home from "../Pages/Descricao63Home";
import Descricao64Home from "../Pages/Descricao64Home";
import Descricao65Home from "../Pages/Descricao65Home";
import Descricao66Home from "../Pages/Descricao66Home";
import Descricao67Home from "../Pages/Descricao67Home";
import Descricao68Home from "../Pages/Descricao68Home";
import Descricao69Home from "../Pages/Descricao69Home";
import Descricao70Home from "../Pages/Descricao70Home";
import Descricao71Home from "../Pages/Descricao71Home";
import Descricao72Home from "../Pages/Descricao72Home";

import Inventario from "../Components/inventario";
import Procurar from "../Components/procurar";
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
        <Route path="/descricao45" element={<Descricao45Home/>}/>
        <Route path="/descricao46" element={<Descricao46Home/>}/>
        <Route path="/descricao47" element={<Descricao47Home/>}/>
        <Route path="/descricao48" element={<Descricao48Home/>}/>
        <Route path="/descricao49" element={<Descricao49Home/>}/>
        <Route path="/descricao50" element={<Descricao50Home/>}/>
        <Route path="/descricao51" element={<Descricao51Home/>}/>
        <Route path="/descricao52" element={<Descricao52Home/>}/>
        <Route path="/descricao53" element={<Descricao53Home/>}/>
        <Route path="/descricao54" element={<Descricao54Home/>}/>
        <Route path="/descricao55" element={<Descricao55Home/>}/>
        <Route path="/descricao56" element={<Descricao56Home/>}/>
        <Route path="/descricao57" element={<Descricao57Home/>}/>
        <Route path="/descricao58" element={<Descricao58Home/>}/>
        <Route path="/descricao59" element={<Descricao59Home/>}/>
        <Route path="/descricao60" element={<Descricao60Home/>}/>
        <Route path="/descricao61" element={<Descricao61Home/>}/>
        <Route path="/descricao62" element={<Descricao62Home/>}/>
        <Route path="/descricao63" element={<Descricao63Home/>}/>
        <Route path="/descricao64" element={<Descricao64Home/>}/>
        <Route path="/descricao65" element={<Descricao65Home/>}/>
        <Route path="/descricao66" element={<Descricao66Home/>}/>
        <Route path="/descricao67" element={<Descricao67Home/>}/>
        <Route path="/descricao68" element={<Descricao68Home/>}/>
        <Route path="/descricao69" element={<Descricao69Home/>}/>
        <Route path="/descricao70" element={<Descricao70Home/>}/>
        <Route path="/descricao71" element={<Descricao71Home/>}/>
        <Route path="/descricao72" element={<Descricao72Home/>}/>
        <Route path="/inventario" element={<Inventario/>}/>
        <Route path="/procurar" element={<Procurar/>}/>
        <Route path="/itemcard" element={<ItemCard/>}/>
        <Route path="/itempost/:id" element={<ItemPost />}/>
    </Routes>
    </BrowserRouter>
    </> );
}

export default Paths;