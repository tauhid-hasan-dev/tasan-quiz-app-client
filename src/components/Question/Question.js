import React from 'react';

const Question = ({data, idx, total}) => {
    const {correctAnswer, options, question} = data;
    return (
        <div className='text-white border border-slate-800 bg-card-bg-color mt-10 flex p-10'>
            <div className='w-[60%]'>
                <p > Question {idx + 1}/{total}: {question} </p>
            </div>
            <div className='w-[40%] '>
                 <ul className=''>
                    {
                        options.map(option => <li>{option}</li>)
                    }
                 </ul>
            </div>
        </div>
    );
};

export default Question;