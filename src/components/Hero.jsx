export default function Hero({
  subtitle,
  title,
  description,
  primaryButton,
  secondaryButton,
  image
}) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:gap-14 items-center px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-28 animate-fadeUp">
      
      <div className="animate-fadeUp">
        
        <p className="text-[#A6996F] tracking-[0.3em] text-sm mb-5">
          {subtitle}
        </p>

        <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-6">
          {title}
        </h1>

        <p className="text-gray-400 text-base md:text-lg leading-8 max-w-xl mb-10">
          {description}
        </p>

        <div className="flex items-center gap-5 flex-wrap">

          <button className="bg-[#A6996F] text-black px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 active:scale-95">
            {primaryButton}
          </button>

          <button className="border border-gray-700 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-white hover:text-black">
            {secondaryButton}
          </button>

        </div>

      </div>

      <div className="flex justify-center md:justify-end transition-all duration-500 hover:scale-105">

        <div className="bg-white/5 backdrop-blur-lg rounded-[3rem] p-8 md:p-12 shadow-2xl border border-white/10">

          <img
            src={image}
            alt="hero"
            className="w-72 md:w-95 lg:w-105 object-cover rounded-4xl"
          />

        </div>

      </div>

    </section>
  )
}