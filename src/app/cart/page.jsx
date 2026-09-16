import { getCart } from '@/actions/server/cart';
import CartItem from '@/components/cards/CartItem';
import Cart from '@/components/home/Cart';
import React from 'react';

const CartPage = async () => {
    const cartItems = await getCart();
    const formattedItems = cartItems.map(item => ({ ...item, _id: item._id.toString() }))

    return (
        <div>
            {/* Title */}
            <div className="">
                <h2 className="text-4xl py-4 font-bold border-l-8 border-primary pl-8">My Cart</h2>
            </div>

            <Cart cartItem={formattedItems}></Cart>
        </div>
    );
};

export default CartPage;