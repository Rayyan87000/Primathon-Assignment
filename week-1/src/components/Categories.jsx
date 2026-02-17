import { useRef } from "react";//What this means: useRef is a React Hook It lets us directly reference a DOM element 👉 Here, we need it to scroll a container horizontally.
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// Vite converts these into optimized URLs at build time this all p1,p2 .... all this
import p1 from "../assets/products/2_19.jpg";
import p2 from "../assets/products/3_6_1_2.jpg";
import p3 from "../assets/products/3_6_23.jpg";
import p4 from "../assets/products/black_shampoo_hair_colour_pack_of_2_619a5205-a56c-4e0e-8d7f-44e064e4f0a9.jpg";
import p5 from "../assets/products/natural_black_5_min_ca662774-98d3-47af-95e1-ac9bfc6dfcce.jpg";

const categories = [
  { title: "Shampoo", img: p1 },
  { title: "Conditioner", img: p2 },
  { title: "Hair spray", img: p3 },
  { title: "Hair colour", img: p4 },
  { title: "Hair serum", img: p5 },
];

const Categories = () => {  {/* // Static array containing category data // Each object represents one category card with a title and image*/}
  const scrollRef = useRef(null);

  const scroll = (direction) => { {/*/ Function to handle horizontal scrolling*/}
    if (scrollRef.current) {
      const scrollAmount = 300; // Number of pixels to scroll on each click
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount, //// If direction is left, scroll negatively; else scroll positively
        behavior: 'smooth'
      });
    }
  };

  // JSX returned by the component
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-gray-900">
        Shop by Categories
      </h2>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 z-10 hidden md:block"
        >
          <FiChevronLeft className="w-6 h-6 text-gray-800" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[200px] md:w-[240px] cursor-pointer group"
            >
              <div className="relative bg-black rounded-lg overflow-hidden aspect-square">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-4">
                  <p className="text-white font-medium text-sm md:text-base text-center capitalize">
                    {item.title}
                  </p>
                </div>
              </div>
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
    </section>
  );
};

export default Categories;








 
 