import Layout from "../components/Layout";
import React from "react";
import { useState } from "react";
const Settings = () => {
    const [isEmailConfirm, setEmailConfirm] = useState(true);
    const [isEmailValue,setEmailValue]=useState('');
    const zmien2 = () => {
        if(document.getElementById("NewEmailText").value!=="")
        {
            setEmailConfirm(false);
            setEmailValue(document.getElementById("NewEmailText").value);

        }
        else
        {
            setEmailConfirm(true);

        }

    }
    return (
        <Layout>
            <main>
            <div className={`border-solid border-2 border-black-600 py-5 text-center text-3xl rounded-md `}>
                Zmiana emaila
                <div class="flex justify-center mt-5">
                    <div className="w-100 mx-auto mt-2">
                        <label for="OldEmailText" className="form-label text-xl inline-block mb-1 text-gray-700">Stary email</label>
                        <input
                                        type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="OldEmailText"
                                        placeholder="osoba@email.pl"
                                        
                         />

                    </div>
                    <div className="w-100 mx-auto mt-2">
                    <label for="NewEmailText" className="form-label text-xl inline-block mb-1 text-gray-700">Nowy Email</label>
                        <input
                                        type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="NewEmailText"
                                        placeholder="osoba@email.pl"
                         />
                    </div>
                    <div className="w-100 mx-auto mt-2">
                    <button className="w-44 h-10 border-solid border-2 rounded-md text-lg  hover:bg-black-100 mx-4 mt-10"onClick={zmien2}>Zatwierdź</button> 
                    {
                        isEmailConfirm ? ("") : 
                        
                            <label for="exampleFormControlInput1" className="form-label text-xl inline-block mb-1 text-gray-700">Potwierdzono {isEmailValue}</label>
    
    
                        

                    }
                    </div>

                </div>
                

            </div>
            </main>
        </Layout>
    )
}

export default Settings;