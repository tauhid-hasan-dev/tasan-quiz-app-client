import React from 'react';

const Option = ({option}) => {
    
    return (
        <div className='text-lg lg:text-xl  border lg:border-2  border-blue-500 flex lg:p-4 p-2  rounded-lg cursor-pointer hover:bg-cyan-900'>
            <li>{option}</li>
        </div>
    );
};

export default Option;