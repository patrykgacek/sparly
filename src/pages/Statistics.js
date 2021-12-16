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
                <div style={{position:'fixed', top:'0', zIndex:'100',backgroundColor:'rgba(255,255,255,0.8)',boxShadow:'-1px 15px 15px -10px rgba(66, 68, 90, 0.3)', backdropFilter:'blur(7px)', display: 'flex', width:'100%', height:'40px', alignItems:'center', justifyContent:'center', columnGap:'20px'}}>
                    <span>From</span>
                    <input type="date" ></input>
                    <span>To</span>
                    <input type="date" ></input>
                </div>
            
                <div style={{ display: 'flex', flexDirection:'row',flexWrap:'wrap', justifyContent:'space-evenly', backgroundColor:'white', flexGrow:'1'}}>
                    <div>
                        <Chart
                          width={'900px'}
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
                    <div>
                        <Chart
                           width={'900px'}
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