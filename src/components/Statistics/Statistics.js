import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const datas = useLoaderData();
    const data = datas.data;
    return (
        <div className='flex flex-col justify-center items-center lg:py-10 bg-slate-900 '>
            <p className='text-2xl font-semibold text-center py-10'>Total Questions Statistics</p>
            <div className='lg:w-[50%] w-[100%] h-64 pl-5 flex flex-col items-center p-20 justify-center'>
                <ResponsiveContainer width="99%" height={300}>
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
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;