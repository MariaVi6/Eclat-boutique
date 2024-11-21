const Descricao13Home = () => {

    return ( <>
    
    <div className="descricao-2">
        <div className="imgs-2-produto">
            <div className="img-1-produto">
                <div className="img-1-25"></div>
                <div className="img-1-26"></div>
            </div>
        </div>
        <div className="descricao-escrita-produto">
            <h1 className="titulo-produto">Calça Mom</h1>
            <h1 className="ref-produto">Calça | Mom | Ref: 204436291</h1>
            <div className="div-avaliacao-produto">
                <div className="avaliacao-produto" >
                <img className="estrela-produto" src="/src/image/estrela.png" alt="" />
                <img className="estrela-produto"src="/src/image/estrela.png" alt="" />
                <img className="estrela-produto"src="/src/image/estrela.png" alt="" />
                <img className="estrela-produto"src="/src/image/estrela.png" alt="" />
                <img className="estrela-produto" src="/src/image/estrela-2.png" alt="" />
                </div>

                <div className="avaliacao2-produto">4,2 (1.100 Avaliações)</div>
            </div>
            <div className="precos-produto">
                <h1 className="preco-produto">R$210,00</h1>
                <h1 className="preco2-produto">R$400,00</h1>
            </div>

            <h1 className="titulo-descricao2-produto">Descrição :</h1>

            <div className="descricao2-produto">
            Conjunto de anéis em prata 925 com design delicado e sofisticado. A peça combina a qualidade da prata de alta durabilidade com um design moderno e atemporal, perfeito para quem busca elegância discreta. Cada anel pode ser usado individualmente ou em conjunto.
            <br />
            Com tamanhos ajustáveis, os anéis garantem conforto e praticidade, oferecendo um ajuste perfeito e adaptável a diferentes dedos. Ideal para quem deseja uma joia versátil e sofisticada, que adiciona um toque de classe e estilo a qualquer visual.

            </div>

            <div className="titulos-descricao2">

            <h1 className="titulo-cor-descricao2">Cor</h1>

            <label className="titulo-cor-descricao2" htmlFor="quantidade">Quantidade</label>

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
 
export default Descricao13Home;