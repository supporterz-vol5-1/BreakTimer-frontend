import { useState } from 'react'
import GraphBar from './GraphBar'

import data from './data.json'

const Dashboard = () => {
    const [timedata, setData] = useState(data)
    console.log(timedata)
    return (
        <div>
            <div>Dashboard</div>
            <GraphBar key='GraphBar'time_data={timedata}/>
       </div>
    )
}

export default Dashboard
