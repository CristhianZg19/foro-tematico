"use client";

import {useEffect, useState} from "react";
import axios from "axios";
import {useRouter} from "next/navigation";
import styles from "../styles/Forum.module.css";

export default function Forum() {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState({}); // Estado para almacenar comentarios por post
    const [postContent, setPostContent] = useState(""); // Estado para el contenido del post
    const [title, setTitle] = useState(""); // Estado para el título del post
    const router = useRouter();
    const [userId, setUserId] = useState(null); // Estado para almacenar el userId
    const [username, setUsername] = useState(null); 
    
       // Verifica si estamos en el cliente antes de acceder a localStorage
       useEffect(() => {
        if (typeof window !== "undefined") {
            const storedUserId = localStorage.getItem("userId");
            const storedUsername = localStorage.getItem("username");
            if (!storedUserId) {
                router.push('/'); // Redirige si no hay userId
            } else {
                setUserId(storedUserId);
                setUsername(storedUsername);
            }
        }
    }, [router]); 
    
    useEffect(() => {
        if (userId) {
            const fetchPosts = async () => {
                try {
                    const response = await axios.get("http://localhost:5000/posts");
                    setPosts(response.data);
                    const initialComments = {};
                    response.data.forEach(post => {
                        initialComments[post.id] = ""; // Inicializa el comentario vacío para cada post
                    });
                    setComments(initialComments); // Inicializa los comentarios
                } catch (error) {
                    console.error("Error fetching posts:", error);
                    alert("Failed to fetch posts");
                }
            };

            fetchPosts();
        }
    }, [userId]); // Solo ejecuta la carga de posts cuando userId esté disponible


    const handleCreatePost = async () => {
        if (!postContent) {
            alert("Por favor, escribe algo antes de publicar.");
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:5000/create-post",
                {content: postContent, title, userId}
            );

            if (response.status === 201) {
                // Agregar el nuevo post a la lista de posts
                setPosts((prevPosts) => [
                    ...prevPosts,
                    {...response.data, comments: []}
                ]);
                alert("Post creado con éxito!");
                setTitle(""); // Limpiar el estado y el input
                setPostContent(""); // Limpiar el estado y el textarea
            } else {
                alert("Error al crear el post.");
            }
        } catch (error) {
            console.error("Error creando el post:", error);
            alert("Ocurrió un error al intentar crear el post.");
        }
    };

    const handleCommentSubmit = async (postId) => {
        try {
            const response = await axios.post(
                `http://localhost:5000/posts/${postId}/comments`,
                {content: comments[postId], userId} // Usar el comentario del estado para ese post
            );

            if (response.status === 201) {
                setPosts((prevPosts) =>
                    prevPosts.map((post) =>
                        post.id === postId
                            ? {...post, comments: [...post.comments, response.data]}
                            : post
                    )
                );
                setComments((prevComments) => ({...prevComments, [postId]: ""})); // Limpiar el comentario para ese post
                alert("Comentario añadido con éxito!");
            } else {
                alert("Error al agregar el comentario.");
            }
        } catch (error) {
            console.error("Error añadiendo comentario:", error);
            alert("Error al añadir comentario.");
        }
    };




    const handleLogout = () => {
        localStorage.removeItem("role");
        localStorage.removeItem("userId");

        router.push('/');
    };

    return (
        <div className={styles.forumContainer}>
            <div className={styles.header}>
                <h1 className={styles.title}>Foro sobre temas actuales
                    <button className={styles.logoutButton} onClick={handleLogout}>
                        SALIR
                    </button>
                </h1>
            </div>
            <div className={styles.createPostContainer}>
                <p className={styles.createPostAuthor}>Publicando como:
                    <span className={styles.createPostAuthorName}> {username}</span></p>
                <input className={styles.createPostInput} placeholder="Título del post..." value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea
                    className={styles.createPostInput}
                    placeholder="Escribir post..."
                    value={postContent} // Vinculamos el estado al textarea
                    onChange={(e) => setPostContent(e.target.value)} // Actualizamos el estado cuando el usuario escribe
                />
                <button className={styles.createPostButton} onClick={handleCreatePost}>
                    Publicar Tema
                </button>
            </div>




            <ul className={styles.postList}>
                {posts.slice().reverse().map((post, index) => (
                    <li key={index} className={styles.postItem}>  {/* Usa 'index' como fallback */}
                        <h3 className={styles.postTitle}>{post.title}</h3>
                        <p className={styles.postMeta}>{post.authorPost} - {new Date(post.created_atPost).toLocaleString()}</p>
                        <p className={styles.postContent}>{post.content}</p>
                        <div className={styles.commentSection}>
                            <h4>Comentarios</h4>
                            {post.comments?.map((comment) => (
                                <div key={comment.id} className={styles.commentItem}>
                                    <p className={styles.commentContent}>{comment.content}</p>
                                    <div className={styles.commentMeta}>
                                        <span className={styles.commentAuthor}>{comment.author}</span>
                                        <span className={styles.commentDate}>
                                            {new Date(comment.created_at).toLocaleString()}
                                        </span>
                                    </div>
                                </div>
                            ))}
                            <div className={styles.commentInputContainer}>
                                <input
                                    type="text"
                                    value={comments[post.id] || ""} // Vincula el comentario con el post
                                    placeholder="Escribir comentario..."
                                    onChange={(e) => setComments((prevComments) => ({
                                        ...prevComments,
                                        [post.id]: e.target.value, // Actualiza solo el comentario para ese post
                                    }))}
                                />
                            </div>

                            <button
                                className={styles.commentButton}
                                onClick={() => handleCommentSubmit(post.id)}
                            >
                                Comentar
                            </button>
                        </div>
                    </li>
                ))}

            </ul>
        </div>
    );
}
