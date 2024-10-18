
const  HeaderProdutos  = () => {
    return ( 
    <>
    <div className="header-produtos">

        <div className="logo-header-produtos"></div>

        <div className="filtro-produtos">
        <ul>
            <li>Camisas</li>
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