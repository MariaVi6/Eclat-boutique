const Descricao3Home = () => {

    return ( <>
    
    <div className="descricao">
        <div className="imgs-2-produto">
            <div className="img-1-produto">
                <div className="img-1-5"></div>
                <div className="img-1-6"></div>
            </div>
        </div>
        <div className="descricao-escrita-produto">
            <h1 className="titulo-produto">Conjuntos De Aneis</h1>
            <h1 className="ref-produto">Acessorios | Aneis | Ref: 202436291</h1>
            <div className="div-avaliacao-produto">
                <div className="avaliacao-produto" >
                <img className="estrela-produto" src="/src/image/estrela.png" alt="" />
                <img className="estrela-produto"src="/src/image/estrela.png" alt="" />
                <img className="estrela-produto"src="/src/image/estrela.png" alt="" />
                <img className="estrela-produto"src="/src/image/estrela.png" alt="" />
                <img className="estrela-produto" src="/src/image/estrela-2.png" alt="" />
                </div>

                <div className="avaliacao2-produto">4,6 (1.900 Avaliações)</div>
            </div>
            <div className="precos-produto">
                <h1 className="preco-produto">R$110,00</h1>
                <h1 className="preco2-produto">R$200,00</h1>
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

            <div className="div3-cor-produto"></div>
    
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

    <div className="imagem-frete-produtos">
            <div className="img-2-2-produto"></div>
            <div className="frete">
                <div className="titulo-frete">Entrega</div>
                <div className="subtitulo-frete">Consulte o prazo e o valor do frete</div>
                <div className="input-button-frete">
                <input className="input-frete" type="text" placeholder="Digite seu cep" />
                <button className="button-frete">Consultar</button>
                </div>
                
                <div className="pesquisa-para-frete">Não sei meu CEP</div>
                <div className="vendedor-frete">Produto vendido e entregue por Eclat Boutique</div>
                <hr className="linhas-frete" />
                <div className="titulos-descricao-frete">Entrega Rápida</div>
                <div className="textos-frete">Receba seu pedido em até 48 horas, verifique o tempo estimado para o seu Cep.</div>
                <hr className="linhas-frete" />
                <div className="titulos-descricao-frete">Frete Grátis</div>
                <div className="textos-frete">Em compras à partir de R$ 400,00.</div>
                <hr className="linhas-frete" />
                <div className="titulos-descricao-frete">Troca e Devolução</div>
                <div className="textos-frete">Devolução é gratuita, assim que é solicitado a devolução é gerado um codigo do correio. </div>
                <hr className="linhas-frete" />
                <div className="titulos-descricao-frete">Composição</div>
                <div className="textos-frete">40% prata 70% plastico</div>
            </div>
        </div>
    </> );
}
 
export default Descricao3Home;