
// ProductCard is a reusable React component
// It receives product-related data using props (destructuring directly in parameters)
const ProductCard = ({ img, name, price, originalPrice, discount, badge, reviews, volume, rating, type, description }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100">
      {/* Image Container */}
      <div className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {badge && (
          <span className="absolute top-2 left-2 bg-[#22c55e] text-white text-xs font-semibold px-2 py-1 rounded z-10">
            {badge}
          </span>
        )}
        {discount && (
          <span className="absolute top-2 right-2 bg-black text-white text-xs font-semibold px-2 py-1 rounded z-10">
            {discount}% OFF
          </span>
        )}
        {volume && (
          <span className="absolute bottom-2 right-2 bg-white/90 text-gray-700 text-xs font-medium px-2 py-1 rounded">
            {volume}
          </span>
        )}
        <img
          src={img}
          alt={name}
          className="w-full h-[200px] md:h-[240px] object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Product type/category shown only if available */}
        {type && (
          <p className="text-xs font-semibold text-gray-600 mb-1 uppercase">{type}</p>
        )}
             {/* Product name */}
        <h3 className="text-sm font-medium mb-1 text-gray-900 line-clamp-2 min-h-[2.5rem]">
          {name}
        </h3>
        
        {/* Product description shown only if available */}
        {description && (
          <p className="text-xs text-gray-600 mb-2 line-clamp-2">{description}</p>
        )}

        {/* Rating */}
        {rating && reviews && (
          <div className="flex items-center gap-1 mb-2">
            <span className="text-yellow-400">★</span>
            <span className="text-xs text-gray-600">{rating} | {reviews}</span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-base font-bold text-gray-900">₹{price}</span>
          {originalPrice && (
            <>
              <span className="text-sm text-gray-500 line-through">₹{originalPrice}</span>
              {discount && (
                <span className="text-xs text-red-600 font-semibold">{discount}% off</span>
              )}
            </>
          )}
        </div>

        {/* Add to Cart Button */}
        <button className="w-full bg-black text-white py-2.5 text-sm font-medium rounded hover:bg-gray-800 transition-colors">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

















        