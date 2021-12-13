import Layout from "../components/Layout";
import { useState } from "react";

const Savings = () => {

    const [zmienna, setZmienna] = useState(true)
    const [isAddForm, setisAddForm] = useState(true)
    const [isCancelForm, setisCancelForm] = useState(true)

    const zmien = () => {
        setZmienna(!zmienna)

    }

    const zmien2 = () => {
        setisAddForm(!isAddForm)

    }

    const zmien3 = () => {
        setisCancelForm(!isCancelForm)

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
                            <div class="justify-center mt-5">
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

<button className="w-44 h-10 border-solid border-2 rounded-md text-lg  hover:bg-black-100 mx-4 mt-10">Zatwierdź</button>

                            </div>

                        )


                    }

                    

                </div>
                <div className={`border-solid border-2 border-black-600 h-32 py-auto text-3xl rounded-md ${isCancelForm ? "h-32" : "h-60"}`}>
                <div className="w-3/12 h-32 float-left border-solid border-2 border-black-600">Cel1</div>
                <div className="w-7/12 h-32 float-left border-solid border-2 border-black-600">
                <div className="w-11/12 bg-gray-200 h-1">
                 <div className="bg-blue-600 h-1 w-3/5 mt-9"></div>
                </div>

                </div>
                <div className="w-2/12 h-32 static float-left border-solid border-2 border-black-600">

                <button className="w-44 h-8 border-solid border-2 rounded-md text-lg ml-1" onClick={zmien3}>Zakończ cel</button>
                <button className="w-44 h-8 border-solid border-2 rounded-md text-lg ml-1" onClick={zmien3}>Zasil cel</button>
                <button className="w-44 h-8 border-solid border-2 rounded-md text-lg ml-1" onClick={zmien3}>Wypłać z celu</button>
                </div>
                {
                        isCancelForm ? ("") : (
                            
                            <div className="flex float-left justify-center mt-5">
                                
                                    <label for="exampleFormControlInput1" className="form-label text-xl inline-block mt-4 mb-1 text-gray-700"
                                    >Czy na pewno chcesz zakończyć cel?</label
                                    >
                                   

                                
                                

<button className="w-44 h-10 border-solid border-2 rounded-md text-lg  hover:bg-black-100 mx-4 mt-4">Zakończ</button>

                            </div>

                        )


                    }
                </div>
                <div className="border-solid border-2 border-black-600 h-32 py-auto text-3xl rounded-md">Cel #2</div>


                {/* first poradniki */}
            </main>
        </Layout>
    )
}

export default Savings;