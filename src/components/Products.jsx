import ProductCard from './ui/ProductCard'

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

export default function Products({
  subtitle,
  heading,
  buttonText
}) {
  return (
    <section className="px-6 md:px-16 py-24">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-16">

        <div>

          <p className="text-[#A6996F] tracking-[0.3em] text-sm mb-4">
            {subtitle}
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold">
            {heading}
          </h2>

        </div>

        <button className="border border-gray-700 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all w-fit cursor-pointer">
          View More
        </button>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            buttonText={buttonText}
          />
        ))}

      </div>

    </section>
  )
}