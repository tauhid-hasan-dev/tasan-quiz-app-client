import React from 'react';
import { Link } from 'react-router-dom';

const Topics = ({topic}) => {
    const {id, name, logo, total} = topic;
    return (
        <div className="card bg-card-color  shadow-2xl border border-slate-800">
            <figure className='bg-slate-900'><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-white">{name}</h2>
                <p className='text-slate-400 mb-5'>Total Questions: {total}</p>
                <div className="card-actions w-full">
                    <Link to={`/home/quiz/${id}`} className='w-full'> <button className="btn btn-primary w-full">Take Quiz </button></Link>
                </div>
            </div>
        </div>
    );
};

export default Topics;