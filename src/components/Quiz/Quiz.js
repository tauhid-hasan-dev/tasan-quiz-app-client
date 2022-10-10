import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quizOptions = useLoaderData();
    const {name, total} = quizOptions.data;
    const datas = quizOptions.data.questions;
    console.log(datas)
    return (
        <div className='bg-card-color px-5 lg:px-28 py-16  '>
            <p className='text-white text-3xl text-center'>Quiz of <span className='text-3xl font-semibold text-blue-color'>{name}</span></p>
            <div>
                {
                    datas.map((data, idx) => <Question key={data.id} data={data} idx={idx} total={total}  ></Question>)
                }
            </div>
           
        </div>
    );
};

export default Quiz;