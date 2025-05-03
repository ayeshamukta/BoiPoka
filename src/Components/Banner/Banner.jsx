import React from 'react';
import Books from '../Books/Books';

const Banner = () => {
    return (
        <div className="hero  bg-base-200 rounded-2xl lg:w-[1200px] mb-10 mx-auto">
            <div className="hero-content flex-col gap-8 lg:gap-24 lg:h-[554px]  lg:flex-row-reverse">
                <img
                    src="/images/books.jpg"
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className=''>
                    <h1 className="text-5xl mb-12 font-bold">Books to freshen up <br /> your bookshelf</h1>
                    
                    <button className="btn btn-success text-white font-semibold">View The List</button>
                </div>
            </div>
            
        </div>
        
        
    );
};

export default Banner;