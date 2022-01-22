import Layout from "../components/Layout";
import { useState } from "react";
import SavingGoal from "../components/Savings/SavingGoal";
import { useDatabase } from "../context/DatabaseContext";
import { SAVINGS_GOAL } from "../constans";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import SavingGoalComplete from "../components/Savings/SavingGoalComplete";

const Savings = () => {


    const [isAddForm, setisAddForm] = useState(true)

    const zmien2 = () => {
        setisAddForm(!isAddForm)

    }
    
    const [name, setName] = useState('') 
    const [goalAmount, setgoalAmount] = useState('') 
    const [completionDate, setcompletionDate] = useState('') 
    const [description, setdescription] = useState('') 
    

    const handleName = e => setName(e.target.value)
    const handlegoalAmount = e => setgoalAmount(e.target.value)
    const handlecompletionDate = e => setcompletionDate(e.target.value)
    const handledescription = e => setdescription(e.target.value)
    
    const { savingsGoal, addSavingsGoal } = useDatabase() // Baza danych



    const handleAddGoal = e =>{
        e.preventDefault();
        
        let today = new Date();
        let month = (today.getMonth()+1) < 10 ? '0' + (today.getMonth()+1) : (today.getMonth()+1);
        let day = today.getDate() < 10 ? '0' + today.getDate() : today.getDate();
        let date = today.getFullYear()+'-'+month+'-'+day;
        
        const newSavingGoal = {
            [SAVINGS_GOAL.NAME]: name,
            [SAVINGS_GOAL.GOAL_AMOUNT]: goalAmount,
            [SAVINGS_GOAL.COMPLETION_DATE]: completionDate,
            [SAVINGS_GOAL.DESCRIPTION]: description,
            [SAVINGS_GOAL.CREATE_DATE]: date,
            [SAVINGS_GOAL.ACTUAL_AMOUNT]: 0,
            
        };
        addSavingsGoal(newSavingGoal);
        setName("");
        setcompletionDate("");
        setdescription("");
        setgoalAmount("");
        setisAddForm(false);
    }



    return (
        <Layout>
            <main>
                <div className={`border-solid border-2 border-black-600 py-5 text-center text-3xl rounded-md ${isAddForm ? "h-32" : "h-60"}`}>
                    Your savings

                    <div className="w-96 mx-auto mt-2">
                        <button className="w-44 h-11 border-solid border-2 rounded-md text-lg  hover:bg-black-100" onClick={zmien2}>Add goal</button>

                    </div>
                    {
                        isAddForm ? ("") : (
                            <form onSubmit={handleAddGoal} class="flex justify-center mt-5">
                                <div className="mb-3 lg:w-60">
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-xl inline-block mb-1 text-gray-700"
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
                                    <label htmlFor="exampleNumber0" className="form-label text-xl inline-block mb-1 text-gray-700"
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
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-xl inline-block mb-1 text-gray-700"
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
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-xl inline-block mb-1 text-gray-700"
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
                
                {!!savingsGoal ? (
                    Object.keys(savingsGoal).length ? (
                        Object.keys(savingsGoal).map(key => {
                            const name = savingsGoal[key][SAVINGS_GOAL.NAME]
                            const goalAmount = savingsGoal[key][SAVINGS_GOAL.GOAL_AMOUNT]
                            const description = savingsGoal[key][SAVINGS_GOAL.DESCRIPTION]
                            const createDate = savingsGoal[key][SAVINGS_GOAL.CREATE_DATE]
                            const actualAmount = savingsGoal[key][SAVINGS_GOAL.ACTUAL_AMOUNT]
                            const completionDate = savingsGoal[key][SAVINGS_GOAL.COMPLETION_DATE]
                            if (parseFloat(actualAmount) !== parseFloat(goalAmount)) {
                                return (
                                    <SavingGoal
                                    key={key}
                                    id={key}
                                    title={name}
                                    actualD={createDate}
                                    completionDate={completionDate}
                                    actualA={actualAmount}
                                    goalAmount={goalAmount}
                                    description={description}
                                    />
                                )
                            } else return null
                        })
                    ) : <div class="w-full text-center font-bold text-7xl">You haven't got any savings goals, create new one!</div>// Dane załadowane, ale nie ma nic do wyświetlenia
                ) : <FontAwesomeIcon icon={faCircleNotch} spin /> /* Ładowanie Danych */}


                


                {!!savingsGoal && (
                    Object.keys(savingsGoal).length && (
                        Object.keys(savingsGoal).map(key => {
                            const name = savingsGoal[key][SAVINGS_GOAL.NAME]
                            const goalAmount = savingsGoal[key][SAVINGS_GOAL.GOAL_AMOUNT]
                            const description = savingsGoal[key][SAVINGS_GOAL.DESCRIPTION]
                            const createDate = savingsGoal[key][SAVINGS_GOAL.CREATE_DATE]
                            const actualAmount = savingsGoal[key][SAVINGS_GOAL.ACTUAL_AMOUNT]
                            const completionDate = savingsGoal[key][SAVINGS_GOAL.COMPLETION_DATE]
                            if (parseFloat(actualAmount) === parseFloat(goalAmount)) {
                                return (
                                    <SavingGoalComplete
                                    key={key}
                                    id={key}
                                    title={name}
                                    actualD={createDate}
                                    completionDate={completionDate}
                                    actualA={actualAmount}
                                    goalAmount={goalAmount}
                                    description={description}
                                    />
                                )
                            } else return null
                        })
                    ) 
                ) }
                
                

                {/* miejsce na drugi cel */}
            </main>
        </Layout>
    )
}

export default Savings;