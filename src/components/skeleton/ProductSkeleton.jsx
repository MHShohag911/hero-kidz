import React from 'react';


/**
 * ProductCardSkeleton
 * Mirrors ProductCard's exact layout using DaisyUI's `skeleton` class,
 * so lists don't jump when real data arrives.
 */

const ProductSkeleton = () => {
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
};

export default ProductSkeleton;


