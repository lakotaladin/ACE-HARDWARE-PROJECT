const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      maxlength: 200,
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
      default: "No",
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
      enum: [
        "Carbon Steel",
        "Cast Iron",
        "Cold Rolled Steel",
        "Procelain",
        "Procelain Coated Cast Iron",
        "No",
      ],
      default: "No",
    },
    primaryOutputBurner: {
      type: String,
      enum: [
        "<5000 British Thermal Unit",
        ">5001 British Thermal Unit",
        "20001-30000 British Thermal Unit",
        "30001-40000 British Thermal Unit",
        "40001-50000 British Thermal Unit",
        "5000-20000 British Thermal Unit",
        "50001-20000 British Thermal Unit",
        "No",
      ],
      default: "No",
    },
    watt: {
      type: String,
      enum: [
        "1560 Watt",
        "1750 Watt",
        "1760 Watt",
        "250 Watt",
        "450 Watt",
        "No",
      ],
      default: "No",
    },
    flavorfamily: {
      type: String,
      trim: true,
      enum: ["Bland", "Sweet", "No"],
      default: "No",
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
        "No",
      ],
      default: "No",
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
      default: "No",
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
        "No",
      ],
      default: "No",
    },
    technology: {
      type: String,
      enum: ["Bluetooth", "WiFi", "No"],
      default: "No",
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
        "Red",
        "Green",
        "Titanium",
        "Purple",
        "Navy",
        "White",
        "Charcoal",
        "Indigo",
        "Orange",
        "Stainless Steel",
        "Deep Ocean Blue",
        "No",
      ],
      default: "Black",
    },
    numberofblade: {
      type: String,
      enum: ["No", "1 Blade", "2 Blade", "3 Blade"],
      default: "No",
    },
    yardsize: {
      type: String,
      enum: ["No", "< 1 Acre", "1-2 Acre", "2-4 Acre"],
      default: "No",
    },
    maxforwardspeed: {
      type: String,
      enum: [
        "4 Mile Per Hour",
        "5.5 Mile Per Hour",
        "7 Mile Per Hour",
        "8 Mile Per Hour",
        "No",
      ],
      default: "No",
    },
    poweredby: {
      type: String,
      enum: ["Battery", "Gas", "No"],
      default: "No",
    },
    primarycookingarea: {
      type: String,
      enum: ["524 square inch", "535 square inch", "No"],
      default: "No",
    },
    warranty: {
      type: String,
      enum: ["1 Year", "2 Year", "3 Year", "4 Year", "5 Year", "10 Year", "No"],
      default: "No",
    },
    brand: {
      type: String,
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
        "No",
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
