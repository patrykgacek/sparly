import { useState } from "react"
import { INCOME, SAVINGS_GOAL, USER_INFO } from "../../constans"
import { useDatabase } from "../../context/DatabaseContext"
import { todayDate } from "../../utils"

const SavingGoalComplete = props => {

    const {updateSavingsGoal,userInfo,updateUserInfo, addIncome} = useDatabase() // Baza danych

    const [isPayFromGoalForm, setisPayFromGoalForm] = useState(true)
    const [withdraw, setwithdraw] = useState("") 
    const handlewithdraw = e => setwithdraw(e.target.value)

    const zmien5 = () => {
        setisPayFromGoalForm(!isPayFromGoalForm)
    }

    const payFromGoal = e =>{
        e.preventDefault();

        if (parseFloat(props.actualA) === 0) return

        //const newActualAmount = parseFloat(props.actualA) - parseFloat(withdraw);
        //const newBalance = parseFloat(userInfo[USER_INFO.BALANCE]) + parseFloat(withdraw);

        let tmpUserBalance =  parseFloat(userInfo[USER_INFO.BALANCE])
        let tmpWithdraw = parseFloat(withdraw)
        let newActualAmount = parseFloat(props.actualA) - tmpWithdraw;
        //let tmpGoalAmount = parseFloat(props.goalAmount)

        if (newActualAmount < 0) {
            tmpWithdraw -= Math.abs(newActualAmount)
            newActualAmount = 0
        }
        const newBalance = tmpUserBalance + tmpWithdraw;
        const newIncome = {
            [INCOME.NAME]: 'Withdraw from saving goal',
            [INCOME.DATE]: todayDate(),
            [INCOME.PRICE]: tmpWithdraw,
            [INCOME.FAMILY_MEMBER]: userInfo[USER_INFO.NAME],
            [INCOME.CATEGORY]: 'Savings Goal',
            [INCOME.DESCRIPTION]: props.title,
        }
        addIncome(newIncome);
        updateSavingsGoal(props.id+"/"+[SAVINGS_GOAL.ACTUAL_AMOUNT],newActualAmount);
        updateUserInfo([USER_INFO.BALANCE],newBalance);
        setisPayFromGoalForm(true);
        setwithdraw('');
    }

    return (
        <div className={`border-solid py-1 px-1 border-2  border-black-400 text-3xl rounded-lg ${isPayFromGoalForm ? "h-52" : "h-80"} `}>
                    <div className="w-3/12 h-48 inline-block bg-green-200 float-left text-center border-solid border-2 border-white rounded-lg">
                        <label htmlFor="exampleFormControlInput1" className="form-label text-xl w-full inline-block mt-5  text-gray-700">Goal name: {props.title}</label>
                        <label htmlFor="exampleFormControlInput1" className="form-label text-xl w-full inline-block mt-5  text-gray-700">Create date: {props.actualD}</label>
                        <label htmlFor="exampleFormControlInput1" className="form-label text-xl w-full inline-block mt-5  text-gray-700">Completion date: {props.completionDate}</label>
                    </div>
                    <div className="w-7/12 h-48 float-left bg-green-200 border-solid border-2 border-white rounded-lg">
                        <div className="w-11/12 bg-gray-200 h-1 mx-auto">
                            <div className="bg-green-600 h-1 mt-9" style={{width:(props.actualA*100/props.goalAmount)+'%'}}></div>
                            <label htmlFor="exampleFormControlInput1" className="form-label text-xl w-1/3 inline-block mt-7 mb-1 text-gray-700"> Actual amount: {props.actualA}</label>
                            <label htmlFor="exampleFormControlInput1" className="form-label text-xl w-1/3 inline-block text-center mt-7 mb-1 text-gray-700">{props.actualA*100/props.goalAmount}%</label>
                            <label htmlFor="exampleFormControlInput1" className="form-label text-xl w-1/3 text-right inline-block mt-7 mb-1 text-gray-700">Goal amount: {props.goalAmount}</label>
                            <label htmlFor="exampleFormControlInput1" className="form-label text-xl w-full text-center inline-block mt-1 mb-1 text-gray-700">Description: {props.description}</label>
                        </div>

                    </div>
                    <div className="w-2/12 h-48 static bg-green-200 float-left border-solid border-2 border-white rounded-lg">

                
                        <button className="w-44 h-8 border-solid border-2 bg-white rounded-md text-lg ml-1" onClick={zmien5}>Withdraw from goal</button>
                      
                    </div>
                    {
                        isPayFromGoalForm ? ("") : (

                            <form onSubmit={payFromGoal} className="flex float-left w-full justify-center">

                                <label htmlFor="exampleFormControlInput1" className="form-label mt-8 text-xl inline-block mb-1 text-gray-700"
                                >How much do you want to withdraw from goal:</label
                                >
                                <input
                                    onChange={handlewithdraw}
                                    value={withdraw}
                                    type="number"
                                    className="form-control block w-32 h-10 px-3 py-1.5 mt-7 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                                    id="exampleNumber0"
                                    placeholder="Amount"
                                    required
                                    min="0"
                                    max={props.actualA}
                                />
                                <button className="w-44 h-10 border-solid border-2 rounded-md text-lg  hover:bg-black-100 mx-4 mt-7">Submit</button>

                            </form>


                        )
                    }
                    

                </div>
    )
}

export default SavingGoalComplete