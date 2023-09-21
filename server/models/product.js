const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      maxlength: 100,
      text: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 2000,
      text: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 32,
    },
    category: {
      type: ObjectId,
      ref: "Category",
    },
    subs: [
      {
        type: ObjectId,
        ref: "Sub",
      },
    ],
    quantity: Number,
    sold: {
      type: Number,
      default: 0,
    },
    images: {
      type: Array,
    },
    shipping: {
      type: String,
      enum: ["Yes", "No"],
    },
    thermometer: {
      type: String,
      enum: ["Yes", "No"],
    },
    fueltype: {
      enum: [
        "Charcoal",
        "Liquid Propane",
        "Natural Gas",
        "Natural Gas/Propane",
        "Wood Chips",
      ],
    },
    ignitiontype: {
      enum: [
        "Continuous Spark",
        "Electrical",
        "Manual",
        "Propane",
        "Single Spark Ignition",
      ],
    },
    numberOfMainBurner: {
      enum: [
        "1 Burner",
        "2 Burner",
        "3 Burner",
        "4 Burner",
        "5 Burner",
        "6 Burner",
      ],
    },
    technology: {
      enum: ["Bluetooth", "WiFi"],
    },
    color: {
      type: String,
      enum: [
        "Black",
        "Black/Silver",
        "Blue",
        "Copper",
        "Deep Ocean Blue",
        "Fireman Red",
        "GRAY",
        "Green",
        "Indigo",
        "Orange",
        "RED",
        "Silver",
        "Stainless Steel",
        "Titanium",
      ],
    },
    brand: {
      type: String,
      enum: [
        "Weber",
        "Treager",
        "Big Green Egg",
        "Blackstone",
        "Ooni",
        "Gozney",
        "Char-Broil",
        "Meat Chunch BBQ",
      ],
    },
    // ratings: [
    //   {
    //     star: Number,
    //     postedBy: { type: ObjectId, ref: "User" },
    //   },
    // ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
