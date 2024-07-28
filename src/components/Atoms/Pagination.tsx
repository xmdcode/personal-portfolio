import React from 'react'
import ArrowIcon from '../icons/ArrowIcon'
import Link from 'next/link'
import { cn, getVisiBlePages } from '@/lib/utils'
import ArrowDoubleIcon from '../icons/ArrowDoubleIcon'

interface PaginationProps {
  hasNextPage: boolean
  hasPrevPage: boolean
  // limit: number
  nextPage?: null | number | undefined
  currentPage?: number
  // pagingCounter: number
  prevPage?: null | number | undefined
  // totalDocs: number
  totalPages: number
}
const Pagination: React.FC<PaginationProps> = (props) => {
  const { totalPages, currentPage, hasPrevPage, hasNextPage, prevPage, nextPage } = props

  // const arrayOfTotalPages = Array(totalPages)
  //   .fill(1)
  //   .map((_, i) => i + 1)

  const arrayOfTotalPages = getVisiBlePages(currentPage, totalPages, 4)
  return (
    <div className="lg:max-w-[1024px] mx-auto w-full flex items-center justify-center">
      <div className="flex justify-center items-center mt-6">
        <nav className="flex items-center space-x-1" aria-label="Pagination">
          {hasPrevPage ? (
            <Link
              href={`?page=1`}
              className="relative inline-flex items-center px-1.5 lg:px-2 py-1.5 lg:py-2  text-sm font-medium text-white hover:bg-gray-50 rounded-md hover:text-black"
            >
              <span className="sr-only">First</span>
              <ArrowDoubleIcon className="text-inherit w-6 h-6 rotate-180" />
            </Link>
          ) : (
            <button
              type="button"
              className="relative inline-flex items-center px-1.5 lg:px-2 py-1.5 lg:py-2  text-sm font-medium text-white hover:bg-gray-50 disabled:hover:bg-inherit disabled:text-white/50 disabled:opacity-75"
              disabled
            >
              <span className="sr-only">First</span>
              <ArrowDoubleIcon className="text-inherit w-6 h-6 rotate-180" />
            </button>
          )}
          {hasPrevPage ? (
            <Link
              href={`?page=${prevPage}`}
              className="relative inline-flex items-center px-1.5 lg:px-2 py-1.5 lg:py-2  text-sm font-medium text-white hover:bg-gray-50 rounded-md hover:text-black"
            >
              <span className="sr-only">Previous</span>
              <ArrowIcon className="text-inherit w-6 h-6" />
            </Link>
          ) : (
            <button
              type="button"
              className="relative inline-flex items-center px-1.5 lg:px-2 py-1.5 lg:py-2  text-sm font-medium text-white hover:bg-gray-50 disabled:hover:bg-inherit disabled:text-white/50 disabled:opacity-75"
              disabled
            >
              <span className="sr-only">Previous</span>
              <ArrowIcon className="text-inherit w-6 h-6" />
            </button>
          )}
          {arrayOfTotalPages.map((item) => (
            <Link
              href={`?page=${item}`}
              key={item}
              className={cn(
                'relative inline-flex items-center px-3 lg:px-4 py-1.5 lg:py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md',
                { 'bg-white text-black': item === currentPage },
              )}
            >
              {item}
            </Link>
          ))}
          {hasNextPage ? (
            <Link
              href={`?page=${nextPage}`}
              className="relative inline-flex items-center px-1.5 lg:px-2 py-1.5 lg:py-2  text-sm font-medium text-white hover:bg-gray-50 rounded-md  hover:text-black"
            >
              <span className="sr-only">Next</span>
              <ArrowIcon className="text-inherit w-6 h-6 rotate-180" />
            </Link>
          ) : (
            <button
              type="button"
              className="relative inline-flex items-center px-1.5 lg:px-2 py-1.5 lg:py-2  text-sm font-medium text-white hover:bg-gray-50 disabled:hover:bg-inherit disabled:text-white/50 disabled:opacity-75"
              disabled
            >
              <span className="sr-only">Next</span>
              <ArrowIcon className="text-inherit w-6 h-6 rotate-180" />
            </button>
          )}
          {hasNextPage ? (
            <Link
              href={`?page=${totalPages}`}
              className="relative inline-flex items-center px-1.5 lg:px-2 py-1.5 lg:py-2  text-sm font-medium text-white hover:bg-gray-50 rounded-md hover:text-black"
            >
              <span className="sr-only">Last</span>
              <ArrowDoubleIcon className="text-inherit w-6 h-6" />
            </Link>
          ) : (
            <button
              type="button"
              className="relative inline-flex items-center px-1.5 lg:px-2 py-1.5 lg:py-2  text-sm font-medium text-white hover:bg-gray-50 disabled:hover:bg-inherit disabled:text-white/50 disabled:opacity-75"
              disabled
            >
              <span className="sr-only">Last</span>
              <ArrowDoubleIcon className="text-inherit w-6 h-6" />
            </button>
          )}
        </nav>
      </div>
    </div>
  )
}

export default Pagination
