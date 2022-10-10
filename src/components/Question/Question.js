import React from 'react';
import Option from '../Option/Option';

const Question = ({data, idx, total}) => {
    const {correctAnswer, options, question} = data;
    return (
        <div className='text-white border border-slate-800 bg-card-bg-color mt-10 flex lg:flex-row flex-col gap-10 p-10 rounded-3xl'>
            <div className='w-full lg:w-[60%] flex flex-col gap-10 text-center lg:text-left  '>
                <p className='text-3xl font-semibold text-slate-400'> Question {idx + 1}<span className='text-xl text-slate-700'>/{total}</span> </p>
                <p className='text-lg lg:text-2xl'>{question}</p>
            </div>
            <div className='w-full lg:w-[40%] '>
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