import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Importing the reusable ProductCard component
// This component is responsible for rendering a single product UI
import ProductCard from "./ProductCard";

// ProductSection is a reusable component
// It receives data via props: title, products array, and total product count
const ProductSection = ({ title, products, viewAllCount }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-gray-900">
        {title}
      </h2>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 z-10 hidden md:block"
        >
          <FiChevronLeft className="w-6 h-6 text-gray-800" />
        </button>

        {/* Scrollable Products */}
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-[240px] md:w-[280px]">
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 z-10 hidden md:block"
        >
          <FiChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {/* View All Button */}
      {viewAllCount && (
        <div className="flex justify-center mt-8">
          <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-md text-sm font-medium text-gray-700 transition-colors">
            <span className="flex gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </span>
            View all {viewAllCount} products &gt;
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductSection;






















