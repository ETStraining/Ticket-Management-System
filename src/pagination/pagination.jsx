import React from "react";
import "./pagination.scss";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleClick = (page) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 7) {
      // Display all pages if total is less than or equal to 7
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <li
            key={i}
            className={`page-item ${i === currentPage ? "active" : ""}`}
            onClick={() => handleClick(i)}
          >
            {i}
          </li>
        );
      }
    } else {
      // Display first 5, current, and last page
      for (let i = 1; i <= 5; i++) {
        pageNumbers.push(
          <li
            key={i}
            className={`page-item ${i === currentPage ? "active" : ""}`}
            onClick={() => handleClick(i)}
          >
            {i}
          </li>
        );
      }

      if (currentPage > 6) {
        pageNumbers.push(
          <li key="ellipsis-1" className="page-item disabled">
            ...
          </li>
        );
      }

      if (currentPage > 5 && currentPage < totalPages - 4) {
        pageNumbers.push(
          <li
            key={currentPage}
            className={`page-item ${
              currentPage ? "active" : ""
            }`}
            onClick={() => handleClick(currentPage)}
          >
            {currentPage}
          </li>
        );
      }

      if (currentPage < totalPages - 5) {
        pageNumbers.push(
          <li key="ellipsis-2" className="page-item disabled">
            ...
          </li>
        );
      }

      for (let i = totalPages - 4; i <= totalPages; i++) {
        if (i > 5) {
          pageNumbers.push(
            <li
              key={i}
              className={`page-item ${i === currentPage ? "active" : ""}`}
              onClick={() => handleClick(i)}
            >
              {i}
            </li>
          );
        }
      }
    }

    return pageNumbers;
  };

  return (
    <ul className="pagination fixed bottom-[-10px] right-20">
      <li
        className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
        onClick={() => handleClick(currentPage - 1)}
      >
        Previous
      </li>
      {renderPageNumbers()}
      <li
        className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
        onClick={() => handleClick(currentPage + 1)}
      >
        Next
      </li>
    </ul>
  );
};

export default Pagination;
