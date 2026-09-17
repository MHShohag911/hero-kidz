import { getCart } from '@/actions/server/cart';
import Checkout from '@/components/home/Checkout';
import React from 'react';

const CheckoutPage = async () => {
    const cartItems = await getCart();
    const formattedItems = cartItems.map(item => ({ ...item, _id: item._id.toString() }))
    return (
        <div>
            {/* Title */}
            <div className="">
                <h2 className="text-4xl py-4 font-bold border-l-8 border-primary pl-8">Checkout Page</h2>
            </div>
            <Checkout cartItems={formattedItems}></Checkout>
        </div>
    );
};

export default CheckoutPage;