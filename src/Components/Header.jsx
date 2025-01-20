import { Link, useNavigate } from "react-router-dom";
const  Header  = () => {
  

    return ( 
    <>
        <div className="header-home">

        <Link to={"/"}><div className="logo-header-home"></div></Link>

        <div className="indice-header">

        <div className="novidade-home">Novidades</div>
        <div className="produtos-home"><Link className="link-produto" to={"/produtos"}>Produtos</Link></div>
        <div className="sobre-nos-home">Sobre Nós</div>
        <div className="promocoes-home">Promoções</div>

        </div>

        <div className="sub-menu-input">

        <div className="div-input">

            <input className="input-submenu"
            type="text"
            placeholder="Pesquise mais produtos"
    
            
            />

            </div>
        </div>

        <div className="sub-menu-carrinho">

            <div className="div-carrinho">
                <div className="carrinho-submenu"></div>

            </div>
        </div>
    
        <Link to={"/login"}><div className="entrar-home"></div></Link>

    </div>
    </> 
    );
}

export default Header;