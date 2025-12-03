let express = require("express");
let router = express.Router();
let Post = require("../models/postModel");

router.get("/", async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
});

router.post("/", async (req, res) => {
    const post = new Post(req.body);
    await post.save();
    res.json({ message: "Post created!", post });
});

router.put("/:id", async (req, res) => {
    const updated = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
});

router.delete("/:id", async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: "Post deleted" });
});

module.exports = router;
