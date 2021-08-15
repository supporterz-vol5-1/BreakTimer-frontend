import React from "react"

import { PieChart, Pie, Legend, Tooltip  } from "recharts"

type Props = {
    time_data: Array<Object>
}

const GraphPie = (props: Props) => {
    const chartdata:Array<Object> = props.time_data
    var dataDict: {[name: string]: number} = {}
    for(var elem of chartdata){
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
    console.log(dataDict)
    return(
        <div> aaaa </div>
    ) 
}

export default GraphPie
