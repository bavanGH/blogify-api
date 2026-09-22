const express = require("express");
const app = express();

app.use(express.json());

// root route (VERY IMPORTANT for Render test)
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Blogify API is running 🚀"
  });
});

// routes
const routes = require("./routes");
app.use("/api/v1", routes);

module.exports = app;