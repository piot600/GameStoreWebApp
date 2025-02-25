import React from "react";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {

    const pageNumbers = Array.from({ length: totalPages }, (d,i) => i + 1);

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="pagination">
            {pageNumbers.map((pageNumber) => (
                <button
                    key={pageNumber}
                    onClick={() => handlePageClick(pageNumber)}
                >
                    {pageNumber}
                </button>
            ))}
        </div>
    );
};

export default Pagination;