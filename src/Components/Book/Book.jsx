import React from 'react';
import { CiStar } from "react-icons/ci";
const Book = ({ book }) => {
    // console.log(book);
    const { bookId, author, bookName, category, image, publisher, rating, review, tags, totalPages, yearOfPublishing } = book;
    console.log(category);

    return (
        <div className='rounded-2xl max-w-[374px]  border text-start'>
            <div className="card bg-base-100  p-6">
                <figure className='bg-base-200 rounded-2xl'>
                    <img
                        className='w-[134px] h-[166px] p-4 '
                        src={image}
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className='flex gap-5'>
                        {/* <div class="badge badge-ghost">ghost</div>
                    <div class="badge badge-ghost">ghost</div> */}
                        {
                            tags.map(tag=><div class="text-[#7ab671] font-semibold shadow-sm badge badge-ghost">{tag}</div>)
                        }
                    </div>
                    <h1 className='font-semibold text-2xl h-16'>{bookName}</h1>
                    <p className='font-semibold text-gray-600'>By: {author}</p>
                    <hr className='border-dashed border-gray-400' />
                    <div className="card-actions justify-between">
                        <div className="font-semibold text-gray-600 ">{category}</div>
                        <div className="badge text-gray-600 items-center">{rating} <CiStar className='text-xl' /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;