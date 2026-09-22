const express = require("express");
const postsRoutes = require("./posts.routes");

const router = express.Router();

router.use("/posts", postsRoutes);

module.exports = router;