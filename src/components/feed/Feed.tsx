import React from "react";
import Post from "./Post";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/client";

async function Feed({ username }: { username?: string }) {
  const { userId } = auth();

  let posts: any[] = [];

  if (username) {
    posts = await prisma.post.findMany({
      where: {
        user: {
          username: username,
        },
      },
      include: {
        user: true,
        likes: {
          select: {
            userId: true,
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    console.log(posts);
  }

  if (!username && userId) {
    const followings = await prisma.follower.findMany({
      where: {
        followerId: userId,
      },
      select: {
        followingId: true,
      },
    });
    console.log(followings);

    const followingIds = followings.map((following) => following.followingId);
    console.log(followingIds);
    
    const ids =  [userId, ...followingIds]

    posts = await prisma.post.findMany({
      where: {
        userId: {
          in: ids,
        },
      },
      include: {
        user: true,
        likes: {
          select: {
            userId: true,
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-12">
      {posts?.length
        ? posts.map((post) => <Post key={post.id} post={post} />)
        : "No Posts Found"}
    </div>
  );
}

export default Feed;
