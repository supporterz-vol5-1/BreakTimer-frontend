import React from "react"

import { PieChart, Pie, Legend, Tooltip, Cell, ResponsiveContainer } from "recharts"

type Props = {
    time_data: Array<Object>,
    colormap: Array<Object>,
    lang: string[]
}

type ChartData = {
    lang: string
    time: number
}

const exportData = (data: Array<Object>) => {
    var dataDict: {[name: string]: number} = {}
    // 一回集計
    for(var elem of data){
        // console.log(elem)
        Object.entries(elem).forEach(([key,value]) => {
            if(!(key in dataDict)){
                dataDict[key] = value
            }
            else{
                dataDict[key] += value
            }
        })
    }
    // console.log(dataDict)
    return dataDict
}

const formantData = (data:{[name: string]: number}) =>{
    var tmp: ChartData;
    var formattedData: Array<ChartData> = []
    Object.entries(data).forEach(([key, value]) => {
        // console.log(key, value)
        tmp = {
            lang : key,
            time: value
        }
        formattedData.push(tmp)
    })
    // console.log(formattedData)
    return formattedData
}

const lenderLabel = (label:any) =>{
    return label.lang +" " +  label.time
}

const GraphPie = (props: Props) => {
    const chartdata: Array<Object> = props.time_data
    const colormap: any = props.colormap
    const lang: string[] = props.lang
    var data = exportData(chartdata)
    const formattedData = formantData(data)
    return (
        <ResponsiveContainer width="100%" height={400}>
            <PieChart >
                <Legend verticalAlign='top' align='center'/>
                <Pie data={formattedData} dataKey="time" nameKey='lang'outerRadius={100} label={lenderLabel} >
                <Tooltip />
                {
                    lang.map(key => (
                        < Cell key = {key} fill = {colormap[key]} />
                ))
                }
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    ) 
}

export default GraphPie
