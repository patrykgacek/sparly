import { useState } from "react"

const SavingGoal = props => {

    const [isCancelForm, setisCancelForm] = useState(true)
    const [isPayToGoalForm, setisPayToGoalForm] = useState(true)
    const [isPayFromGoalForm, setisPayFromGoalForm] = useState(true)
    const [isEditForm, setisEditForm] = useState(true)

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

    return (
        <div className={`border-solid border-2 border-black-600 py-auto text-3xl rounded-md ${isCancelForm ? "h-52" : "h-80"} ${isPayToGoalForm ? "h-52" : "h-80"} ${isPayFromGoalForm ? "h-52" : "h-80"} ${isEditForm ? "h-52" : "h-80"}`}>
                    <div className="w-3/12 h-52 float-left text-center border-solid border-2 border-black-600">

                        <label for="exampleFormControlInput1" className="form-label text-xl w-full inline-block mt-12  text-gray-700">{props.title}</label>
                        <label for="exampleFormControlInput1" className="form-label text-xl w-full inline-block mt-7  text-gray-700">Completion Date</label>

                    </div>
                    <div className="w-7/12 h-52 float-left border-solid border-2 border-black-600">
                        <div className="w-11/12 bg-gray-200 h-1 mx-auto">
                            <div className="bg-blue-600 h-1 w-3/5 mt-9"></div>
                            <label for="exampleFormControlInput1" className="form-label text-xl w-1/3 inline-block mt-7 mb-1 text-gray-700">Goal progress:300</label>
                            <label for="exampleFormControlInput1" className="form-label text-xl w-1/3 inline-block text-center mt-7 mb-1 text-gray-700">60%</label>
                            <label for="exampleFormControlInput1" className="form-label text-xl w-1/3 text-right inline-block mt-7 mb-1 text-gray-700">Goal:500</label>
                            <label for="exampleFormControlInput1" className="form-label text-xl w-full text-center inline-block mb-1 text-gray-700">Time interval</label>
                            <label for="exampleFormControlInput1" className="form-label text-xl w-full text-center inline-block mt-1 mb-1 text-gray-700">Description</label>
                        </div>

                    </div>
                    <div className="w-2/12 h-52 static float-left border-solid border-2 border-black-600">

                        <button className="w-44 h-8 border-solid border-2 rounded-md text-lg ml-1" onClick={zmien3}>Delete goal</button>
                        <button className="w-44 h-8 border-solid border-2 rounded-md text-lg ml-1" onClick={zmien4}>Deposit to goal</button>
                        <button className="w-44 h-8 border-solid border-2 rounded-md text-lg ml-1" onClick={zmien5}>Withdraw from goal</button>
                        <button className="w-44 h-8 border-solid border-2 rounded-md text-lg ml-1" onClick={zmien6}>Update goal</button>
                    </div>
                    {
                        isCancelForm ? ("") : (

                            <div className="flex float-left w-full mx-auto justify-center">

                                <label for="exampleFormControlInput1" className="form-label text-xl inline-block mt-7 mb-1 text-gray-700">Are you sure that you want delete goal?</label>

                                <button className="w-44 h-10 border-solid border-2 rounded-md text-lg  hover:bg-black-100 mx-4 mt-7">Submit</button>

                            </div>


                        )
                    }
                    {
                        isPayToGoalForm ? ("") : (

                            <div className="flex float-left w-full justify-center">

                                <label for="exampleFormControlInput1" className="form-label mt-8 text-xl inline-block mb-1 text-gray-700"
                                >How much do you want to deposit:</label
                                >
                                <input
                                    type="number"
                                    className="form-control block w-32 h-10 px-3 py-1.5 mt-7 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleNumber0"
                                    placeholder="Amount"
                                />
                                <button className="w-44 h-10 border-solid border-2 rounded-md text-lg  hover:bg-black-100 mx-4 mt-7">Submit</button>

                            </div>


                        )
                    }
                    {
                        isPayFromGoalForm ? ("") : (

                            <div className="flex float-left w-full justify-center">

                                <label for="exampleFormControlInput1" className="form-label mt-8 text-xl inline-block mb-1 text-gray-700"
                                >How much do you want to withdraw from goal:</label
                                >
                                <input
                                    type="number"
                                    className="form-control block w-32 h-10 px-3 py-1.5 mt-7 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleNumber0"
                                    placeholder="Amount"
                                />
                                <button className="w-44 h-10 border-solid border-2 rounded-md text-lg  hover:bg-black-100 mx-4 mt-7">Submit</button>

                            </div>


                        )
                    }
                    {
                        isEditForm ? ("") : (
                            <div class="flex float-left w-full justify-center">
                                <div className="mb-3 lg:w-60">
                                    <label for="exampleFormControlInput1" className="form-label w-full text-xl inline-block ml-3 mb-1 text-gray-700"
                                    >Goal name</label
                                    >
                                    <input
                                        type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlInput1"
                                        placeholder="Goal name"
                                    />

                                </div>
                                <div className="mb-3 lg:w-60">
                                    <label for="exampleNumber0" className="form-label text-xl w-full ml-4 inline-block mb-1 text-gray-700"
                                    >Goal Amount</label
                                    >
                                    <input
                                        type="number"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleNumber0"
                                        placeholder="Goal Amount"
                                    />
                                </div>

                                <div className="mb-3 lg:w-60">
                                    <label for="exampleFormControlInput1" className="form-label text-xl ml-4 inline-block w-full mb-1 text-gray-700"
                                    >Completion Date</label
                                    >
                                    <input type="date" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"></input>

                                </div>
                                <div className="mb-3 lg:w-60">
                                    <label for="exampleNumber0" className="form-label text-xl ml-4 inline-block mb-1 w-full text-gray-700"
                                    >Time interval</label
                                    >
                                    <input
                                        type="number"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleNumber0"
                                        placeholder="Time interval"
                                    />
                                </div>
                                <div className="mb-3 lg:w-60">
                                    <label for="exampleFormControlInput1" className="form-label ml-4 text-xl w-full inline-block mb-1 text-gray-700"
                                    >Description</label
                                    >
                                    <input
                                        type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlInput1"
                                        placeholder="Description"
                                    />

                                </div>

                                <button className="w-44 h-10 border-solid border-2 rounded-md text-lg  hover:bg-black-100 mx-4 mt-10">Submit</button>

                            </div>

                        )


                    }

                </div>
    )
}

export default SavingGoal;