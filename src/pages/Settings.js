import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { useDatabase } from "../context/DatabaseContext";
import { useAuth } from "../context/AuthContext"
import {CATEGORIES, FAMILY_MEMBERS, USER_INFO } from "../constans";
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
const Settings = () => {

    const {currentUser, updEmail, updPassword, emailConfirm} = useAuth();
    const {userInfo, updateUserInfo, familyMembers, addFamilyMembers, categories, addCategories} = useDatabase()

    const [error, setError] = useState('')
    const [info, setInfo] = useState('')
    const [loading, setLoading] = useState(false)
    
    const [email, setEmail] = useState('')
    const [oldEmail, setOldEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const [nameFamilyMember, setNameFamilyMember] = useState('')
    const [nameCategory, setNameCategory] = useState('')
    const [nameFamily, setNameFamily] = useState(userInfo[USER_INFO.FAMILY_NAME])
    const handleEmail = e => setEmail(e.target.value)
    const handleOldEmail =e => setOldEmail(e.target.value)
    const handlePassword = e => setPassword(e.target.value)
    const handleConfirmPassword = e => setConfirmPassword(e.target.value)
    const handleNameFamilyMember = e => setNameFamilyMember(e.target.value)
    const handleNameCategory = e => setNameCategory(e.target.value)
    const handleNameFamily = e => setNameFamily(e.target.value)

    const changeEmail = async e => {
        e.preventDefault()
        setError('')
        setInfo('')
        if(oldEmail===currentUser.email)
        {
            setLoading(true)
            try {
                await updEmail(email)
                setInfo('Email changed')
                setError('')
                setEmail('')
                setOldEmail('')
            } catch (error) {
                setError(error.message)
            }
            setLoading(false)
        } else {
            setError('old mail is not valid')
        }
    }

    const addFamilyMember = async e => {
        e.preventDefault()
        await addFamilyMembers({
            [FAMILY_MEMBERS.NAME]: nameFamilyMember
        })
        setNameFamilyMember('')
    }

    const addCategory = async e => {
        e.preventDefault()
        await addCategories({
            [CATEGORIES.NAME]: nameCategory
        })
        setNameCategory('')
    }

    const changeFamilyName = async e => {
        e.preventDefault()
        await updateUserInfo([USER_INFO.FAMILY_NAME], nameFamily)
    }

    const changePassword = async e => {
        e.preventDefault()
        if(confirmpassword === password)
        {
            setLoading(true)
            try {
                await updPassword(password)
                setInfo('Password changed')
                setError('')
                setPassword('')
                setConfirmPassword('')
            } catch (error) {
                setError(error.message)
                setInfo('')
            }
            setLoading(false)
        } else {
            setError('Passwords do not match')
            setInfo('')
        }
    }

    const veryfyEmail = useCallback(() => {
        try {
            emailConfirm()
        } catch (error) {
            setInfo(error.message)
        }
        setInfo('Email send to ' + currentUser.email)
        setError('')
    }, [currentUser.email, emailConfirm])

    useEffect(() => {
        if (!currentUser.emailVerified) {
            setError(<button onClick={veryfyEmail}>Verify your e-mail - Click here</button>)
        }
    }, [currentUser.emailVerified, veryfyEmail])

    
    return (
        <Layout>
            <main>
            {error && (
                <div className="bg-red-400 p-2 m-2 text-center text-white text-lg rounded">
                    {error}
                </div>
            )}
            {info && (
                <div className="bg-green-400 p-2 m-2 text-center text-white text-lg rounded">
                    {info}
                </div>
            )}

            <form onSubmit={changeEmail} className={`border-solid border-2 border-black-600 py-5 text-center text-3xl rounded-md `}>
                Change email
                <div class="flex justify-center mt-5">
                    <div className="w-100 mx-auto mt-2">
                        <label for="OldEmailText" className="form-label text-xl inline-block mb-1 text-gray-700">Old email</label>
                        <input
                            onChange={handleOldEmail}
                            value={oldEmail}
                            type="email"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="OldEmailText"
                            placeholder="example@email.pl"
                            required
                         />

                    </div>
                    <div className="w-100 mx-auto mt-2">
                    <label for="NewEmailText" className="form-label text-xl inline-block mb-1 text-gray-700">New Email</label>
                        <input          
                            onChange={handleEmail}
                            type="email"
                            required
                            value={email}
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="NewEmailText"
                            placeholder="example@email.pl"
                         />
                    </div>
                    <div className="w-100 mx-auto mt-2">
                    <button className="w-44 h-10 border-solid border-2 rounded-md text-lg  hover:bg-black-100 mx-4 mt-10">Confirm 
                    {loading ? (<FontAwesomeIcon icon={faSpinner} spin />) : ''}
                    </button> 
                    </div>
                </div>
            </form>

            <form onSubmit={changePassword} className={`border-solid border-2 border-black-600 py-5 text-center text-3xl rounded-md `}>
                Change Password
                <div class="flex justify-center mt-5">
                    <div className="w-100 mx-auto mt-2">
                        <label for="OldPasswordText" className="form-label text-xl inline-block mb-1 text-gray-700">New passowrd</label>
                        <input
                            onChange={handlePassword}
                            value={password}
                            type="password"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="OldPasswordText"
                            required           
                         />

                    </div>
                    <div className="w-100 mx-auto mt-2">
                    <label for="NewPasswordText" className="form-label text-xl inline-block mb-1 text-gray-700">Confirm</label>
                        <input
                            onChange={handleConfirmPassword}
                            value={confirmpassword}
                            type="password"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="NewPasswordText"
                            required
                         />
                    </div>
                    <div className="w-100 mx-auto mt-2">
                    <button className="w-44 h-10 border-solid border-2 rounded-md text-lg  hover:bg-black-100 mx-4 mt-10">
                        Confirm {loading ? (<FontAwesomeIcon icon={faSpinner} spin />) : ''}
                    </button> 
                    </div>
                </div>
            </form>

            <div className={`border-solid border-2 border-black-600 py-5 text-center text-3xl rounded-md `}>
                Family Settings
                <form onSubmit={changeFamilyName} class="flex justify-left mt-5 space-x-2">
                    <label  className="pl-5 form-label text-2xl inline-block mb-2 text-gray-700">Family Name: </label>
                    <input
                        onChange={handleNameFamily}
                        value={nameFamily}
                        type="text"
                        className="form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        required
                    />
                    <button className="pl-5 w-44 h-10 border-solid border-2 rounded-md text-lg ml-1">Change name</button>    
                </form>
                <div class="flex justify-left mt-5 space-x-2">
                    <label className="pl-6 w-44 form-label text-x1 inline-block mb-1 text-gray-700">Members</label> 
                </div>

                <form onSubmit={addFamilyMember} class="flex justify-left space-x-2">
                        <input
                            onChange={handleNameFamilyMember}
                            value={nameFamilyMember}
                            type="text"
                            className="form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            required
                         />
                    <button className="w-44 border-solid border-2 rounded-md text-lg ml-4">Add Member</button>   
                </form>
                
                <div class="flex justify-left mt-5 space-x-2">
                    <label className="pl-5 w-44 form-label text-xl inline-block mb-1 text-gray-700">{userInfo[USER_INFO.NAME]}</label>   
                </div>
                {!!familyMembers ? (
                    Object.keys(familyMembers).length ? (
                        Object.keys(familyMembers).map(key => { 
                            return (
                                <FamilyMemberList key={key} id={key} name={familyMembers[key][FAMILY_MEMBERS.NAME]} />
                            )
                        })
                    ) : ''
                ) : <div class="flex justify-left mt-5 space-x-2"><FontAwesomeIcon icon={faSpinner} spin /> Loading data...</div>}
            </div>

            <div className={`border-solid border-2 border-black-600 py-5 text-center text-3xl rounded-md `}>
                Categories
              

                <form onSubmit={addCategory} class="flex justify-left space-x-2">
                        <input
                            onChange={handleNameCategory}
                            value={nameCategory}
                            type="text"
                            className="form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            required
                         />
                    <button className="w-44 border-solid border-2 rounded-md text-lg ml-4">Add Category</button>   
                </form>
                
                <div class="flex justify-left mt-5 space-x-2">
                    <label className="pl-5 w-44 form-label text-xl inline-block mb-1 text-gray-700">Other</label>   
                </div>
                {!!categories ? (
                    Object.keys(categories).length ? (
                        Object.keys(categories).map(key => { 
                            return (
                                <CategoryList key={key} id={key} name={categories[key][CATEGORIES.NAME]} />
                            )
                        })
                    ) : ''
                ) : <div class="flex justify-left mt-5 space-x-2"><FontAwesomeIcon icon={faSpinner} spin /> Loading data...</div>}

                
            </div>

            </main>
        </Layout>
    )
}

export default Settings;

const FamilyMemberList = ({id, name}) => {

    const {updateFamilyMembers} = useDatabase()


    const deleteFamilyMember = async () => {
        await updateFamilyMembers(id, null)
    }

    return (
        <div class="flex justify-left mt-5 space-x-2">
            <label className="pl-5 w-44 form-label text-xl inline-block mb-1 text-gray-700">{name}</label>
            <button className="w-44 h-8 border-solid border-2 rounded-md text-lg ml-1" onClick={deleteFamilyMember}>Delete Member</button>     
        </div>
    )
}

const CategoryList = ({id, name}) => {

    const {updateCategories} = useDatabase()


    const deleteFamilyMember = async () => {
        await updateCategories(id, null)
    }

    return (
        <div class="flex justify-left mt-5 space-x-2">
            <label className="pl-5 w-44 form-label text-xl inline-block mb-1 text-gray-700">{name}</label>
            <button className="w-44 h-8 border-solid border-2 rounded-md text-lg ml-1" onClick={deleteFamilyMember}>Delete category</button>     
        </div>
    )
}