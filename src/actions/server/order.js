"use server";

import { authOptions } from "@/lib/authOption";
import { collections, dbConnect } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { clearCart, getCart } from "./cart";
import { orderInvoiceTemplate } from "@/lib/orderInvoice";
import { sendEmail } from "@/lib/sendEmail";
import { ObjectId } from "mongodb";

const orderCollection = dbConnect(collections.ORDER);

export const createOrder = async (payload) => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) return { success: false };

  const cart = await getCart();
  
  if(cart.length == 0){
    return {success: false}
  }
  
  /* const products = cart.map(item => ({
    _id: new ObjectId(cart.productId),
    quantity: cart.quantity,
  })) */

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price*item.quantity,0
   );
  
  const newOrder = {
    createdAt: new Date().toISOString(),
    item: cart,
    ...payload,
    totalPrice,
  }

   const result = await orderCollection.insertOne(newOrder);


   if(Boolean(result.insertedId)){
    const result = await clearCart();

   }

   /* const totalPrice = cart.reduce(
    (sum, item) => sum + item.price*item.quantity,0
   ); */

   // 📧 Send Invoice Email
    await sendEmail({
      to: user.email,
      subject: "Your Order Invoice - Hero Kidz",
      html: orderInvoiceTemplate({
        orderId: result.insertedId.toString(),
        items: cart,
        totalPrice,
      }),
    });

   return {
    success: result.insertedId
   }
};
