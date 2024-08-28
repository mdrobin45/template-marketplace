import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: true,
      },
      totalSales: {
         type: Number,
         default: 0,
      },
      regularPrice: {
         type: Number,
         required: true,
      },
      salePrice: {
         type: Number,
         required: true,
      },
      templateAuthor: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Author",
         required: true,
      },
      thumbnail: String,
      liveUrl: String,
      description: {
         type: String,
         required: true,
      },
      category: {
         type: String,
         required: true,
      },
      widgetReady: {
         type: Boolean,
         default: false,
      },
      highResolution: {
         type: Boolean,
         default: false,
      },
      compatible: [String],
      version: {
         type: String,
         required: true,
      },
      filesIncluded: [String],
      layout: String,
      tags: [String],
   },
   { timestamps: true }
);

const Product =
   mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
