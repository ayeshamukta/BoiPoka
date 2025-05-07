import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

const PagesToRead = () => {

    const allBooks = useLoaderData();

    const [data, setData] = useState([]);

    useEffect(() => {
        // console.log(allBooks);

        const values = allBooks.map(book => ({ name: book.bookName, value: book.totalPages }))

        setData(values);



    }, [])

    console.log(data);
    return (
        <div className='text-center mx-auto my-24 lg:px-10'>
            <BarChart data={data} height={307} width={1400}>
                <XAxis dataKey="name"></XAxis>
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
                
                
            </BarChart>

        </div>
    );
};

export default PagesToRead;