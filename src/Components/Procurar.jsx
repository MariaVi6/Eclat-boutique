import React, { useEffect, useState } from 'react';
import axios from 'axios';
import fetchImages from '../../js/fetchApis';

const Procurar = () => {
    const [query, setQuery] = useState('');
    const [items, setItems] = useState([]);
    const [allItems, setAllItems] = useState([]);
    const [filtro, setFiltro] = useState('');

    // Carrega todas as imagens iniciais
    useEffect(() => {
        const dados = async () => {
            const data = await fetchImages();
            setAllItems(data || []);
        };
        dados();
    }, []);

    // Busca as imagens de acordo com a query
    useEffect(() => {
        const PegarDados = async () => {
            if (query) {
                try {
                    const response = await axios.get(`https://eclat-backend.vercel.app/buscar?termo=${query}`);
                    setItems(response.data || []);
                } catch (error) {
                    console.error("Erro ao buscar dados:", error);
                }
            } else {
                setItems([]);
            }
        };
        PegarDados();
    }, [query]);

    // Filtra os itens de acordo com o filtro
    useEffect(() => {
        if (filtro) {
            const filteredItems = allItems.filter(item => 
                item.categoria === filtro || item.preco <= filtro // Exemplo de filtro por categoria ou preço
            );
            setItems(filteredItems);
        } else {
            setItems(allItems);
        }
    }, [filtro, allItems]);

    const pegarTexto = (e) => {
        setQuery(e.target.value);
    };

    const handleFilterChange = (e) => {
        setFiltro(e.target.value);
    };

    return (
        <>
            <div>
                <input
                    type="text"
                    value={query}
                    onChange={pegarTexto}
                    placeholder="Digite sua busca"
                />
            </div>
            <div>
                <select onChange={handleFilterChange}>
                    <option value="">Todos</option>
                    <option value="categoria1">1</option>
                    <option value="categoria2">2</option>
                    <option value="300">3</option>
                    <option value="2000">4</option>
                </select>
            </div>
            {query && (
                <div className="grid-images flex">
                    {items.length > 0 ? (
                        items.map(item => (
                            <div key={item._id} className="item">
                                <img className="itemImg bg-rose-500" src={item.urlImg} alt={item.descricao} />
                                <p className="alt bg-gray-500">{item.descricao}</p>
                                <p className="rate bg-red-500">{item.nota}</p>
                                <p className="price">{item.preco}</p>
                            </div>
                        ))
                    ) : (
                        <div className="spinner-border text-danger" role="status">
                            <span className="sr-only"></span>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default Procurar;
