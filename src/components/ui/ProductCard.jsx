export default function ProductCard({
  image,
  name,
  buttonText
}) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-4xl overflow-hidden hover:scale-105 transition-all duration-500">

      <img
        src={image}
        alt={name}
        className="h-100  w-full object-cover"
      />

      <div className="p-6 flex items-center justify-between">

        <h3 className="text-2xl font-semibold">
          {name}
        </h3>

        <button className="bg-[#A6996F] text-black px-5 py-2 rounded-full hover:bg-[#8f845c] transition-all cursor-pointer">
          {buttonText}
        </button>

      </div>

    </div>
  )
}