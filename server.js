const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5000;

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "foro_tematico"
});

db.connect((err) => {
    if (err) {
        console.error("Database connection error: ", err);
    } else {
        console.log("Connected to MySQL database");
    }
});

app.post("/register", async (req, res) => {
    const { username, password, role = "user" } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = "INSERT INTO users (username, password, role) VALUES (?, ?, ?)";
        db.query(query, [username, hashedPassword, role], (err, result) => {
            if (err) {
                return res.status(500).json({ error: "User registration failed" });
            }
            res.status(201).json({ message: "User registered successfully" });
        });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    const query = "SELECT * FROM users WHERE username = ?";
    db.query(query, [username], async (err, results) => {
        if (err || results.length === 0) {
            return res.status(401).json({ error: "Credenciales invalidas" });
        }

        const user = results[0];
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: "Credenciales invalidas" });
        }

        res.json({ role: user.role, userId: user.id, username: user.username });
    });
});

app.post("/create-post", (req, res) => {
    const { title, content, userId } = req.body; 
    if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required" });
    }

    const query = "INSERT INTO forum_posts (user_id, title, content) VALUES (?, ?, ?)";
    db.query(query, [userId, title, content], (err, result) => {
        if (err) {
            console.error("Failed to create post:", err);
            return res.status(500).json({ error: "Failed to create post" });
        }

        const postId = result.insertId;

        res.status(201).json({
            id: postId,  
            title: title,
            content: content,
            comments: []  
        });
    });
});

app.get("/posts", (req, res) => {
    const query = `
        SELECT 
        fp.*,
        c.id AS comment_id, c.content AS comment_content,
        c.created_at AS comment_created_at, 
        c.user_id AS comment_user_id, u.username AS comment_author,
        u2.username AS authorPost, u2.created_at AS created_atPost
        FROM forum_posts fp
        LEFT JOIN comments c ON fp.id = c.post_id
        LEFT JOIN users u ON c.user_id = u.id
        LEFT JOIN users u2 ON fp.user_id = u2.id
    `;
    
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Failed to fetch posts" });
        }

        const posts = results.reduce((acc, row) => {
            let post = acc.find(post => post.id === row.id);
            if (!post) {
                post = {
                    id: row.id,
                    title: row.title,
                    content: row.content,
                    created_atPost: row.created_atPost,
                    authorPost: row.authorPost,
                    comments: []
                };
                acc.push(post);
            }

            if (row.comment_id) {
                post.comments.push({
                    id: row.comment_id,
                    content: row.comment_content,
                    created_at: row.comment_created_at,
                    user_id: row.comment_user_id,
                    author: row.comment_author
                });
            }

            return acc;
        }, []);

        res.json(posts);
    });
});

app.post("/add-comment", (req, res) => {
    const { postId, content, userId } = req.body;

    if (!content) {
        return res.status(400).json({ error: "Content is required" });
    }

    const query = "INSERT INTO comments (post_id, user_id, content) VALUES (?, ?, ?)";
    db.query(query, [postId, userId, content], (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Failed to add comment" });
        }
        res.status(201).json({ message: "Comment added successfully" });
    });
});

app.get("/comments/:postId", (req, res) => {
    const { postId } = req.params;

    const query = `
        SELECT comments.id, comments.content, comments.created_at, users.username 
        FROM comments 
        JOIN users ON comments.user_id = users.id 
        WHERE comments.post_id = ? 
        ORDER BY comments.created_at ASC
    `;
    db.query(query, [postId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Failed to fetch comments" });
        }
        res.json(results);
    });
});

app.post("/posts/:postId/comments", (req, res) => {
    const { postId } = req.params;
    const { content, userId } = req.body; 

    if (!content) {
        return res.status(400).json({ error: "Content is required" });
    }

    const query = "INSERT INTO comments (post_id, user_id, content) VALUES (?, ?, ?)";
    db.query(query, [postId, userId, content], (err, result) => {
        if (err) {
            console.error("Failed to add comment:", err);
            return res.status(500).json({ error: "Failed to add comment" });
        }

        const commentId = result.insertId;

        const selectQuery = `
            SELECT comments.id, comments.content, comments.created_at, users.username as author
            FROM comments
            JOIN users ON comments.user_id = users.id
            WHERE comments.id = ?
        `;
        
        db.query(selectQuery, [commentId], (err, commentResult) => {
            if (err) {
                return res.status(500).json({ error: "Failed to fetch comment" });
            }
            res.status(201).json(commentResult[0]);  
        });
    });
});

app.get("/posts/:postId/comments", (req, res) => {
    const { postId } = req.params;

    const query = `
        SELECT comments.id, comments.content, comments.created_at, users.username 
        FROM comments 
        JOIN users ON comments.user_id = users.id 
        WHERE comments.post_id = ? 
        ORDER BY comments.created_at ASC
    `;

    db.query(query, [postId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Failed to fetch comments" });
        }
        res.json(results);
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
