import React, { useContext } from "react";
import { CmsContext } from "../../contexts/CmsContext";
const Pagination = () => {
  const { pageCount, currentPage, setCurrentPage } = useContext(CmsContext);
  let pageNumbers = Array.from(Array(pageCount).keys());

  return (
    <div className='pagination flex justify-center items-center mt-5'>
      <div className='pagination-container flex flex-row-reverse space-x-4'>
        {pageNumbers.map((pageNumber, index) => (
          <div
            onClick={() => setCurrentPage(pageNumber + 1)}
            key={index}
            className={`numbers w-[50px] h-[50px] rounded-full flex items-center justify-center text-2xl  cursor-pointer duration-700 ${
              pageNumber + 1 === currentPage
                ? "bg-gray-200 text-blue-900"
                : "text-white bg-blue-900"
            } `}>
            {pageNumber + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
