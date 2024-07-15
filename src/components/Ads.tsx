import Image from 'next/image';
import React from 'react';

function Ads({size}: {size: "sm" | "md" | "lg"}) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
        {/* Title */}
        <div className="flex items-center justify-between text-gray-500 font-medium">
            <span>Sponsored Ads</span>
            <Image 
                src="/more.png"
                alt="More"
                width={16}
                height={16}
            />
        </div>
        {/* Image */}
        <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
            <div className={`relative w-full ${size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"}`}>
                <Image 
                    src="https://images.pexels.com/photos/1048036/pexels-photo-1048036.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt=""
                    fill
                    className="rounded-lg object-cover"
                />
            </div>
            <div className="flex items-center gap-4">
                <Image 
                    src="https://images.pexels.com/photos/1048036/pexels-photo-1048036.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt=""
                    width={24}
                    height={24}
                    className="rounded-full w-6 h-6 object-cover"
                />
                <span className="text-blue-500 font-medium">Antony Happy</span>
            </div>
            <p className={size === "sm" ? "text-xs" : "text-sm"}>
                {size === "sm" 
                    ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    : size === "md" ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo non urna iaculis aliquet."
                    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo non urna iaculis aliquet. Quisque vel condimentum augue, quis consequat lorem."
                }
            </p>
            <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">Learn more</button>
        </div>
    </div>
  );
};

export default Ads;