import { useState } from 'react';
import ProdutosLista from './ProdutosLista';

const Registrar = () => {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [urlImagem, setUrlImagem] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validar preço para garantir que seja um número positivo
        if (parseFloat(preco) <= 0) {
            setMensagem('O preço deve ser um número positivo.');
            return;
        }

        const produto = {
            nome,
            preco: parseFloat(preco),
            urlImagem,
        };

        try {
            const response = await fetch('http://localhost:3000/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(produto),
            });

            if (response.ok) {
                const resultado = await response.json();
                console.log('Produto adicionado', resultado);
                setMensagem('Produto registrado com sucesso!');
                setNome('');
                setPreco('');
                setUrlImagem('');
            } else {
                setMensagem('Ocorreu um erro. Tente novamente.');
            }
        } catch (error) {
            console.error(error);
            setMensagem('Erro de rede. Tente novamente.');
        }
    };

    return (
        <div>
            <h2>Registrar Novo Produto</h2>
            {mensagem && <p>{mensagem}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome do Produto:</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Preço:</label>
                    <input
                        type="number"
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>URL da Imagem:</label>
                    <input
                        type="text"
                        value={urlImagem}
                        onChange={(e) => setUrlImagem(e.target.value)}
                        placeholder="https://caminho/para/sua/imagem"
                    />
                </div>
                <button type="submit">Registrar Produto</button>
            </form>
            <ProdutosLista />
        </div>
    );
};

export default Registrar;
