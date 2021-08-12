import React, {PureComponent} from 'react';
import {BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer} from 'recharts'
import data from './data.json'

class Chart extends PureComponent {
    dataKeys(data: any){
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
    formatDate(date: any) {
        var m: number= date.getMonth() + 1;
        var d: number= date.getDate();
        return String(m) + "/" + String(d)
    }
    formatData(data: any, keyList: any, date: any){
        // console.log(data, keyList)
        date.setDate(date.getDate() - 6);
        // console.log(date)
        // console.log(this.formatDate(date))
        for (var item of data) {
            item['date'] = this.formatDate(date)
            for (var lang of keyList) {
                if(!(lang in item)){
                    item[lang] = 0
                }
            }
        date.setDate(date.getDate() + 1);
        }
        // console.log(data)
    }
    handleData(data: any) {
        var lang_list: string[] = this.dataKeys(data)
        var date: any = new Date()
        var count:number = 0
        this.formatData(data, lang_list,date)
        return lang_list
    }
    handleColormap(lang_list: string[]){
        var colormap: any = {}
        var colorkey: string[] = ["#80DEEA", "#29B6F6","#4DB6AC","#00BCD4"]
        var count: number = 1;
        for (var item of lang_list) {
            // console.log(colorkey[count % colorkey.length])
            count++;
            colormap[item] = colorkey[count % colorkey.length]
        }
        console.log(colormap)
        return colormap
    }
    render(){
        var lang: string[] = this.handleData(data)
        var color:any = this.handleColormap(lang)
        return (
            <BarChart width={500} height={300} data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <XAxis dataKey="date" />
                <YAxis />
                <Legend />
                <Tooltip />
                {
                    lang.map(key => (
                        <Bar dataKey={key} stackId="a" fill={color[key]}/>
                    ))
                }
            </BarChart>
        )
    }
}


export default Chart
