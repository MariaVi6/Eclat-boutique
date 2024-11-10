const Descricao2Home = () => {
    return ( <>
    <div className="descricao">
        <div className="imgs-produto">
            <div className="img-1-produto">
                <div className="img-1-3"></div>
                <div className="img-1-4"></div>
            </div>

            <div className="img2-1-produto"></div>
        </div>
        <div className="descricao-escrita-produto">
            <h1 className="titulo-produto">Colar Circulo Verde</h1>
            <h1 className="ref-produto">Acessorios | Colar | Ref: 202938291</h1>
            <div className="div-avaliacao-produto">
                <div className="avaliacao-produto" >
                <img className="estrela-produto" src="/src/image/estrela.png" alt="" />
                <img className="estrela-produto"src="/src/image/estrela.png" alt="" />
                <img className="estrela-produto"src="/src/image/estrela.png" alt="" />
                <img className="estrela-produto"src="/src/image/estrela.png" alt="" />
                <img className="estrela-produto" src="/src/image/estrela-2.png" alt="" />
                </div>

                <div className="avaliacao2-produto">4,2 (1.300 Avaliações)</div>
            </div>
            <div className="precos-produto">
                <h1 className="preco-produto">R$120,00</h1>
                <h1 className="preco2-produto">R$220,00</h1>
            </div>

            <h1 className="titulo-descricao2-produto">Descrição :</h1>

            <div className="descricao2-produto">Colar em prata 925 com pingente circular na cor verde. A peça combina a sofisticação da prata de alta qualidade com a elegância do pingente verde, criando um design moderno e atemporal. O pingente, com sua tonalidade vibrante, adiciona um toque de cor sutil e sofisticado, tornando o colar perfeito tanto para ocasiões especiais quanto para o uso diário.
            <br />
            Com 2,5 cm de diâmetro, o pingente é de presença marcante, enquanto a corrente fina e delicada proporciona conforto e ajuste seguro. Ideal para quem busca uma joia clássica, com um toque de frescor e modernidade.
            </div>

            <div className="titulos-descricao2">

            <h1 className="titulo-cor-descricao2">Cor</h1>

            <label className="titulo-cor-descricao2" for="quantidade">Quantidade</label>
            </div>

            <div className="cor-quantidade-produto">
                <div className="div2-cor-produto"></div>

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
 
export default Descricao2Home;