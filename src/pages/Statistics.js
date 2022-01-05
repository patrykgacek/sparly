import Layout from "../components/Layout";
import Chart from "react-google-charts";
import { useState } from "react";
import { useDatabase } from "../context/DatabaseContext";
import { useEffect } from "react"
import { EXPENSE, INCOME } from "../constans";

const Statistics = () => {
    const dataHeader = ['', 'Income', 'Expenses']
    const data1Header = ['Task', 'Hours per Day']
    
    var currencySymbol = "PLN"
    /*
    var expensee = [
        ['aaa','10-12-2021', '20', 'AA', 'food'],
        ['aaa','11-12-2021', '100', 'AA', 'travels'],
        ['aaa','12-12-2021', '24', 'AA', 'healthcare'],
        ['aaa','13-12-2021', '5', 'AA', 'communication'],
        ['aaa','14-12-2021', '220', 'AA', 'healthcare'],
        ['aaa','15-12-2021', '201', 'AA', 'entertiment'],
        ['aaa','16-12-2021', '20', 'AA', 'food'],
    ]
    var income = [
        ['aaa','10-12-2021', '100', 'AA', 'food'],
        ['aaa','11-12-2021', '30', 'AA', 'food'],
        ['aaa','12-12-2021', '0', 'AA', 'food'],
        ['aaa','13-12-2021', '5', 'AA', 'food'],
        ['aaa','14-12-2021', '30', 'AA', 'food'],
        ['aaa','15-12-2021', '250', 'AA', 'food'],
        ['aaa','16-12-2021', '0', 'AA', 'food'],
    ]*/
    var expenseTemp = []
    var incomeTemp = []
    var categories = []
    const [dateFrom, setFromDate] = useState(()=>{
        let d = new Date();
        d.setDate(d.getDate() - 30); 
        return d.getMonth()<10 ? `${d.getFullYear()}-0${d.getMonth()+1}-${d.getDate()}`:
         `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`
    });
    const [dateTo, setToDate] = useState(()=>{
        let d = new Date();
        return d.getMonth()<10 ? `${d.getFullYear()}-0${d.getMonth()+1}-${d.getDate()}`:
         `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`
    });
    const { expense,income, setLoadExpense, setLoadIncome } = useDatabase()
    useEffect(() => {
        setLoadExpense(true)
    })
    useEffect(() => {
        setLoadIncome(true)
    })
    function setChart(){
        let arr = []
        arr.push(dataHeader)
        for(var i = 0;i<incomeTemp.length;i++){
            let t = [incomeTemp[i][1], parseInt(incomeTemp[i][2]), parseInt(expenseTemp[i][2])]

            arr.push(t)
        }
        return arr
     
    }
    function setChart1(){
        let arr = [];
        arr.push(data1Header)
        for(var e = 0;e<expenseTemp.length;e++){
            let present = false
            let index
            for(var a = 0;a<arr.length;a++){
                if(arr[a][0]==expenseTemp[e][4]){
                    present = true
                    index = a
                    break;
                }
            }
            if(present){
                arr[index][1] += parseInt(expenseTemp[e][2])
            }
            else{
                arr.push([expenseTemp[e][4], parseInt(expenseTemp[e][2])])
            }
        }
        return arr
    }
    const [data, setData] = useState(setChart());
    const [data1, setData1] = useState(setChart1());
    const handleDateFrom = e => {
        setFromDate(e.target.value)
    }
    const handleDateTo = e => {
        setToDate(e.target.value)
    }
 
    const drawCharts = () => {
        console.log(dateFrom, dateTo)
        expenseTemp.length = 0;
        incomeTemp.length = 0;
        console.log(expense)
        
        Object.keys(expense).map(key => { 
           // console.log(expense[key][EXPENSE.NAME])
           // console.log(expense[key][EXPENSE.PRICE]) 
            expenseTemp.push([expense[key][EXPENSE.NAME],
                new Date(expense[key][EXPENSE.DATE]),
                expense[key][EXPENSE.PRICE],
                expense[key][EXPENSE.FAMILY_MEMBER],
                expense[key][EXPENSE.CATEGORY]])
        })
        Object.keys(income).map(key => { 
             incomeTemp.push([income[key][INCOME.NAME],
                income[key][INCOME.DATE],
                income[key][INCOME.PRICE],
                income[key][INCOME.FAMILY_MEMBER],
                income[key][INCOME.CATEGORY]])
         })
        var aa = expenseTemp.sort((a, b) => b[1] - a[1])
         console.log(aa)
        setData(setChart())
        setData1(setChart1())
    }
  
    return (
        <Layout>
            <div style={{display: 'flex',flexDirection:'column',  rowGap:'10px', flexDirection:'column'}}>
                <div  className={`border-solid border-2 border-black-600 `} style={{display:'flex', flexDirection:'row', columnGap:'10px', alignItems:'center', justifyContent:'center', maxHeight:'55px'}}>
                    <span >From</span>
                    <input 
                     type="date"
                     style={{border:'2px solid rgb(37, 99, 235)'}}
                     onChange={handleDateFrom}
                     value={dateFrom}
                     />
                    <span >To</span>
                    <input
                     type="date" 
                     style={{border:'2px solid rgb(37, 99, 235)'}}
                     onChange={handleDateTo}
                     value={dateTo}
                     />
                    <button onClick={drawCharts} type="button" className="px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Show</button>
                </div>
            
                <div style={{ display: 'flex', flexDirection:'row',flexWrap:'wrap', justifyContent:'space-evenly', backgroundColor:'white', flexGrow:'1'}}>
                    <div  className={`border-solid border-2 border-black-600 `}>
                        <Chart
                          width={'100%'}
                          height={'400px'}
                        chartType="ColumnChart"
                        loader={<div>Loading Chart</div>}
                        data = {data}
                        options={{
                            title: 'User income/expanse',
                            chartArea: { width: '70%' },
                            hAxis: {
                            title: '',
                            minValue: 0,
                            },
                            vAxis: {
                            title: currencySymbol,
                            },
                        }}
                        legendToggle
                        />
                    </div>
                    <div  className={`border-solid border-2 border-black-600 py-5 text-center text-3xl rounded-md`}>
                        <Chart
                           width={'100%'}
                           height={'500px'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data = {data1}
                        options={{
                            title: 'Expenses',
                            pieHole: 0.4,
                            chartArea: { width: '70%' },
                            hAxis: {
              
                            minValue: 0,
                            },
                            vAxis: {

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