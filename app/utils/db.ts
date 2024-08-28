import mongoose from "mongoose";

// Set database connection
const dbConnect = async () => {
   try {
      if (process.env.MONGO_URI || process.env.MONGO_URI_LOCAL) {
         mongoose.connect(`${process.env.MONGO_URI_LOCAL}`);
         console.log("Database connection successful");
      } else {
         console.log("Invalid MongoDB URI");
      }
   } catch {
      console.log("Database connection failed!");
   }
};

export default dbConnect;
