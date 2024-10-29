import { Link } from "react-router-dom";
const  Header  = () => {
    return ( 
    <>
    <div className="header-home">

        <div className="logo-header"></div>

        <div className="indice-header">
            <div className="novidade-home">Novidades</div>
            <div className="produtos-home-header"><Link className="link-produtos" to={"/produtos"}>Produtos</Link></div>
            <div className="sobre-nos-home">Sobre Nós</div>
        </div>

        <div className="entrar-login-home">
        <div className="entrar-home"><Link  className="link-login" to={"/login"}>Entrar</Link></div>
        </div>

        <img className="lupa-header-home" src="/src/image/lupa.png" alt="" />
        <img className="img-carrinho-header-home" src="/src/image/carrinho-de-compras.png" alt="" />
    </div>
    </> 
    );
}

export default Header;