const testimonials = [
  {
    name: 'Sophia Carter',
    review:
      'Absolutely elegant and long lasting fragrance. The packaging and scent feel premium.'
  },
  {
    name: 'Daniel Moore',
    review:
      'One of the best luxury perfumes I have used. Very smooth and classy.'
  },
  {
    name: 'Emily Stone',
    review:
      'Beautiful scent profile and the bottle design is stunning. Highly recommended.'
  }
]

export default function Testimonials() {
  return (
    <section className="px-6 md:px-16 py-24">
      <div className="text-center mb-16">
        <p className="text-[#A6996F] tracking-[0.3em] text-sm mb-4">
          TESTIMONIALS
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold">
          What Clients Say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-4xl p-8 hover:bg-white/10 transition-all"
          >
            <div className="flex gap-1 text-[#A6996F] text-xl mb-6">
              ★★★★★
            </div>

            <p className="text-gray-300 leading-8 mb-8">
              {item.review}
            </p>

            <h3 className="text-xl font-semibold">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}