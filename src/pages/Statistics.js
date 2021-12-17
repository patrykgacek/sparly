import Layout from "../components/Layout";
import Chart from "react-google-charts";
import { useState } from "react";

const Statistics = () => {
    const data=[
        ['City', '2010 Population', '2000 Population'],
        ['13-12-2021', 8175000, 8008000],
        ['14-12-2021', 3792000, 3694000],
        ['15-12-2021', 2695000, 2896000],
        ['16-12-2021', 2099000, 1953000],
        ['17-12-2021', 1526000, 1517000],
    ]

    const data1 = [
        ['Task', 'Hours per Day'],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Sleep',    7]
      ];
    const [zmienna, set] = useState(false)
    
    const funkcja = () =>{}
    return (
        <Layout>
            <div style={{display: 'flex',flexDirection:'column',  rowGap:'10px', flexDirection:'column'}}>
                <div  className={`border-solid border-2 border-black-600 `} style={{display:'flex', flexDirection:'row', columnGap:'10px', alignItems:'center', justifyContent:'center', maxHeight:'55px'}}>
                    <span >From</span>
                    <input type="date" style={{border:'2px solid rgb(37, 99, 235)'}}></input>
                    <span >To</span>
                    <input type="date" style={{border:'2px solid rgb(37, 99, 235)'}}></input>
                    <button type="button" class="px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Show</button>
                </div>
            
                <div style={{ display: 'flex', flexDirection:'row',flexWrap:'wrap', justifyContent:'space-evenly', backgroundColor:'white', flexGrow:'1'}}>
                    <div  className={`border-solid border-2 border-black-600 py-5 text-center text-3xl rounded-md`}>
                        <Chart
                          width={'1100px'}
                          height={'400px'}
                        chartType="ColumnChart"
                        loader={<div>Loading Chart</div>}
                        data = {data}
                        options={{
                            title: 'Population of Largest U.S. Cities',
                            chartArea: { width: '30%' },
                            hAxis: {
                            title: 'Total Population',
                            minValue: 0,
                            },
                            vAxis: {
                            title: 'City',
                            },
                        }}
                        legendToggle
                        />
                    </div>
                    <div  className={`border-solid border-2 border-black-600 py-5 text-center text-3xl rounded-md`}>
                        <Chart
                           width={'1100px'}
                           height={'500px'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data = {data1}
                        options={{
                            title: 'Population of Largest U.S. Cities',
                            pieHole: 0.4,
                            chartArea: { width: '30%' },
                            hAxis: {
                            title: 'Total Population',
                            minValue: 0,
                            },
                            vAxis: {
                            title: 'City',
                            },
                        }}
                        legendToggle
                        />
                    </div>
                </div>
            </div>
           
        </Layout>
    )
}

export default Statistics;