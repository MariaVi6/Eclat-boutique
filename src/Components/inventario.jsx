import React, { useEffect, useState } from 'react';
import fetchImages from '../../js/fetchApis';
import Procurar from './procurar';
// import "./styleInventario/"
const Inventario = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const dados = async () => {
      const data = await fetchImages();
      setItems(data || []);
    };
    dados();
  }, []);

  return (
    <>
    <Procurar/>

    {/* separar  com css*/}
        <h1 className='w-12 bg-red-500'></h1>
    <div className="grid-images">
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
    </>
  );
}

export default Inventario;
