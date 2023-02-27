function Pagination({ nextPage, prevPage }) {
  return (
    <div>
      {nextPage && <button onClick={nextPage}>NEXT</button>}
      <br />
      <br />
      {prevPage && <button onClick={prevPage}>PREVIOUS</button>}
    </div>
  );
}

export default Pagination;
