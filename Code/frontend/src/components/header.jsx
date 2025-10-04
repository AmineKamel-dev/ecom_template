import reactLogo from "../assets/react.svg"

function Header() {
  return (
    <header className="bg-gray-400 border-b-2 border-black shadow-md shadow-cyan-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Title of the website */}
        <HeaderTitle title="Ecommerce Website" full={false} />

        {/* Right: Placeholder for future navigation or user bar */}
        <div className="flex items-center space-x-4 text-white">
          {/* Example placeholders */}
          <button className=" bg-fuchsia-300 hover:text-cyan-400 transition">Login</button>
          <button className=" bg-fuchsia-300hover:text-cyan-400 transition">Cart</button>
        </div>
      </div>
    </header>
  )
}

export default Header

function HeaderTitle({ title, full }) {
  return (
    <div className="flex items-center space-x-3">
      <img src={reactLogo} alt="logo" className="h-8 w-8" />
      <h1 className="text-xl font-semibold text-white tracking-tight">
        {title}
      </h1>
    </div>
  )
}
