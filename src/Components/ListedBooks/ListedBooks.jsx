import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getReadList, getStoredWishList } from '../Utility/Utility';
import { useLoaderData } from 'react-router-dom';
import Book from '../Book/Book';
const ListedBooks = () => {
   
   
    const allBooks = useLoaderData();
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    // console.log(allBooks);


    useEffect(() => {
        const list = getReadList();
        // console.log(typeof(list[0]));
        const intList = list.map(id => parseInt(id))
        // console.log(typeof(intList[0]));
        const finalBookReadList = allBooks.filter(book => intList.includes(book.bookId));
        setReadList(finalBookReadList)

    }, [])
    useEffect(() => {
        const wishlist = getStoredWishList();
        const intWishList = wishlist.map(id => parseInt(id));

        const filteredWishList = allBooks.filter(book => intWishList.includes(book.bookId));

        setWishList(filteredWishList);
    }, [])


    const handleSort = (type) => {
        if (type === 'rating') 
        {
            const sortedRatingReadList = [...readList].sort((a,b)=>a.rating-b.rating)
            setReadList(sortedRatingReadList)
            const sortedRatingWishList = [...wishList].sort((a,b)=>a.rating-b.rating)
            setWishList(sortedRatingWishList)
        }
        else if(type ==='page')
        {
            const sortedPageList = [...readList].sort((a,b)=>a.totalPages-b.totalPages)
            setReadList(sortedPageList)
            const sortedWishList = [...wishList].sort((a,b)=>a.totalPages-b.totalPages)
            setWishList(sortedWishList)
        }

        // const sortByPages = () => {

        // }
    }

    return (
        <div className='lg:w-[1200px] mx-auto '>
            <div className='items-center justify-center text-center'>
                <button className="btn btn-block h-20 text-2xl rounded-2xl my-6">Books</button>
                <button className="btn btn-success text-white font-bold text-xl" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
                    Sort
                </button>

                <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                    popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}>
                    <li onClick={() => handleSort('rating')}><a>Sort By Rating</a></li>
                    <li onClick={() => handleSort('page')}><a>Sort By Page</a></li>
                </ul>
            </div>

            {/* Tabs */}
            <Tabs>
                <TabList>
                    <Tab>
                        Read List
                    </Tab>
                    <Tab>
                        Wishlist Books
                    </Tab>

                </TabList>

                <TabPanel>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 py-10'>
                        {
                            readList.map(book => <Book book={book}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 py-10'>
                        {
                            wishList.map(book => <Book book={book}></Book>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;