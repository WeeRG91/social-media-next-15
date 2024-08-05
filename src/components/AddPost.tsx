"use client";

import { useUser } from "@clerk/nextjs";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import React, { useState } from "react";
import AddPostButton from "./AddPostButton";
import { addPost } from "@/lib/actions";

function AddPost() {
  const { user, isLoaded } = useUser();
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<any>();

  if (!isLoaded) {
    return "Loading...";
  }

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* Avatar */}
      <div>
        <Image
          src={user?.imageUrl || "/noAvatar.png"}
          alt=""
          width={48}
          height={48}
          className="w-12 h-12 object-cover rounded-full"
        />
      </div>
      {/* Post */}
      <div className="flex-1">
        {/* Text input */}
        <form action={(formData) => addPost(formData, image?.secure_url || "")} className="flex gap-4">
          <textarea
            placeholder="What's on your mind ?"
            className="flex-1 p-2 bg-slate-100 rounded-md outline-none"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <div>
            <Image
              src="/emoji.png"
              alt="Emoji"
              width={20}
              height={20}
              className="w-5 h-5 cursor-pointer self-end"
            />
            <AddPostButton />
          </div>
        </form>
        {/* Post options */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <CldUploadWidget
            uploadPreset="social"
            onSuccess={(result, { widget }) => {
              setImage(result.info);
              widget.close();
            }}
          >
            {({ open }) => {
              return (
                <div
                  onClick={() => open()}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Image
                    src="/addimage.png"
                    alt="Emoji"
                    width={20}
                    height={20}
                  />
                  Photo
                </div>
              );
            }}
          </CldUploadWidget>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="Emoji" width={20} height={20} />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="Emoji" width={20} height={20} />
            Poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addevent.png" alt="Emoji" width={20} height={20} />
            Event
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
