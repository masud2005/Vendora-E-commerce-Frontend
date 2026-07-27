import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-12 flex justify-center">
      <div className="flex items-center gap-1.5 sm:gap-2">
        <button 
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded bg-white text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        
        {/* Dynamic Page Numbers */}
        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1;
          if (page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
            return (
              <button 
                key={page}
                onClick={() => onPageChange(page)}
                className={`w-10 h-10 flex items-center justify-center rounded font-medium shadow-sm transition-colors border
                  ${currentPage === page
                    ? 'border-brand-primary-600 bg-brand-primary-600 text-white'
                    : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'}
                `}
              >
                {page}
              </button>
            );
          } else if (page === currentPage - 2 || page === currentPage + 2) {
            return <span key={page} className="text-gray-400 px-1 sm:px-2">...</span>;
          }
          return null;
        })}
        
        <button 
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded bg-white text-gray-600 hover:bg-gray-50 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
