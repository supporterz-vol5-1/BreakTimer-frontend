import GraphBar from './GraphBar'

import data from './data.json'

const Dashboard = () =>{
    return (
        <div>
            <div>Dashboard</div>
            <GraphBar time_data={data}/>
       </div>
    )
}

export default Dashboard
