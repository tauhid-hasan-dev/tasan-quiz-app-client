import React from 'react';

const Option = ({option}) => {
    
    return (
        <div className='text-xl border border-blue-500 flex p-4 rounded-lg cursor-pointer hover:bg-cyan-900'>
            <li>{option}</li>
        </div>
    );
};

export default Option;