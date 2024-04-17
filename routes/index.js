const express = require("express");
const {
  login_controller,
  signup_controller,
  check_auth_controller,
} = require("../controllers/auth_controllers");
const {
  check_auth_middleware,
} = require("../middleware/check_auth_middleware");
const { create_post_controller } = require("../controllers/posts_controllers");

const router = express.Router();

// router.get("/check-route", (req, res) => {
//   res.send("<h1>Route is working...!</h1>");
// });

router.post("/signup", signup_controller);
router.post("/login", login_controller);
router.get("/check-auth", check_auth_middleware, check_auth_controller);

router.post("/create-post", check_auth_middleware, create_post_controller);

module.exports = router;
