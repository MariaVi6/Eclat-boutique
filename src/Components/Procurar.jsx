import React, { useEffect, useState } from 'react';
import axios from 'axios';
import fetchImages from '../../js/fetchApis';
const Procurar = () => {
    const [query, setQuery] = useState('');
    const [items, setItems] = useState([]);
    const [allItems, setAllItems] = useState([]);
    useEffect(() => {
        const dados = async () => {
            const data = await fetchImages();
            setAllItems(data || []);
        };
        dados();
    }, []);
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
    const pegarTexto = (e) => {
        setQuery(e.target.value);
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
            {query && (
                <div className="grid-images flex">
                    {items.length > 0 ? (
                        items.map(item => (
                            <div key={item._id} className="item">
                                <h1>resultado da busca: {query}</h1>
                                <h1>resultados {items.length}</h1>
                                <img className="itemImg bg-rose-500" src={item.urlImg} alt={item.descricao} />
                                <p className="alt bg-gray-500">{item.descricao}</p>
                                <p className="rate bg-red-500">{item.nota}</p>
                                <p className="price">{item.preco}</p>
                                <h1 className='bg-red-600 h-60 w-48'></h1>
                                <hr />
                            </div>
                        ))
                    ) : (
                        <div className="spinner-border text-danger" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};
export default Procurar;