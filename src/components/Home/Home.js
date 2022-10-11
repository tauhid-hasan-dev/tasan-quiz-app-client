import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';

const Home = () => {
    const data = useLoaderData();
    console.log(data);
    const topics = data.data;
    
    return (
        <div>
            <div className="bg-[url('https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80')] bg-cover w-full object-cover h-full py-28 px-5 lg:py-56  lg:px-56  bg-opacity-20 relative cursor-pointer text-center">
                <div className='inset-0 bg-gray-800 mix-blend-overlay absolute bg-opacity-75 '></div>
                <div className='relative'>
                <p className='text-white font-bold text-2xl lg:text-5xl '>Test you to be the best you</p>
                </div>
            </div>
            <div className='px-8 py-10 md:px-56 lg:py-28 lg:px-28 flex flex-col lg:flex-row bg-card-bg-color gap-10 '>
                {
                    topics.map(topic => <Topics key={topic.id} topic={topic}></Topics>)
                }
            </div>
        </div>
       
    );
};

export default Home;


