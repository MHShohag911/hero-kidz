"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { handleCart } from "@/actions/server/cart";
import Swal from "sweetalert2";

const CartButton = ({ product, onAddToCart }) => {
  const session = useSession();
  // const [adding, setAdding] = useState(false);
  // const [added, setAdded] = useState(false);
  const router = useRouter();
  const pathName = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const isLogin = session?.status == "authenticated";

  // const { data: session, status } = useSession();

  const handleAddToCart = async () => {
    setIsLoading(true);
    if(isLogin){
      const result = await handleCart(product._id);
      if(result.success){
        Swal.fire("Added to Card", product?.title, "success");
      } else {
        Swal.fire("Sorry", "Something Wrong Happened!", "error");
      }
      setIsLoading(false);
    } else {
      router.push(`/login?callbackUrl=${pathName}`);
      setIsLoading(false);
    }

    /* // Still checking authentication
    if (status === "loading") return;

    // User is not logged in
    if (status === "unauthenticated") {
      router.push(`/login?callbackUrl=${encodeURIComponent(pathname)}`);
      return;
    }
    // User is logged in
    if (status === "authenticated") {
      alert(session.user.email)
      console.log("Logged in user:", session.user.name);
      console.log("Adding product:", product._id);

      // Add your cart logic here
      // e.g. addToCart(product._id)
    } */
    /* if (adding || added) return;
    setAdding(true);
    try {
      await onAddToCart?.(product);
      setAdded(true);
      setTimeout(() => setAdded(false), 1800);
    } finally {
      setAdding(false);
    } */
  };

 /*  const add2Cart = () => {
    // Still checking authentication
    if (status === "loading") return;

    // User is not logged in
    if (status === "unauthenticated") {
      router.push(`/login?callbackUrl=${encodeURIComponent(pathname)}`);
      return;
    }

    // User is logged in
    if (status === "authenticated") {
      alert(session.user.email)
      console.log("Logged in user:", session.user.name);
      console.log("Adding product:", product._id);

      // Add your cart logic here
      // e.g. addToCart(product._id)
    }
  }; */

  return (
    <div>
      <button
        onClick={handleAddToCart}
        disabled={session.status == "loading" || isLoading}
        className={`btn btn-block btn-primary rounded-full mt-2 border-none text-white cursor-pointer `}
      >
        <>
            <FaCartPlus />
            Add to Cart
          </>
      </button>
      {/* <button
        onClick={add2Cart}
        className="flex gap-2 w-full hover:none "
        disabled={status === "loading"}
      >
        <FaCartPlus />
        Add to Cart
      </button> */}
    </div>
  );
};

export default CartButton;