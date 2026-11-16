import React from 'react';
import bookImage from "../../assets/pngwing 1.png"
const Banner = () => {
    return (
        <div className='w-full my-6 flex items-center bg-[#131313] justify-around bg-gray-200 rounded-4xl p-10'>
            <div>
                <h2>Books to freshen up your bookshelf</h2>
                <button className='btn bg-green-400'>View The List</button>
            </div>
            <div>
                <img className='w-10/12' src={bookImage}alt="" />
            </div>
        </div>
    );
};

export default Banner;