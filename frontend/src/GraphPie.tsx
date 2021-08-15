import React from "react"

import { PieChart, Pie, Legend, Tooltip  } from "recharts"

type Props = {
    time_data: Array<Object>
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

const GraphPie = (props: Props) => {
    const chartdata: Array<Object> = props.time_data
    var data = exportData(chartdata)
    var tmp: ChartData;
    var formattedData: Array<ChartData> = []
    Object.entries(data).forEach(([key, value]) => {
        console.log(key, value)
        tmp = {
            lang : key,
            time: value
        }
        formattedData.push(tmp)
    })
    console.log(formattedData)
    return (
        <PieChart width={400} height={500}>
            <Pie data={formattedData} dataKey="time" nameKey='lang' outerRadius={100} label/>
        </PieChart>
    ) 
}

export default GraphPie
