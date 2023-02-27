function Pagination({ nextPage, prevPage }) {
  return (
    <div className="h-[50px] border-b-2 border-l-2 border-r-2 border-solid border-rose-600">
      {nextPage && (
        <button
          className="absolute right-1 h-[45px] w-[100px] bg-blue-200 hover:bg-blue-500 hover:text-white"
          onClick={nextPage}
        >
          NEXT
        </button>
      )}
      {prevPage && (
        <button
          className="absolute left-1 h-[45px] w-[100px] bg-red-200 hover:bg-red-500 hover:text-white"
          onClick={prevPage}
        >
          PREVIOUS
        </button>
      )}
    </div>
  );
}

export default Pagination;
