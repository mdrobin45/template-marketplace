import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
   {
      name: { type: String, required: true },
      username: { type: String, required: true, unique: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      country: { type: String },
      address: { type: String },
      city: { type: String },
      avatar: { type: String },
      description: { type: String },
      role: { type: String, default: "customer" },
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

const User = models.User || model("User", userSchema);

export default User;
