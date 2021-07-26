import React, {Component} from 'react';
import "../node_modules/react-vis/dist/style.css"
import {XYPlot, LineSeries,VerticalBarSeries,  VerticalGridLines, HorizontalGridLines, XAxis, YAxis} from "react-vis";


class Chart extends Component {
    render(){
        const data = [
      {x: 0, y: 8},
      {x: 1, y: 5},
      {x: 2, y: 4},
      {x: 3, y: 9},
      {x: 4, y: 1},
      {x: 5, y: 7},
    ];
        return (
            <XYPlot xType="ordinal" height={200} width={200}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
                <YAxis />
                <VerticalBarSeries barWidth={0.5} data={data} />
                <LineSeries data={data} />
        </XYPlot>
    )
    }
}


export default Chart
