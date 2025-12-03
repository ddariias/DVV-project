require("dotenv").config();
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const postsRouter = require("./routes/posts");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

app.use("/posts", postsRouter);

const frontendPath = path.join(__dirname, "frontend/dist");
app.use(express.static(frontendPath));
app.get("*", (req, res) =>
    res.sendFile(path.join(frontendPath, "index.html"))
);


mongoose.connect(MONGO_URI)
    .then(() => console.log("DB connected"))
    .catch(err => console.log(err));

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
