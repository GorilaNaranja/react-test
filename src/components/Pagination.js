const limitOptions = [10, 25, 50];

const Pagination = ({ pagination, handlePagination }) => {
  const myPages = Array.from(Array(pagination.pages), (_, x) => x);

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
    pagination.page = 1;
    handlePagination(pagination);
  };

  let pageLimitStart = 5;
  let pageLimitEnd = 5;
  if (pagination.page < 5) pageLimitStart = 10 - pagination.page;
  if (pagination.page > pagination.pages - 5)
    pageLimitEnd = 10 - (pagination.pages - pagination.page + 1);

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

        {myPages.map((page) => {
          return (
            <li
              key={page}
              className={
                page + 1 < pagination.page + pageLimitStart &&
                page + 1 > pagination.page - pageLimitEnd
                  ? 'page-item'
                  : 'd-none page-item'
              }
            >
              <button
                className={
                  pagination.page === page + 1
                    ? 'page-link bg-primary text-light'
                    : 'page-link'
                }
                onClick={() => onChangePagination(page)}
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
        <select className='form-select w-auto' onChange={updatePaginationLimit}>
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
