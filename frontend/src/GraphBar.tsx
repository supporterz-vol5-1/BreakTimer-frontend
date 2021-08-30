import React from 'react';
import {BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer} from 'recharts'

type Props = {
    time_data: Array<object>,
    lang: string[],
    colormap: Array<object>
}

const formatDate = (date: any)=> {
    var m: number= date.getMonth() + 1;
    var d: number= date.getDate();
    return String(m) + "/" + String(d)
}

const formatData=(data: any)=>{
    var date: any = new Date()
    var time_data: any = data
    var formattedData:any =[]
    date.setDate(date.getDate() - 6);
    for (var item of time_data) {
        item['date'] = formatDate(date)
        date.setDate(date.getDate() + 1);
        formattedData.push(item)
    }
    return formattedData
}


const GraphBar = (props: Props) => {
    const time_data =JSON.parse(JSON.stringify(props.time_data))
    const lang: string[] = props.lang
    const graph_data: any =formatData(time_data)
    const color: any = props.colormap
    return (
        <ResponsiveContainer width="50%" height={300}>
            <BarChart data={graph_data} margin={{top: 20, right: 30, left: 0, bottom: 0}}>
                <XAxis dataKey='date' interval={0}/>
                <YAxis />
                <Legend />
                <Tooltip />
                {
                    lang.map(key => (
                        <Bar dataKey={key} stackId="a" fill={color[key]}/>
                    ))
                }
            </BarChart>
        </ResponsiveContainer>
    )
}

export default GraphBar
