function Pagination({ nextPage, prevPage }) {
  return (
    <div className="h-[50px]">
      {nextPage && (
        <button
          className="absolute right-0 mr-4 h-[45px] w-[100px] bg-blue-200 hover:bg-blue-500 hover:text-white"
          onClick={nextPage}
        >
          NEXT
        </button>
      )}
      {prevPage && (
        <button
          className="absolute left-0 ml-4 h-[45px] w-[100px] bg-red-200 hover:bg-red-500 hover:text-white"
          onClick={prevPage}
        >
          PREVIOUS
        </button>
      )}
    </div>
  );
}

export default Pagination;
