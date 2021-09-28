import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { paginate } from "../../actions/index";
import './Pagination.css'

function Pagination({ cardsPerPage, totalCards }) {
  const dispatch = useDispatch();
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  const page = useSelector((store) => store.currentPage);

  function previusPage(page) {
    if (page > 1) dispatch(paginate(page - 1));
  }

  function nextPage(page, lastPage) {
    if (page < lastPage) dispatch(paginate(page + 1));
  }

  return (
    <div className="pag">
      <ul className="pagination">
        {page !== 1 ? <button className="pageButton"
          onClick={() => previusPage(page)}
        >◀</button> : <></>}
        {pageNumbers.map((number) => (
          <li key={number}>
            <a className="links"
              onClick={() => {
                dispatch(paginate(number));
              }}
            >
              {number}
            </a>
          </li>
        ))}
        {page >=7 ? <></> : <button className="pageButton"
          onClick={() => nextPage(page, Math.ceil(totalCards / cardsPerPage))}
          >▶</button> }
      </ul>
    </div>
  );
}

export default Pagination;
