import { createContext, useContext, useState } from "react";
import { data } from "../db";
const CommentsContext = createContext(null);

const CommentsProvider = ({ children }) => {
  const [comments, setComments] = useState(data);

  return (
    <CommentsContext.Provider value={{ comments, setComments }}>
      {children}
    </CommentsContext.Provider>
  );
};

const useComments = () => {
  const context = useContext(CommentsContext);

  if (!context) {
    throw new Error("useComments must be used in Comments Provider");
  }

  return context;
};

export { CommentsProvider, useComments };
