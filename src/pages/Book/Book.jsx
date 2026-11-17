import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({ single }) => {

    const { bookName, yearOfPublishing, bookId
        , tags, category, review, image, publisher, rating } = single
    // console.log(single)
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm border-2 border-gray-400 p-5">
                <figure className='p-3 w-2/3 bg-gray-200 mx-auto rounded-2xl'>
                    <img className='h-[186px]'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">

                    <div className='flex items-center gap-6'>
                        {
                            tags.map((tag, index) => <button key={index} className='text-green-500 px-3 rounded-[6px] bg-green-200 font-semibold '>{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title font-bold text-1xl">
                        {bookName}
                        <div className="badge badge-secondary">{yearOfPublishing}</div>
                    </h2>
                    <p>Book by : {publisher}</p>
                    <div className="card-actions justify-between border-t-2 border-dashed border-gray-400 pt-3">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{rating} <FaStarHalfAlt /></div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;