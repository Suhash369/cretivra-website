import mongoose from "mongoose";

// In-memory fallback database store for leads when MongoDB connection is optional
export const memoryLeadsStore: any[] = [];

export const connectDB = async () => {
  try {
    const connStr = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/cretivra";
    await mongoose.connect(connStr, {
      serverSelectionTimeoutMS: 2000,
    });
    console.log(`✅ MongoDB Connected: ${mongoose.connection.host}`);
  } catch (error) {
    console.log("ℹ️ MongoDB local instance not detected — Operating with Express In-Memory Datastore.");
  }
};
