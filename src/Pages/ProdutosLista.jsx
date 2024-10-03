import { useState, useEffect } from 'react';

const ProdutosLista = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3000/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Lista de Produtos</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>Preço: R$ {product.price}</p>
                        <img src={product.imageUrl} alt={product.name} style={{ width: '150px' }} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProdutosLista;
