import Link from "next/link"
import Image from "next/image"

const CategoryList = () => {
    return (
        <div className="px-4 overflow-scroll">
            <div className="flex gap-4 md:gap-8">
                <Link href="/list?cat=test">
                <div className="relative bg-slate-100 w-full h-96">
                    <Image src="https://images.pexels.com/photos/28029772/pexels-photo-28029772/free-photo-of-young-man-sitting-on-ground-posing-wearing-beret-white-shirt-and-brown-shorts.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill sizes="20vw" className="object-cover"/>
                </div>
                <h1 className="mt-8 font-light text-clip tracking-wide">Category Name</h1>
                </Link>
            </div>
        </div>
    )
}

export default CategoryList