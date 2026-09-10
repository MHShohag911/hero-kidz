"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export const postUser = async (payload) => {
  const { email, password, name } = payload;
  // Check Payload
  if (!email || !password) return null;

  // Check User
  const isExist = await dbConnect(collections.USERS).findOne({ email });
  if (isExist) {
    return null;
  }

  // Create User
  const newUser = {
    provider: "credentials",
    name,
    email,
    password: await bcrypt.hash(password, 14),
    role: "user",
  };

  // Insert User
  const result = await dbConnect(collections.USERS).insertOne(newUser);

  if (result.acknowledged) {
    return {
      ...result,
      insertedId: result.insertedId.toString(),
    };
  }
};

export const loginUser = async (payload) => {
  const { email, password } = payload;
  console.log("This is Payload", payload)
  if (!email || !password) return null;

  const user = await dbConnect(collections.USERS).findOne({ email });

  if (!user) return null;
  const isMatched = await bcrypt.compare(password, user.password);
  if (isMatched) {
    return user;
  } else {
    return null;
  }
};
