export default function Navbar({
  logo,
  links,
  buttonText
}) {
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 py-6">
      
      <h1 className="text-2xl md:text-3xl font-semibold tracking-[0.3em] text-[#A6996F]">
        {logo}
      </h1>

      <ul className="hidden md:flex items-center gap-10 text-sm text-gray-300">
        {links.map((link, index) => (
          <li
            key={index}
            className="hover:text-[#A6996F] cursor-pointer transition-all duration-300"
          >
            {link}
          </li>
        ))}
      </ul>

      <button className="bg-[#A6996F] hover:bg-[#8f845c] transition-all duration-300 hover:scale-105 text-black px-5 py-3 rounded-full text-sm font-medium cursor-pointer">
        {buttonText}
      </button>

    </nav>
  )
}