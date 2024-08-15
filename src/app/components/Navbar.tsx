import Link from "next/link"
import MobileMenu from "./MobileMenu"

const Navbar = () => {
  return (
    <div className='h-24 flex items-center justify-between'>
        <div className=""></div>
        <div className="">
            <Link href="/" className="font-bold text-blue-500 ">Network</Link>
        </div>
        <div className="">
            <MobileMenu />
        </div>
    </div>
  )
}

export default Navbar   