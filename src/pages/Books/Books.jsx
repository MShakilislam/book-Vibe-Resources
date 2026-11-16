import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {
    const [allBook, setAllBook] = useState([])

    // useEffect(() => {
    //     fetch("booksData.json")
    //         .then((res) => res.json())
    //         .then(data => {
    //             setAllBook(data)
    //         })
    // })

    // const bookPromice = fetch("./booksData.json").then(res => res.json())
    return (
        <div>
            <h3 className='text-center text-4xl font-bold'>Books</h3>
            <Suspense fallback={<span>Loading........</span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        data.map((single) => <Book key={single.bookId} single={single}></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;