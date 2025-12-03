import React, { useState, useEffect } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

export default function App() {
    const [posts, setPosts] = useState([]);
    const [editingPost, setEditingPost] = useState(null);

    const loadPosts = async () => {
        const res = await fetch("/posts");
        const data = await res.json();
        setPosts(data);
    };

    useEffect(() => {
        loadPosts();
    }, []);

    const createPost = async (post) => {
        await fetch("/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post),
        });
        loadPosts();
    };

    const deletePost = async (id) => {
        await fetch("/posts/" + id, { method: "DELETE" });
        loadPosts();
    };

    const updatePost = async (id, updatedPost) => {
        await fetch("/posts/" + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedPost),
        });
        setEditingPost(null);
        loadPosts();
    };

    return (
        <div className="container">
            <h1>Post Blog</h1>
            <PostForm
                createPost={createPost}
                editingPost={editingPost}
                updatePost={updatePost}
            />
            <PostList
                posts={posts}
                setEditingPost={setEditingPost}
                deletePost={deletePost}
            />
        </div>
    );
}
