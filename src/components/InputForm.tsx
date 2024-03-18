import React from "react";

type InputProps = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
};

export const InputForm: React.FC<InputProps> = ({
  text,
  setText,
  handleSubmit,
}) => {
  return (
    <form action="post" onSubmit={handleSubmit}>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Add comment..."
          className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto">
          Add
        </button>
      </div>
    </form>
  );
};
