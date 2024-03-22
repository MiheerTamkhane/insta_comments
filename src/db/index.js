export const data = {
  id: 1,
  replies: [
    {
      id: 2,
      text: "This is the first comment.",
      author: "Admin",
      replies: [
        {
          id: 21,
          text: "Reply to the first comment.",
          author: "Admin 2",
          replies: [],
        },
      ],
    },
    {
      id: 3,
      text: "This is the second comment.",
      author: "Admin",
      replies: [],
    },
  ],
};
