"use client";

import { deleteItemsFromCart } from '@/actions/server/cart';
import Image from 'next/image';
import React from 'react';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const CartItem = ({ item, onIncrease, onDecrease }) => {
    const { title, image, quantity, price, _id } = item;

    const handleDeleteCart = async () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Remove it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const result = await deleteItemsFromCart(_id);
                if (result.success) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                } else {
                    Swal.fire({
                        title: "Opps!",
                        text: "Something went wrong!",
                        icon: "error",
                    });
                }
            }
        });
    }
    return (
        <div className='flex items-center gap-4 p-4 bg-base-100 shadow rounded-xl'>
            {/* Image */}
            <div className="w-20 h-20 relative">
                <Image
                    src={image}
                    alt={title}
                    width={150}
                    height={150}
                    // fill
                    className='object-cover rounded-lg'
                />
            </div>
            {/* Info */}
            <div className="flex-1">
                <h3 className="font-semibold text-sm md:text-base">{title}</h3>
                <p className="text-sm text-gray-500">Price: ৳ {price}</p>
            </div>
            {/* Quantity controls */}
            <div className="flex items-center gap-2 mt-2">
                <button
                    className="btn btn-xs btn-outline"
                    onClick={onDecrease}
                    disabled={quantity === 1}
                >
                    <FaMinus></FaMinus>
                </button>

                <span className="px-3 font-medium">{quantity}</span>

                <button className="btn btn-xs btn-outline" onClick={onIncrease}><FaPlus></FaPlus></button>
            </div>

            {/* Total + Remove */}
            <div className="text-right space-y-2">
                <p className="font-semibold">৳ {price * quantity}</p>
                <button
                    onClick={handleDeleteCart}
                    className="btn btn-sm btn-error btn-outline"

                >
                    <FaTrash></FaTrash>
                </button>
            </div>

        </div>
    );
};

export default CartItem;