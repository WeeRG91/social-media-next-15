import prisma from "@/lib/client";
import React from "react";
import CommentList from "./CommentList";

async function Comments({ postId }: { postId: number }) {
  const comments = await prisma.comment.findMany({
    where: {
      postId,
    },
    include: {
      user: true,
    },
  });
  return (
    <div>
      <CommentList comments={comments} postId={postId} />
    </div>
  );
}

export default Comments;
