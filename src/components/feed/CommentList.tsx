"use client";

import { addComment } from "@/lib/actions";
import { useUser } from "@clerk/nextjs";
import { Comment, User } from "@prisma/client";
import Image from "next/image";
import React, { useOptimistic, useState } from "react";

type CommentWithUser = Comment & { user: User };

function CommentList({
  comments,
  postId,
}: {
  comments: CommentWithUser[];
  postId: number;
}) {
  const { user } = useUser();
  const [commentState, setCommentState] = useState(comments);
  const [description, setDescription] = useState("");

  const add = async () => {
    if (!user || !description) return;

    addOptimisticComment({
      id: Math.random(),
      description,
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
      userId: user.id,
      postId: postId,
      user: {
        id: user.id,
        username: "Sending Please Wait...",
        avatar: user.imageUrl || "/noAvatar.png",
        cover: "",
        description: "",
        name: "",
        surname: "",
        city: "",
        work: "",
        school: "",
        website: "",
        createdAt: new Date(Date.now()),
      },
    });

    try {
      const createdComment = await addComment(postId, description);
      setCommentState((prev) => [createdComment, ...prev]);
    } catch (error) {}
  };

  const [optimisticCommment, addOptimisticComment] = useOptimistic(
    commentState,
    (state, value: CommentWithUser) => [value, ...state]
  );
  return (
    <>
      {/* Comment input */}
      {user && (
        <div className="flex items-center gap-4">
          <Image
            src={user.imageUrl || "noAvatar.png"}
            alt=""
            width={32}
            height={32}
            className="w-8 h-8 rounded-full"
          />
          <form
            action={add}
            className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full"
          >
            <input
              type="text"
              placeholder="Write a comment..."
              className="bg-transparent outline-none flex-1"
              onChange={(e) => setDescription(e.target.value)}
            />
            <Image
              src="/emoji.png"
              alt="Emoji"
              width={16}
              height={16}
              className="cursor-pointer"
            />
          </form>
        </div>
      )}
      {/* Comments */}
      <div>
        {optimisticCommment.map((comment) => (
          <div key={comment.id} className="flex gap-4 justify-between mt-6">
            {/* Avatar */}
            <Image
              src={comment.user.avatar || "noAvatar.png"}
              alt=""
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
            />
            {/* Description */}
            <div className="flex flex-col gap-2 flex-1">
              <span className="font-medium">
                {comment.user.name && comment.user.surname
                  ? comment.user.name + " " + comment.user.surname
                  : comment.user.username}
              </span>
              <p>{comment.description}</p>
              <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
                <div className="flex items-center gap-4">
                  <Image
                    src="/like.png"
                    alt=""
                    width={12}
                    height={12}
                    className="cursor-pointer"
                  />
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-500">0 likes</span>
                </div>
                <div>Reply</div>
              </div>
            </div>
            {/* Icon */}
            <Image
              src="/more.png"
              alt=""
              width={16}
              height={16}
              className="w-4 h-4 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default CommentList;
