export function addComment(tree, commentId, text) {
  const id = Math.floor(Math.random() * 1000) + 1;
  if (tree.id == commentId) {
    tree.replies.unshift({
      id: id,
      author: "Admin " + id,
      text: text,
      replies: [],
    });

    return tree;
  }

  let updatedTree = tree.replies.map((reply) =>
    addComment(reply, commentId, text)
  );
  return { ...tree, replies: updatedTree };
}

export function deleteComment(tree, id) {
  for (let i = 0; i < tree.replies.length; i++) {
    const currentItem = tree.replies[i];
    if (currentItem.id === id) {
      tree.replies.splice(i, 1);
      return tree;
    } else {
      deleteComment(currentItem, id);
    }
  }
  return tree;
}
