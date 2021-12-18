import Layout from "../components/Layout";
import React from "react";
import { useState } from "react";
const Settings = () => {
    const [isEmailConfirm, setEmailConfirm] = useState(true);
    const [isEmailValue,setEmailValue]=useState('');
    const [isPassConfirm, setPassConfirm] = useState(true);
    const [isPassValue,setPassValue]=useState('');
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
    const zmien3 = () => {
        if(document.getElementById("NewPasswordText").value!=="")
        {
            setPassConfirm(false);
            setPassValue(document.getElementById("NewPasswordText").value);

        }
        else
        {
            setPassConfirm(true);

        }

    }
    return (
        <Layout>
            <main>
            <div className={`border-solid border-2 border-black-600 py-5 text-center text-3xl rounded-md `}>
                Change email
                <div class="flex justify-center mt-5">
                    <div className="w-100 mx-auto mt-2">
                        <label for="OldEmailText" className="form-label text-xl inline-block mb-1 text-gray-700">Old email</label>
                        <input
                                        type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="OldEmailText"
                                        placeholder="example@email.pl"
                                        
                         />

                    </div>
                    <div className="w-100 mx-auto mt-2">
                    <label for="NewEmailText" className="form-label text-xl inline-block mb-1 text-gray-700">New Email</label>
                        <input
                                        type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="NewEmailText"
                                        placeholder="example@email.pl"
                         />
                    </div>
                    <div className="w-100 mx-auto mt-2">
                    <button className="w-44 h-10 border-solid border-2 rounded-md text-lg  hover:bg-black-100 mx-4 mt-10"onClick={zmien2}>Confirm</button> 
                    {
                        isEmailConfirm ? ("") : 
                        
                            <label for="exampleFormControlInput1" className="form-label text-xl inline-block mb-1 text-gray-700">Confirmed {isEmailValue}</label>
    
    
                        

                    }
                    </div>

                </div>
                

            </div>
            <div className={`border-solid border-2 border-black-600 py-5 text-center text-3xl rounded-md `}>
                Change Password
                <div class="flex justify-center mt-5">
                    <div className="w-100 mx-auto mt-2">
                        <label for="OldPasswordText" className="form-label text-xl inline-block mb-1 text-gray-700">Old password</label>
                        <input
                                        type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="OldPasswordText"
                                        
                         />

                    </div>
                    <div className="w-100 mx-auto mt-2">
                    <label for="NewPasswordText" className="form-label text-xl inline-block mb-1 text-gray-700">New password</label>
                        <input
                                        type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="NewPasswordText"
                         />
                    </div>
                    <div className="w-100 mx-auto mt-2">
                    <button className="w-44 h-10 border-solid border-2 rounded-md text-lg  hover:bg-black-100 mx-4 mt-10"onClick={zmien3}>Confirm</button> 
                    {
                        isPassConfirm ? ("") : 
                        
                            <label for="exampleFormControlInput1" className="form-label text-xl inline-block mb-1 text-gray-700">Confirmed {isPassValue}</label>
    
    
                        

                    }
                    </div>

                </div>
                

            </div>
            <div className={`border-solid border-2 border-black-600 py-5 text-center text-3xl rounded-md `}>
                Family Settings
                <div class="flex justify-left mt-5 space-x-2">
                    <label  className="form-label text-2xl inline-block mb-2 text-gray-700">Family Name: </label>
                    <label  className="form-label text-xl inline-block mb-2 text-gray-700"> Kowalscy </label>
                    <button className="w-44 h-10 border-solid border-2 rounded-md text-lg ml-1">Change name</button>    
                </div>
                <div class="flex justify-left mt-5 space-x-2">
                    <label className="form-label text-x1 inline-block mb-1 text-gray-700">Members</label> 
                </div>
                    <div class="flex justify-left space-x-2">
                    <button className="w-44 h-8 border-solid border-2 rounded-md text-lg ml-1">Add Member</button>   
                </div>
                <div class="flex justify-left mt-5 space-x-2">
                    <label className="form-label text-xl inline-block mb-1 text-gray-700">Bożena</label>
                    <button className="w-44 h-8 border-solid border-2 rounded-md text-lg ml-1">Delete Member</button>     
                </div>
                    <div class="flex justify-left mt-5 space-x-2">
                    <label className="form-label text-xl inline-block mb-1 text-gray-700">Janusz</label>
                    <button className="w-44 h-8 border-solid border-2 rounded-md text-lg ml-1">Delete Member</button>     
                </div>
            </div>
            </main>
        </Layout>
    )
}

export default Settings;