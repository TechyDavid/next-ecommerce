"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from "react"

const Menu = () => {

    const [open,setOpen] = useState(false)


    return (
        <div className="">
            <Image
                src="/menu.png"
                alt="" 
                width={28} 
                height={28} 
                className='cursor-pointer'
                onClick={() => setOpen((prev) => !prev)}
            />{
                open && (
                    <div className=''>
                        <Link href="/">Homepage</Link>
                        <Link href="/">Shop</Link>
                        <Link href="/">Deals</Link>
                        <Link href="/">About</Link>
                        <Link href="/">Contact</Link>
                        <Link href="/">Logout</Link>
                        <Link href="/">Cart(1)</Link>
                    </div>
                )
            }
        </div>
    )
}
export default Menu