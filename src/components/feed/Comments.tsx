import Image from 'next/image';
import React from 'react';

function Comments() {
  return (
    <div>
        {/* Comment input */}
        <div className="flex items-center gap-4">
            <Image 
                src="https://images.pexels.com/photos/16239062/pexels-photo-16239062/free-photo-of-kwan-im-goddess-statue-on-ocean-gate-of-sanggar-agung-temple-in-surabaya-kenjeran-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                width={32}
                height={32}
                className="w-8 h-8 rounded-full"
            />
            <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
                <input 
                    type="text" 
                    placeholder="Write a comment..." className="bg-transparent outline-none flex-1"
                />
                <Image 
                    src="/emoji.png"
                    alt="Emoji"
                    width={16}
                    height={16}
                    className="cursor-pointer"
                />
            </div>
        </div>
        {/* Comments */}
        <div>
            <div className="flex gap-4 justify-between mt-6">
                {/* Avatar */}
                <Image 
                    src="https://images.pexels.com/photos/16239062/pexels-photo-16239062/free-photo-of-kwan-im-goddess-statue-on-ocean-gate-of-sanggar-agung-temple-in-surabaya-kenjeran-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full"
                />
                {/* Description */}
                <div className="flex flex-col gap-2 flex-1">
                    <span className="font-medium">Rawee Ruenpim</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo non urna iaculis aliquet. Quisque vel condimentum augue, quis consequat lorem.
                    </p>
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
                            <span className="text-gray-500">125 likes</span>
                        </div>
                        <div>
                            Reply
                        </div>
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
        </div>
    </div>
  );
};

export default Comments;