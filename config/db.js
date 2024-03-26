import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected to mongodb sucessfully ${conn.connection.host}`);
  } catch (error) {
    console.log(`error in mongodb ${error.message}`);
  }
};
