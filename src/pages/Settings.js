import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react";
import { useState } from "react";
import { useDatabase } from "../context/DatabaseContext";
import { useAuth } from "../context/AuthContext"
import {USER_INFO } from "../constans";
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
const Settings = () => {
    const [isEmailConfirm, setEmailConfirm] = useState(true);
    const [email, setEmail] = useState('')
    const [oldEmail, setOldEmail] = useState('')
    const [password, setPassword] = useState('')
    const [oldpassword, setOldPassword] = useState('')
    const [isPassConfirm, setPassConfirm] = useState(true);
    const {currentUser,updEmail, updPassword} = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    var familyName ="Kowalscy";
    var familyMembers =["Bożena","Janusz"];
    var UserName ="Studenci";
    var UserUID ="";
    const handleEmail = e => setEmail(e.target.value)
    const handleOldEmail =e => setOldEmail(e.target.value)
    const handlePassword = e => setPassword(e.target.value)
    const handleOldPassword = e => setOldPassword(e.target.value)
    const handleUpdateEmail = async e => {
        if(email!=="" && oldEmail===currentUser.email)
        {
            e.preventDefault()
            setLoading(true)
            try {
                await updEmail(email)
                setError('')
                setEmail('')
            } catch (error) {
                setError(error.message)
            }
            setLoading(false)

        }
    }
    const handleUpdatePassword = async e => {
        if(password!=="" && oldpassword===password)
        {
            e.preventDefault()

        setLoading(true)
        try {
            await updPassword(password)
            setError('')
            setPassword('')
        } catch (error) {
            setError(error.message)
        }
        setLoading(false)

        }
    }
    const addFamilyMember = () => {}
    const deleteFamilyName =() => {}
    const deleteFamilyMember = () => {}
    return (
        <Layout>
            <main>
            <div className={`border-solid border-2 border-black-600 py-5 text-center text-3xl rounded-md `}>
                Change email
                <div class="flex justify-center mt-5">
                    <div className="w-100 mx-auto mt-2">
                        <label for="OldEmailText" className="form-label text-xl inline-block mb-1 text-gray-700">Old email</label>
                        <input
                                        onChange={handleOldEmail}
                                        type="email"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="OldEmailText"
                                        placeholder="example@email.pl"
                                        
                         />

                    </div>
                    <div className="w-100 mx-auto mt-2">
                    <label for="NewEmailText" className="form-label text-xl inline-block mb-1 text-gray-700">New Email</label>
                        <input          
                                        onChange={handleEmail}
                                        type="email"
                                        required value={email}
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="NewEmailText"
                                        placeholder="example@email.pl"
                         />
                    </div>
                    <div className="w-100 mx-auto mt-2">
                    <button className="w-44 h-10 border-solid border-2 rounded-md text-lg  hover:bg-black-100 mx-4 mt-10"onClick={handleUpdateEmail}>Confirm 
                    {loading ? (<FontAwesomeIcon icon={faSpinner} spin />) : ''}
                    </button> 
                    </div>

                </div>
                

            </div>
            <div className={`border-solid border-2 border-black-600 py-5 text-center text-3xl rounded-md `}>
                Change Password
                <div class="flex justify-center mt-5">
                    <div className="w-100 mx-auto mt-2">
                        <label for="OldPasswordText" className="form-label text-xl inline-block mb-1 text-gray-700">Old password</label>
                        <input
                                        onChange={handleOldPassword}
                                        type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="OldPasswordText"
                                        
                         />

                    </div>
                    <div className="w-100 mx-auto mt-2">
                    <label for="NewPasswordText" className="form-label text-xl inline-block mb-1 text-gray-700">New password</label>
                        <input
                                        onChange={handlePassword}
                                        type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="NewPasswordText"
                         />
                    </div>
                    <div className="w-100 mx-auto mt-2">
                    <button className="w-44 h-10 border-solid border-2 rounded-md text-lg  hover:bg-black-100 mx-4 mt-10"onClick={handleUpdatePassword}>Confirm
                    {loading ? (<FontAwesomeIcon icon={faSpinner} spin />) : ''}
                    </button> 
                    </div>

                </div>
                

            </div>
            <div className={`border-solid border-2 border-black-600 py-5 text-center text-3xl rounded-md `}>
                Family Settings
                <div class="flex justify-left mt-5 space-x-2">
                    <label  className="pl-5 form-label text-2xl inline-block mb-2 text-gray-700">Family Name: </label>
                    <label  className="form-label text-xl inline-block mb-2 mt-1 text-gray-700"> {familyName} </label>
                    <button className="pl-5 w-44 h-10 border-solid border-2 rounded-md text-lg ml-1">Change name</button>    
                </div>
                <div class="flex justify-left mt-5 space-x-2">
                    <label className="pl-6 w-44 form-label text-x1 inline-block mb-1 text-gray-700">Members</label> 
                </div>
                    <div class="flex justify-left space-x-2">
                    <button className="w-44 h-8 border-solid border-2 rounded-md text-lg ml-4">Add Member</button>   
                </div>
                <div class="flex justify-left mt-5 space-x-2">
                    <label className="pl-5 w-44 form-label text-xl inline-block mb-1 text-gray-700">{familyMembers[0]}</label>
                    <button className="w-44 h-8 border-solid border-2 rounded-md text-lg ml-1">Delete Member</button>     
                </div>
                    <div class="flex justify-left mt-5 space-x-2">
                    <label className="pl-5 w-44 form-label text-xl inline-block mb-1 text-gray-700">{familyMembers[1]}</label>
                    <button className="w-44 h-8 border-solid border-2 rounded-md text-lg ml-1">Delete Member</button>     
                </div>
            </div>
            </main>
        </Layout>
    )
}

export default Settings;