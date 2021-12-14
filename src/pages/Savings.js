import Layout from "../components/Layout";
import { useState } from "react";

const Savings = () => {

    
    const [isAddForm, setisAddForm] = useState(true)
    const [isCancelForm, setisCancelForm] = useState(true)
    const [isPayToGoalForm, setisPayToGoalForm] = useState(true)
    const [isPayFromGoalForm, setisPayFromGoalForm] = useState(true)
    const [isEditForm, setisEditForm] = useState(true)

    const zmien2 = () => {
        setisAddForm(!isAddForm)

    }

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
        <Layout>
            <main>
                <div className={`border-solid border-2 border-black-600 py-5 text-center text-3xl rounded-md ${isAddForm ? "h-32" : "h-60"}`}>
                    Twoje cele oszczędnościowe

                    <div className="w-96 mx-auto mt-2">
                        <button className="w-44 h-11 border-solid border-2 rounded-md text-lg  hover:bg-black-100" onClick={zmien2}>Dodaj cel</button>
                        
                    </div>
                    {
                        isAddForm ? ("") : (
                            <div class="flex justify-center mt-5">
                                <div className="mb-3 lg:w-60">
                                    <label for="exampleFormControlInput1" className="form-label text-xl inline-block mb-1 text-gray-700"
                                    >Nazwa celu</label
                                    >
                                    <input
                                        type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlInput1"
                                        placeholder="Nazwa celu"
                                    />

                                </div>
                                <div className="mb-3 lg:w-60">
                                    <label for="exampleNumber0" className="form-label text-xl inline-block mb-1 text-gray-700"
                                    >Kwota</label
                                    >
                                    <input
                                        type="number"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleNumber0"
                                        placeholder="Kwota"
                                    />
                                </div>
                                
                                <div className="mb-3 lg:w-60">
                                    <label for="exampleFormControlInput1" className="form-label text-xl inline-block mb-1 text-gray-700"
                                    >Data ukończenia celu</label
                                    >
                                    <input
                                        type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                        id="exampleFormControlInput1"
                                        placeholder="dd-mm-rrrr"
                                    />

                                </div>
                                <div className="mb-3 lg:w-60">
                                    <label for="exampleNumber0" className="form-label text-xl inline-block mb-1 text-gray-700"
                                    >Kwota na miesiąc</label
                                    >
                                    <input
                                        type="number"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleNumber0"
                                        placeholder="Kwota"
                                    />
                                </div>
                                <div className="mb-3 lg:w-60">
                                    <label for="exampleFormControlInput1" className="form-label text-xl inline-block mb-1 text-gray-700"
                                    >Krótki opis</label
                                    >
                                    <input
                                        type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlInput1"
                                        placeholder="Nazwa celu"
                                    />

                                </div>

<button className="w-44 h-10 border-solid border-2 rounded-md text-lg  hover:bg-black-100 mx-4 mt-10">Zatwierdź</button>

                            </div>

                        )


                    }

                    

                </div>
                <div className={`border-solid border-2 border-black-600 py-auto text-3xl rounded-md ${isCancelForm ? "h-52" : "h-80"} ${isPayToGoalForm ? "h-52" : "h-80"} ${isPayFromGoalForm ? "h-52" : "h-80" } ${isEditForm ? "h-52" : "h-80" }`}>
                <div className="w-3/12 h-52 float-left text-center border-solid border-2 border-black-600">

                <label for="exampleFormControlInput1" className="form-label text-xl w-full inline-block mt-12  text-gray-700">Nazwa celu1</label>
                <label for="exampleFormControlInput1" className="form-label text-xl w-full inline-block mt-7  text-gray-700">data ukończenia</label>

                </div>
                <div className="w-7/12 h-52 float-left border-solid border-2 border-black-600">
                <div className="w-11/12 bg-gray-200 h-1 mx-auto">
                 <div className="bg-blue-600 h-1 w-3/5 mt-9"></div>
                 <label for="exampleFormControlInput1" className="form-label text-xl w-1/3 inline-block mt-7 mb-1 text-gray-700">zasilono:300</label>
                 <label for="exampleFormControlInput1" className="form-label text-xl w-1/3 inline-block text-center mt-7 mb-1 text-gray-700">60%</label>
                 <label for="exampleFormControlInput1" className="form-label text-xl w-1/3 text-right inline-block mt-7 mb-1 text-gray-700">Cel:500</label>
                 <label for="exampleFormControlInput1" className="form-label text-xl w-full text-center inline-block mb-1 text-gray-700">Interwał czasowy</label>
                 <label for="exampleFormControlInput1" className="form-label text-xl w-full text-center inline-block mt-1 mb-1 text-gray-700">Opis celu</label>
                </div>

                </div>
                <div className="w-2/12 h-52 static float-left border-solid border-2 border-black-600">

                <button className="w-44 h-8 border-solid border-2 rounded-md text-lg ml-1" onClick={zmien3}>Zakończ cel</button>
                <button className="w-44 h-8 border-solid border-2 rounded-md text-lg ml-1" onClick={zmien4}>Zasil cel</button>
                <button className="w-44 h-8 border-solid border-2 rounded-md text-lg ml-1" onClick={zmien5}>Wypłać z celu</button>
                <button className="w-44 h-8 border-solid border-2 rounded-md text-lg ml-1" onClick={zmien6}>Modyfikuj cel</button>
                </div>
                {
                        isCancelForm ? ("") : (
                            
                            <div className="flex float-left w-full mx-auto justify-center">
                                    
                                    <label for="exampleFormControlInput1" className="form-label text-xl inline-block mt-7 mb-1 text-gray-700">Czy na pewno chcesz zakończyć cel?</label>
                                   
                                    <button className="w-44 h-10 border-solid border-2 rounded-md text-lg  hover:bg-black-100 mx-4 mt-7">Zakończ</button>
                                    
                                    </div>
                                    

                        )
                    }
                    {
                        isPayToGoalForm ? ("") : (
                            
                            <div className="flex float-left w-full justify-center">
                                    
                                    <label for="exampleFormControlInput1" className="form-label mt-8 text-xl inline-block mb-1 text-gray-700"
                                    >Podaj kwotę jaką chcesz zasilić cel:</label
                                    >
                                    <input
                                        type="number"
                                        className="form-control block w-32 h-10 px-3 py-1.5 mt-7 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleNumber0"
                                        placeholder="Kwota"
                                    />
                                    <button className="w-44 h-10 border-solid border-2 rounded-md text-lg  hover:bg-black-100 mx-4 mt-7">Wpłać</button>
                                   
                                    </div>
                                    

                        )
                    }
                    {
                        isPayFromGoalForm ? ("") : (
                            
                            <div className="flex float-left w-full justify-center">
                                    
                                    <label for="exampleFormControlInput1" className="form-label mt-8 text-xl inline-block mb-1 text-gray-700"
                                    >Podaj kwotę wypłacaną z celu:</label
                                    >
                                    <input
                                        type="number"
                                        className="form-control block w-32 h-10 px-3 py-1.5 mt-7 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleNumber0"
                                        placeholder="Kwota"
                                    />
                                    <button className="w-44 h-10 border-solid border-2 rounded-md text-lg  hover:bg-black-100 mx-4 mt-7">Wypłać</button>
                                   
                                    </div>
                                    

                        )
                    }
                    {
                        isEditForm ? ("") : (
                            <div class="flex float-left w-full justify-center">
                                <div className="mb-3 lg:w-60">
                                    <label for="exampleFormControlInput1" className="form-label text-xl inline-block ml-3 mb-1 text-gray-700"
                                    >Nazwa celu</label
                                    >
                                    <input
                                        type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlInput1"
                                        placeholder="Nazwa celu"
                                    />

                                </div>
                                <div className="mb-3 lg:w-60">
                                    <label for="exampleNumber0" className="form-label text-xl inline-block mb-1 text-gray-700"
                                    >Kwota</label
                                    >
                                    <input
                                        type="number"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleNumber0"
                                        placeholder="Kwota"
                                    />
                                </div>
                                
                                <div className="mb-3 lg:w-60">
                                    <label for="exampleFormControlInput1" className="form-label text-xl inline-block mb-1 text-gray-700"
                                    >Data ukończenia celu</label
                                    >
                                    <input
                                        type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                        id="exampleFormControlInput1"
                                        placeholder="dd-mm-rrrr"
                                    />

                                </div>
                                <div className="mb-3 lg:w-60">
                                    <label for="exampleNumber0" className="form-label text-xl inline-block mb-1 text-gray-700"
                                    >Kwota na miesiąc</label
                                    >
                                    <input
                                        type="number"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleNumber0"
                                        placeholder="Kwota"
                                    />
                                </div>
                                <div className="mb-3 lg:w-60">
                                    <label for="exampleFormControlInput1" className="form-label text-xl inline-block mb-1 text-gray-700"
                                    >Krótki opis</label
                                    >
                                    <input
                                        type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlInput1"
                                        placeholder="Nazwa celu"
                                    />

                                </div>

<button className="w-44 h-10 border-solid border-2 rounded-md text-lg  hover:bg-black-100 mx-4 mt-10">Zatwierdź</button>

                            </div>

                        )


                    }
                    
                </div>
                
                <div className={`border-solid border-2 border-black-600 py-auto text-3xl rounded-md ${isCancelForm ? "h-52" : "h-80"} ${isPayToGoalForm ? "h-52" : "h-80"} ${isPayFromGoalForm ? "h-52" : "h-80" } ${isEditForm ? "h-52" : "h-80" }`}>
                <div className="w-3/12 h-52 float-left text-center border-solid border-2 border-black-600">

                <label for="exampleFormControlInput1" className="form-label text-xl w-full inline-block mt-12  text-gray-700">Nazwa celu2</label>
                <label for="exampleFormControlInput1" className="form-label text-xl w-full inline-block mt-7  text-gray-700">data ukończenia</label>

                </div>
                <div className="w-7/12 h-52 float-left border-solid border-2 border-black-600">
                <div className="w-11/12 bg-gray-200 h-1 mx-auto">
                 <div className="bg-blue-600 h-1 w-1/5 mt-9"></div>
                 <label for="exampleFormControlInput1" className="form-label text-xl w-1/3 inline-block mt-7 mb-1 text-gray-700">zasilono:200</label>
                 <label for="exampleFormControlInput1" className="form-label text-xl w-1/3 inline-block text-center mt-7 mb-1 text-gray-700">20%</label>
                 <label for="exampleFormControlInput1" className="form-label text-xl w-1/3 text-right inline-block mt-7 mb-1 text-gray-700">Cel:1000</label>
                 <label for="exampleFormControlInput1" className="form-label text-xl w-full text-center inline-block mb-1 text-gray-700">Interwał czasowy</label>
                 <label for="exampleFormControlInput1" className="form-label text-xl w-full text-center inline-block mt-1 mb-1 text-gray-700">Opis celu</label>
                </div>

                </div>
                <div className="w-2/12 h-52 static float-left border-solid border-2 border-black-600">

                <button className="w-44 h-8 border-solid border-2 rounded-md text-lg ml-1" onClick={zmien3}>Zakończ cel</button>
                <button className="w-44 h-8 border-solid border-2 rounded-md text-lg ml-1" onClick={zmien4}>Zasil cel</button>
                <button className="w-44 h-8 border-solid border-2 rounded-md text-lg ml-1" onClick={zmien5}>Wypłać z celu</button>
                <button className="w-44 h-8 border-solid border-2 rounded-md text-lg ml-1" onClick={zmien6}>Modyfikuj cel</button>
                </div>
                {
                        isCancelForm ? ("") : (
                            
                            <div className="flex float-left w-full mx-auto justify-center">
                                    
                                    <label for="exampleFormControlInput1" className="form-label text-xl inline-block mt-7 mb-1 text-gray-700">Czy na pewno chcesz zakończyć cel?</label>
                                   
                                    <button className="w-44 h-10 border-solid border-2 rounded-md text-lg  hover:bg-black-100 mx-4 mt-7">Zakończ</button>
                                    
                                    </div>
                                    

                        )
                    }
                    {
                        isPayToGoalForm ? ("") : (
                            
                            <div className="flex float-left w-full justify-center">
                                    
                                    <label for="exampleFormControlInput1" className="form-label mt-8 text-xl inline-block mb-1 text-gray-700"
                                    >Podaj kwotę jaką chcesz zasilić cel:</label
                                    >
                                    <input
                                        type="number"
                                        className="form-control block w-32 h-10 px-3 py-1.5 mt-7 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleNumber0"
                                        placeholder="Kwota"
                                    />
                                    <button className="w-44 h-10 border-solid border-2 rounded-md text-lg  hover:bg-black-100 mx-4 mt-7">Wpłać</button>
                                   
                                    </div>
                                    

                        )
                    }
                    {
                        isPayFromGoalForm ? ("") : (
                            
                            <div className="flex float-left w-full justify-center">
                                    
                                    <label for="exampleFormControlInput1" className="form-label mt-8 text-xl inline-block mb-1 text-gray-700"
                                    >Podaj kwotę wypłacaną z celu:</label
                                    >
                                    <input
                                        type="number"
                                        className="form-control block w-32 h-10 px-3 py-1.5 mt-7 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleNumber0"
                                        placeholder="Kwota"
                                    />
                                    <button className="w-44 h-10 border-solid border-2 rounded-md text-lg  hover:bg-black-100 mx-4 mt-7">Wypłać</button>
                                   
                                    </div>
                                    

                        )
                    }
                    {
                        isEditForm ? ("") : (
                            <div class="flex float-left w-full justify-center">
                                <div className="mb-3 lg:w-60">
                                    <label for="exampleFormControlInput1" className="form-label text-xl inline-block ml-3 mb-1 text-gray-700"
                                    >Nazwa celu</label
                                    >
                                    <input
                                        type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlInput1"
                                        placeholder="Nazwa celu"
                                    />

                                </div>
                                <div className="mb-3 lg:w-60">
                                    <label for="exampleNumber0" className="form-label text-xl inline-block mb-1 text-gray-700"
                                    >Kwota</label
                                    >
                                    <input
                                        type="number"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleNumber0"
                                        placeholder="Kwota"
                                    />
                                </div>
                                
                                <div className="mb-3 lg:w-60">
                                    <label for="exampleFormControlInput1" className="form-label text-xl inline-block mb-1 text-gray-700"
                                    >Data ukończenia celu</label
                                    >
                                    <input
                                        type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                        id="exampleFormControlInput1"
                                        placeholder="dd-mm-rrrr"
                                    />

                                </div>
                                <div className="mb-3 lg:w-60">
                                    <label for="exampleNumber0" className="form-label text-xl inline-block mb-1 text-gray-700"
                                    >Kwota na miesiąc</label
                                    >
                                    <input
                                        type="number"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleNumber0"
                                        placeholder="Kwota"
                                    />
                                </div>
                                <div className="mb-3 lg:w-60">
                                    <label for="exampleFormControlInput1" className="form-label text-xl inline-block mb-1 text-gray-700"
                                    >Krótki opis</label
                                    >
                                    <input
                                        type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlInput1"
                                        placeholder="Nazwa celu"
                                    />

                                </div>

<button className="w-44 h-10 border-solid border-2 rounded-md text-lg  hover:bg-black-100 mx-4 mt-10">Zatwierdź</button>

                            </div>

                        )


                    }
                    
                </div>
                


                {/* first poradniki */}
            </main>
        </Layout>
    )
}

export default Savings;