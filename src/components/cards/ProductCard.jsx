"use client";

import Image from "next/image";
import { useState } from "react";
import { FaStar, FaStarHalfAlt, FaShoppingCart, FaFire } from "react-icons/fa";

/**
 * ProductCard
 * Playful, counting-board-themed product card built for DaisyUI + Tailwind.
 * Ties its visual language (the numbered corner badge, the dotted "count" rail
 * under the price) to the subject matter: a kids' number & counting toy.
 *
 * Props
 * ------
 * product: {
 *   title: string,
 *   image: string,
 *   price: number,
 *   discount?: number,      // percent, e.g. 10
 *   ratings?: number,       // 0–5
 *   reviews?: number,
 *   sold?: number,
 * }
 * onAddToCart?: (product) => void | Promise<void>
 */
export default function ProductCard({ product, onAddToCart }) {
  const [adding, setAdding] = useState(false);
  const [added, setAdded] = useState(false);

//   if (!product) return <ProductCardSkeleton />;

  const { title, image, price, discount = 0, ratings = 0, reviews = 0, sold = 0 } =
    product;

  const finalPrice = discount > 0 ? Math.round(price * (1 - discount / 100)) : price;

  const handleAddToCart = async () => {
    if (adding || added) return;
    setAdding(true);
    try {
      await onAddToCart?.(product);
      setAdded(true);
      setTimeout(() => setAdded(false), 1800);
    } finally {
      setAdding(false);
    }
  };

  return (
    <div className="card w-full max-w-xs bg-base-100 border border-base-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden mx-auto">
      {/* Image */}
      <figure className="relative aspect-square bg-[#FFF6E0]">
        <Image
          src={image}
          alt={title}
        //   fill
          width={200}
          height={180}
        //   sizes="(max-width: 768px) 100vw, 320px"
          className="object-contain p-4"
        />

        {discount > 0 && (
          <div className="absolute top-3 left-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#FF6B4A] text-white font-bold text-sm shadow-md">
            -{discount}%
          </div>
        )}

        {sold > 0 && (
          <div className="absolute bottom-3 right-3 badge gap-1 bg-base-100/90 border-none text-[#FF6B4A] font-semibold">
            <FaFire className="h-3 w-3" />
            {sold} sold
          </div>
        )}
      </figure>

      {/* Body */}
      <div className="card-body gap-2 p-4">
        <h3 className="font-semibold text-base leading-snug line-clamp-2 min-h-[2.5rem]">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <StarRating value={ratings} />
          <span className="text-sm font-medium text-base-content/80">
            {ratings.toFixed(1)}
          </span>
          <span className="text-sm text-base-content/50">({reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 pt-1">
          <span className="text-xl font-bold text-[#2B2B52]">
            ৳{finalPrice.toLocaleString()}
          </span>
          {discount > 0 && (
            <span className="text-sm text-base-content/40 line-through">
              ৳{price.toLocaleString()}
            </span>
          )}
        </div>

        {/* Add to cart */}
        <button
          onClick={handleAddToCart}
          disabled={adding}
          className={`btn btn-block rounded-full mt-2 border-none text-white ${
            added ? "bg-[#3FA66B]" : "bg-[#2B2B52] hover:bg-[#1c1c3d]"
          }`}
        >
          {adding ? (
            <span className="loading loading-spinner loading-sm" />
          ) : added ? (
            "Added ✓"
          ) : (
            <>
              <FaShoppingCart className="h-4 w-4" />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}

function StarRating({ value }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (value >= i) {
      stars.push(<FaStar key={i} className="h-3.5 w-3.5 text-[#FFB020]" />);
    } else if (value >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="h-3.5 w-3.5 text-[#FFB020]" />);
    } else {
      stars.push(<FaStar key={i} className="h-3.5 w-3.5 text-base-300" />);
    }
  }
  return <div className="flex items-center gap-0.5">{stars}</div>;
}

/**
 * ProductCardSkeleton
 * Mirrors ProductCard's exact layout using DaisyUI's `skeleton` class,
 * so lists don't jump when real data arrives.
 */
/* export function ProductCardSkeleton() {
  return (
    <div className="card w-full max-w-xs bg-base-100 border border-base-200 rounded-3xl shadow-sm overflow-hidden">
      <div className="aspect-square p-4">
        <div className="skeleton h-full w-full rounded-2xl" />
      </div>

      <div className="card-body gap-3 p-4">
        <div className="skeleton h-4 w-11/12 rounded-full" />
        <div className="skeleton h-4 w-2/3 rounded-full" />

        <div className="flex items-center gap-2 pt-1">
          <div className="skeleton h-3.5 w-20 rounded-full" />
          <div className="skeleton h-3.5 w-10 rounded-full" />
        </div>

        <div className="skeleton h-6 w-24 rounded-full mt-1" />

        <div className="skeleton h-11 w-full rounded-full mt-2" />
      </div>
    </div>
  );
} */