import Comment from "./components/Comment";
import { addComment, deleteComment } from "./utils";
import { useComments } from "./context/CommentsProvider";
// More comments can go here

function App() {
  const { comments, setComments } = useComments();

  const handleAddComment = (commentId, text) => {
    const newTree = addComment(comments, commentId, text);
    setComments({ ...newTree });
  };

  const handleDeleteComment = (commentId) => {
    const newTree = deleteComment(comments, commentId);
    setComments({ ...newTree });
  };
  return (
    <div className="flex w-full justify-center flex-col font-sans">
      <div className="mx-6 mt-4">
        <h1 className="text-3xl font-semibold">Nested Comments System</h1>
      </div>
      <div className="font-bold mt-4 ml-6">
        <Comment
          comment={comments}
          handleAddComment={handleAddComment}
          handleDeleteComment={handleDeleteComment}
        />
      </div>
    </div>
  );
}

export default App;
