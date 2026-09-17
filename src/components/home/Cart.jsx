"use client";

import React, { useMemo, useState } from "react";
import CartItem from "../cards/CartItem";
import Link from "next/link";

const Cart = ({ cartItem = [] }) => {
  const [items, setItems] = useState(cartItem);

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const totalPrice = useMemo(
    () =>
      items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),
    [items]
  );

  const removeItem = (id) => {
    setItems((prevItems) =>
      prevItems.filter((item) => item._id != id)
    );
  };

  const updateQuantity = (id, q) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item._id == id
          ? { ...item, quantity: q }
          : item
      )
    );
  };

  return (
    <div>
      <p className="py-3">
        <span className="text-primary font-bold">{items.length}</span>{" "}
        Items Found in the Cart
      </p>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Cart Items */}
        <div className="flex-3">
          {items?.map((item) => (
            <CartItem
              key={item._id}
              item={item}
              removeItem={removeItem}
              updateQuantity={updateQuantity}
            />
          ))}
        </div>

        {/* Summary Card */}
        <div className="flex-1">
          <div className="rounded-xl p-5 shadow-md lg:sticky lg:top-5">
            <h2 className="text-xl font-bold border-b pb-3 mb-4">
              Order Summary
            </h2>

            {/* Products */}
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item._id}
                  className="flex justify-between gap-4 border-b pb-3"
                >
                  <div className="min-w-0">
                    <h3 className="font-semibold truncate">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>

                  <div className="text-right whitespace-nowrap">
                    <p className="font-medium">
                      ৳{item.price}
                    </p>

                    <p className="text-sm text-gray-500">
                      ৳{item.price} × {item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Items */}
            <div className="flex justify-between mt-5">
              <span>Total Items</span>
              <span className="font-semibold">{totalItems}</span>
            </div>

            {/* Total Price */}
            <div className="flex justify-between mt-2 text-lg font-bold border-t pt-3">
              <span>Total</span>
              <span>৳{totalPrice}</span>
            </div>

            {/* Confirm Button */}
            <Link href={"/checkout"}
              className="btn btn-primary w-full mt-5"
              disabled={items.length === 0}
            >
              Confirm Order
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

