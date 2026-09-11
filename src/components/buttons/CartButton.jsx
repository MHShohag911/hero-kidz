"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { useSession } from "next-auth/react";

const CartButton = ({ product }) => {
  const router = useRouter();
  const pathname = usePathname();

  const { data: session, status } = useSession();

  const add2Cart = () => {
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
  };

  return (
    <div>
      <button
        onClick={add2Cart}
        className="btn btn-primary btn-wide flex gap-2"
        disabled={status === "loading"}
      >
        <FaCartPlus />
        Add to Cart
      </button>
    </div>
  );
};

export default CartButton;