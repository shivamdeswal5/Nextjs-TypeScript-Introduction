'use client'
import React from 'react'
import {FC} from 'react'
import {useRouter} from 'next/navigation'


interface Props {
  total: number;
  currentPage: number;
  perPage: number;
}

const PaginationControls: FC<Props> = ({ total, currentPage, perPage }) => {
  const router = useRouter();

  const handlePageChange = (newPage: number) => {
    router.push(`?page=${newPage}&per_page=${perPage}`);
  };

  const totalPages = Math.ceil(total / perPage);

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <button 
        onClick={() => handlePageChange(currentPage - 1)} 
        disabled={currentPage <= 1}
      >
        Prev Page
      </button>

      <div>{currentPage} / {totalPages}</div>

      <button 
        onClick={() => handlePageChange(currentPage + 1)} 
        disabled={currentPage >= totalPages}
      >
        Next Page
      </button>
    </div>
  );
};

export default PaginationControls;
