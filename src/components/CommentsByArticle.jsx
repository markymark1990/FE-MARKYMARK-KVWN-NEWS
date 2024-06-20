import { getCommentsById } from "../utils/api.js";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import AddComment from "./AddComment.jsx";
import DeleteComment from "./DeleteComment.jsx";
import { UserContext } from "../UserContext.jsx";


const CommentsByArticle = () => {


    const { articleId } = useParams()
    const { user: loggedInUser } = useContext(UserContext)
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

    const handleCommentDeleted = (deletedCommentId) => {
        setComments((prevComments) => 
        prevComments.filter((comment) => comment.comment_id !== deletedCommentId)
      )
    }


    return (
        <div className="comments-section">
            <h3 onClick={toggleComments}>
                Comments {showComments ? '▲' : '▼'}
            </h3>

            {isLoading && <p>Loading comments...</p>}
            {!isLoading && showComments && (
                
            <>
            {loggedInUser ? (
                <AddComment onCommentAdded={handleCommentAdded}/>
            ) : (
                <p>Login to add a comment</p>
            )}
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        <div key={comment.comment_id} className="comment">
                            <p><strong>{comment.author}</strong> ({new Date(comment.created_at).toLocaleDateString()})</p>
                            <p>{comment.body}</p>
                            <DeleteComment 
                            commentId={comment.comment_id}
                            commentAuthor={comment.author}
                            onDelete={handleCommentDeleted}/>
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