"use client"
import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

const CartButton = ({product}) => {
    return (
        <div>
            <button className="btn btn-primary btn-wide flex gap-2"><FaCartPlus></FaCartPlus>Add to Cart</button>
        </div>
    );
};

export default CartButton;