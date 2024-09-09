import Link from "next/link"
import Menu from "./Menu"
import SearchBar from "./SearchBar"
import NavIcons from "./NavIcons"
import Image from "next/image"

const Navbar = () => {
    return (
        <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:64">
                {/* {Mobile} */}
                <div className="h-full flex items-center justify-between md:hidden">
                <Link href="/rufus">
                <div className="text-2xl tracking-wide">Rufus</div>
                </Link>
                <Menu/>
            </div>
            {/* {BIGGER SCREENS} */}
            <div className="hidden md:flex items-center justify-between h-full">
                {/* {LEFT} */}
                <div className="w-1/3">
                    <Link href="/" className="flex items-center gap-3">
                        <img src="/logo.png" alt="" width={24} height={24} />
                    <div className="text-2xl tracking-wide">Rufus</div>
                    </Link>
                </div>
                 {/* {RIGHT} */}
                 <div className="w-2/3 flex items-center justify-between gap-8">
                    <SearchBar/>
                    <NavIcons/>
                 </div>
            </div>
        </div>
    )
}

export default Navbar