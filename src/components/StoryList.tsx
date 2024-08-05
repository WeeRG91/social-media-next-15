"use client";

import { addStory } from "@/lib/actions";
import { useUser } from "@clerk/nextjs";
import { Story, User } from "@prisma/client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import React, { useOptimistic, useState } from "react";

type StoryWithUser = Story & { user: User };

function StoryList({
  stories,
  userId,
}: {
  stories: StoryWithUser[];
  userId: string;
}) {
  const [storyList, setStoryList] = useState(stories);
  const [image, setImage] = useState<any>();

  const { user, isLoaded } = useUser();

  const add = async () => {
    if (!image?.secure_url) return;

    addOptimisticStory({
      id: Math.random(),
      img: image.secure_url,
      createdAt: new Date(Date.now()),
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      userId: userId,
      user: {
        id: userId,
        username: "Sending...",
        avatar: user?.imageUrl || "/noAvatar.png",
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
      const createdStory = await addStory(image.secure_url);
      setStoryList((prev) => [createdStory!, ...prev]);
      setImage(null);
    } catch (error) {
      console.log(error);
    }
  };

  const [optimisticStories, addOptimisticStory] = useOptimistic(
    storyList,
    (state, value: StoryWithUser) => [value, ...state]
  );
  return (
    <>
      <CldUploadWidget
        uploadPreset="social"
        onSuccess={(result, { widget }) => {
          setImage(result.info);
          widget.close();
        }}
      >
        {({ open }) => {
          return (
            <div className="relative flex flex-col items-center gap-2 cursor-pointer">
              <Image
                src={image?.secure_url || user?.imageUrl || "/noAvatar.png"}
                alt=""
                width={80}
                height={80}
                className="w-20 h-20 rounded-full ring-2 object-cover"
                onClick={() => open()}
              />
              {image ? (
                <form action={add}>
                  <button className="text-xs bg-blue-500 p-1 rounded-md text-white">
                    Send
                  </button>
                </form>
              ) : (
                <span className="font-medium">Add a Story</span>
              )}
              <div
                onClick={() => open()}
                className="absolute text-6xl text-gray-200 top-1"
              >
                +
              </div>
            </div>
          );
        }}
      </CldUploadWidget>
      {optimisticStories.map((story) => (
        <div
          key={story.id}
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <Image
            src={story.img || "/noAvatar.png"}
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">
            {story.user.name || story.user.username}
          </span>
        </div>
      ))}
    </>
  );
}

export default StoryList;
