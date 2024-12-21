import { useEffect, useState } from "react"; //useState es un hook que permite añadir estado a los componentes funcionales y comunicarse co el servidor
import { useNavigate, useParams } from "react-router-dom"; //es unaherramienta que devuelve un objeto con los parámetros de la URL
import { buscar } from "../api/api";
import "../assets/css/componentes/card.css";


const Post = ({url}) => {

    const [post, setPost] = useState({});

    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        buscar(`/posts/${id}`, setPost).catch(() => {
            navigate("/not-found");
        });
    }, [id]);

    return (
        <main className="container flex flex--center">
            <article className="card post">
                <h2 className="post-card__title">{post.title}</h2>
                <p className="text__card">{post.body}</p>    
            </article> 
        </main>
    )
};

export default Post;