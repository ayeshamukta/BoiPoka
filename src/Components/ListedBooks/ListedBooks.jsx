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

    return (
        <div className='lg:w-[1200px] mx-auto'>
            <button className="btn btn-block h-20 text-2xl rounded-2xl my-6">Books</button>

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
                            wishList.map(book=><Book book={book}></Book>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;