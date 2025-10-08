import mongoose from "mongoose";

export async function dbConnect() {
  try {
    const connection = await mongoose.connect(
      String("mongodb://localhost:27017/lets-learn")
    );
    console.log("db connected...");
    return connection;
  } catch (error) {
    console.error(error);
  }
}
