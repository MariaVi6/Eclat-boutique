import { Link } from "react-router-dom";
const  HeaderProdutos  = () => {
    return ( 
    <>
    <div className="header-produtos">

        <div className="nav-bar">

        <Link to={"/"}>
            <img className="logo-header" src="/src/image/Logo-home-1.2.svg" alt="" />
        </Link>
            <div className="filtro-produtos">

                <ul className="ul-filtros">
                <li className="titulo-filtro">Camisas
                    <ul className="sub-menu">
                    <li className="li-camisas-submenu-1linha">Regata</li>
                    <li className="li-camisas-submenu-1linha">Manga Longa</li>
                    <li className="li-camisas-submenu-1linha">Ombro a Ombro</li>
                    <li className="li-camisas-submenu-1linha">Crooped</li>

                    <li className="li-camisas-submenu">Jeans</li>
                    <li className="li-camisas-submenu">Renda</li>
                    <li className="li-camisas-submenu">Social</li>
                    <li className="li-camisas-submenu">Estampada</li>

                    <li className="li-camisas-submenu">Listrada</li>
                    <li className="li-camisas-submenu">Lisa</li>
                    <li className="li-camisas-submenu">Alça</li>
                    <li className="li-camisas-submenu">Polo</li>

                    <li className="li-camisas-submenu">Xadrez</li>
                    <li className="li-camisas-submenu">Manga Curta</li>
                    <li className="li-camisas-submenu">Blazer</li>
                    <li className="li-camisas-submenu">Gola</li>
                    </ul>
                </li>

                <li className="titulo-filtro">Vestidos
                <ul className="sub-menu">
                    <li className="li-camisas-submenu-1linha">Curto</li>
                    <li className="li-camisas-submenu-1linha">Longo</li>
                    <li className="li-camisas-submenu-1linha">Midi</li>
                    <li className="li-camisas-submenu-1linha">Ombro a Ombro</li>

                    <li className="li-camisas-submenu">Jeans</li>
                    <li className="li-camisas-submenu">Renda</li>
                    <li className="li-camisas-submenu">Com Manga</li>
                    <li className="li-camisas-submenu">Estampado</li>

                    <li className="li-camisas-submenu">Listrado</li>
                    <li className="li-camisas-submenu">Liso</li>
                    <li className="li-camisas-submenu">Alça</li>
                    <li className="li-camisas-submenu">Xadrez</li>
                    </ul>
                </li>

                <li className="titulo-filtro">Calças
                <ul className="sub-menu">
                    <li className="li-camisas-submenu-1linha">Skinny</li>
                    <li className="li-camisas-submenu-1linha">Alfaiataria</li>
                    <li className="li-camisas-submenu-1linha">Jeans</li>
                    <li className="li-camisas-submenu-1linha">Leggin</li>

                    <li className="li-camisas-submenu">Pantalona</li>
                    <li className="li-camisas-submenu">Jogger</li>
                    <li className="li-camisas-submenu">Pantacourt</li>
                    <li className="li-camisas-submenu">Boca de Sino</li>

                    <li className="li-camisas-submenu">Moletom</li>
                    <li className="li-camisas-submenu">Oversized</li>
                    <li className="li-camisas-submenu">Reta</li>
                    <li className="li-camisas-submenu">Social</li>
                    </ul>
                </li>

                <li className="titulo-filtro">Shorts
                <ul className="sub-menu">
                    <li className="li-camisas-submenu-1linha">Jeans</li>
                    <li className="li-camisas-submenu-1linha">Alfaiataria</li>
                    <li className="li-camisas-submenu-1linha">Fitness</li>
                    <li className="li-camisas-submenu-1linha">Estampados</li>

                    <li className="li-camisas-submenu">Moletom</li>
                    <li className="li-camisas-submenu">Cintura Alta</li>
                    <li className="li-camisas-submenu">Shorts Saia</li>
                    <li className="li-camisas-submenu">Tactel</li>
                    </ul>
                </li>

                <li className="titulo-filtro">Acessórios
                <ul className="sub-menu">
                    <li className="li-camisas-submenu-1linha">Brincos</li>
                    <li className="li-camisas-submenu-1linha">Colares</li>
                    <li className="li-camisas-submenu-1linha">Bolsas</li>
                    <li className="li-camisas-submenu-1linha">Anéis</li>

                    </ul>
                </li>
                </ul>

                </div>

                <div className="sub-menu-input2">
                    <div className="div-input">
                    <input className="input-submenu" type="text" placeholder="Pesquise mais produtos" />
                </div>
                </div>

                <div className="sub-menu-carrinho3">
                    <div className="div-carrinho3">
                    <div className="carrinho-submenu3"></div>
                </div>

        </div>
        </div>
    </div>

    </> 
    );
}

export default HeaderProdutos;

