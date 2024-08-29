import { Schema, model, models } from "mongoose";

const authorSchema = new Schema(
   {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      country: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      avatar: { type: String, required: true },
      description: { type: String, required: true },
      rule: { type: String, required: true },
      isFeatured: { type: Boolean, default: false },
      socialLinks: [
         {
            title: { type: String },
            url: { type: String },
         },
      ],
      templates: [
         {
            type: Schema.ObjectId,
            ref: "Product",
         },
      ],
      earnings: [
         {
            funds: { type: Number, default: 0 },
            paymentDate: { type: Date, default: Date.now() },
         },
      ],
   },
   { timestamps: true }
);

const Author = models.Author || model("Author", authorSchema);

export default Author;
