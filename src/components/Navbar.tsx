import Link from "next/link"
import Menu from "./Menu"

const Navbar = () => {
    return (
        <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:64">
                {/* {Mobile} */}
                <div className="h-full flex items-center justify-between">
                <Link href="/rufus">
                <div className="text-2xl tracking-wide">
                Rufus
                </div>
                </Link>
                <Menu/>
            </div>
            {/* {BIGGER SCREENS} */}
            <div className="hidden md:flex items-center justify-between h-full">
                {/* {LEFT} */}
                <div className=""></div>
                 {/* {RIGHT} */}
                 <div className=""></div>
            </div>
        </div>
    )
}

export default Navbar