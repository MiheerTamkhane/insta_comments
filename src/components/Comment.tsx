import React from "react";

type CommentProps = {
  comment: {
    id: number;
    author: string;
    text: string;
    replies: CommentProps["comment"][];
  };
};

export function Comment({ comment }: CommentProps) {
  return (
    <div className="ml-6 my-4">
      <p className="font-bold text-slate-300 text-xl mb-1">{comment.author}</p>
      <div className="border bg-slate-300 text-slate-700 p-2 rounded-tr-lg rounded-br-lg rounded-bl-lg ring ring-yellow-400">
        {comment.text}
      </div>
      <button className="opacity-75">Reply</button>
      {comment.replies.map((reply) => (
        <Comment key={reply.id} comment={reply} />
      ))}
    </div>
  );
}
