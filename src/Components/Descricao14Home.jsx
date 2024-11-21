const Descricao14Home = () => {

    return ( <>

    <div className="descricao-2">
        <div className="imgs-2-produto">
            <div className="img-1-produto">
                <div className="img-1-27"></div>
                <div className="img-1-28"></div>
            </div>

        </div>
        <div className="descricao-escrita-produto">
            <h1 className="titulo-produto">Brinco Circular Verde</h1>
            <h1 className="ref-produto">Acessorios | Brincos | Ref: 204391229</h1>
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
                <h1 className="preco-produto">R$140,00</h1>
                <h1 className="preco2-produto">R$300,00</h1>
            </div>

            <h1 className="titulo-descricao2-produto">Descrição :</h1>

            <div className="descricao2-produto">Brinco em prata 925 com pingente em formato de coração na cor azul. A peça combina a sofisticação da prata de alta qualidade com o charme vibrante do coração azul, criando um design elegante e atemporal. O pingente confere um toque de cor e brilho sutil, tornando o brinco perfeito tanto para ocasiões especiais quanto para uso diário.
            <br />
            Com 3 cm de comprimento, o brinco é discreto, mas de presença marcante, proporcionando conforto e elegância ao mesmo tempo. Ideal para quem busca uma peça clássica, com um toque de modernidade e cor.</div>
            
            <div className="titulos-descricao2">

            <h1 className="titulo-cor-descricao2">Cor</h1>

            <label className="titulo-cor-descricao2" for="quantidade">Quantidade</label>
            </div>

            <div className="cor-quantidade-produto">

            <div className="div13-cor-produto"></div>
                
            <select className="quantidade-produto" id="quantidade" name="quantidade">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
            </select>

            </div>

            <button className="button">Adicione ao Carrinho</button>
        </div>
    </div>
    </> );
}
 
export default Descricao14Home;