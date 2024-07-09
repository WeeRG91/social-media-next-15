import Image from 'next/image';
import React from 'react';
import Comments from './Comments';

function Post() {
  return (
    <div className="flex flex-col gap-4">
        {/* User */}
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image 
                    src="https://images.pexels.com/photos/11800586/pexels-photo-11800586.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt=""
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full"
                />
                <span className="font-medium">
                    Rawee Ruenpim
                </span>
            </div>
            <Image 
                src="/more.png"
                alt=""
                width={16}
                height={16}
            />
        </div>
        {/* Description */}
        <div className="flex flex-col gap-4">
            <div className="w-full min-h-96 relative">
                <Image 
                    src="https://images.pexels.com/photos/18610871/pexels-photo-18610871/free-photo-of-aerial-view-of-the-hohenaschau-castle-aschau-im-chiemgau-germany.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt=""
                    fill
                    className="object-cover rounded-md"
                />
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo non urna iaculis aliquet. Quisque vel condimentum augue, quis consequat lorem. Suspendisse vitae dolor porttitor, dapibus ipsum eget, lobortis dolor. Vivamus ac est auctor justo semper bibendum. In hac habitasse platea dictumst. 
            </p>
        </div>
        {/* Interaction */}
        <div className="flex items-center justify-between text-sm my-4">
            <div className="flex gap-8">
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image 
                        src="/like.png"
                        alt=""
                        width={16}
                        height={16}
                        className="cursor-pointer"
                    />
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">
                        125<span className="hidden md:inline"> likes</span> 
                    </span>
                </div>
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image 
                        src="/comment.png"
                        alt=""
                        width={16}
                        height={16}
                        className="cursor-pointer"
                    />
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">
                        125<span className="hidden md:inline"> comments</span> 
                    </span>
                </div>
            </div>
            <div>
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image 
                        src="/share.png"
                        alt=""
                        width={16}
                        height={16}
                        className="cursor-pointer"
                    />
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">
                        125<span className="hidden md:inline"> shares</span> 
                    </span>
                </div>
            </div>
        </div>
        {/* Comments */}
        <Comments />
    </div>
  );
};

export default Post;