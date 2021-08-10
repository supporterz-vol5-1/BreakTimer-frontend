import React, {PureComponent} from 'react';
import {BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer} from 'recharts'

const data = [
  {x: 0, y: 8},
  {x: 1, y: 5},
  {x: 2, y: 4},
  {x: 3, y: 9},
  {x: 4, y: 1},
  {x: 5, y: 7},
];

class Chart extends PureComponent {
    render(){
        return (
            <BarChart width={500} height={300} data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <XAxis dataKey="x" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey='y'/>
            </BarChart>
        )
    }
}


export default Chart
