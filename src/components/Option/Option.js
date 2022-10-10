import React, { useState } from 'react';

const Option = ({option, correctAnswer}) => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        if(option === correctAnswer){
            alert('correct')
            setIsActive(current => !current);
        }
      };
    console.log(correctAnswer, option);
    
    return (
        <div className={`text-lg lg:text-xl  border lg:border-2  border-blue-500 flex lg:p-4 p-2  rounded-lg cursor-pointer hover:bg-cyan-900 ${isActive ? 'bg-cyan-900' : ''}`} onClick={handleClick}>
            <li>{option}</li>
        </div>
    );
};

export default Option;