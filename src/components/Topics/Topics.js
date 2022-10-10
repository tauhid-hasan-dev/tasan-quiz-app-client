import React from 'react';

const Topics = ({topic}) => {
    const {name, logo, total} = topic;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Total Questions: {total}</p>
                <div className="card-actions ">
                    <button className="btn btn-primary w-full">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Topics;