import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {

    const { id } = useParams();
    const bookid = parseInt(id);

    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookid);

    const {image,bookName,author,category,review, tags,totalPages,publisher, yearOfPublishing,rating } = singleBook;

    return (
        <div className="max-w-6xl mx-auto my-10 p-5">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-lg overflow-hidden">

                {/* Image Section */}
                <div className="bg-gray-100 flex justify-center items-center p-10 ">
                    <img className="w-72 h-109 cursor-pointer object-contain drop-shadow-2xl hover:scale-105 duration-500" src={image} alt={bookName} />
                </div>

                {/* Details Section */}
                <div className="p-5 md:p-8">

                    <h1 className="text-3xl font-bold text-gray-900 mb-3">{bookName}</h1>
                    <p className="text-gray-600 mb-5">By : {author}</p>
                    <hr className="border-gray-200" />
                    <p className="font-medium text-gray-700 py-4">{category}</p>
                    <hr className="border-gray-200" />
                    <div className="py-5">
                        <h3 className="font-bold mb-2">Review :</h3>
                        <p className="text-gray-500 text-sm leading-7">{review}</p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                        <span className="font-bold">Tag</span>

                        {tags?.map((tag, index) => (
                            <span key={index} className="bg-green-50 text-green-600 px-4 py-1 rounded-full text-sm font-medium" >#{tag}</span>
                        ))}
                    </div>

                    <hr className="border-gray-200" />

                    {/* Book Information */}
                    <div className="space-y-4 py-5 text-sm">

                        <div className="flex justify-between">
                            <span className="text-gray-500">Number of Pages:</span>
                            <span className="font-bold">{totalPages}</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-gray-500">Publisher:</span>
                            <span className="font-bold">{publisher}</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-gray-500">Year of Publishing:</span>
                            <span className="font-bold">{yearOfPublishing}</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-gray-500">Rating:</span>
                            <span className="font-bold">{rating}</span>
                        </div>

                    </div>

                    <hr className="border-gray-200" />

                    {/* Buttons */}
                    <div className="flex gap-4 mt-6">

                        <button className="px-7 cursor-pointer py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-100 duration-300"> Read</button>

                        <button className="px-7 cursor-pointer py-3 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 duration-300 shadow-md">Wishlist</button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default BookDetails;