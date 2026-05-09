const features = [
  {
    title: 'Long Lasting',
    text: 'Premium fragrances designed to stay fresh and elegant throughout the day.'
  },
  {
    title: 'Luxury Essence',
    text: 'Crafted with rare ingredients and sophisticated scent combinations.'
  },
  {
    title: 'Elegant Packaging',
    text: 'Modern premium packaging built to match your lifestyle and taste.'
  }
]

export default function Features() {
  return (
    <section className="px-6 md:px-16 py-24">
      <div className="text-center mb-16">
        <p className="text-[#A6996F] tracking-[0.3em] text-sm mb-4">
          FEATURES
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold">
          Why Choose Us
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-4xl p-8 hover:-translate-y-2 hover:bg-white/10 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-[#A6996F] mb-6"></div>

            <h3 className="text-2xl font-semibold mb-4">
              {feature.title}
            </h3>

            <p className="text-gray-400 leading-8">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}