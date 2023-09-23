const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      index: true,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 16,
    },
    phone: {
      type: String,
      min: 7,
      max: 12,
    },
    phoneType: {
      type: String,
      enum: ["mobile", "home", "bussiness"],
      default: "mobile",
    },
    streetAddress: {
      type: String,
      min: 6,
      max: 32,
    },
    month: {
      type: String,
      enum: ["january", "february"],
    },
    role: {
      type: String,
      default: "subscriber",
    },
    cart: {
      type: Array,
      default: [],
    },
    verified: Boolean,
    address: String,
    //   wishlist: [{ type: ObjectId, ref: "Product" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
