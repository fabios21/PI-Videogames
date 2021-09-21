import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { paginate } from "../../actions/index";

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

  function nextPage(page, finalPage) {
    if (page < finalPage) dispatch(paginate(page + 1));
  }

  return (
    <div>
      <ul>
        {page !== 1 ? <button
          onClick={() => previusPage(page)}
        >◀</button> : <></>}
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              onClick={() => {
                dispatch(paginate(number));
              }}
              href="#!"
            >
              {number}
            </a>
          </li>
        ))}
        {page >=7 ? <></> : <button
          onClick={() => nextPage(page, Math.ceil(totalCards / cardsPerPage))}
          >▶</button> }
      </ul>
    </div>
  );
}

export default Pagination;
