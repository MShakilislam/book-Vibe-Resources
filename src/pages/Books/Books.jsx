import React, { useEffect, useState } from 'react';

const Books = () => {
    const [allBook, setAllBook] = useState([])

    useEffect(() => {
        fetch("booksData.json")
            .then((res) => res.json())
            .then(data => {
                setAllBook(data)
            })
    })
    return (
        <div>
            <h3>Hello books</h3>
        </div>
    );
};

export default Books;