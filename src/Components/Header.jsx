import { Link } from "react-router-dom";
const  Header  = () => {
    return ( 
    <>
    <div className="header-home">

    {/* <div className="logo-header"></div> */}

        <Link to={"/"}><img className="logo-header-home" src="/src/image/Logo-home-1.2.svg" alt="" /></Link>

        <div className="indice-header">

        <div className="novidade-home">Novidades</div>
        <div className="produtos-home-header"><Link className="link-produtos" to={"/produtos"}>Produtos</Link></div>
        <div className="sobre-nos-home">Sobre Nós</div>

        </div>

        <div className="sub-menu-input">
            <div className="div-input">
                <input className="input-submenu" type="text" placeholder="Pesquise mais produtos" />
            </div>
        </div>

        <div className="sub-menu-carrinho">
            <div className="div-carrinho">
                <div className="carrinho-submenu"></div>
            </div>
        </div>
        

        <div className="entrar-login-home">
        <Link to={"/login"}><img className="entrar-img-home" src="/src/image/adicionar-usuario.png" alt="" /></Link>
        <div className="entrar-home"><Link  className="link-login" to={"/login"}>Entrar</Link></div>
        </div>
    </div>
    </> 
    );
}

export default Header;