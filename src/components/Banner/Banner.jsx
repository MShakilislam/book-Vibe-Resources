import React from 'react';
import bookImage from "../../assets/pngwing 1.png"
const Banner = () => {
    return (
        <div className='w-full my-6 flex items-center bg-[#131313] justify-around bg-gray-200 rounded-4xl p-10'>
            <div>
                <h2 className='font-bold text-gray-900 text-5xl mb-7'>Books to freshen up <br></br> your bookshelf</h2>

                <button className="relative isolate cursor-pointer overflow-hidden rounded-lg px-6 py-3 font-semibold text-white bg-green-500
                before:content-[''] before:absolute before:inset-[-100%] before:-z-10
                before:bg-[conic-gradient(from_0deg,transparent_0deg,blue_90deg,red_180deg,transparent_270deg)]
                before:animate-[spin_2s_linear_infinite] before:blur-[2px] after:content-[''] after:absolute after:inset-[3px] after:-z-10 after:rounded-md after:bg-green-500 shadow-[0_0_15px_blue,0_0_25px_red]">View The List </button>

            </div>
            <div>
                <img className='w-10/12' src={bookImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;