import React, { useState, useEffect } from "react";

export default function PostForm({ createPost, editingPost, updatePost }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [author, setAuthor] = useState("");

    useEffect(() => {
        if (editingPost) {
            setTitle(editingPost.title);
            setDescription(editingPost.description);
            setAuthor(editingPost.author);
        }
    }, [editingPost]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const post = { title, description, author };
        if (editingPost) {
            updatePost(editingPost._id, post);
        } else {
            createPost(post);
        }
        setTitle("");
        setDescription("");
        setAuthor("");
    };

    return (
        <form className="post-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
            />
            <button type="submit">{editingPost ? "Save" : "Create Post"}</button>
        </form>
    );
}
