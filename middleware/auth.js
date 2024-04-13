const jwt = require('jsonwebtoken'); 
const User = require('../models/User');

const authenticateUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ msg: "Unauthorized. Please add a valid token" });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, name, unitName } = decoded;

    // Fetch additional user details from the database if needed
    const user = await User.findById(id);

    // Attach user information to req.user
    req.user = { id, name, unitName, ...user._doc }; // Spread user document properties

    next();
  } catch (error) {
    return res.status(401).json({ msg: "Unauthorized. Please add a valid token" });
  }
};

module.exports = authenticateUser;



