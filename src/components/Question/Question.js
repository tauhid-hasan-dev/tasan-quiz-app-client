import React from 'react';
import Option from '../Option/Option';

const Question = ({data, idx, total}) => {
    const {correctAnswer, options, question} = data;
    return (
        <div className='text-white border border-slate-800 bg-card-bg-color mt-10 flex p-10'>
            <div className='w-[60%]'>
                <p > Question {idx + 1}/{total}: {question} </p>
            </div>
            <div className='w-[40%] '>
                 <ul className='flex flex-col gap-5'>
                    {
                        options.map((option, idx) => <Option key={idx} option={option}></Option>)
                    }
                 </ul>
            </div>
        </div>
    );
};

export default Question;