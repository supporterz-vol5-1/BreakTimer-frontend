import react, {Component} from 'react'
import Chart from './Chart'

class Dashboard extends Component {
    render(){
        return(
            <div>
                <div>header</div>
                <Chart />
           </div>
        )
    }
}

export default Chart
