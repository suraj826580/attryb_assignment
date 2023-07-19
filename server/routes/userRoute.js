const { Router } = require("express");
const jwt = require("jsonwebtoken");
const { userModel } = require("../models/userModal");
const bcrypt = require("bcrypt");

const userRoute = Router();

userRoute.post("/register", async (req, res) => {
  const userdata = req.body;
  try {
    bcrypt.hash(userdata.password, 5, async (err, hash) => {
      if (hash) {
        const user = new userModel({ ...userdata, password: hash });
        await user.save();
        res.send("Registered_Successfully");
      } else {
        res.status(200).send({ err, msg: "Try again after sometime" });
      }
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

// Login route

userRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    if (email && password) {
      const user = await userModel.findOne({ email });
      if (user) {
        bcrypt.compare(password, user.password, (err, result) => {
          if (result) {
            const token = jwt.sign({ userRelation: user._id }, "masai", {
              expiresIn: "1h",
            });
            res.send({ msg: "login Successfull", token: token });
          } else {
            res.status(400).send({ msg: "Incorrect Password" });
          }
        });
      } else {
        res.send({ msg: "wrong credentials" });
      }
    } else {
      res.status(200).send({ msg: "email and password must be provided" });
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = { userRoute };
