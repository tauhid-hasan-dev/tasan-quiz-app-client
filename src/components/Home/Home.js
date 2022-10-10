import React from 'react';

const Home = () => {
    return (
        <div className="bg-[url('https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80')] bg-cover w-full object-cover h-full p-20 lg:p-56   bg-opacity-20 relative cursor-pointer text-center">
            <div className='inset-0 bg-gray-800 mix-blend-overlay absolute bg-opacity-75 '></div>
            <div className='relative'>
               <p className='text-white font-bold text-lg lg:text-5xl '>Test you to be the best you</p>
            </div>
        </div>
    );
};

export default Home;


