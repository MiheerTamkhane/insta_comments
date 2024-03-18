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
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // setComments((prevComments: Comment[]) => [...prevComments]);
    console.log(text);
    setText("");
  }
  return (
    <div className="flex w-full justify-center">
      <div className="font-bold mt-4 w-2/6">
        <InputForm text={text} setText={setText} handleSubmit={handleSubmit} />
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default App;
