import './App.css'
import OfferBar from "./components/OfferBar";
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Concerns from './components/Concerns';
import Categories from './components/Categories';
import Products from "./components/Products";
import ProductSection from './components/ProductSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import p1 from "./assets/products/2_19.jpg";
import p2 from "./assets/products/3_6_1_2.jpg";
import p3 from "./assets/products/3_6_23.jpg";
import p4 from "./assets/products/black_shampoo_hair_colour_pack_of_2_619a5205-a56c-4e0e-8d7f-44e064e4f0a9.jpg";
import p5 from "./assets/products/natural_black_5_min_ca662774-98d3-47af-95e1-ac9bfc6dfcce.jpg";
import p6 from "./assets/products/shampoo_conditionar_mask_bop_copy_d89e5c35-46ac-4c84-a66f-9901e9753b7f.jpg";
import p7 from "./assets/products/Combo5_217fc128-212d-47aa-8336-e3912561ac90.jpg";

// Sample product data for different sections
const hairFallProducts = [
  { id: 1, name: "Hair Fall Control Hair Mask with Pea Protein & Caffeine", price: 499, volume: "250g", img: p1, badge: "GET3@899", type: "Hair Mask", description: "Reduces Hair Fall | Strengthens Hair | Enriched with Shine Tonic", rating: "4.7", reviews: "95" },
  { id: 2, name: "Hair Fall Control Scalp Hair Tonic", price: 499, volume: "50ml", img: p2, badge: "GET3@899", type: "Hair Tonics", description: "Reduces Hair Fall | Strengthens Hair", rating: "4.6", reviews: "87" },
  { id: 3, name: "Hair Fall Control Heat Hair Spa Mask", price: 349, volume: "70g", img: p3, badge: "GET3@899", type: "Spa Mask", description: "Reduces Hair Fall | Strengthens Hair", rating: "4.5", reviews: "112" },
  { id: 4, name: "Hair Fall Control Shampoo & Conditioner Power Duo", price: 566, originalPrice: 754, discount: 25, volume: "Pack of 2", img: p4, badge: "2Combos@1199+2 Gifts", type: "Combos", description: "Reduces Hair Fall | Strengthens Hair", rating: "4.7", reviews: "156" },
  { id: 5, name: "Hair Fall Control Trio", price: 940, originalPrice: 1253, discount: 25, volume: "Pack of 3", img: p5, badge: "Get2Kits@1499", type: "Kits", description: "Reduces Hair Fall | Strengthens Hair", rating: "4.8", reviews: "203" },
];

const damageRepairProducts = [
  { id: 6, name: "7 in 1 Repair & Revive Shampoo for Upto 100%", price: 355, volume: "300ml", img: p1, badge: "GET3@899", type: "Shampoo", description: "Addresses 7 Signs of Hair Damage | Enriched with Ceramides & Argan Oil", rating: "4.8", reviews: "171" },
  { id: 7, name: "7 in 1 Repair & Revive Conditioner for Upto 100%", price: 399, volume: "250g", img: p2, badge: "GET3@899", type: "Conditioner", description: "Addresses 7 Signs of Hair Damage | Enriched with Ceramides & Argan Oil", rating: "4.7", reviews: "97" },
  { id: 8, name: "7 in 1 Repair & Revive Night Cream to Heal & Protect Hair", price: 499, volume: "200ml", img: p3, badge: "GET3@899", type: "Cream", description: "Addresses 7 Signs of Hair Damage | Reduces Frizz & Dullness", rating: "4.7", reviews: "120" },
  { id: 9, name: "7 in 1 Repair & Revive Oil Hair Serum for Upto 100% Damage", price: 499, volume: "70ml", img: p4, badge: "GET3@899", type: "Serum", description: "Addresses 7 Signs of Hair Damage | Enriched with Ceramides & Argan Oil", rating: "4.6", reviews: "88" },
  { id: 10, name: "7 in 1 Repair & Revive Duo", price: 566, originalPrice: 754, discount: 25, volume: "Pack of 2", img: p5, badge: "2Combos@1199+2 Gifts", type: "Combos", description: "Addresses 7 Signs of Hair Damage | Enriched with Ceramides & Argan Oil", rating: "4.7", reviews: "91" },
];

function App() {
  return (
    <>
      <OfferBar />
      <Navbar />
      <Hero />
      <Concerns />
      <Categories />
      <Products />
      <ProductSection title="For Hair Fall Control" products={hairFallProducts} viewAllCount={14} />
      <ProductSection title="For Damage Repair" products={damageRepairProducts} viewAllCount={30} /> //viewAllCount is a number that tells the component how many total products exist.
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;


//Props = inputs given to a component  , Think of props like arguments to a function.
// see the example
// function ProductSection(title, products, count) {
//   ...
// }
// ProductSection("For Hair Fall Control", hairFallProducts, 14);


// <ProductSection 
//   title="For Hair Fall Control"
//   products={hairFallProducts}
//   viewAllCount={14}
// />