import Link from "next/link"

const Home = () => {
  return (
    <main className="min-h-screen ">
      <nav className="bg-blue-400 fixed flex items-center justify-between w-full h-[70px] px-24">
        <h1 className="text-white font-black text-3xl">Blogging App.</h1>
        <ul className="flex w-[280px] text-white font-medium items-center justify-between">
          <li className="cursor-pointer"><Link href={"/"}>Home</Link></li>
          <li className="cursor-pointer"><Link href={"/about"}> About</Link></li>
          <li className="cursor-pointer"><Link href={"/blogs"}>Blogs</Link></li>
          <li className="cursor-pointer"><Link href={"/contact"}>Contact</Link></li>
        </ul>
        <button className="bg-blue-600 text-white px-10 py-3 rounded-lg  cursor-pointer">Login</button>
      </nav>
      <section className="flex items-center justify-center w-full h-screen">
        <h1 className="text-8xl font-black text-blue-400">Main Page</h1>
      </section>
    </main>
  )
}

export default Home