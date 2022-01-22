import Layout from "../components/Layout";
import { CATEGORIES, EXPENSE,  INCOME, USER_INFO } from "../constans"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react"
import { useDatabase } from "../context/DatabaseContext";
import { todayDate } from "../utils"

const Dashboard = () => {
    const { expense, income, addExpense, addIncome, categories, familyMembers, userInfo, updateUserInfo } = useDatabase()

    useEffect(() => {
        setFamilyMemberExpense(userInfo[USER_INFO.NAME])
        setFamilyMemberIncome(userInfo[USER_INFO.NAME])
    }, [userInfo])

    const [nameExpense, setNameExpense] = useState('')
    const [dateExpense, setDateExpense] = useState(todayDate())
    const [priceExpense, setPriceExpense] = useState('')
    const [familyMemberExpense, setFamilyMemberExpense] = useState(userInfo[USER_INFO.NAME])
    const [categoryExpense, setCategoryExpense] = useState('other')
    const [descriptionExpense, setDescriptionExpense] = useState('')
    const handleNameExpense = e => setNameExpense(e.target.value)
    const handleDateExpense = e => setDateExpense(e.target.value)
    const handlePriceExpense = e => setPriceExpense(e.target.value)
    const handleFamilyMemberExpense = e => setFamilyMemberExpense(e.target.value)
    const handleCategoryExpense = e => setCategoryExpense(e.target.value)
    const handleDescriptionExpense = e => setDescriptionExpense(e.target.value)

    const [nameIncome, setNameIncome] = useState('')
    const [dateIncome, setDateIncome] = useState(todayDate())
    const [priceIncome, setPriceIncome] = useState('')
    const [familyMemberIncome, setFamilyMemberIncome] = useState(userInfo[USER_INFO.NAME])
    const [categoryIncome, setCategoryIncome] = useState('other')
    const [descriptionIncome, setDescriptionIncome] = useState('')
    const handleNameIncome = e => setNameIncome(e.target.value)
    const handleDateIncome = e => setDateIncome(e.target.value)
    const handlePriceIncome = e => setPriceIncome(e.target.value)
    const handleFamilyMemberIncome = e => setFamilyMemberIncome(e.target.value)
    const handleCategoryIncome = e => setCategoryIncome(e.target.value)
    const handleDescriptionIncome = e => setDescriptionIncome(e.target.value)

    const handleExpnInc = () => {
        if (currentValue === "-") {
            return (
                <div className="flex items-center justify-center">
                    <div className="md:w-96 flex items-center justify-center">
                        <hr className="block h-2 bg-black flex items-center justify-center" />

                        <form onSubmit={handleAddExpense} className=" \p-4">
                            <h1 className="text-2xl mr-3">Expense</h1>
                            <Input
                                type="text"
                                id="nameExpense"
                                label="Name"
                                onChange={handleNameExpense}
                                value={nameExpense}
                                required
                            />
                            <Input
                                type="date"
                                id="dateExpense"
                                label="Date"
                                onChange={handleDateExpense}
                                value={dateExpense}
                                required
                            />
                            <Input
                                type="number"
                                id="priceExpense"
                                label="Price"
                                onChange={handlePriceExpense}
                                value={priceExpense}
                                required
                            />
                            <Select
                                id="familyMemberExpense"
                                label="Family Member"
                                onChange={handleFamilyMemberExpense}
                                value={familyMemberExpense}
                                required>
                                <option value={userInfo[USER_INFO.NAME]}>{userInfo[USER_INFO.NAME]}</option>
                                {!!familyMembers ? (
                                    Object.keys(familyMembers).length ? (
                                        Object.keys(familyMembers).map(key => {
                                            const familyMember = familyMembers[key][CATEGORIES.NAME]
                                            return <option key={key} value={familyMember}>{familyMember}</option>
                                        })
                                    ) : <option>No Family Members</option>
                                ) : <option>Loading data...</option>}
                            </Select>
                            <Select
                                id="categoryExpense"
                                label="Category"
                                onChange={handleCategoryExpense}
                                value={categoryExpense}
                                required>
                                <option value="Other">Other</option>
                                {!!categories ? (
                                    Object.keys(categories).length ? (
                                        Object.keys(categories).map(key => {
                                            const category = categories[key][CATEGORIES.NAME]
                                            return <option key={key} value={category}>{category}</option>
                                        })
                                    ) : <option>No categories</option>
                                ) : <option>Loading data...</option>}
                            </Select>
                            <Input
                                type="text"
                                id="descriptionExpense"
                                label="Description"
                                onChange={handleDescriptionExpense}
                                value={descriptionExpense}
                            />
                            <Button>Add Expense</Button>
                        </form>
                    </div>
                </div>
            )
        }
        if (currentValue === "+") {
            return (
                <div className="flex items-center justify-center">
                    <div className="md:w-96 flex items-center justify-center">
                        <hr className="block h-2 bg-black flex items-center justify-center" />

                        <form onSubmit={handleAddIncome} className=" p-4">
                            <h1 className="text-2xl mr-3">Income</h1>
                            <Input
                                type="text"
                                id="nameIncome"
                                label="Name"
                                onChange={handleNameIncome}
                                value={nameIncome}
                                required
                            />
                            <Input
                                type="date"
                                id="dateIncome"
                                label="Date"
                                onChange={handleDateIncome}
                                value={dateIncome}
                                required
                            />
                            <Input
                                type="number"
                                id="priceIncome"
                                label="Price"
                                onChange={handlePriceIncome}
                                value={priceIncome}
                                required
                            />
                            <Select
                                id="familyMemberIncome"
                                label="Family Member"
                                onChange={handleFamilyMemberIncome}
                                value={familyMemberIncome}>
                                <option value={userInfo[USER_INFO.NAME]}>{userInfo[USER_INFO.NAME]}</option>
                                {!!familyMembers ? (
                                    Object.keys(familyMembers).length ? (
                                        Object.keys(familyMembers).map(key => {
                                            const familyMember = familyMembers[key][CATEGORIES.NAME]
                                            return <option key={key} value={familyMember}>{familyMember}</option>
                                        })
                                    ) : <option>No Family Members</option>
                                ) : <option>Loading data...</option>}
                            </Select>
                            <Select
                                id="categoryIncome"
                                label="Category"
                                onChange={handleCategoryIncome}
                                value={categoryIncome}>
                                <option value="Other">Other</option>
                                {!!categories ? (
                                    Object.keys(categories).length ? (
                                        Object.keys(categories).map(key => {
                                            const category = categories[key][CATEGORIES.NAME]
                                            return <option key={key} value={category}>{category}</option>
                                        })
                                    ) : <option>No categories</option>
                                ) : <option>Loading data...</option>}
                            </Select>
                            <Input
                                type="text"
                                id="descriptionIncome"
                                label="Description"
                                onChange={handleDescriptionIncome}
                                value={descriptionIncome}
                            />
                            <Button>Add Income</Button>
                        </form>

                    </div>
                </div>
            )
        }
    }
    const handleCorrectionC = e =>{
        if(parseFloat(e.target.value)<parseFloat(userInfo[USER_INFO.BALANCE])){
            setPriceExpense(e.target.value)

         }
         if(parseFloat(e.target.value)>parseFloat(userInfo[USER_INFO.BALANCE])){
            setPriceIncome(e.target.value)
         }
         e.preventDefault()
    }
    const handleCorretion = () =>{
        if(parseFloat(priceExpense)<parseFloat(userInfo[USER_INFO.BALANCE])){
           handleAddExpenseChange()
        }
        if(parseFloat(priceIncome)>parseFloat(userInfo[USER_INFO.BALANCE])){
           handleAddIncomeChange()
        }
    }


    const [currentValue, setCurrentValue] = useState("+");
    const [isButtonPressed, setButtonPressed] = useState(true);
    const Change = () => {
        setButtonPressed(!isButtonPressed)
    }
    const [isButtonPressed2, setButtonPressed2] = useState(true);
    const Add = () => {
        setButtonPressed2(!isButtonPressed2)
    }
    const options = [
        {
            label: "Add Income",
            value: "+",
        },
        {
            label: "Add Expense",
            value: "-",
        },
    ];

    const handlesetCurrentValue = e => {
        setCurrentValue(e.target.value)
    }
    const handleAddExpense = async e => {
        e.preventDefault()

        const newExpense = {
            [EXPENSE.NAME]: nameExpense,
            [EXPENSE.DATE]: dateExpense,
            [EXPENSE.PRICE]: priceExpense,
            [EXPENSE.FAMILY_MEMBER]: familyMemberExpense,
            [EXPENSE.CATEGORY]: categoryExpense,
            [EXPENSE.DESCRIPTION]: descriptionExpense
        }

        const newBalance = parseFloat(userInfo[USER_INFO.BALANCE]) - parseFloat(priceExpense)

        await addExpense(newExpense)
        await updateUserInfo([USER_INFO.BALANCE], newBalance)

        setNameExpense('')
        setDateExpense('')
        setPriceExpense('')
        setFamilyMemberExpense('')
        setCategoryExpense('')
        setDescriptionExpense('')
    }
    const handleAddIncome = async e => {
        e.preventDefault()

        const newIncome = {
            [INCOME.NAME]: nameIncome,
            [INCOME.DATE]: dateIncome,
            [INCOME.PRICE]: priceIncome,
            [INCOME.FAMILY_MEMBER]: familyMemberIncome,
            [INCOME.CATEGORY]: categoryIncome,
            [INCOME.DESCRIPTION]: descriptionIncome
        }

        const newBalance = parseFloat(userInfo[USER_INFO.BALANCE]) + parseFloat(priceIncome)

        await addIncome(newIncome)
        await updateUserInfo([USER_INFO.BALANCE], newBalance)

        setNameIncome('')
        setDateIncome('')
        setPriceIncome('')
        setFamilyMemberIncome('')
        setCategoryIncome('')
        setDescriptionIncome('')
    }
    const handleAddExpenseChange = () => {
        const newExpense = {
            [EXPENSE.NAME]: 'Budget correction',
            [EXPENSE.DATE]: todayDate(),
            [EXPENSE.PRICE]: parseFloat(userInfo[USER_INFO.BALANCE]) - parseFloat(priceExpense),
            [EXPENSE.FAMILY_MEMBER]: userInfo[USER_INFO.NAME],
            [EXPENSE.CATEGORY]: 'Correction',
            [EXPENSE.DESCRIPTION]: 'Balance Change'
        }

        const newBalance = parseFloat(priceExpense)

       addExpense(newExpense)
       updateUserInfo([USER_INFO.BALANCE], newBalance)

        setNameExpense('')
        setDateExpense('')
        setPriceExpense('')
        setFamilyMemberExpense('')
        setCategoryExpense('')
        setDescriptionExpense('')
    }
    const handleAddIncomeChange = () => {
        const newIncome = {
            [INCOME.NAME]: 'Budget correction',
            [INCOME.DATE]: todayDate(),
            [INCOME.PRICE]: parseFloat(priceIncome)-parseFloat(userInfo[USER_INFO.BALANCE]),
            [INCOME.FAMILY_MEMBER]: userInfo[USER_INFO.NAME],
            [INCOME.CATEGORY]: 'Correction',
            [INCOME.DESCRIPTION]: 'Balance Change'
        }

        const newBalance = parseFloat(priceIncome)

        addIncome(newIncome)
        updateUserInfo([USER_INFO.BALANCE], newBalance)

        setNameIncome('')
        setDateIncome('')
        setPriceIncome('')
        setFamilyMemberIncome('')
        setCategoryIncome('')
        setDescriptionIncome('')
    }


    return (
        <Layout>
            <div className={`border-solid border-2 border-black-600 py-5 text-center text-3xl rounded-md`}> Budget
                <div className="flex items-center justify-center w-96 mx-auto mt-2">
                    <div className="mb-3 xl:w-60">
                        <select className="form-select appearance-none
                                     block
                                     w-64
                                     px-3
                                     py-1.5
                                     text-base
                                     font-normal
                                     text-gray-700
                                     bg-white bg-clip-padding bg-no-repeat
                                     border border-solid border-gray-300
                                     rounded
                                     transition
                                     ease-in-out
                                     m-0
                                     focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" onChange={handlesetCurrentValue}>
                            {options.map((option) => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>

                        <div className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                            <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out" onClick={Add}>Add</button>
                            <button type="button" className=" rounded-r inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out" onClick={Change}> Change Budget</button>
                        </div>
                    </div>
                </div>
                {
                    isButtonPressed ? ("") :
                        <div className="flex justify-center w-96 mx-auto mt-2">
                            <div className="mb-3 xl:w-100">
                                <div className="flex justify-center">
                                    <div className="mb-3 xl:w-1/3">
                                    <form onSubmit={handleCorretion} className=" \p-4 flex justify-center">
                                        <input
                                            type="number"
                                            className="
                                         form-control
                                         block
                                         w-50
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
                                         m-0
                                         focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                         "
                                            id="exampleNumber0"
                                            placeholder="Amount"
                                            required
                                            onChange = {handleCorrectionC}
                                        />
                                   
                                    <button className="w-44 h-10  inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Confirm</button>
                                     </form>
                                     </div>
                                </div>
                            </div>
                        </div>
                }
                {
                    isButtonPressed2 ? ("") :
                        handleExpnInc()
                }

            </div>
            <div className="border-solid border-2 border-black-600 py-5 text-center rounded-md">Budget History
                <div className="py-5 text-center text-3xl rounded-md">Expense</div>
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block w-100 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-200 ">
                                    <thead className="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        <tr>
                                            <th className="px-6">Name</th>
                                            <th className="px-6">Date</th>
                                            <th className="px-6">Price</th>
                                            <th className="px-6">Family Member</th>
                                            <th className="px-6">Category</th>
                                            <th className="px-6">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {!!expense ? (
                                            Object.keys(expense).length ? (
                                                Object.keys(expense).map(key => {
                                                    return (
                                                        <tr key={key}>
                                                            <td className="px-6">{expense[key][EXPENSE.NAME]}</td>
                                                            <td className="px-6">{expense[key][EXPENSE.DATE]}</td>
                                                            <td className="px-6 text-right">{expense[key][EXPENSE.PRICE]} {userInfo[USER_INFO.CURRENCY_SYMBOL]}</td>
                                                            <td className="px-6">{expense[key][EXPENSE.FAMILY_MEMBER]}</td>
                                                            <td className="px-6">{expense[key][EXPENSE.CATEGORY]}</td>
                                                            <td className="px-6">{expense[key][EXPENSE.DESCRIPTION]}</td>
                                                        </tr>
                                                    )
                                                })
                                            ) : <tr><td className="px-6 py-3" colSpan="7">No data to display. Add your first expense!</td></tr>
                                        ) : <tr><td className="px-6 py-3" colSpan="7"><FontAwesomeIcon icon={faCircleNotch} spin /> Loading data...</td></tr>}
                                    </tbody>
                                </table>

                                <div className="py-5 text-center text-3xl rounded-md">Income</div>
                                <table className="min-w-full divide-y divide-gray-200 ">
                                    <thead className="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        <tr>
                                            <th className="px-6">Name</th>
                                            <th className="px-6">Date</th>
                                            <th className="px-6">Price</th>
                                            <th className="px-6">Family Member</th>
                                            <th className="px-6">Category</th>
                                            <th className="px-6">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {!!income ? (
                                            Object.keys(income).length ? (
                                                Object.keys(income).map(key => {
                                                    return (
                                                        <tr key={key}>
                                                            <td className="px-6">{income[key][EXPENSE.NAME]}</td>
                                                            <td className="px-6">{income[key][EXPENSE.DATE]}</td>
                                                            <td className="px-6">{income[key][EXPENSE.PRICE]} {userInfo[USER_INFO.CURRENCY_SYMBOL]}</td>
                                                            <td className="px-6">{income[key][EXPENSE.FAMILY_MEMBER]}</td>
                                                            <td className="px-6">{income[key][EXPENSE.CATEGORY]}</td>
                                                            <td className="px-6">{income[key][EXPENSE.DESCRIPTION]}</td>
                                                        </tr>
                                                    )
                                                })
                                            ) : <tr><td className="px-6 py-3" colSpan="7">No data to display. Add your first expense!</td></tr>
                                        ) : <tr><td className="px-6 py-3" colSpan="7"><FontAwesomeIcon icon={faCircleNotch} spin /> Loading data...</td></tr>}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard;

const Input = ({ id, label, type, onChange, value, ...rest }) => {
    return (
        <div className="mb-3">
            <label
                className="form-label inline-block mb-2 text-gray-700"
                htmlFor={id}>
                {label}
            </label>
            <input
                type={type}
                id={id}
                onChange={onChange}
                value={value}
                {...rest}
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
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
        </div>
    )
}

const Select = props => {
    return (
        <div className="mb-3">
            <label
                className="form-label inline-block mb-2 text-gray-700"
                htmlFor={props.id}>
                {props.label}
            </label>
            <select
                id={props.id}
                onChange={props.onChange}
                value={props.value}
                className="
                    form-select appearance-none
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" >
                {props.children}
            </select>
        </div>
    )
}

const Button = props => {
    const { children, ...other } = props
    return (
        <button
            {...other}
            className="px-6 py-2.5
                bg-green-500
                text-white
                font-medium
                text-xs 
                leading-tight 
                uppercase rounded 
                shadow-md 
                hover:bg-green-600  
                hover:shadow-lg 
                focus:bg-green-600  
                focus:shadow-lg 
                focus:outline-none 
                focus:ring-0 
                active:bg-blue-800 
                active:shadow-lg 
                transition duration-150 ease-in-out">
            {children}
        </button>
    )
}