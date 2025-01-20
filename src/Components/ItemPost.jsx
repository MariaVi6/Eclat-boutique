import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ItemPost = () => {

  // pegar id dos parâmetros
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`https://eclat-backend.vercel.app/inventario/${id}`);
        setItem(response.data);
        console.log('id: ', id);
        // maybe this code doesnt works
        document.title = response.data.title
      } catch (err) {
        console.log("🚀 ~ fetchItem ~ err:", err);
      }
    };
    fetchItem();
  }, [id]);

  if (!item) {
    // return <div>carregando...</div>;
    return <div class="spinner-grow text-dark" role="status">
                <span class="sr-only">Loading...</span>
           </div>
  }

  return (
    // TODO fazer css
    <div>
      <h2>{item.title}</h2>
      <img src={item.urlImg} alt={item.alt} />
      <h3>{item.price}</h3>
      <p>{item.description}</p>
      
    </div>
  );
};

export default ItemPost;
