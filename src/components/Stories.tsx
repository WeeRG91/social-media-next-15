import Image from 'next/image';
import React from 'react';

function Stories() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-sm scrollbar-hide">
        <div className="flex gap-8 w-max">
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Image 
                    src="https://images.pexels.com/photos/11800586/pexels-photo-11800586.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt=""
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full ring-2"    
                />
                <span className="font-medium">Rawee</span>
            </div>
        </div>
    </div>
  );
};

export default Stories;