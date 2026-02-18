const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts.controller");

router.get("/posts", postsController.getAllPosts);

module.exports = router;
