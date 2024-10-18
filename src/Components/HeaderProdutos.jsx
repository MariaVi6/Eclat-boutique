
const  HeaderProdutos  = () => {
    return ( 
    <>
    <div className="header-produtos bg-black  gap-5 pr-14">

        {/* <div className="logo-header-produtos"></div> */}

        <div className="filtro-produtos">
        <ul className="ul-filtros">
            <li>Camisas
                <ul className="sub-menu">
                    <li className="">Manga Longa</li>
                    <li>Regata</li>
                </ul>
            </li>
            <li>Vestidos</li>
            <li>Calças</li>
            <li>Shorts</li>
            <li>Acessórios</li>
        </ul>
    </div>
    
        <img className="lupa-pagina-produtos" src="/src/image/lupa.png" alt="" />

        <img className="img-carrinho-header-produtos" src="/src/image/carrinho-de-compras.png" alt="" />

    
    </div>

    </> 
    );
}

export default HeaderProdutos;

