import React, {PureComponent} from 'react';
import {BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer} from 'recharts'
import data from './data.json'

class Chart extends PureComponent {
    handleData(data: any) {
        var lang_list: string[] = [];
        // console.log(data)
        for (var item of data) {
            console.log(item)
            Object.keys(item).forEach(key => {
                if(!lang_list.includes(key)){
                    lang_list.push(key)
                }
            })
        }
        console.log(lang_list)
    }
    render(){
        this.handleData(data)
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
