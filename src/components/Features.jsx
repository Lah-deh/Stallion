import FeatureCard from './ui/FeatureCard'

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

export default function Features({
  subtitle,
  heading
}) {
  return (
    <section className="px-6 md:px-16 py-24">

      <div className="text-center mb-16">

        <p className="text-[#A6996F] tracking-[0.3em] text-sm mb-4">
          {subtitle}
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold">
          {heading}
        </h2>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            text={feature.text}
          />
        ))}

      </div>

    </section>
  )
}