const Descricao1Home = () => {
    return ( <>
    <div className="descricao">
        <div className="imgs-produto">
            <div className="img-1-produto">
                <div className="img-1-1"></div>
                <div className="img-1-2"></div>
            </div>

            <div className="img2-produto"></div>
        </div>
        <div className="descricao-escrita-produto">
            <h1 className="titulo-produto">Brinco Coração</h1>
            <h1 className="ref-produto">Acessorios | Brincos | Ref: 20239I329</h1>
            <div className="div-avaliacao-produto">
                <div className="avaliacao-produto" >
                <img className="estrela-produto" src="/src/image/estrela.png" alt="" />
                <img className="estrela-produto"src="/src/image/estrela.png" alt="" />
                <img className="estrela-produto"src="/src/image/estrela.png" alt="" />
                <img className="estrela-produto"src="/src/image/estrela.png" alt="" />
                <img className="estrela-produto" src="/src/image/estrela-2.png" alt="" />
                </div>

                <div className="avaliacao2-produto">4,9 (1.000 Avaliações)</div>
            </div>
            <div className="precos-produto">
                <h1 className="preco-produto">R$80,00</h1>
                <h1 className="preco2-produto">R$100,00</h1>
            </div>

            <h1 className="titulo-descricao2-produto">Descrição :</h1>

            <div className="descricao2-produto">Brinco em prata 925 com pingente em formato de coração na cor azul. A peça combina a sofisticação da prata de alta qualidade com o charme vibrante do coração azul, criando um design elegante e atemporal. O pingente confere um toque de cor e brilho sutil, tornando o brinco perfeito tanto para ocasiões especiais quanto para uso diário.
            <br />
            Com 3 cm de comprimento, o brinco é discreto, mas de presença marcante, proporcionando conforto e elegância ao mesmo tempo. Ideal para quem busca uma peça clássica, com um toque de modernidade e cor.</div>

            <h1 className="titulo-cor-descricao2">Cor</h1>

            <div className="cor-quantidade-produto">
                <div className="div-cor-produto"></div>
                <div></div>
            </div>

            <button className="button">Adicione ao Carrinho</button>
        </div>
    </div>
    </> );
}
 
export default Descricao1Home;