import Image from 'next/image';
import React from 'react';

function AddPost() {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
        {/* Avatar */}
        <div>
            <Image 
                src="https://images.pexels.com/photos/11800586/pexels-photo-11800586.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt=""
                width={48}
                height={48}
                className="w-12 h-12 object-cover rounded-full"
            />
        </div>
        {/* Post */}
        <div className="flex-1">
            {/* Text input */}
            <div className="flex gap-4">
                <textarea placeholder="What's on your mind ?" className="flex-1 p-2 bg-slate-100 rounded- outline-none"></textarea>
                <Image 
                    src="/emoji.png"
                    alt="Emoji"
                    width={20}
                    height={20}
                    className="w-5 h-5 cursor-pointer self-end"
                />
            </div>
            {/* Post options */}
            <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
                <div className="flex items-center gap-2 cursor-pointer">
                    <Image 
                        src="/addimage.png"
                        alt="Emoji"
                        width={20}
                        height={20}
                    />
                    Photo
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                    <Image 
                        src="/addVideo.png"
                        alt="Emoji"
                        width={20}
                        height={20}
                    />
                    Video
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                    <Image 
                        src="/poll.png"
                        alt="Emoji"
                        width={20}
                        height={20}
                    />
                    Poll
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                    <Image 
                        src="/addevent.png"
                        alt="Emoji"
                        width={20}
                        height={20}
                    />
                    Event
                </div>
            </div>
        </div>
    </div>
  );
};

export default AddPost;