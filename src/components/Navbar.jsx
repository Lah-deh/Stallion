export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 py-6">
      <h1 className="text-2xl md:text-3xl font-semibold tracking-[0.3em] text-[#A6996F]">
        STALLION
      </h1>

      <ul className="hidden md:flex items-center gap-10 text-sm text-gray-300 hover:text-[#A6996F] transition-all duration-300 cursor-pointer">
        <li className="hover:text-white cursor-pointer transition-all">Home</li>
        <li className="hover:text-white cursor-pointer transition-all">Products</li>
        <li className="hover:text-white cursor-pointer transition-all">About</li>
        <li className="hover:text-white cursor-pointer transition-all">Reviews</li>
      </ul>

      <button className="bg-[#A6996F] hover:bg-[#8f845c] transition-all text-black px-5 py-3 rounded-full text-sm font-medium cursor-pointer">
        Shop Now
      </button>
    </nav>
  )
}