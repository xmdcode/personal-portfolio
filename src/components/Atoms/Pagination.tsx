import React from 'react'
import ArrowIcon from '../icons/ArrowIcon'
import Link from 'next/link'

interface PaginationProps {
  hasNextPage: boolean
  hasPrevPage: boolean
  // limit: number
  nextPage?: null | number | undefined
  page?: number
  // pagingCounter: number
  prevPage?: null | number | undefined
  // totalDocs: number
  totalPages: number
}
const Pagination: React.FC<PaginationProps> = (props) => {
  const { totalPages, page, hasPrevPage, hasNextPage, prevPage, nextPage } = props

  return (
    <div className="lg:max-w-[1024px] mx-auto w-full flex items-center justify-center">
      <div className="flex justify-center items-center mt-6">
        <nav
          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          {hasPrevPage ? (
            <Link
              href={`?page=${prevPage}`}
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <ArrowIcon className="text-white w-6 h-6 -rotate-90" />
            </Link>
          ) : (
            <button
              type="button"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-75"
              disabled
            >
              <span className="sr-only">Previous</span>
              <ArrowIcon className="text-white w-6 h-6 -rotate-90" />
            </button>
          )}
          <Link
            href="#"
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            1
          </Link>
          <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
            ...
          </span>
          <Link
            href="#"
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            8
          </Link>
          {hasNextPage ? (
            <Link
              href={`?page=${nextPage}`}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <ArrowIcon className="text-white w-6 h-6 rotate-90" />
            </Link>
          ) : (
            <button
              type="button"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-75"
              disabled
            >
              <span className="sr-only">Next</span>
              <ArrowIcon className="text-white w-6 h-6 rotate-90" />
            </button>
          )}
        </nav>
      </div>
    </div>
  )
}

export default Pagination
