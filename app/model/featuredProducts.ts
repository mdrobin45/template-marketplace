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

Product;

const FeaturedProduct =
   mongoose.models.featuredProduct ||
   mongoose.model("featuredProduct", featuredProductSchema);

export default FeaturedProduct;
