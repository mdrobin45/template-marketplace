import { Schema, model, models } from "mongoose";
import Product from "./product";

const bestSellingSchema = new Schema(
   {
      template: {
         type: Schema.Types.ObjectId,
         required: true,
         ref: "Product",
      },
   },
   { timestamps: true }
);

// Initialize product model
Product;

// Initialize best selling product model
const BestSellingProduct =
   models.BestSelling || model("BestSelling", bestSellingSchema);

export default BestSellingProduct;
