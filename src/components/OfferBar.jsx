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


// text-xs → Extra small font size (default for mobile) 
// md:text-sm → From medium screen and above, use small font size
// 📱 On small screens → smaller text
// 💻 On medium+ screens → slightly bigger text
// py-2.5 md:py-3
// py = padding-top + padding-bottom
// 2.5 = small vertical spacing
// md:py-3 = increase padding on medium screens
// 📱 Mobile → smaller height
// 💻 Desktop → slightly taller bar
// flex:- Makes children align in a row.Why needed?
// Keeps all spans in a horizontal line. Without flex → spans may wrap or stack.