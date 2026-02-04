import { useRef } from "react";
import { FiChevronLeft, FiChevronRight, FiArrowRight } from "react-icons/fi";
import hairFall from "../assets/concerns/HAIR_FALL_FIGHTERS.png";
import damageRepair from "../assets/concerns/DAMAGE_REPAIR_3e9768d3-4c75-474e-8923-718f89ea6d07.png";
import dandruffDefence from "../assets/concerns/DANDRUFF_DEFENCE.png";
import frizzFixers from "../assets/concerns/FRIZZ_FIXERS.png";
import smoothHair from "../assets/concerns/SMOOTH_HAIR_ESSENTIALS.png";

const concerns = [
  { title: "Hair fall fighters", img: hairFall },
  { title: "Frizz fixers", img: frizzFixers },
  { title: "Damage repair", img: damageRepair },
  { title: "Smooth hair essentials", img: smoothHair },
  { title: "Dandruff defence", img: dandruffDefence },
];

const Concerns = () => {
  const scrollRef = useRef(null);

    // Safety check to ensure the DOM element exists
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
          // Scroll left or right based on direction
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-gray-900">
        Shop by Concerns
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
          // Attaching ref to DOM element for scroll control
          ref={scrollRef}
          className="flex gap-4 md:gap-4  overflow-x-auto scrollbar-hide scroll-smooth"
          // Inline styles to hide scrollbar in all browsers
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >    {/* Looping through concerns array to render each concern card */}
          {concerns.map((item, index) => (
            <div
             // Key required by React for list rendering
              key={index}className="flex-shrink-0 w-[70%] sm:w-[45%] md:w-[30%] lg:w-[20%] cursor-pointer group"

            >
              <div className="relative bg-gray-800 rounded-lg overflow-hidden aspect-square">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Title Overlay */}
                <div className="absolute top-4 left-4">
                  <p className="text-white font-semibold text-sm md:text-base capitalize">
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

export default Concerns;













