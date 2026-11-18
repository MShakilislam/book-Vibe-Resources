import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStordBook } from '../../utility/addToDB';
import ReadTab from '../ReadTab/ReadTab';

const ReadList = () => {
    const [readList, setReadList] = useState([])
    const [sort, setSort] = useState("")

    const data = useLoaderData()
    // const {bookName, yearOfPublishing, bookId
    //     , tags, category, image, publisher, rating} = data
    // console.log(data)

    useEffect(() => {
        const storedBookData = getStordBook();
        const convertedStoredBooks = storedBookData.map(id => parseInt(id))
        const myReadList = data.filter(book => convertedStoredBooks.includes(book.bookId))
        setReadList(myReadList)
    }, [])
    const handaleSort = (type) => {
        setSort(type)
        if(type === "Pages"){
            const sortedBypage = [...readList].sort((a,b) => a.totalPages - b.totalPages);
            setReadList(sortedBypage)
            // console.log(sortedBypage)
        }
        if(type ==="Ratings"){
            const sortedByRatings = [...readList].sort((a,b) => a.rating - b.rating);
            setReadList(sortedByRatings)
        }
    }
    return (
        <div>
            <div className="dropdown dropdown-start">
                <div tabIndex={0} role="button" className="btn m-1">Sort bye : {sort? sort : ""}</div>
                <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={() => handaleSort("Pages")}>Pages</a></li>
                    <li><a onClick={() => handaleSort("Ratings")}>Ratings</a></li>
                </ul>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='font-bold text-2xl text-green-500'>Book i read : {readList.length}</h2>
                    {
                        readList.map(tab => <ReadTab key={tab.bookId} tab={tab}></ReadTab>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Wishlist Books</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;