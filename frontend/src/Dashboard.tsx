import react, {Component} from 'react'
import Graph_bar from './Graph_bar'

class Dashboard extends Component {
    render(){
        return(
            <div>
                <div>header</div>
                <Graph_bar />
           </div>
        )
    }
}

export default Dashboard
