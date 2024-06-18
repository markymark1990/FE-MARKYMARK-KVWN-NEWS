import { getCommentsById } from "../utils/api.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CommentsByArticle = () => {

    const { articleId } = useParams()
    const [comments, setComments] = useState ([])
    const [showComments, setShowComments] = useState (false)

    useEffect(() => {
        getCommentsById(articleId).then((response) => {
            setComments(response.data.comments)
        })
    }, [articleId])

    const toggleComments = () => {
        setShowComments(!showComments)
    }

    return (
        <div className="comments-section"> 
            <h3 onClick={toggleComments}>
                Comments {showComments ? '▲' : '▼'}</h3>
            {showComments && comments.map((comment) => (
                <div key={comment.comment_id} className="comment">
                    <p><strong>{comment.author}</strong> ({new Date(comment.created_at).toLocaleDateString()})</p>
                    <p>{comment.body}</p>
                </div>
            ))}
        </div>
    )
}

export default CommentsByArticle