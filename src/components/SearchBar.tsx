"use client"

const SearchBar = () => {
    return (
       <form action="">
            <input type="text" placeholder="Search" />
            <button className="cursor-pointer">
                <img src="/search.png" alt="" width={16} height={16} />
            </button>
       </form>
    )
}
export default SearchBar