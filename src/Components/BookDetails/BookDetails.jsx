import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToReadList, addToWishList } from '../Utility/Utility';

const BookDetails = () => {

    const { bookId } = useParams();
    // console.log(bookId);

    const data = useLoaderData();
    // console.log(data);
    const detail = data.find(book => parseInt(bookId) === book.bookId);
    // console.log(detail);

    const { author, bookName, category, image, publisher, rating, review, tags, totalPages, yearOfPublishing } = detail;

    // console.log(bookName);


    const handleReadBooks=(id)=>
    {
        addToReadList(id);
    }
    const handleWishList=(id)=>
    {
        addToWishList(id);
    }
    return (
        <div className='flex lg:justify-between flex-col px-10 space-y-10  lg:flex-row my-20 lg:w-[1200px] mx-auto items-center'>
            <div className='lg:max-w-[573px] '>
                <img src={image} className='p-10 ' alt={bookName} />
            </div>

            <div className='lg:w-[573px] text-justify space-y-4'>
                <h1 className='text-4xl'>{bookName}</h1>
                <p className='text-gray-600'>By: {author}</p>
                <hr className="border border-dashed" />
                <p className='font-semibold'>{category}</p>
                <hr className="border border-dashed" />
                <p className='text-gray-500 text-xs'><span className='font-bold text-black'>Review:</span> {review}</p>
                <div className='flex gap-5 text-xs items-center'>
                    <span className='font-bold'>Tag</span>
                    {
                        tags.map(tag => <div className="text-[#7ab671] font-semibold shadow-sm badge badge-ghost">#{tag}</div>)
                    }
                </div>
                <hr className="border border-dashed" />
                <div className='text-xs text-gray-500 space-y-2 mt-10'>
                    
                    <p className=''>Number of Pages: <span className='text-black font-semibold'>{totalPages}</span></p>
                    <p>Publisher:  <span className='text-black font-semibold'>{publisher}</span></p>
                    <p>Year of Publishing:  <span className='text-black font-semibold'>{yearOfPublishing}</span></p>
                    <p>Rating:  <span className='text-black font-semibold'>{rating}</span></p>
                </div>
                <div className='flex gap-6'>
                    <button className='btn btn-primary' onClick={()=>handleReadBooks(bookId)}>Mark as Read</button>
                    <button onClick={()=>handleWishList(bookId)} className='btn text-white btn-success'>Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;