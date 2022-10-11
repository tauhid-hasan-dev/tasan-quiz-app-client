import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const datas = useLoaderData();
    const data = datas.data;
    return (
        <div>
            <p>this is statistics</p>
            <LineChart
                    width={1000}
                    height={400}
                    data={data} > 
                    console.log(data);
                    <CartesianGrid strokeDasharray="3 3" />
                        <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="quiz" stroke="#82ca9d" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                    </LineChart>
        </div>
    );
};

export default Statistics;