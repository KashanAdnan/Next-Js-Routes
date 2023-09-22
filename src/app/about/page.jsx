import Image from "next/image"
import Link from "next/link"
import logo from "./image.jpg"

const About = () => {
    return (
        <div>
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
                <section className="flex flex-col items-center justify-center w-full h-screen">
                    <div className="w-full px-24 py-10 h-[60vh] flex items-center justify-between">
                        <Image src={logo} alt="Kashan Adnan" className="w-[350px] h-[400px] rounded-xl object-cover" />
                        <div className="w-[650px]">
                            <h1 className="font-bold text-4xl text-gray-600">Hi,  I'm <span className="text-blue-400"> Kashan</span> Adnan</h1>
                            <p className="my-5 w-[500px] leading-7">I am a MERN STACK Developer I have Learned it All From Youtube. I am 11 Years Old. I am Learing Now Web Development Course By Sir Bilal. And I am Also Learning AI Chat Bot Course In Saylani Mass IT Training From Sir Inzimam Malik.</p>
                            <Link href="https://github.com/KashanAdnan" className="bg-blue-400 text-white px-10 py-3 rounded-lg  cursor-pointer text-base">Github</Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default About
