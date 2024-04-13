const jwt = require("jsonwebtoken"); 
const User = require("../models/User");

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      msg: "Bad request. Please add email and password in the request body",
    });
  }

  let foundUser = await User.findOne({ email: req.body.email });
  if (foundUser) {
    const isMatch = await foundUser.comparePassword(password);

    if (isMatch) {
      const token = jwt.sign(
        { id: foundUser._id, name: foundUser.name },
        process.env.JWT_SECRET,
        {
          expiresIn: "30d",
        }
      );

      return res.status(200).json({ msg: "user logged in", token });
    } else {
      return res.status(400).json({ msg: "Bad password" });
    }
  } else {
    return res.status(400).json({ msg: "Bad credentails" });
  }
};

// Inside the search controller
const search2 = async (req, res) => {
  const { email } = req.query;
  try {
    const results = await User.find({ email }).limit(7);
    if (results.length > 0) {
      res.status(200).json(results);
    } else {
      res.status(404).json({ message: 'No records found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



const search = async (req, res) => {
  const { firNo } = req.query;
  try {
      const result = await User.findOne({ firNo: firNo });
      if (result) {
          res.status(200).json(result);
      } else {
          res.status(404).json({ message: 'No record found' });
      }
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};


const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `Hello, ${req.user.name}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
    unitName: req.user.unitName,
    unitId: req.user.unitId,
    designation: req.user.designation,
    districtName: req.user.districtName,
    firNo: req.user.firNo,
    year: req.user.year,
    month: req.user.month,
    firDate: req.user.firDate,
    firType: req.user.firType,
    firStage: req.user.firStage,
    crimeGroupName: req.user.crimeGroupName,
    ioName: req.user.ioName,
    firId: req.user.firId,
    policeId: req.user.policeId,
    policePassword: req.user.policePassword,
    underOfficer: req.user.underOfficer,
    topCase1: req.user.topCase1,
    topCase2: req.user.topCase2,
    topCase3: req.user.topCase3,
    topCase1no: req.user.topCase1no,
    topCase2no: req.user.topCase2no,
    topCase3no: req.user.topCase3no,
    others: req.user.others,
    pendingTrial: req.user.pendingTrial,
    underInvestigation: req.user.underInvestigation,
    convicted: req.user.convicted,
    undetected: req.user.undetected,
    designation: req.user.designation,
    email: req.user.email,
    password: req.user.password,
    username: req.user.username,
    jan: req.user.jan,
    feb: req.user.feb,
    march: req.user.march,
    april: req.user.april,
    may: req.user.may,
    jun: req.user.jun,
    jul: req.user.jul,
    aug: req.user.aug,
    sep: req.user.sep,
    oct: req.user.oct,
    nov: req.user.nov,
    dec: req.user.dec,

  });
};

const getAllUsers = async (req, res) => {
  let users = await User.find({});

  return res.status(200).json({ users });
};

const register = async (req, res) => {
  let foundUser = await User.findOne({ email: req.body.email });
  if (foundUser === null) {
    let {
      username,
      email,
      password,
      districtName,
      unitName,
      firNo,
      year,
      month,
      firDate,
      firType,
      firStage,
      crimeGroupName,
      ioName,
      firId,
      unitId,
      designation,
      policeId,
      policePassword,
      underOfficer,
      topCase1,
      topCase2,
      topCase3,
      pendingTrial,
      underInvestigation,
      convicted,
      undetected,
    } = req.body;
    if (username.length && email.length && password.length) {
      const person = new User({
       name: username,
        email,
        password,
        districtName,
        unitName,
        firNo,
        year,
        month,
        firDate,
        firType,
        firStage,
        crimeGroupName,
        ioName,
        firId,
        unitId,
        designation,
        policeId,
        policePassword,
        underOfficer,
        topCase1,
        topCase2,
        topCase3,
        pendingTrial,
        underInvestigation,
        convicted,
        undetected,
      });
      await person.save();
      return res.status(201).json({ person });
    } else {
      return res
        .status(400)
        .json({ msg: "Please add all values in the request body" });
    }
  } else {
    return res.status(400).json({ msg: "Email already in use" });
  }
};





module.exports = {
  login,
  register,
  dashboard,
  getAllUsers,
  search,
  search2
}; 
