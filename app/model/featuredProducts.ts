import mongoose from "mongoose";
import Product from "./product";

const featuredProductSchema = new mongoose.Schema(
   {
      template: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: "Product",
      },
   },
   { timestamps: true }
);

// Initialize product model
Product;

// Initialize Featured product model
const FeaturedProduct =
   mongoose.models.FeaturedProduct ||
   mongoose.model("FeaturedProduct", featuredProductSchema);

export default FeaturedProduct;
