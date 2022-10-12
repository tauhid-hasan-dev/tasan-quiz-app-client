import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorElement = () => {
    return (
        <div className=" bg-black w-full object-cover h-full py-64 px-5 lg:py-56 lg:px-56 relative cursor-pointer text-center">
            <div className='inset-0 bg-gray-800 mix-blend-overlay absolute bg-opacity-100 '></div>
            <div className='relative '>
               <p className='text-slate-500 font-bold text-7xl lg:text-7xl mb-3 '>404!</p>
               <p className='text-slate-500 font-semibold text-2xl lg:text-4xl mb-3'>Page not found</p>
               <p className='text-slate-500 font-bold text-2xl lg:text-2xl '>Click <span className='text-blue-color border-b border-blue-color'><Link to ="/home" >here <FontAwesomeIcon icon={faUpRightFromSquare} />
                 </Link></span>  to go home page </p>
               
            </div>
        </div>
    );
};

export default ErrorElement;