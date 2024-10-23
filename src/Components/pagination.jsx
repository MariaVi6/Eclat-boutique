import { Link } from 'react-router-dom';

function Pagination() {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        <li className="page-item disabled">
          <span className="page-link">Previous</span>
        </li>
        <li className="page-item">
          <Link className="page-link" to="/page/1">1</Link>
        </li>
        <li className="page-item active" aria-current="page">
          <span className="page-link">2</span>
        </li>
        <li className="page-item">
          <Link className="page-link" to="/page/3">3</Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to="/page/next">Next</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
