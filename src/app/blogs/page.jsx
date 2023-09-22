'use client'
import Image from "next/image"
import Link from "next/link"
import imgUrl from "./blog.webp"
import img2Url from "./blog2.jpeg"

async function getData() {
  const res = await fetch('https://fakestoreapi.com/products')
  return res.json()
}
const Blogs = async () => {
  const data = await getData()
  return (
    <main className="min-h-screen">
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
      <div className="w-full flex-wrap h-100 pt-32 pb-10 flex items-center justify-center">
        {data.map((item) => {
          return (
            <div className="mb-10 mx-10 w-[300px] h-[100%] rounded-lg border-blue-400">
              <Image src={imgUrl} className="rounded-lg mb-5 h-[180px] object-cover" alt="Blog" width={"100%"} height={"100px"} />
              <h1 className="text-3xl mb-5">{item.title}</h1>
              <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates est minus, ratione aliquid enim consectetur? Eum perspiciatis iure optio .</p>
              <Link href={`/blogs/${item.id}`} className="bg-blue-400 text-white px-10 py-3 rounded-lg  cursor-pointer">Explore</Link>
            </div>
          )
        })}
      </div>
    </main >
  )
}

export default Blogs