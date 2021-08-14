import {BarChart, Bar, XAxis, YAxis, Tooltip, Legend} from 'recharts'

type Props = {
    time_data: any
}

const GraphBar = (props: Props) => {
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

    const formatDate = (date: any)=> {
        var m: number= date.getMonth() + 1;
        var d: number= date.getDate();
        return String(m) + "/" + String(d)
    }

    const formatData=(data: any)=>{
        var date: any = new Date()
        var time_data:any = data
        date.setDate(date.getDate() - 6);
        for (var item of time_data) {
            item['date'] =formatDate(date)
            date.setDate(date.getDate() + 1);
        }
        return time_data
    }

    const handleData = (data: any)=> {
        var lang_list: string[] =dataKeys(data)
        var time_data: any = formatData(data)
        return {keys: lang_list, formatedData: time_data}
    }

    const handleColormap = (lang_list: string[]) =>{
        var colormap: any = {}
        var colorkey: string[] = ["#80DEEA", "#29B6F6","#4DB6AC","#00BCD4"]
        var count: number = 1;
        for (var item of lang_list) {
            // console.log(colorkey[count % colorkey.length])
            count++;
            colormap[item] = colorkey[count % colorkey.length]
        }
        // console.log(colormap)
        return colormap
    }
    const time_data = props.time_data
    const dataInfo: any = handleData(time_data)
    const lang: string[] = dataInfo.keys
    const graph_data: any = dataInfo.formatedData
    const color:any =handleColormap(lang)
    return (
        <BarChart width={500} height={300} data={graph_data} margin={{top: 20, right: 30, left: 0, bottom: 0}}>
            <XAxis dataKey='date' interval={0}/>
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

export default GraphBar
