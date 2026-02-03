import Faizal from "../assets/avatars/Faizal.jpg";
import Abdul from "../assets/avatars/Abdul.jpg";
import Aquib from "../assets/avatars/Aquib.jpg";
const testimonials = [
  {
    title: "Surprised at the result",
    review: "So easy peasy to use! In just 5 minutes like shampoo I can apply and it leaves my hair so shiny and wonderful!! Totally recommended for people like me who can't get roots touched up every other week! Thanks BBLUNT!",
    name: "Aditya Kumar Jha",
    avatar: Faizal
  },
  {
    title: "Last Longing Hair Colour!",
    review: "My friend suggested me use this hair colour, and I tried it. Guess what? I was shocked as it gives a smooth glossy & nourished finish, covers grey hairs, and looks natural. The colour easily lasted for more than two months, unlike other brands in the market.",
    name: "Shreyansh Singh",
    avatar: Abdul
  },
  {
    title: "Love this Intense Moisture Range!",
    review: "The first impression after using the shampoo is really impressive. It gives smoothness & hydration and also helps to reduce dryness from my dry and color-treated hair. I highly recommend it to everyone with dry and damaged hair.",
    name: "Aquib Alam",
    avatar: Aquib
  }
];

const Testimonials = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-gray-900">
        What our <span className="font-bold">customers</span> are saying?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 md:p-8 text-white relative"
          >
            {/* Quote Icon */}
            <div className="absolute bottom-4 right-4 text-gray-600 text-6xl font-serif leading-none">
              "
            </div>

            <h3 className="text-lg md:text-xl font-bold mb-4">
              {testimonial.title}
            </h3>

            <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed relative z-10">
              {testimonial.review}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>

            {/* Reviewer */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-medium">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
