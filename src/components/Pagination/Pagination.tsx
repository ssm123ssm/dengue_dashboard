import "./pagination.scss";

import { FC, useEffect, useState } from "react";

interface Props {
  page: number;
  size: number;
  totalCount: number;
  onPage: (page: number) => void;
}

const Pagination: FC<Props> = ({
  page = 1,
  size = 10,
  totalCount = 0,
  onPage = () => {},
}) => {
  const [currentPage, setPage] = useState<number>(page);
  const [pages, setPages] = useState<number>(Math.ceil(totalCount / size));

  useEffect(() => {
    setPage(page);
    setPages(Math.ceil(totalCount / size));
  }, [page, size, totalCount]);

  const navigate = (page: number) => {
    onPage(page);
  };

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <button className="" onClick={() => navigate(1)}>
          1
        </button>
      )}

      {currentPage > 3 && (
        <button className="" disabled={true}>
          ...
        </button>
      )}

      {currentPage > 2 && (
        <button className="" onClick={() => navigate(currentPage - 1)}>
          {currentPage - 1}
        </button>
      )}

      <button className="text-gray-800 active" disabled={true}>
        {currentPage}
      </button>

      {pages > currentPage + 1 && (
        <button className="" onClick={() => navigate(currentPage + 1)}>
          {currentPage + 1}
        </button>
      )}

      {pages > currentPage + 2 && (
        <button className="" disabled={true}>
          ...
        </button>
      )}

      {currentPage < pages && (
        <button className="" onClick={() => navigate(pages)}>
          {pages}
        </button>
      )}
    </div>
  );
};

export default Pagination;
