export default function FeatureCard({
  title,
  text
}) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-4xl p-8 hover:-translate-y-2 hover:bg-white/10 transition-all duration-300">
      
      <div className="w-14 h-14 rounded-full bg-[#A6996F] mb-6"></div>

      <h3 className="text-2xl font-semibold mb-4">
        {title}
      </h3>

      <p className="text-gray-400 leading-8">
        {text}
      </p>

    </div>
  )
}