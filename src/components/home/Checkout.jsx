"use client";

import { createOrder } from "@/actions/server/order";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import Swal from "sweetalert2";

const Checkout = ({ cartItems = [] }) => {
    const session = useSession();
    const router = useRouter();

    const totalItems = useMemo(
        () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
        [cartItems]
    );

    const totalPrice = useMemo(
        () =>
            cartItems.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
            ),
        [cartItems]
    );

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const orderData = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            address: formData.get("address"),
            city: formData.get("city"),
            paymentMethod: formData.get("paymentMethod"),
            cartItems,
            totalItems,
            totalPrice,
        };

        const result = await createOrder(orderData);

        if(result.success){
            Swal.fire("success", "Order Added", "success");
            router.push("/")
        } else {
            Swal.fire("error", "Something Went Wrong", "error");
            router.push("/cart")
        }

        console.log(orderData, result);
    };

    if(session.status == "loading"){
        return <h2>Loading...</h2>
    }

    return (
        <div className="w-11/12 max-w-7xl mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8">
                Checkout
            </h1>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col lg:flex-row gap-8"
            >
                {/* Customer Information */}
                <div className="flex-1">
                    <div className="border rounded-xl p-6 shadow-sm">
                        <h2 className="text-xl font-bold mb-6">
                            Delivery Information
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* Name */}
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium">
                                        Full Name
                                    </span>
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your full name"
                                    className="input input-bordered w-full"
                                    value={session?.data?.user?.name}
                                    required
                                    readOnly
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium">
                                        Email
                                    </span>
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your email"
                                    className="input input-bordered w-full"
                                    value={session?.data?.user?.email}
                                    required
                                    readOnly
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium">
                                        Phone Number
                                    </span>
                                </label>

                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="01XXXXXXXXX"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            {/* City */}
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium">
                                        City
                                    </span>
                                </label>

                                <input
                                    type="text"
                                    name="city"
                                    placeholder="Dhaka"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                        </div>

                        {/* Address */}
                        <div className="mt-5">
                            <label className="label">
                                <span className="label-text font-medium">
                                    Delivery Address
                                </span>
                            </label>

                            <textarea
                                name="address"
                                placeholder="Enter your complete delivery address"
                                className="textarea textarea-bordered w-full h-32"
                                required
                            />
                        </div>
                    </div>

                    {/* Payment Method */}
                    <div className="border rounded-xl p-6 shadow-sm mt-6">
                        <h2 className="text-xl font-bold mb-5">
                            Payment Method
                        </h2>

                        <label className="flex items-center gap-3 border rounded-lg p-4 cursor-pointer">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="cash_on_delivery"
                                className="radio radio-primary"
                                defaultChecked
                            />

                            <div>
                                <p className="font-semibold">
                                    Cash on Delivery
                                </p>

                                <p className="text-sm text-gray-500">
                                    Pay when your order arrives.
                                </p>
                            </div>
                        </label>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="w-full lg:w-96">
                    <div className="border rounded-xl p-6 shadow-sm lg:sticky lg:top-5">
                        <h2 className="text-xl font-bold border-b pb-4 mb-5">
                            Order Summary
                        </h2>

                        {cartItems.length === 0 ? (
                            <p className="text-center text-gray-500 py-5">
                                Your cart is empty.
                            </p>
                        ) : (
                            <div className="space-y-4">
                                {cartItems.map((item) => (
                                    <div
                                        key={item._id}
                                        className="flex justify-between gap-4 border-b pb-4"
                                    >
                                        <div className="min-w-0">
                                            <h3 className="font-semibold truncate">
                                                {item.title}
                                            </h3>

                                            <p className="text-sm text-gray-500">
                                                ৳{item.price} × {item.quantity}
                                            </p>
                                        </div>

                                        <p className="font-semibold whitespace-nowrap">
                                            ৳{item.price * item.quantity}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Total Items */}
                        <div className="flex justify-between mt-5">
                            <span>Total Items</span>
                            <span className="font-semibold">
                                {totalItems}
                            </span>
                        </div>

                        {/* Subtotal */}
                        <div className="flex justify-between mt-3">
                            <span>Subtotal</span>
                            <span>৳{totalPrice}</span>
                        </div>

                        {/* Delivery */}
                        <div className="flex justify-between mt-3">
                            <span>Delivery</span>
                            <span>৳0</span>
                        </div>

                        {/* Total */}
                        <div className="border-t mt-4 pt-4 flex justify-between text-xl font-bold">
                            <span>Total</span>
                            <span>৳{totalPrice}</span>
                        </div>

                        <button
                            type="submit"
                            disabled={cartItems.length === 0}
                            className="btn btn-primary w-full mt-6"
                        >
                            Confirm Order
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Checkout;

