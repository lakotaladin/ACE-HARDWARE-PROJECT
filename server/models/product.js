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
      default: "Yes",
    },
    thermometer: {
      type: String,
      required: true,
      enum: ["Yes", "No"],
    },
    // For product card
    // isFreePickup: {
    //   type: String,
    //   enum: ["Yes", "No"],
    //   default: "Yes",
    // },
    // For sort by option
    // recommended: {
    //   type: String,
    //   enum: ["Yes", "No"],
    //   default: "No",
    // },
    // availability: {
    //   type: String,
    //   enum: ["Yes", "No"],
    //   default: "Yes",
    // },
    // frontSideShelf: {
    //   type: String,
    //   enum: ["Yes", "No"],
    //   default: "No",
    // },
    // assembly: {
    // type: String,
    //   type: String,
    //   enum: ["Yes", "No"],
    //   default: "Yes",
    // },
    // gateSurfaceMaterial: {
    // type: String,
    //   enum: [
    //     "Carbon Steel",
    //     "Cast Iron",
    //     "Cold Rolled Steel",
    //     "Procelain",
    //     "Procelain Coated Cast Iron",
    //   ],
    // required: true,
    // },
    // primaryOutputBurner: {
    // type: String,
    //   enum: [
    //     "<5000 British Thermal Unit",
    //     ">5001 British Thermal Unit",
    //     "20001-30000 British Thermal Unit",
    //     "30001-40000 British Thermal Unit",
    //     "40001-50000 British Thermal Unit",
    //     "5000-20000 British Thermal Unit",
    //     "50001-20000 British Thermal Unit",
    //   ],
    // required: true,
    // },
    // frontSideShelf: {
    //   type: String,
    //   enum: ["Clearance", "Sale"],
    //   default: "",
    // },
    // required: true,
    burnerOutputRange: {
      type: String,
      enum: [
        "Charcoal",
        "Liquid Propane",
        "Natural Gas",
        "Natural Gas/Propane",
        "Wood Chips",
      ],
    },
    fueltype: {
      type: String,
      enum: [
        "Charcoal",
        "Liquid Propane",
        "Natural Gas",
        "Natural Gas/Propane",
        "Wood Chips",
      ],
    },
    ignitiontype: {
      type: String,
      enum: [
        "Continuous Spark",
        "Electrical",
        "Manual",
        "Propane",
        "Single Spark Ignition",
      ],
    },
    numberOfMainBurner: {
      type: String,
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
      type: String,
      enum: ["Bluetooth", "WiFi"],
      default: "",
    },
    color: {
      type: String,
      enum: [
        "Black",
        "Black/Silver",
        "Blue",
        "Fireman Red",
        "GRAY",
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
