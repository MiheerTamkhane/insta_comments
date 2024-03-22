import PropTypes from "prop-types";

const InputForm = ({
  addCommentHandler,
  cancelReplyHandler,
  setInput,
  input,
  showInput,
}) => {
  return (
    <div className="flex gap-2 mt-2 max-w-screen-sm">
      <input
        type="text"
        placeholder="Add comment..."
        className="w-96 rounded-md bg-slate-200 p-4 shadow-sm font-normal transition focus:outline-none"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        className="w-full rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none sm:mt-0 sm:w-auto"
        onClick={addCommentHandler}
      >
        Add
      </button>
      {showInput && (
        <button
          className="w-full rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none sm:mt-0 sm:w-auto"
          onClick={cancelReplyHandler}
        >
          Cancel
        </button>
      )}
    </div>
  );
};

export default InputForm;

InputForm.PropTypes = {
  addCommentHandler: PropTypes.func,
  cancelReplyHandler: PropTypes.func,
  setInput: PropTypes.func,
  input: PropTypes.string,
  showInput: PropTypes.bool,
};
