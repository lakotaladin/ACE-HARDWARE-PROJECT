const User = require("../models/user");

exports.registerUser = async (req, res) => {
  const { email, name, lastName, streetAddress, phone, phoneType, month } =
    req.body;

  const user = new User({
    email,
    name,
    lastName,
    streetAddress,
    phone,
    phoneType,
    month,
  });

  user.role = "subscriber";

  try {
    await user.save();
    res.status(201).json(user);
  } catch (e) {
    console.log(e);
    res.status(400).json({ error: e });
  }
};

exports.createOrUpdateUser = async (req, res) => {
  const { email, name, lastName, streetAddress, phone, phoneType, month } =
    req.body || req.user;

  console.log("new user", req.user);
  const user = await User.findOneAndUpdate(
    { email },
    { email, name, lastName, streetAddress, phone, phoneType, month },
    { new: true }
  );
  if (user) {
    // console.log("USER UPDATED", user);
    res.json(user);
  } else {
    res.status(500).end();
  }
  // else {
  //   const newUser = await new User({
  //     email,
  //     name,
  //     lastName,
  //     streetAddress,
  //     phone,
  //     phoneType,
  //     month,
  //     picture,
  //   }).save();
  //   // console.log("USER CREATED", newUser);
  //   res.json(newUser);
  // }
};

exports.currentUser = async (req, res) => {
  // console.log("user", req.user.email);
  User.findOne({ email: req.user.email }).exec((err, user) => {
    if (err) throw new Error(err);
    return res.status(200).json(user);
  });
};
