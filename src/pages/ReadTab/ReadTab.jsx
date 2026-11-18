import React from 'react';
import { Link } from 'react-router';

const ReadTab = ({ tab }) => {
    const { bookName, yearOfPublishing, bookId, tags, category, image, publisher, rating } = tab;

    return (
        <div className="flex flex-col md:flex-row my-6 gap-5 p-4 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">

            <div className="bg-gray-100 rounded-xl p-4 flex justify-center items-center md:w-1/4">
                <img src={image} alt={bookName} className="h-40 w-full object-contain" />
            </div>

            <div className="flex-1 space-y-3">

                {/* Book Name */}
                <h2 className="text-2xl font-bold text-gray-800">{bookName} </h2>

                {/* Publisher */}
                <p className="text-sm text-gray-500">By : {publisher}</p>

                {/* Tags and Publishing Year */}
                <div className="flex flex-wrap items-center gap-3">
                    <span className="font-semibold text-sm">Tag</span>

                    {tags.map((tag, index) => (
                        <span key={index} className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm" >  #{tag}
                        </span>
                    ))}

                    <span className="text-gray-500 text-sm">
                        Year of Publishing: {yearOfPublishing}
                    </span>
                </div>

                <div className="flex flex-wrap gap-5 text-sm text-gray-500">
                    <p> Publisher: {publisher} </p>

                    <p> Book ID: {bookId} </p>
                </div>

                <hr className="border-gray-200" />

                {/* Category, Rating and Button */}
                <div className="flex flex-wrap items-center gap-3">

                    <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm">
                        Category: {category}
                    </span>

                    <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm">
                        Rating: {rating}
                    </span>

                    <Link
                        to={`/bookDetails/${bookId}`}
                        className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300"
                    >
                        View Details
                    </Link>

                </div>

            </div>
        </div>
    );
};

export default ReadTab;