export const comments = [
  {
    id: 1,
    text: "This is the first comment.",
    author: "User1",
    replies: [
      {
        id: 11,
        text: "Reply to the first comment.",
        author: "User2",
        replies: [
          {
            id: 111,
            text: "Nested reply to the first comment.",
            author: "User3",
            replies: [], // More nested comments can go here
          },
        ],
      },
      {
        id: 12,
        text: "Another reply to the first comment.",
        author: "User4",
        replies: [],
      },
    ],
  },
  {
    id: 2,
    text: "This is the second comment.",
    author: "User5",
    replies: [],
  },
  // More comments can go here
];
