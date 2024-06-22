import { deleteComment } from "../utils/api";
import { useState, useContext } from "react";
import { UserContext } from "../UserContext";

const DeleteComment = ({ commentId, onDelete, commentAuthor }) => {
  const { user: loggedInUser } = useContext(UserContext);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState(null);

  const handleDelete = () => {
    setIsDeleting(true);
    setDeleteError(null);

    deleteComment(commentId).then(() => {
      setIsDeleting(false);
      onDelete(commentId);
    })
    .catch((error) => {
        setIsDeleting(false);
        setDeleteError("Failed to delete comment. Please try again."); 
        console.error("Error deleting comment:", error);
      });
  };

  return (
    <div>
      {loggedInUser && loggedInUser.username === commentAuthor && (
          <button onClick={handleDelete} disabled={isDeleting} className="delete-button">
          {isDeleting ? "Deleting..." : "Delete"}
        </button>
      )}
         {deleteError && <p className="delete-error-message">{deleteError}</p>}
      </div>    
  );
};

export default DeleteComment;
