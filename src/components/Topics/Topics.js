import React from 'react';

const Topics = ({topic}) => {
    const {name, logo, total} = topic;
    return (
        <div className="card bg-card-color  shadow-2xl border border-slate-800">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-white">{name}</h2>
                <p className='text-slate-400 mb-5'>Total Questions: {total}</p>
                <div className="card-actions ">
                    <button className="btn btn-primary w-full">Take Quiz </button>
                </div>
            </div>
        </div>
    );
};

export default Topics;