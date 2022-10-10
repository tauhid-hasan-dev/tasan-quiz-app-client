import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {
    return (
        <div className="bg-[url('https://images.unsplash.com/photo-1516663713099-37eb6d60c825?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-cover w-full object-cover h-full py-64 px-5 lg:py-72 lg:px-56  bg-opacity-20 relative cursor-pointer text-center">
            <div className='inset-0 bg-gray-800 mix-blend-overlay absolute bg-opacity-100 '></div>
            <div className='relative '>
               <p className='text-white font-bold text-7xl lg:text-7xl mb-3 '>404!</p>
               <p className='text-white font-semibold text-2xl lg:text-4xl mb-3'>Page not found</p>
               <p className='text-white font-bold text-2xl lg:text-2xl '>Click <span className='text-blue-color border-b border-blue-color'><Link to ="/home" >here <FontAwesomeIcon icon={faUpRightFromSquare} />
                 </Link></span>  to go home page </p>
               
            </div>
        </div>
    );
};

export default NotFound;