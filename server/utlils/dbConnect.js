import mongoose from "mongoose";

const dbconnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/webX");
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};

export default dbconnect;
