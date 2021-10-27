const limitOptions = [5, 10, 25, 50];

const Pagination = ({ pagination, handlePagination }) => {
  const previousPage = () => {
    pagination.page--;
    handlePagination(pagination);
  };

  const nextPage = () => {
    pagination.page++;
    handlePagination(pagination);
  };

  const onChangePagination = (page) => {
    pagination.page = page + 1;
    handlePagination(pagination);
  };

  const updatePaginationLimit = (e) => {
    pagination.limit = e.target.value;
    handlePagination(pagination);
  };

  // // const pager = Array.from(Array(pagination.pages), (_, x) => x);
  // // .slice(
  // //   pagination.page,
  // //   pagination.page + 5
  // // );
  // console.log('PAGER', pager);
  // console.log('PAGER 2', pager.slice(5, pagination.page));
  // const pagesToShow = () => {};

  return (
    <nav className='d-flex'>
      <ul className='pagination'>
        <li
          className={pagination.page <= 1 ? 'page-item disabled' : 'page-item'}
        >
          <button className='page-link' onClick={previousPage}>
            Previous
          </button>
        </li>

        {Array.from(Array(pagination.pages), (_, x) => x).map((page, index) => {
          return (
            <li className='page-item' key={index}>
              <button
                className={
                  pagination.page === index + 1
                    ? 'page-link bg-primary text-light'
                    : 'page-link'
                }
                onClick={() => onChangePagination(index)}
              >
                {page + 1}
              </button>
            </li>
          );
        })}

        <li
          className={
            pagination.page < pagination.pages
              ? 'page-item'
              : 'page-item disabled'
          }
        >
          <button className='page-link' onClick={nextPage}>
            Next
          </button>
        </li>
      </ul>
      <div className='container'>
        <select className='form-select' onChange={updatePaginationLimit}>
          {limitOptions.map((limit, i) => (
            <option value={limit} key={i}>
              {limit}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
};

export default Pagination;
