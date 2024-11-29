import React, { useEffect, useState } from 'react';
import fetchImages from '../../js/fetchApis';

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
    <div className="grid-images">
      {items.length > 0 ? (
        items.map(item => (
          <div key={item._id} className="item">
            <img className="itemImg" src={item.urlImg} alt={item.descricao} />
            <p className="descricao">{item.descricao}</p>
            <p className="nota">{item.nota}</p>
            <p className="preco">{item.preco}</p>
          </div>
        ))
      ) : (

        <div className="spinner-border text-danger" role="status">
            <span className="sr-only">Loading...</span>
        </div>
        )}
    </div>
  );
}

export default Inventario;
