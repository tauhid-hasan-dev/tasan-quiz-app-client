import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const datas = useLoaderData();
    const data = datas.data;
    return (
        <div className='flex flex-col justify-center items-center lg:py-10'>
            <p className='text-2xl font-semibold text-center py-5'>Total Questions Statistics</p>
            <div>
                <LineChart
                        width={1000}
                        height={400}
                        data={data} > 
                        <CartesianGrid strokeDasharray="3 3" />
                            <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;