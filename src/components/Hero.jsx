export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center px-6 md:px-16 py-16 md:py-28">
      <div>
        <p className="text-[#A6996F] tracking-[0.3em] text-sm mb-5">
          PREMIUM PERFUME
        </p>

        <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-6">
          Luxury
          <br />
          Fragrance
          <br />
          Collection
        </h1>

        <p className="text-gray-400 text-base md:text-lg leading-8 max-w-xl mb-10">
          Discover bold and timeless fragrances crafted for elegance,
          confidence and unforgettable moments.
        </p>

        <div className="flex items-center gap-5 flex-wrap">
          <button className="bg-[#A6996F] text-black px-8 py-4 rounded-full hover:scale-105 transition-all cursor-pointer font-medium">
            Explore Now
          </button>

          <button className="border border-gray-700 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all cursor-pointer">
            View Collection
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="bg-white/5 backdrop-blur-lg rounded-[3rem] p-8 md:p-12 shadow-2xl border border-white/10 hover:scale-105 transition-all duration-500">
          <img
            src="/image/Stallion.jpg"
            alt="perfume"
            className="w-70 md:w-105 object-cover rounded-4xl"
          />
        </div>
      </div>
    </section>
  )
}