import { useState } from "react";
import PropTypes from "prop-types";
import InputForm from "./InputForm";

const Comment = ({ comment, handleAddComment, handleDeleteComment }) => {
  const [input, setInput] = useState("");
  const [showInput, setShowInput] = useState(false);

  const addCommentHandler = () => {
    if (input === "") {
      alert("Please add comment!");
      return;
    }
    handleAddComment(comment.id, input);
    setShowInput(false);
    setInput("");
  };

  const cancelReplyHandler = () => {
    setShowInput(false);
    setInput("");
  };

  const deleteCommentHandler = () => {
    handleDeleteComment(comment?.id);
  };

  return (
    <div className="my-4 mx-4">
      {comment.id === 1 ? (
        <InputForm
          addCommentHandler={addCommentHandler}
          setInput={setInput}
          input={input}
          showInput={showInput}
        />
      ) : (
        <div className="flex gap-4 items-start max-w-xs">
          <div className="">
            <p className="font-bold text-md">{comment.author}</p>
            <div className="font-medium bg-slate-200 p-4 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl">
              {comment.text}
            </div>
            <div className="flex gap-2 ml-1 mt-1 text-gray-400 text-sm">
              <button
                onClick={() => {
                  setShowInput(true);
                }}
              >
                Reply
              </button>
              |
              <button className="" onClick={deleteCommentHandler}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="ml-8">
        {showInput && (
          <InputForm
            addCommentHandler={addCommentHandler}
            cancelReplyHandler={cancelReplyHandler}
            setInput={setInput}
            input={input}
            showInput={showInput}
          />
        )}
        {comment?.replies?.map((reply, index) => (
          <Comment
            comment={reply}
            key={index}
            handleAddComment={handleAddComment}
            handleDeleteComment={handleDeleteComment}
          />
        ))}
      </div>
    </div>
  );
};

export default Comment;

Comment.PropTypes = {
  // Define prop types here
  comment: PropTypes.obj,
  handleAddComment: PropTypes.func,
  handleDeleteComment: PropTypes.func,
};
