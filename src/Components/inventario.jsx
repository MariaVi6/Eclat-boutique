import { useEffect, useState } from 'react';

function Inventario() {
  const [roupas, setRoupas] = useState([]);

  useEffect(() => {
    // Substitua pela URL da sua API
    fetch('http://localhost:3000/inventario')
      .then(response => response.json())
      .then(data => setRoupas(data))
      .catch(error => console.error('Erro ao buscar as roupas:', error));
  }, []); 

  return (
    <div>
      <h1>Inventário de Roupas</h1>
      <ul>
        {roupas.map(roupa => (
          <li key={roupa.id}>
            <img src={roupa.urlImg} alt={roupa.nome} style={{ width: '100px', height: 'auto' }} />
            <p>Preço: R${roupa.preco}</p>
            <p>Nota: {roupa.nota}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inventario;
