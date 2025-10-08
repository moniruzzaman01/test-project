import mongoose from "mongoose";

export const getAllUsers = async () => {
  const user = await mongoose.connection.db
    .collection("user")
    .find({})
    .toArray();
  return user;
};
