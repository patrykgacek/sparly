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
                <div className={`border-solid border-2 border-black-600 py-5 text-center text-3xl rounded-md ${isAddForm ? "h-32" : "h-60"} ${isCancelForm ? "h-32" : "h-60"}`}>
                    Twoje cele oszczędnościowe

                    <div className="w-96 mx-auto mt-2">
                        <button className="w-44 h-11 border-solid border-2 rounded-md text-lg  hover:bg-black-100" onClick={zmien2}>Dodaj cel</button>
                        <button className="w-44 h-11 border-solid border-2 rounded-md text-lg ml-1" onClick={zmien3}>Zakończ cel</button>
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
                                        className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mx-2
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
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
                                        className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mx-2
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
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
                                        className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mx-2
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                                        id="exampleFormControlInput1"
                                        placeholder="dd-mm-rrrr"
                                    />

                                </div>

<button className="w-44 h-10 border-solid border-2 rounded-md text-lg  hover:bg-black-100 mx-4 mt-10">Zatwierdź</button>

                            </div>

                        )


                    }

                </div>
                <div className="border-solid border-2 border-black-600 h-32 py-auto text-3xl rounded-md">Cel #1</div>
                <div className="border-solid border-2 border-black-600 h-32 py-auto text-3xl rounded-md">Cel #2</div>


                {/* first poradniki */}
            </main>
        </Layout>
    )
}

export default Savings;