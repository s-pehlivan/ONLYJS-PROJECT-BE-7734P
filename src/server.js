require("dotenv").config();

const express = require("express");
const categoryRoutes = require("./routes/category");
const postRoutes = require("./routes/posts");
const commentRoutes = require("./routes/comments");

const app = express();

app.use(express.json());
app.use("/categories", categoryRoutes);
app.use("/posts", postRoutes);
app.use("/comments", commentRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log("hello world");
});
