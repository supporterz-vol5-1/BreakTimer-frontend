import {useState} from 'react'
import GraphBar from './GraphBar'
import GraphPie from './GraphPie'

import data from './data.json'

const Dashboard = () => {
    const [timedata, setData] = useState(data)
    return (
        <div>
            <div>Dashboard</div>
            <GraphBar key='GraphBar'time_data={timedata}/>
            <GraphPie time_data={timedata}/>
       </div>
    )
}

export default Dashboard
