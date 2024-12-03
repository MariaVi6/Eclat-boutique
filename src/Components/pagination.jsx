
import { Link } from "react-router-dom";

const Pagination = () => {

    return (
    <div className="pagination-produtos">
    
    <nav className="pagination">
        <ul className="pagination-ul">
            <li className="seta-para-esquerda"><span aria-hidden="true">&laquo;</span></li>
            <li className="numeros-paginacao"><Link to={"/produtos"}>1</Link></li>
            <li className="numeros-paginacao"><Link to={"/produtos2"}>2</Link></li>
            <li className="numeros-paginacao">3</li>
            <li className="numeros-paginacao">4</li>
            <li className="seta-para-direita"><span aria-hidden="true">&raquo;</span></li>
        </ul>
    </nav>
</div>
);

}

export default Pagination;