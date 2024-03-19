import React, { useState } from "react";
import { comments as data } from "./comments";
import { Comment } from "./components/Comment";
import { InputForm } from "./components/InputForm";

interface Comment {
  id: number;
  author: string;
  text: string;
  replies: Comment[];
}

function App() {
  const [text, setText] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>(data);
  const [isReply, setIsReply] = useState<boolean>(false);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const obj = {
      id: Math.floor(Math.random() * 100000) + 1,
      author: "Miheer",
      text: text,
      replies: [],
    };
    setComments((prevComments: Comment[]) => [...prevComments, obj]);
    console.log(text);
    setText("");
  }
  return (
    <div className="flex w-full justify-center">
      <div className="font-bold mt-4 w-2/6">
        <InputForm text={text} setText={setText} handleSubmit={handleSubmit} />
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            isReply={isReply}
            setIsReply={setIsReply}
            text={text}
            setText={setText}
            handleSubmit={handleSubmit}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
