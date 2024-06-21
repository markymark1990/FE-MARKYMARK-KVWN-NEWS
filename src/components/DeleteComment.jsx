import { deleteComment } from "../utils/api";
import { useState, useContext } from "react";
import { UserContext } from "../UserContext";

const DeleteComment = ({ commentId, onDelete, commentAuthor }) => {
  const { user: loggedInUser } = useContext(UserContext);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    deleteComment(commentId).then(() => {
      setIsDeleting(false);
      onDelete(commentId);
    });
  };

  return (
    <>
      {loggedInUser && loggedInUser.username === commentAuthor && (
        <button onClick={handleDelete} disabled={isDeleting}>
          {isDeleting ? "Deleting..." : "Delete"}
        </button>
      )}
    </>
  );
};

export default DeleteComment;
