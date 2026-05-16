import TestimonialCard from './ui/TestimonialCard'

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

export default function Testimonials({
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

        {testimonials.map((item, index) => (
          <TestimonialCard
            key={index}
            name={item.name}
            review={item.review}
          />
        ))}

      </div>

    </section>
  )
}