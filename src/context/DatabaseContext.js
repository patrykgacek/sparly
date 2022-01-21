import { child, onValue, push, ref, update } from "firebase/database";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { CATEGORIES, PATH } from "../constans";
import { database } from "../firebase";
import { useAuth } from "./AuthContext";

// ============================================================
// https://firebase.google.com/docs/database/web/read-and-write
// https://firebase.google.com/docs/reference/js/database
// ============================================================

const DatabaseContext = createContext()

export const useDatabase = () => useContext(DatabaseContext)

export const DatabaseProvider = ({children}) => {
    const {currentUser} = useAuth()
    
    const [userInfo, setUserInfo] = useState(false)
    const [categories, setCategories] = useState(false)
    const [familyMembers, setFamilyMembers] = useState(false)

    const [expense, setExpense] = useState(false)
    const [loadExpense, setLoadExpense] = useState(false)

    const [income, setIncome] = useState(false)
    const [loadIncome, setLoadIncome] = useState(false)

    const [savingsGoal, setSavingsGoal] = useState(false)
    const [loadSavingsGoal, setLoadSavingsGoal] = useState(false)

    const [testData, setTestData] = useState(false) // DEV [!]
    const [loadTestData, setLoadTestData] = useState(false) // DEV [!]

    const getFromDatabase = useCallback((load, path, setState) => {
        return (
            load && currentUser && 
            onValue(ref(database, currentUser.uid + path), snapshot => {
                !snapshot.val() ? setState({}) : setState(snapshot.val())
            })
        )
    }, [currentUser])

    const updateDatabase = (key, newData, path) => {
        const updates = {}
        updates[currentUser.uid + path + key] = newData;
        return update(ref(database), updates)
    }

    const addToDatabase = (newData, path) => {
        const newDataKey = push(child(ref(database), currentUser.uid + path)).key
        const updates = {}
        updates[currentUser.uid + path + newDataKey] = newData;
        return update(ref(database), updates)
    }

    useEffect(() => getFromDatabase(true, PATH.EXPENSE, setExpense), [getFromDatabase, loadExpense])
    useEffect(() => getFromDatabase(true, PATH.INCOME, setIncome), [getFromDatabase, loadIncome])
    useEffect(() => getFromDatabase(true, PATH.SAVINGS_GOAL, setSavingsGoal), [getFromDatabase, loadSavingsGoal])
    useEffect(() => getFromDatabase(true, PATH.CATEGORIES, setCategories), [getFromDatabase])
    useEffect(() => getFromDatabase(true, PATH.FAMILY_MEMBERS, setFamilyMembers), [getFromDatabase])
    useEffect(() => getFromDatabase(true, PATH.USER_INFO, setUserInfo), [getFromDatabase])
    useEffect(() => getFromDatabase(true, PATH.TEST, setTestData), [getFromDatabase, loadTestData]) // DEV [!]

    const updateExpense = (key, newData) => updateDatabase(key, newData, PATH.EXPENSE)
    const addExpense = (newData) => addToDatabase(newData, PATH.EXPENSE)

    const updateIncome = (key, newData) => updateDatabase(key, newData, PATH.INCOME)
    const addIncome = (newData) => addToDatabase(newData, PATH.INCOME)

    const updateSavingsGoal = (key, newData) => updateDatabase(key, newData, PATH.SAVINGS_GOAL)
    const addSavingsGoal = (newData) => addToDatabase(newData, PATH.SAVINGS_GOAL)

    const updateUserInfo = (key, newData) => updateDatabase(key, newData, PATH.USER_INFO)

    const addCategories = (newData) => addToDatabase(newData, PATH.CATEGORIES)
    const updateCategories = (key, newData) => updateDatabase(key, newData, PATH.CATEGORIES)

    const addFamilyMembers = (newData) => addToDatabase(newData, PATH.FAMILY_MEMBERS)
    const updateFamilyMembers = (key, newData) => updateDatabase(key, newData, PATH.FAMILY_MEMBERS)
    
    const updateTestData = (key, newData) => updateDatabase(key, newData, PATH.TEST) // DEV [!]
    const addTestData = (newData) => addToDatabase(newData, PATH.TEST) // DEV [!]

    // Register new user, setup default values
    const updateUserInfoWithUID = (newUserInfo, userUID) => {
        const updates = {}
        updates[userUID + PATH.USER_INFO] = newUserInfo;
        
        let newCategoryKey = push(child(ref(database), userUID + PATH.CATEGORIES)).key
        let defaultCategory = {[CATEGORIES.NAME]: 'Food'}
        updates[userUID + PATH.CATEGORIES + newCategoryKey] = defaultCategory;

        newCategoryKey = push(child(ref(database), userUID + PATH.CATEGORIES)).key
        defaultCategory = {[CATEGORIES.NAME]: 'Housing'}
        updates[userUID + PATH.CATEGORIES + newCategoryKey] = defaultCategory;

        newCategoryKey = push(child(ref(database), userUID + PATH.CATEGORIES)).key
        defaultCategory = {[CATEGORIES.NAME]: 'Transportation'}
        updates[userUID + PATH.CATEGORIES + newCategoryKey] = defaultCategory;

        newCategoryKey = push(child(ref(database), userUID + PATH.CATEGORIES)).key
        defaultCategory = {[CATEGORIES.NAME]: 'Medical & Healthcare'}
        updates[userUID + PATH.CATEGORIES + newCategoryKey] = defaultCategory;

        newCategoryKey = push(child(ref(database), userUID + PATH.CATEGORIES)).key
        defaultCategory = {[CATEGORIES.NAME]: 'Utilities'}
        updates[userUID + PATH.CATEGORIES + newCategoryKey] = defaultCategory;

        newCategoryKey = push(child(ref(database), userUID + PATH.CATEGORIES)).key
        defaultCategory = {[CATEGORIES.NAME]: 'Payment'}
        updates[userUID + PATH.CATEGORIES + newCategoryKey] = defaultCategory;

        return update(ref(database), updates)
    }

    const value = {
        userInfo,
        updateUserInfo,

        familyMembers,
        updateFamilyMembers,
        addFamilyMembers,

        categories,
        updateCategories,
        addCategories,

        expense,
        setLoadExpense,
        updateExpense,
        addExpense,

        income,
        setLoadIncome,
        updateIncome,
        addIncome,

        savingsGoal,
        setLoadSavingsGoal,
        updateSavingsGoal,
        addSavingsGoal,

        updateUserInfoWithUID,

        testData,           // DEV [!]
        setLoadTestData,    // DEV [!]
        updateTestData,     // DEV [!]
        addTestData,        // DEV [!]
    }

    return (
        <DatabaseContext.Provider value={value}>
            {children}
        </DatabaseContext.Provider>
    )
}