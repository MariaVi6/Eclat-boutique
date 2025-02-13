import { Link } from "react-router-dom";
const Pagination = () => {
    return ( 
    <>
    <div className="pagination-produtos">
    
                <nav className="pagination">
                    <ul className="pagination-ul">
                        <li className="seta-para-esquerda"><span aria-hidden="true">&laquo;</span></li>
                        <li className="numeros-paginacao">1</li>
                        <Link to={"/produtos2"}><li className="numeros-paginacao">2</li></Link>
                        <li className="numeros-paginacao">3</li>
                        <li className="numeros-paginacao">4</li>
                        <li className="seta-para-direita"><span aria-hidden="true">&raquo;</span></li>
                    </ul>
                </nav>
        
    </div>
    </> );
}

export default Pagination;