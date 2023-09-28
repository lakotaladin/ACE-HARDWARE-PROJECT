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
      default: "/",
    },
    isFreePickup: {
      type: String,
      enum: ["Yes", "No"],
      default: "Free",
    },
    recommended: {
      type: String,
      enum: ["Yes", "No"],
      default: "No",
    },
    frontSideShelf: {
      type: String,
      enum: ["Yes", "No"],
      default: "No",
    },
    assembly: {
      type: String,
      type: String,
      enum: ["Yes", "No", "Free"],
      default: "Free",
    },
    gateSurfaceMaterial: {
      type: String,
      trim: true,
      enum: [
        "Carbon Steel",
        "Cast Iron",
        "Cold Rolled Steel",
        "Procelain",
        "Procelain Coated Cast Iron",
      ],
      default: "/",
    },
    primaryOutputBurner: {
      type: String,
      trim: true,
      enum: [
        "<5000 British Thermal Unit",
        ">5001 British Thermal Unit",
        "20001-30000 British Thermal Unit",
        "30001-40000 British Thermal Unit",
        "40001-50000 British Thermal Unit",
        "5000-20000 British Thermal Unit",
        "50001-20000 British Thermal Unit",
      ],
      default: "/",
    },

    fueltype: {
      type: String,
      trim: true,
      enum: [
        "Charcoal",
        "Liquid Propane",
        "Natural Gas",
        "Natural Gas/Propane",
        "Wood Chips",
      ],
      default: "/",
    },
    ignitiontype: {
      type: String,
      trim: true,
      enum: [
        "Continuous Spark",
        "Electrical",
        "Manual",
        "Propane",
        "Single Spark Ignition",
      ],
      default: "/",
    },
    numberOfMainBurner: {
      type: String,
      trim: true,
      enum: [
        "1 Burner",
        "2 Burner",
        "3 Burner",
        "4 Burner",
        "5 Burner",
        "6 Burner",
      ],
      default: "/",
    },
    technology: {
      type: String,
      enum: ["Bluetooth", "WiFi"],
      default: "/",
    },
    color: {
      type: String,
      trim: true,
      enum: [
        "Black",
        "Black/Silver",
        "Blue",
        "Fireman Red",
        "GRAY",
        "Silver",
        "Stainless Steel",
        "Titanium",
        "Red",
        "Green",
      ],
      default: "/",
    },
    numberofblades: {
      type: String,
      trim: true,
      enum: ["1 Blade", "2 Blade", "3 Blade"],
      default: "/",
    },
    yardsize: {
      type: String,
      trim: true,
      enum: ["< 1 Acre", "1-2 Acre", "2-4 Acre"],
      default: "/",
    },
    maxforwardspeed: {
      type: String,
      trim: true,
      enum: [
        "4 Mile Per Hour",
        "5.5 Mile Per Hour",
        "7 Mile Per Hour",
        "8 Mile Per Hour",
      ],
      default: "/",
    },
    poweredby: {
      type: String,
      trim: true,
      enum: ["Battery", "Gas"],
      default: "/",
    },
    primarycookingarea: {
      type: String,
      trim: true,
      enum: ["524 square inch", "535 square inch"],
      default: "/",
    },
    warranty: {
      type: String,
      trim: true,
      enum: ["1 Year", "2 Year", "3 Year", "4 Year", "5 Year", "10 Year"],
      default: "/",
    },
    brand: {
      type: String,
      trim: true,
      text: true,
      enum: [
        "Weber",
        "Treager",
        "Big Green Egg",
        "Blackstone",
        "Pit Boss",
        "Loco",
        "Ooni",
        "Gozney",
        "Char-Broil",
        "Meat Chunch BBQ",
        "Ace",
        "Cadet",
        "Comfort Zone",
        "Crown",
        "Dial",
        "Ghp",
        "American Wick",
        "Dewalt",
        "Mr. Heater",
        "Tru Aire",
        "Easy Heat",
        "Perfect Aire",
        "2000 Flushes",
        "30 Secounds",
        "Alogma",
        "Ball",
        "Benjamin Moore",
        "Beyound Bright",
        "American Lawn Mower Company",
        "Arnold",
        "Craftsman",
        "Agri-Fab",
        "Black + Decker",
        "Briggs & Stratton",
        "Ego",
      ],
    },
    ratings: [
      {
        star: Number,
        postedBy: { type: ObjectId, ref: "User" },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
