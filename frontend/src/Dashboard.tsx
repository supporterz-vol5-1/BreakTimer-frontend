import react, {Component} from 'react'
import Graph_bar from './Graph_bar'

import data from './data.json'


const Dashboard = () =>{
    return (
        <div>
            <div>Dashboard</div>
            <Graph_bar time_data={data}/>
       </div>
    )
}

export default Dashboard
