import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Birthdays() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
        {/* Title */}
        <div className="flex justify-between items-center font-medium">
            <span className="text-gray-500">Birthdays</span>
        </div>
        {/* Birthday list */}
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image 
                    src="https://images.pexels.com/photos/7061619/pexels-photo-7061619.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt=""
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover"
                />
                <span className="font-semibold ">Tom Harley</span>
            </div>
            <div className="flex gap-3 justify-end">
                <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md">
                    Celebrate
                </button>
            </div>
        </div>
        {/* Upcoming birthday text */}
        <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
            <Image 
                src="/gift.png"
                alt="Gift"
                width={24}
                height={24}
            />
            <Link 
                href="/"
                className="flex flex-col gap-1 text-xs"
            >
                <span className="text-gray-700 font-semibold">Upcoming Birthdays</span>
                <span className="text-gray-500">See other 10 have uncomind birthdays</span>
            </Link>
        </div>
    </div>
  );
};

export default Birthdays;