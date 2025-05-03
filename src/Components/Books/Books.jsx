import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {

    const [data, setData]= useState([]);

    useEffect(()=>{
        fetch('/public/booksData.json')
        .then(data=>data.json())
        .then(res=>setData(res))
    },[])

    // console.log(data);
    
    return (
        <div className='lg:w-[1200px] mx-auto text-center mb-10'>
            <h1 className='text-4xl font-bold mb-10'>Books</h1>
            <div className='grid lg:grid-cols-3 gap-7 grid-cols-1'>
                {
                    data.map(book=><Book book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;