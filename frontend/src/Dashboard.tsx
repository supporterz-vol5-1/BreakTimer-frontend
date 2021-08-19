import React, {useState} from 'react'
import GraphBar from './GraphBar'
import GraphPie from './GraphPie'
import './Dashboard.css'

import data from './data.json'

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

const Dashboard = () => {
    const [timedata, setData] = useState(data)
    const [lang, setLang] = useState(dataKeys(data))
    const [colormap, setColormap] = useState(handleColormap(lang))
    // console.log(colormap)
    return (
        <div>
            <div className='title'>Dashboard</div>
            <GraphBar key='GraphBar' time_data={timedata} lang={lang} colormap={colormap}/>
            <GraphPie time_data={timedata} lang={lang}colormap={colormap}/>
       </div>
    )
}

export default Dashboard
