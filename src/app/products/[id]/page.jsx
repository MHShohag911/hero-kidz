import { getSingleProduct } from '@/actions/product';
import CartButton from '@/components/buttons/CartButton';
import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaCartPlus } from 'react-icons/fa6';

// app/products/[id]/page.jsx

export async function generateMetadata({ params }) {
  const {id} = await params;
  console.log("this is id", id);
  const product = await getSingleProduct(id); // your existing fetch function

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: product.title,
    description: product.description?.slice(0, 160) || "Educational toy designed to help kids learn through play.",

    openGraph: {
      type: "website",
      siteName: "Hero Kidz",
      title: product.title,
      description: product.description?.slice(0, 160) || "Fun and educational learning toy for the kids. Safe, colorful and engaging.",
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description?.slice(0, 160) || "Fun and educational learning toy for kids.",
      images: [product.image],
    },
  };
}

const ProductDetails = async ({ params }) => {
    const { id } = await params;
    const product = await getSingleProduct(id);
    // console.log("This is product", product)

    const {
        title,
        image,
        price,
        discount,
        ratings,
        reviews,
        sold,
        description,
        info,
        qna,
    } = product;

    const discountedPrice = price - (price * discount || 0) / 100;

    return (
        <div className='max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10'>
            {/* Image */}
            <div className="rounded-xl overflow-hidden">
                <Image
                    width={600}
                    height={420}
                    src={image}
                    alt='title'
                ></Image>
            </div>
            {/* Info */}
            <div>
                <h1 className="text-3xl font-bold mb-3">{title}</h1>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-yellow-400">
                        {
                            Array.from({ length: 5 }, (_, i) => (
                                <FaStar
                                    key={i}
                                    className={i < Math.round(ratings) ? "" : "opacity-30"}
                                />
                            ))
                        }
                    </div>
                    <span className='text-sm text-gray-600'>
                        {ratings} ({reviews} reviews) | {sold} sold
                    </span>
                </div>

                {/* Price */}
                <div className="mb-4">
                    <span className="text-2xl font-bold text-primary">৳{discountedPrice} only</span>
                    {discount > 0 && (<span className='line-through text-gray-400 ml-3'>৳{price}</span>)}
                </div>

                {/* Actions */}
                <CartButton product={product}></CartButton>
            </div>
            
                <div className='col-span-full'>
                    {/* Description */}
                    <div className="mt-8 space-y-4 text-gray-700 leading-relaxed">
                        {
                            description?.split("\n\n").map((para, idx) => (
                                <p key={idx}>{para}</p>
                            ))
                        }
                    </div>

                    {/* Key Features */}
                    <div className="mt-6">
                        <h3 className="font-semibold mb-2">Key Features</h3>
                        <ul className="list-disc list-inside space-y-1">
                            {
                                info?.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* Q&A */}
                    <div className="mt-8">
                        <h3 className="font-semibold mb-3">Q&A</h3>
                        <div className="space-y-3">
                            {qna?.map((item, i) => (
                                <div key={i} className='border rounded-lg p-3'>
                                    <p className="font-medium">{item.question}</p>
                                    <p className="text-sm text-gray-600 mt-1">{item.answer}</p>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default ProductDetails;