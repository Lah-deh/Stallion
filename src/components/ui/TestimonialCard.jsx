export default function TestimonialCard({
  name,
  review
}) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-4xl p-8 hover:bg-white/10 transition-all">

      <div className="flex gap-1 text-[#A6996F] text-xl mb-6">
        ★★★★★
      </div>

      <p className="text-gray-300 leading-8 mb-8">
        {review}
      </p>

      <h3 className="text-xl font-semibold">
        {name}
      </h3>

    </div>
  )
}