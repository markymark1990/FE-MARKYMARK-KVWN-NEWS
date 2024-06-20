import { useParams } from "react-router-dom";
import { addComment } from "../utils/api";
import { useState, useContext } from "react";
import { UserContext } from "../UserContext";

const AddComment = ({onCommentAdded}) => {


    const { articleId } = useParams()
    const { user } = useContext(UserContext)
    const [comment, setComment] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)


const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitting(true) 

    addComment(articleId, {
        body: comment,
        username: user.username,
    })
    .then((response) => {
        setComment('')
        setIsSubmitting(false)
        onCommentAdded(response.data.comment)
    })
    .catch((error) => {
        console.error('Error adding comment:', error);
        setIsSubmitting(false);
    });
}

const handleChange = (event) => {
    setComment(event.target.value)
}


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea 
                value={comment}
                onChange={handleChange}
                placeholder="Add a comment..."
                required
                ></textarea>
                <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    )
}

export default AddComment

