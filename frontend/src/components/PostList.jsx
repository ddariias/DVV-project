import React from "react";

export default function PostList({ posts, setEditingPost, deletePost }) {
    return (
        <div className="post-list">
            {posts.map((post) => (
                <div className="post-card" key={post._id}>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <small>Author: {post.author}</small>
                    <div className="buttons">
                        <button
                            className="btn-edit"
                            onClick={() => setEditingPost(post)}
                        >
                            Edit
                        </button>
                        <button
                            className="btn-delete"
                            onClick={() => deletePost(post._id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
