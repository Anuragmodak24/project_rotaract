const express = require("express");
const Donor = require("../Models/donor.model");
const User= require("../Models/user.model.js")
const jwt = require("jsonwebtoken");

const route = express.Router();

route.post("/donate", async (req, res) => {
  //console.log(req.body)
  const { name, gender, birthyear, mobile, email, address, donation } =
    req.body;
  try {
       const isPresent = await User.findOne({email})
    if(!isPresent){
      return res.status(404).send({message:'enter the email used for login'})
    }
    const donorData = new Donor({
      name,
      gender,
      birthyear,
      mobile,
      email,
      address,
      donation,
      paymentScreenshot: null,
    });
    const token = jwt.sign(
      {
        id: isPresent._id,
        name: isPresent.name,
        email: isPresent.email,
      },
      "ANURAG1234",
      {
        expiresIn: "28days",
      }
    );
    await donorData.save();
    res
      .status(201)
      .send(
      {message: donorData.donation === "donor" ? "Donor Signed up" : "Member Signed up",token}
      );
  } catch (error) {
    res.status(500).send({'message':error.message});
  }
});

route.get("/donate", async (req, res) => {
  try {
    const getDonor = await Donor.find();
    res.status(200).send({ Donor: getDonor });
  } catch (error) {
    res.status(500).send({ "message": error.message });
  }
});

module.exports = route;


