import React, {useState} from 'react'
import GraphBar from './GraphBar'
import GraphPie from './GraphPie'
import './Dashboard.css'

import data from './data.json'

type Props = {
    username: string
}

const dataKeys = (data: any) =>{
    var lang_list: string[] = [];
    for (var item of data) {
        // console.log(item)
        Object.keys(item).forEach(key => {
            if(!lang_list.includes(key)){
                lang_list.push(key)
            }
        })
    }
    return lang_list
}

const handleColormap = (lang_list: string[]) =>{
    var colormap: any = {}
    var colorkey: string[] = ["#80DEEA", "#29B6F6","#4DB6AC","#00BCD4"]
    var count: number = 1;
    for (var item of lang_list) {
        count++;
        colormap[item] = colorkey[count % colorkey.length]
    }
    return colormap
}

type DBdata= {
    username: string,
    timedata: Array<Object>,
    lang: Array<string>,
    colormap : Object[]
}

const UserDashboard = (props: DBdata) => {
    return(
        <div>
            <div className='title'>{props.username}'s Dashboard</div>
                <GraphBar key='GraphBar' time_data={props.timedata} lang={props.lang} colormap={props.colormap} />
                <GraphPie time_data={props.timedata} lang={props.lang} colormap={props.colormap} />
        </div>
    )
}

const SampleDashboard: React.VFC<DBdata> = (props: DBdata) => {
    return(
        <div>
            <div className='title'>sample Dashboard</div>
                <GraphBar key='GraphBar' time_data={props.timedata} lang={props.lang} colormap={props.colormap} />
                <GraphPie time_data={props.timedata} lang={props.lang} colormap={props.colormap} />
        </div>
    )
}

const Dashboard = (props: Props) => {
    const [timedata, setData] = useState(data)
    const [lang, setLang] = useState(dataKeys(data))
    const [colormap, setColormap] = useState(handleColormap(lang))
    const username = props.username
    if(username === ""){
        return <SampleDashboard username={username} timedata={timedata} lang={lang} colormap={colormap} />
    }
    else {
        return <UserDashboard username={username} timedata={timedata} lang={lang} colormap={colormap} />
    }
}

export default Dashboard
