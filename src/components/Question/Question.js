import React from 'react';
import Option from '../Option/Option';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'; 
import Swal from 'sweetalert2';

const Question = ({data, idx, total}) => {
    const {correctAnswer, options, question} = data;
    const handleCorrectAns = ()=>{
        Swal.fire(
            `${correctAnswer}`,
          )
    }
    return (
        <div >
            
            <div className='text-white border border-slate-800 bg-card-bg-color mt-10 flex lg:flex-row flex-col gap-10 p-10 rounded-3xl'>
                
                <div className='w-full lg:w-[55%] flex flex-col gap-10 text-center lg:text-left  '>
                    <span className='text-2xl cursor-pointer hover:text-blue-color' title='Click to see correct ans' onClick={handleCorrectAns}>  <FontAwesomeIcon className='hover:text-blue-color' icon={faEye} />  </span>
                    <p className='text-3xl font-semibold text-slate-400'>  Question {idx + 1}<span className='text-xl text-slate-700'>/{total}</span> </p>
                    <p className='text-lg lg:text-2xl'>{question}</p>
                </div>
                <div className='w-full lg:w-[45%] '>
                    <ul className='flex flex-col gap-7'>
                        {
                            options.map((option, idx) => <Option key={idx} option={option} correctAnswer={correctAnswer}></Option>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Question;