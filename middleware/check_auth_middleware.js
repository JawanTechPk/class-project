const jwt = require("jsonwebtoken");
const { Users_Schema } = require("../models/Users_Model");

const check_auth_middleware = async (req, res, next) => {
  try {
    const auth_token = req.cookies.auth_token;

    const verify_token = jwt.verify(auth_token, process.env.JWT_SECRET_KEY);

    if (!verify_token) {
      return res
        .status(402)
        .json({ success: false, message: "Unauthorize user" });
    }

    const user_id = verify_token.user_id;

    const find_user = await Users_Schema.findById(user_id);

    req.user = find_user;
    next();

    // return res.json({ success: true, data: find_user });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
};

module.exports = { check_auth_middleware };
