const User = require("../models/user");

exports.registerUser = async (req, res) => {
  // const { email, name, lastName, streetAddress, phone, phoneType, month } = req.body;
  const user = new User(req.body);
  user.role = "subscriber";
  user.verified = false;
  user.cart = [];
  try {
    await user.save();
    res.status(201).json(user);
  } catch (e) {
    res.status(400).json({ error: e });
  }
};

exports.createOrUpdateUser = async (req, res) => {
  const { email } = req.user;

  const user = await User.findOneAndUpdate({ email }, { new: true });
  if (user) {
    console.log("USER UPDATED", user);
    res.json(user);
  } else {
    const newUser = await new User({
      email,
    }).save();
    console.log("USER CREATED", newUser);
    res.json(newUser);
  }
};

exports.currentUser = async (req, res) => {
  User.findOne({ email: req.user.email }).exec((err, user) => {
    if (err) throw new Error(err);
    res.json(user);
  });
};
