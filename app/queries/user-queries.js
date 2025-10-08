import { dbConnect } from "@/service/mongo";
import mongoose from "mongoose";

export const getAllUsers = async () => {
  await dbConnect();
  const user = await mongoose.connection.db
    .collection("user")
    .find({})
    .toArray();
  return user;
};
