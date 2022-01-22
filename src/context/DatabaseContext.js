import { child, onValue, push, ref, update } from "firebase/database";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { CATEGORIES, PATH, SAVINGS_GOAL } from "../constans";
import { database } from "../firebase";
import { todayDate } from "../utils";
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
    const [income, setIncome] = useState(false) 
    const [savingsGoal, setSavingsGoal] = useState(false)
   

    const getFromDatabase = useCallback((path, setState) => {
        return (
            currentUser && 
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

    useEffect(() => getFromDatabase(PATH.EXPENSE, setExpense), [getFromDatabase])
    useEffect(() => getFromDatabase(PATH.INCOME, setIncome), [getFromDatabase])
    useEffect(() => getFromDatabase(PATH.SAVINGS_GOAL, setSavingsGoal), [getFromDatabase])
    useEffect(() => getFromDatabase(PATH.CATEGORIES, setCategories), [getFromDatabase])
    useEffect(() => getFromDatabase(PATH.FAMILY_MEMBERS, setFamilyMembers), [getFromDatabase])
    useEffect(() => getFromDatabase(PATH.USER_INFO, setUserInfo), [getFromDatabase])

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

        const newSavingGoalKey = push(child(ref(database), userUID + PATH.SAVINGS_GOAL)).key
        const newSavingGoal = {
            [SAVINGS_GOAL.NAME]: "Financial cushion",
            [SAVINGS_GOAL.GOAL_AMOUNT]: 10000,
            [SAVINGS_GOAL.COMPLETION_DATE]: todayDate(),
            [SAVINGS_GOAL.DESCRIPTION]: "Financial safety cushion is a certain amount of money that a person will spend in case he loses his job or has any problems: in business, health, household emergencies",
            [SAVINGS_GOAL.CREATE_DATE]: todayDate(),
            [SAVINGS_GOAL.ACTUAL_AMOUNT]: 0,
        }
        updates[userUID + PATH.SAVINGS_GOAL + newSavingGoalKey] = newSavingGoal;

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
        updateExpense,
        addExpense,

        income,
        updateIncome,
        addIncome,

        savingsGoal,
        updateSavingsGoal,
        addSavingsGoal,

        updateUserInfoWithUID,
    }

    return (
        <DatabaseContext.Provider value={value}>
            {children}
        </DatabaseContext.Provider>
    )
}