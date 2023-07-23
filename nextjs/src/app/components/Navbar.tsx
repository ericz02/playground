import Link from "next/link";

export default function Navbar () {
  return (
    <div className="flex justify-evenly bg-pink-300 py-5 text-black">

      
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/about/us">About Us</Link>
      <Link href="/about/you">About You</Link>
      
      
    </div>
  )
}