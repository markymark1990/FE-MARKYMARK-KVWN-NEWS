import { getCommentsById } from "../utils/api.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddComment from "./AddComment.jsx";


const CommentsByArticle = () => {


    const { articleId } = useParams()
    const [comments, setComments] = useState([])
    const [showComments, setShowComments] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        getCommentsById(articleId).then((response) => {
            setComments(response.data.comments)
            setIsLoading(false);
        })
            .catch((error) => {
                if (error.response && error.response.status === 404) {
                    setComments([]);
                    setIsLoading(false);
                } else {
                    setError(error);
                    setIsLoading(false);
                }
            })
    }, [articleId])


    const toggleComments = () => {
        setShowComments(!showComments)
    }

    const handleCommentAdded = (newComment) => {
        setComments((prevComments) => [newComment, ...prevComments])
    }


    return (
        <div className="comments-section">
            <h3 onClick={toggleComments}>
                Comments {showComments ? '▲' : '▼'}
            </h3>

            {isLoading && <p>Loading comments...</p>}
            {!isLoading && showComments && (
                
            <>
                <AddComment onCommentAdded={handleCommentAdded}/>
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        <div key={comment.comment_id} className="comment">
                            <p><strong>{comment.author}</strong> ({new Date(comment.created_at).toLocaleDateString()})</p>
                            <p>{comment.body}</p>
                        </div>
                    ))
                ) : (
                    <p>No comments yet</p>
                 )}
            </>
            )}
        </div>
    )
}

export default CommentsByArticle