import { useState } from "react"
import { SAVINGS_GOAL, USER_INFO } from "../../constans"
import { useDatabase } from "../../context/DatabaseContext"


const SavingGoal = props => {

    const [isCancelForm, setisCancelForm] = useState(true)
    const [isPayToGoalForm, setisPayToGoalForm] = useState(true)
    const [isPayFromGoalForm, setisPayFromGoalForm] = useState(true)
    const [isEditForm, setisEditForm] = useState(true)

    
    const [name, setName] = useState(props.title) 
    const [goalAmount, setgoalAmount] = useState(props.goalAmount) 
    const [completionDate, setcompletionDate] = useState(props.completionDate) 
    const [timeInterval, settimeInterval] = useState(props.timeIn) 
    const [description, setdescription] = useState(props.description) 
    const [deposit, setdeposit] = useState("") 
    const [withdraw, setwithdraw] = useState("") 
    

    const handleName = e => setName(e.target.value)
    const handlegoalAmount = e => setgoalAmount(e.target.value)
    const handlecompletionDate = e => setcompletionDate(e.target.value)
    const handletimeInterval = e => settimeInterval(e.target.value)
    const handledescription = e => setdescription(e.target.value)
    const handledeposit = e => setdeposit(e.target.value)
    const handlewithdraw = e => setwithdraw(e.target.value)
    
    const {updateSavingsGoal,userInfo,updateUserInfo} = useDatabase() // Baza danych
    


    const zmien3 = () => {
        setisCancelForm(!isCancelForm)
        setisPayToGoalForm(true)
        setisPayFromGoalForm(true)
        setisEditForm(true)
    }

    const zmien4 = () => {
        setisPayToGoalForm(!isPayToGoalForm)
        setisCancelForm(true)
        setisPayFromGoalForm(true)
        setisEditForm(true)
    }

    const zmien5 = () => {
        setisPayFromGoalForm(!isPayFromGoalForm)
        setisPayToGoalForm(true)
        setisCancelForm(true)
        setisEditForm(true)
    }

    const zmien6 = () => {
        setisEditForm(!isEditForm)
        setisPayFromGoalForm(true)
        setisPayToGoalForm(true)
        setisCancelForm(true)
    }

    const handleUpdate = e =>{
        e.preventDefault();
        const newSavingGoal = {
            [SAVINGS_GOAL.NAME]: name,
            [SAVINGS_GOAL.GOAL_AMOUNT]: goalAmount,
            [SAVINGS_GOAL.COMPLETION_DATE]: completionDate,
            [SAVINGS_GOAL.TIME_INTERVAL]: timeInterval,
            [SAVINGS_GOAL.DESCRIPTION]: description,
            [SAVINGS_GOAL.CREATE_DATE]: props.actualD,
            [SAVINGS_GOAL.ACTUAL_AMOUNT]: props.actualA,
            
        };
        updateSavingsGoal(props.id,newSavingGoal);
        setisEditForm(true);
    }

    const handleDelete = () =>{
        updateSavingsGoal(props.id,null);
    }

    const payToGoal = e =>{
        e.preventDefault();
        const newActualAmount = parseFloat(props.actualA) + parseFloat(deposit);
        const newBalance = parseFloat(userInfo[USER_INFO.BALANCE]) - parseFloat(deposit);
        updateSavingsGoal(props.id+"/"+[SAVINGS_GOAL.ACTUAL_AMOUNT],newActualAmount);
        updateUserInfo([USER_INFO.BALANCE],newBalance);
        setisPayToGoalForm(true);
        setdeposit('');
    }

    const payFromGoal = e =>{
        e.preventDefault();
        const newActualAmount = parseFloat(props.actualA) - parseFloat(withdraw);
        const newBalance = parseFloat(userInfo[USER_INFO.BALANCE]) + parseFloat(withdraw);
        updateSavingsGoal(props.id+"/"+[SAVINGS_GOAL.ACTUAL_AMOUNT],newActualAmount);
        updateUserInfo([USER_INFO.BALANCE],newBalance);
        setisPayFromGoalForm(true);
        setwithdraw('');
    }

    return (
        <div className={`border-solid py-1 px-1 border-2  border-black-400 text-3xl rounded-lg ${isCancelForm ? "h-52" : "h-80"} ${isPayToGoalForm ? "h-52" : "h-80"} ${isPayFromGoalForm ? "h-52" : "h-80"} ${isEditForm ? "h-52" : "h-80"}`}>
                    <div className="w-3/12 h-48 inline-block bg-blue-200 float-left text-center border-solid border-2 border-white rounded-lg">
                        <label for="exampleFormControlInput1" className="form-label text-xl w-full inline-block mt-5  text-gray-700">Goal name: {props.title}</label>
                        <label for="exampleFormControlInput1" className="form-label text-xl w-full inline-block mt-5  text-gray-700">Create date: {props.actualD}</label>
                        <label for="exampleFormControlInput1" className="form-label text-xl w-full inline-block mt-5  text-gray-700">Completion date: {props.completionDate}</label>
                    </div>
                    <div className="w-7/12 h-48 float-left bg-blue-200 border-solid border-2 border-white rounded-lg">
                        <div className="w-11/12 bg-gray-200 h-1 mx-auto">
                            <div className="bg-blue-600 h-1 mt-9" style={{width:(props.actualA*100/props.goalAmount)+'%'}}></div>
                            <label for="exampleFormControlInput1" className="form-label text-xl w-1/3 inline-block mt-7 mb-1 text-gray-700"> Actual amount: {props.actualA}</label>
                            <label for="exampleFormControlInput1" className="form-label text-xl w-1/3 inline-block text-center mt-7 mb-1 text-gray-700">{props.actualA*100/props.goalAmount}%</label>
                            <label for="exampleFormControlInput1" className="form-label text-xl w-1/3 text-right inline-block mt-7 mb-1 text-gray-700">Goal amount: {props.goalAmount}</label>
                            <label for="exampleFormControlInput1" className="form-label text-xl w-full text-center inline-block mb-1 text-gray-700">Time interwal: {props.timeIn}</label>
                            <label for="exampleFormControlInput1" className="form-label text-xl w-full text-center inline-block mt-1 mb-1 text-gray-700">Description: {props.description}</label>
                        </div>

                    </div>
                    <div className="w-2/12 h-48 static bg-blue-200 float-left border-solid border-2 border-white rounded-lg">

                        <button className="w-44 h-8 border-solid border-2 bg-white rounded-md text-lg ml-1 mt-5" onClick={zmien3}>Delete goal</button>
                        <button className="w-44 h-8 border-solid border-2 bg-white rounded-md text-lg ml-1" onClick={zmien4}>Deposit to goal</button>
                        <button className="w-44 h-8 border-solid border-2 bg-white rounded-md text-lg ml-1" onClick={zmien5}>Withdraw from goal</button>
                        <button className="w-44 h-8 border-solid border-2 bg-white rounded-md text-lg ml-1" onClick={zmien6}>Update goal</button>
                    </div>
                    {
                        isCancelForm ? ("") : (

                            <div className="flex float-left w-full mx-auto justify-center">

                                <label for="exampleFormControlInput1" className="form-label text-xl inline-block mt-7 mb-1 text-gray-700">Are you sure that you want delete goal?</label>

                                <button onClick={handleDelete} className="w-44 h-10 border-solid border-2 rounded-md text-lg  hover:bg-black-100 mx-4 mt-7">Submit</button>

                            </div>


                        )
                    }
                    {
                        isPayToGoalForm ? ("") : (

                            <form onSubmit={payToGoal} className="flex float-left w-full justify-center">

                                <label for="exampleFormControlInput1" className="form-label mt-8 text-xl inline-block mb-1 text-gray-700"
                                >How much do you want to deposit:</label
                                >
                                
                                <input
                                    onChange={handledeposit}
                                    value={deposit}
                                    type="number"
                                    className="form-control block w-32 h-10 px-3 py-1.5 mt-7 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleNumber0"
                                    placeholder="Amount"
                                    required
                                />
                                <button className="w-44 h-10 border-solid border-2 rounded-md text-lg  hover:bg-black-100 mx-4 mt-7">Submit</button>

                            </form>


                        )
                    }
                    {
                        isPayFromGoalForm ? ("") : (

                            <form onSubmit={payFromGoal} className="flex float-left w-full justify-center">

                                <label for="exampleFormControlInput1" className="form-label mt-8 text-xl inline-block mb-1 text-gray-700"
                                >How much do you want to withdraw from goal:</label
                                >
                                <input
                                    onChange={handlewithdraw}
                                    value={withdraw}
                                    type="number"
                                    className="form-control block w-32 h-10 px-3 py-1.5 mt-7 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleNumber0"
                                    placeholder="Amount"
                                    required
                                />
                                <button className="w-44 h-10 border-solid border-2 rounded-md text-lg  hover:bg-black-100 mx-4 mt-7">Submit</button>

                            </form>


                        )
                    }
                    {
                        isEditForm ? ("") : (
                            
                            <form onSubmit={handleUpdate} class="flex float-left w-full justify-center">
                            <div className="mb-3 lg:w-60">
                                <label for="exampleFormControlInput1" className="form-label text-xl inline-block mb-1 text-gray-700"
                                >Goal name</label
                                >
                                <input
                                    onChange={handleName}
                                    value={name}
                                    type="text"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput1"
                                    placeholder="Goal name"
                                    required
                                />

                            </div>
                            <div className="mb-3 lg:w-60">
                                <label for="exampleNumber0" className="form-label text-xl inline-block mb-1 text-gray-700"
                                >Goal Amount</label
                                >
                                <input
                                    onChange={handlegoalAmount}
                                    value={goalAmount}
                                    type="number"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleNumber0"
                                    placeholder="Goal Amount"
                                    required
                                />
                            </div>

                            <div className="mb-3 lg:w-60">
                                <label for="exampleFormControlInput1" className="form-label text-xl inline-block mb-1 text-gray-700"
                                >Completion Date</label
                                >
                                <input 
                                    onChange={handlecompletionDate}
                                    value={completionDate}
                                    type="date" 
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    required
                                    />
                                    

                            </div>
                            <div className="mb-3 lg:w-60">
                                <label for="exampleNumber0" className="form-label text-xl inline-block mb-1 text-gray-700"
                                >Time interval</label
                                >
                                <input
                                    onChange={handletimeInterval}
                                    value={timeInterval}
                                    type="number"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleNumber0"
                                    placeholder="Time interval"
                                    required
                                />
                            </div>
                            <div className="mb-3 lg:w-60">
                                <label for="exampleFormControlInput1" className="form-label text-xl inline-block mb-1 text-gray-700"
                                >Description</label
                                >
                                <input
                                    onChange={handledescription}
                                    value={description}
                                    type="text"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput1"
                                    placeholder="Description"
                                    
                                />

                            </div>

                            <button className="w-44 h-10 border-solid border-2 rounded-md text-lg  hover:bg-black-100 mx-4 mt-10">Submit</button>

                        </form>

                        )


                    }

                </div>
    )
}

export default SavingGoal;