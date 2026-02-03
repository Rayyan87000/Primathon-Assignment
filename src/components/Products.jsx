import { useState } from "react";
import ProductCard from "./ProductCard";
import p1 from "../assets/products/2_19.jpg";
import p2 from "../assets/products/3_6_1_2.jpg";
import p3 from "../assets/products/3_6_23.jpg";
import p4 from "../assets/products/black_shampoo_hair_colour_pack_of_2_619a5205-a56c-4e0e-8d7f-44e064e4f0a9.jpg";
import p5 from "../assets/products/natural_black_5_min_ca662774-98d3-47af-95e1-ac9bfc6dfcce.jpg";

const products = [
  { 
    id: 1, 
    name: "Hair Fall Control Shampoo", 
    price: 699, 
    volume: "300ml",
    img: p1,
    badge: "GET3@899",
    reviews: "279"
  },
  { 
    id: 2, 
    name: "Hair Fall Control Conditioner", 
    price: 699, 
    volume: "250g",
    img: p2,
    badge: "GET3@899",
    reviews: "156"
  },
  { 
    id: 3, 
    name: "Hot Shot Heat Protection Mist", 
    price: 599, 
    volume: "150ml",
    img: p3,
    badge: "GET3@899",
    reviews: "203"
  },
  { 
    id: 4, 
    name: "7 in 1 Repair & Revive Hair Mask", 
    price: 799, 
    volume: "250g",
    img: p4,
    badge: "GET3@899",
    reviews: "456"
  },
  { 
    id: 5, 
    name: "Intense Moisture Shampoo", 
    price: 699, 
    volume: "300ml",
    img: p5,
    badge: "GET3@899",
    reviews: "189"
  },
];

const filters = ["Most Loved", "Shampoo", "Conditioner", "Hair Spray", "Hair Colour", "Hair Mask"];

const Products = () => {
  const [activeFilter, setActiveFilter] = useState("Most Loved");

  return (
    <section className="w-full bg-gray-900 py-12 md:py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
          Hair Care BFFs
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 md:mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 md:px-6 py-2 rounded-md text-sm md:text-base font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-gray-700 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
