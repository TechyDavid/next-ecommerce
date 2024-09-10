"use client"


const CartModal = () => {

    const cartItems = false

    return (
        <div className="absolute p-4 rounded-md text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
              {!cartItems ? (
            <div className="">Cart is empty</div>
        ) : (
            <div className=""></div>
        )}

        </div>
      
    )
}

export default CartModal