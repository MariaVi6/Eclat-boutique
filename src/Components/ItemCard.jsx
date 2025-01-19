import React, { useEffect, useState } from "react";
import fetchImages from "../../js/fetchApis";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ItemCard = () => {
  const [items, setItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const dados = async () => {
      const data = await fetchImages();
      setItems(data || []);
      setAllItems(data || []);
    };
    dados();
  }, []);

  const verDetalhes = (id) => {
    console.log('Navegando para outra rota')
    navigate(`/itempost/${id}`);
  };

  return (
    <>
      <div>
        {items.map((item) => (
          <div key={item._id} onClick={() => verDetalhes(item._id)}>
            <h1>{item.descricao}</h1>
            <img src={item.urlImg} alt={item.descricao} />
            <p>{item.preco}</p>
            <p>{item.nota}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemCard;
