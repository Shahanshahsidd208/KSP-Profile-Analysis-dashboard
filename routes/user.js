const express = require("express"); 
const router = express.Router();

const { login, register, dashboard, getAllUsers ,search,search2} = require("../controllers/user");
const authMiddleware = require('../middleware/auth');

router.post("/login", login);
router.post("/register", register);
router.get("/dashboard", authMiddleware, dashboard);
router.get("/users", getAllUsers);
router.get("/search", search);
router.get("/search2", search2);





module.exports = router;
