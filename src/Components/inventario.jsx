import React, { useEffect, useState } from 'react';
import fetchImages from '../../js/fetchApis';
import './inventario.css'
const Inventario = () => {
  const [items, setItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

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

  const handleImageClick = (index) => {
    setSelectedImage(items[index].urlImg);
    setSelectedIndex(index);
  };

  const handleNext = () => {
    const nextIndex = (selectedIndex + 1) % items.length;
    setSelectedImage(items[nextIndex].urlImg);
    setSelectedIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (selectedIndex - 1 + items.length) % items.length;
    setSelectedImage(items[prevIndex].urlImg);
    setSelectedIndex(prevIndex);
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

      <div className="grid-images d-flex center justify-content-center mt-5">
        {items.length > 0 ? (
          items.map((item, index) => (
            <div key={item._id} className="item border border-dark m-3 grid text-center bg-primary">
              <img
                src={item.urlImg}
                className="img-thumbnail"
                alt={item.descricao}
                data-toggle="modal"
                data-target="#imageModal"
                onClick={() => handleImageClick(index)}
              />
              <p className="item alt">{item.descricao}</p>
              <p className="item-rate">{item.nota}</p>
              <p className="item-price">{item.preco}</p>
            </div>
          ))
        ) : (
          <div className="spinner-border text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="imageModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="imageModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document" style={{ maxWidth: '50%' }}>
          <div className="modal-content ">

            {/* <div className="modal-header">
              <h5 className="modal-title" id="imageModalLabel"></h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div> */}



            <div className="modal-body d-flex justify-content-center align-items-center ">
              {/* image */}
              {selectedImage && <img src={selectedImage} className="img-fluid border border-dark " alt="Selected" style={{ flex: 1 }} />}

              <div style={{ flex: 1, marginLeft: '1px'}}>
                <p className='fw-bold'>{items[selectedIndex]?.descricao}</p>
                <p>Preço <span className='fw-bold'> ${items[selectedIndex]?.preco}</span> </p>
                <p>Nota: {items[selectedIndex]?.nota}</p>
              </div>
            </div>



            {/* <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handlePrev}>Previous</button>
              <button type="button" className="btn btn-primary" onClick={handleNext}>Next</button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Inventario;
