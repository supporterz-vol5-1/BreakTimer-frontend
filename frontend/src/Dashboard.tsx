import { useState } from 'react'
import GraphBar from './GraphBar'
import GraphCircle from './GraphCircle'

import data from './data.json'

const Dashboard = () => {
    const [timedata, setData] = useState(data)
    console.log(timedata)
    return (
        <div>
            <div>Dashboard</div>
            <GraphBar key='GraphBar'time_data={timedata}/>
            <GraphCircle />
       </div>
    )
}

export default Dashboard
