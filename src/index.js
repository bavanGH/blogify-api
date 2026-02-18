const express = require("express");
const app = express();

const postsRoutes = require("./routes/posts.routes");

app.use(express.json());
app.use("/", postsRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
