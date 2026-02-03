const OfferBar = () => {
  return (
    <div className="bg-black text-white text-xs md:text-sm py-2.5 md:py-3 text-center overflow-hidden relative">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="inline-block mr-8">
          Shop for ₹599 & Get Refresh Dry Shampoo FREE | Use Code: <span className="font-semibold">FREEVOLUME</span>
        </span>
        <span className="inline-block mr-8">
          Buy at ₹699 | Use code: <span className="font-semibold">GET699</span> — Buy 3 Products at ₹899 | Use code: <span className="font-semibold">GET899</span>
        </span>
        <span className="inline-block mr-8">
          Shop for ₹599 & Get Refresh Dry Shampoo FREE | Use Code: <span className="font-semibold">FREEVOLUME</span>
        </span>
        <span className="inline-block mr-8">
          Buy at ₹699 | Use code: <span className="font-semibold">GET699</span> — Buy 3 Products at ₹899 | Use code: <span className="font-semibold">GET899</span>
        </span>
      </div>
    </div>
  );
};

export default OfferBar;
