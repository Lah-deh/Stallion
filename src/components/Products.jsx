const products = [
  {
    name: 'Royal Oud',
    image: '/image/Royal.jpg'
  },
  {
    name: 'Velvet Noir',
    image: '/image/Velvet.jpg'
  },
  {
    name: 'Golden Musk',
    image: '/image/Golden.webp'
  }
]

export default function Products() {
  return (
    <section className="px-6 md:px-16 py-24">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-16">
        <div>
          <p className="text-[#A6996F] tracking-[0.3em] text-sm mb-4">
            COLLECTION
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold">
            Featured Perfumes
          </h2>
        </div>

        <button className="border border-gray-700 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all w-fit cursor-pointer">
          View More
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-4xl overflow-hidden hover:scale-105 transition-all duration-500"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-100 w-full object-cover"
            />

            <div className="p-6 flex items-center justify-between">
              <h3 className="text-2xl font-semibold">
                {product.name}
              </h3>

              <button className="bg-[#A6996F] text-black px-5 py-2 rounded-full hover:bg-[#8f845c] transition-all cursor-pointer">
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}