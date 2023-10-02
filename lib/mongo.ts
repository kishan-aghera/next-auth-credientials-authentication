import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URL, {
        dbName: "next_authentication",
      })
      .then(() => {
        console.log("MongoDB connected.");
      })
      .catch((e) => {
        console.log(`Error while making connection with MongoDB:\n${e}`);
        process.exit(1);
      });
  } catch (error) {
    console.log(`Error connecting to DB:\n${error}`);
  }
};
