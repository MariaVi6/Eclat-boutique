import React, { useEffect, useState } from 'react';
import fetchImages from '../../js/fetchApis';

const Inventario = () => {
  const [items, setItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    const dados = async () => {
      const data = await fetchImages();
      setAllItems(data || []);
      setItems(data || []);
    };
    dados();
  }, []);

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

  const handleFilterChange = (e) => {
    setFiltro(e.target.value);
  };

  return (
    <>
      <div className='p-3'>
        <select onChange={handleFilterChange}>
          <option value="">Filtrar</option>
          <option value="categoria1">Categoria 1</option>
          <option value="categoria2">Categoria 2</option>
          <option value="50">Preço até 50</option>
          <option value="100">Preço até 100</option>
          <option value="1000">Preço até 1000</option>
        </select>
      </div>


{/*d-flex   */}
      <div className="grid-images d-flex center justify-content-center mt-5">
        {items.length > 0 ? (
          items.map(item => (
            <div key={item._id} className="item border border-dark m-3 grid text-center bg-primary">
              <img src={item.urlImg} class="img-thumbnail" alt={item.descricao}/>
              {/* <img className="item-desc" src={item.urlImg} alt={item.descricao} /> */}
              <p className="item alt">{item.descricao}</p>
              <p className="item-rate">{item.nota}</p>
              <p className="item-price">{item.preco}</p>
            </div>
          ))  
          // if 
        ) : (
          <div className="spinner-border text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>


    </>
  );
}

export default Inventario;
