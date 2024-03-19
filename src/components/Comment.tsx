import React from "react";
import { InputForm } from "./InputForm";
type CommentProps = {
  comment: {
    id: number;
    author: string;
    text: string;
    replies: CommentProps["comment"][];
  };
  isReply: boolean;
  setIsReply: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
};

export function Comment({
  comment,
  isReply,
  setIsReply,
  text,
  setText,
  handleSubmit,
}: CommentProps) {
  return (
    <div className="ml-6 my-4">
      <p className="font-bold text-slate-300 text-xl mb-1">{comment.author}</p>
      <div className="border bg-slate-300 text-slate-700 p-2 rounded-tr-lg rounded-br-lg rounded-bl-lg ring ring-yellow-400">
        {comment.text}
      </div>
      <button className="opacity-75" onClick={() => setIsReply(!isReply)}>
        Reply
      </button>
      {isReply && (
        <InputForm text={text} setText={setText} handleSubmit={handleSubmit} />
      )}
      {comment.replies.map((reply) => (
        <Comment
          key={reply.id}
          comment={reply}
          isReply={isReply}
          setIsReply={setIsReply}
          text={text}
          setText={setText}
          handleSubmit={handleSubmit}
        />
      ))}
    </div>
  );
}
