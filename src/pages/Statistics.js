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
    function formatDate(d){
        let year = d.getFullYear();
        let month = d.getMonth()+1
        let day = d.getDate();
        if(month<10){
            month = `0${month}`
        }
        if(day<10){
            day = `0${day}`
        }
        return `${year}-${month}-${day}`
    }
    const [dateFrom, setFromDate] = useState(()=>{
        let d = new Date();
        d.setDate(d.getDate() - 30);
        return formatDate(d)
    });
    const [dateTo, setToDate] = useState(()=>{
        let d = new Date();
        return formatDate(d)
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
    function isValidDate(d) {
        var timestamp = Date.parse(d);
        console.log(timestamp)
        if (isNaN(timestamp) == false) {
            
            return true
        }
        return false;
    }
    /**
     * Compeare two dates
     * @param {*} data1 format required dd.mm.yyyy
     * @param {*} data2 format required dd.mm.yyyy
     * @returns true if date1 is newer than date2
     */
    function dateNewerThan(data1, data2){
        //var d1 = data1.split(/.-/).map(Number);
        //var d2 = data2.split(/.-/).map(Number);
        var d1 = data1.split('-').map(Number);
        var d2 = data2.split('-').map(Number);
        if(d1[0]>d2[0]){
            return true;
        }
        else if(d1[0] == d2[0]){
            if(d1[1]>d2[1]){
                return true;
            }
            else if(d1[1] == d2[1]){
                if(d1[2]>d2[2]){
                    return true;
                }
            }
        }
        return false
    }
    function dateNewerOrEqualThan(data1, data2){
        //var d1 = data1.split(/.-/).map(Number);
        //var d2 = data2.split(/.-/).map(Number);
        var d1 = data1.split('-').map(Number);
        var d2 = data2.split('-').map(Number);
        if(d1[0]>d2[0]){
            return true;
        }
        else if(d1[0] == d2[0]){
            if(d1[1]>d2[1]){
                return true;
            }
            else if(d1[1] == d2[1]){
                if(d1[2]>=d2[2]){
                    return true;
                }
            }
        }
        return false
    }
   
    function getDateRange(data){
        var dataNew = []
        for(var i =0;i<data.length;i++){
            if(dateNewerOrEqualThan(data[i][1], dateFrom) && dateNewerOrEqualThan(dateTo, data[i][1])){
                dataNew.push(data[i])
            }
        }
    
        return dataNew
    }
    /**
     * Sort by older date
     * @param {*} dateIndex idex od date argument in array of arrays
     * @param {*} data array of arrays
     */
    function sortByDate(data){
        var i, j; 
        var n = data.length
        for (i = 0; i < n-1; i++){
            for (j = 0; j < n-i-1; j++) {
                if (dateNewerThan(data[j][1], data[j+1][1])) {
                    let temp = data[j]
                    data[j] = data[j+1]
                    data[j+1] = temp
                }
            }
        }
       
    }
    
    function groupByMonthAverage(data){
        var group = []
        for(let m = 1;m<=12;m++){
            let month = {month: m, sum:0, records:0, average:0.0}
            group.push(month)
        }
        Array.prototype.forEach.call(data, function(record){
            let month = parseInt(record[1].split('.')[1])-1
            group[month].sum += parseInt(record[2])
            group[month].records += 1
        })
        for(let m = 0;m<12;m++){
            group[m].average = group[m].sum/group[m].records
        }
        return group
    }
    function getMonth(data, monthNumber){
        var dataNew = []
        for(var i =0;i<data.length;i++){
            if(parseInt(data[i][1].split('.')[1])==monthNumber){
                dataNew.push(data[i])
            }
        }
        return dataNew
    }
   function devConvertDate(date){
       let t = date.split('.')
       return `${t[2]}-${t[1]}-${t[0]}`
   }
   function normalizeData(){
    sortByDate(expenseTemp)
    sortByDate(incomeTemp)
       if(incomeTemp.length!=expenseTemp.length){
            if(incomeTemp.length<expenseTemp.length){
                let incomeNew = []
                for(var i=0;i<expenseTemp.length;i++){
                    if(incomeTemp.length<=i){
                        incomeNew.push([expenseTemp[i][0],expenseTemp[i][1],0,0,0])
                        continue
                    }
                    if(incomeTemp.length<=i+1&& incomeTemp[i][1]==expenseTemp[i][1]){
                        incomeNew.push(incomeTemp[i])
                    }
                    else{
                        incomeNew.push([expenseTemp[i][0],expenseTemp[i][1],0,0,0])
                    }
                }
                incomeTemp = incomeNew
            }
            else{
                let expenseNew = []
                for(var i=0;i<incomeTemp.length;i++){
                    if(expenseTemp.length<=i){
                        expenseNew.push([incomeTemp[i][0],incomeTemp[i][1],0,0,0])
                        continue
                    }
                    
                    if(expenseTemp[i][1]==expenseTemp[i][1]){
                        expenseNew.push(expenseTemp[i])
                    }
                    else{
                        expenseNew.push([incomeTemp[i][0],incomeTemp[i][1],0,0,0])
                    }
                    console.log(expenseTemp[i], incomeTemp[i])
                }
                expenseTemp = expenseNew
            }
       }
   }
    const drawCharts = () => {
        console.log(dateFrom, dateTo)
        expenseTemp.length = 0;
        incomeTemp.length = 0;

        Object.keys(expense).map(key => { 
           // console.log(expense[key][EXPENSE.NAME])
           // console.log(expense[key][EXPENSE.PRICE]) 
            expenseTemp.push([expense[key][EXPENSE.NAME],
                devConvertDate(expense[key][EXPENSE.DATE]),
                expense[key][EXPENSE.PRICE],
                expense[key][EXPENSE.FAMILY_MEMBER],
                expense[key][EXPENSE.CATEGORY]])
        })
        Object.keys(income).map(key => { 
             incomeTemp.push([income[key][INCOME.NAME],
                devConvertDate(income[key][INCOME.DATE]),
                income[key][INCOME.PRICE],
                income[key][INCOME.FAMILY_MEMBER],
                income[key][INCOME.CATEGORY]])
         })
        expenseTemp =  getDateRange(expenseTemp);
        incomeTemp =  getDateRange(incomeTemp)

        normalizeData()
       // var g = groupByMonthAverage(expenseTemp)
       //  console.log(g)
        //expenseTemp =  getMonth(expenseTemp, 1);
        //incomeTemp =  getMonth(incomeTemp, 1)
        
       
       // incomeTemp.pop()
       // incomeTemp.pop()
       // incomeTemp.pop()
        console.log(expenseTemp, incomeTemp)
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