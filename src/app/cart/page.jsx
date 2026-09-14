import { getCart } from '@/actions/server/cart';
import CartItem from '@/components/cards/CartItem';
import React from 'react';

const CartPage = async () => {
    const cartItems = await getCart();
    console.log(cartItems[0]);

    return (
        <div>
            {/* Title */}
            <div className="">
                <h2 className="text-4xl py-4 font-bold border-l-8 border-primary pl-8">My Cart</h2>
                <p className="py-3">
                    <span className="text-primary font-bold">{cartItems.length} </span>
                    Items Found in the Cart
                </p>
            </div>

            <div className="flex">
                <div className="flex-3">
                    {cartItems.map(item => <CartItem key={item._id} item={item}></CartItem>)}
                </div>
                <div className="flex-1"></div>
            </div>
        </div>
    );
};

export default CartPage;