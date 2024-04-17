const Post_Schema = require("../models/Post_Model");

const create_post_controller = async (req, res, next) => {
  try {
    const user = req.user;
    const body = req.body;

    const create_post = await Post_Schema.create({
      ...body,
      user_id: user._id,
    });

    return res.json({ success: true, data: create_post });
  } catch (error) {}
};

module.exports = { create_post_controller };
