const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      trim: true,
      required: true,
      index: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      min: 2,
      max: 16,
    },
    phone: {
      type: String,
      trim: true,
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
      trim: true,
      enum: [
        "january",
        "february",
        "march",
        "may",
        "june",
        "july",
        "august",
        "september",
        "october",
        "november",
        "december",
      ],
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
    wishlist: [{ type: ObjectId, ref: "Product" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
