import { Link } from "react-router-dom";

const ProdutosHome = () => {
        return (
        <>

        {/* LINHA 1 - PRODUTOS - HOME */}

        <section className="section-l1">

        <div className="linha1-produtos">
        <Link to={"/descricao1"}><div className="produto1"></div></Link>
        <Link to={"/descricao2"}><div className="produto2"></div></Link>
        <Link to={"/descricao3"}><div className="produto3"></div></Link>
        <Link to={"/descricao4"}><div className="produto4"></div></Link>
        </div>

        <div className="tipo-de-produto1">
        <div className="tipo1">Brinco</div>
        <div className="tipo2">Colar</div>
        <div className="tipo3">Aneis</div>
        <div className="tipo4">Brinco</div>
        </div>

        <div className="linha1-descricao-produtos">
        <div className="descricao1">Brinco Coração</div>
        <div className="descricao2">Colar Circulo Verde</div>
        <div className="descricao3">Conjunto de Aneis</div>
        <div className="descricao4">Brinco Circulo Verde</div>
        </div>

        <div className="valores-produtos">
        <div className="valor1-produto">
        <div className="valor1-1">R$100</div>
        <div className="valor1-2">R$80</div>
        </div>

        <div className="valor2-produto">
        <div className="valor2-1">R$220</div>
        <div className="valor2-2">R$120</div>
        </div>

        <div className="valor3-produto">
        <div className="valor3-1">R$200</div>
        <div className="valor3-2">R$110</div>
        </div>

        <div className="valor4-produto">
        <div className="valor4-1">R$100</div>
        <div className="valor4-2">R$40</div>
        </div>

        </div>

        <div className="botoes-produtos-linha1">
        <button className="botao-produto1">Comprar</button>
        <button className="botao-produto2">Comprar</button>
        <button className="botao-produto3">Comprar</button>
        <button className="botao-produto4">Comprar</button>
        </div>

        </section>
        

        
        {/* LINHA 2 - PRODUTOS - HOME */}

        <section className="section-l2">
        

        <div className="linha2-produtos">
        <Link to={"/descricao25"}><div className="produto5"></div></Link>
        <Link to={"/descricao26"}><div className="produto6"></div></Link>
        <Link to={"/descricao27"}><div className="produto7"></div></Link>
        <Link to={"/descricao28"}><div className="produto8"></div></Link>
        </div>

        <div className="tipo-de-produto1">
        <div className="tipo5">Sobretudo</div>
        <div className="tipo6">Alfaiataria</div>
        <div className="tipo7">Listrado</div>
        <div className="tipo8">Salto</div>
        </div>

        <div className="linha1-descricao-produtos">
        <div className="descricao5">Sobretudo Bege</div>
        <div className="descricao6">Jaqueta Off Withe</div>
        <div className="descricao7">Jaqueta Preta Listrada</div>
        <div className="descricao8">Salto Alto Branco</div>
        </div>

        <div className="valores-produtos">

        <div className="valor1-produto">

        <div className="valor1-1">R$400</div>
        <div className="valor1-2">R$300</div>
        </div>

        <div className="valor2-produto">

        <div className="valor2-1">R$350</div>
        <div className="valor2-2">R$280</div>
        </div>

        <div className="valor3-produto">
        <div className="valor3-1">R$280</div>
        <div className="valor3-2">R$200</div>
        </div>

        <div className="valor4-produto">

        <div className="valor4-1">R$350</div>
        <div className="valor4-2">R$320</div>
        </div>

        </div>

        <div className="botoes-produtos-linha1">
        <button className="botao-produto5">Comprar</button>
        <button className="botao-produto6">Comprar</button>
        <button className="botao-produto7">Comprar</button>
        <button className="botao-produto8">Comprar</button>
        </div>
        
        </section>

        {/* LINHA 3 - PRODUTOS - HOME */}

        <section className="section-l3">

        <div className="linha3-produtos">
        <div className="produto9"></div>
        <div className="produto10"></div>
        <div className="produto11"></div>
        <div className="produto12"></div>
        </div>

        <div className="tipo-de-produto1">
        <div className="tipo9">Brinco</div>
        <div className="tipo10">Colar</div>
        <div className="tipo11">Aneis</div>
        <div className="tipo12">Brinco</div>
        </div>

        <div className="linha1-descricao-produtos">
        <div className="descricao9">Brinco Coração</div>
        <div className="descricao10">Colar Circulo Verde</div>
        <div className="descricao11">Conjunto Aneis</div>
        <div className="descricao12">Brinco Circulo Verde</div>
        </div>

        <div className="valores-produtos">

        <div className="valor1-produto">

        <div className="valor1-1">R$100</div>
        <div className="valor1-2">R$80</div>
        </div>

        <div className="valor2-produto">
        <div className="valor2-1">R$300</div>
        <div className="valor2-2">R$250</div>
        </div>

        <div className="valor3-produto">
        <div className="valor3-1">R$180</div>
        <div className="valor3-2">R$100</div>
        </div>

        <div className="valor4-produto">
        <div className="valor4-1">R$100</div>
        <div className="valor4-2">R$80</div>
        </div>

        </div>

        <div className="botoes-produtos-linha1">
        <button className="botao-produto9">Comprar</button>
        <button className="botao-produto10">Comprar</button>
        <button className="botao-produto11">Comprar</button>
        <button className="botao-produto12">Comprar</button>
        </div>
        

        </section>

        </>
        );
};

export default ProdutosHome;