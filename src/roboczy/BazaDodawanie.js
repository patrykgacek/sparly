import Layout from "../components/Layout"
import { useState } from "react"
import { CATEGORIES, EXPENSE, FAMILY_MEMBERS, INCOME, USER_INFO } from "../constans"
import { useDatabase } from "../context/DatabaseContext"
import { todayDate } from "../utils"

const BazaDodawanie = () => {
    const { addExpense, addIncome, addFamilyMembers, addCategories, categories, familyMembers, userInfo, updateUserInfo } = useDatabase()

    const [infoExpense, setInfoExpense] = useState('')
    const [infoIncome, setInfoIncome] = useState('')
    const [infoFamilyMember, setInfoFamilyMember] = useState('')
    const [infoCategory, setInfoCategory] = useState('')

    const [nameExpense, setNameExpense] = useState('')
    const [dateExpense, setDateExpense] = useState(todayDate())
    const [priceExpense, setPriceExpense] = useState('')
    const [familyMemberExpense, setFamilyMemberExpense] = useState(userInfo[USER_INFO.NAME])
    const [categoryExpense, setCategoryExpense] = useState('Other')
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
    const [categoryIncome, setCategoryIncome] = useState('Other')
    const [descriptionIncome, setDescriptionIncome] = useState('')
    const handleNameIncome = e => setNameIncome(e.target.value)
    const handleDateIncome = e => setDateIncome(e.target.value)
    const handlePriceIncome = e => setPriceIncome(e.target.value)
    const handleFamilyMemberIncome = e => setFamilyMemberIncome(e.target.value)
    const handleCategoryIncome = e => setCategoryIncome(e.target.value)
    const handleDescriptionIncome = e => setDescriptionIncome(e.target.value)

    const [nameFamilyMember, setNameFamilyMember] = useState('')
    const handleNameFamilyMember = e => setNameFamilyMember(e.target.value)

    const [nameCategory, setNameCategory] = useState('')
    const handleNameCategory = e => setNameCategory(e.target.value)

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
        setInfoExpense(`Expense ${nameExpense} was added`)

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
        setInfoIncome(`Income ${nameIncome} was added`)

        setNameIncome('')
        setDateIncome('')
        setPriceIncome('')
        setFamilyMemberIncome('')
        setCategoryIncome('')
        setDescriptionIncome('')
    }

    const handleAddFamilyMembers = async e => {
        e.preventDefault()
        await addFamilyMembers({
            [FAMILY_MEMBERS.NAME]: nameFamilyMember
        })
        setInfoFamilyMember(`Family member ${nameFamilyMember} was added`)
        setNameFamilyMember('')
    }

    const handleAddCategories = async e => {
        e.preventDefault()
        await addCategories({
            [CATEGORIES.NAME]: nameCategory
        })
        setInfoCategory(`Category ${nameCategory} was added`)
        setNameCategory('')
    }

    return (
        <Layout>
        <div className="md:w-96">
            <form onSubmit={handleAddFamilyMembers} className="bg-pink-50 p-4">
                <h1 className="text-2xl mr-3">Family Member</h1>
                <Input
                    type="text"
                    id="nameFamilyMember"
                    label="Name"
                    onChange={handleNameFamilyMember}
                    value={nameFamilyMember}
                    required
                />
                <Button>Add member</Button>
                <div className="mt-2">{infoFamilyMember}</div>
            </form>

            <hr className="block h-2 bg-black" />

            <form onSubmit={handleAddCategories} className="bg-indigo-50 p-4">
                <h1 className="text-2xl mr-3">Categories</h1>
                <Input
                    type="text"
                    id="nameCategory"
                    label="Name"
                    onChange={handleNameCategory}
                    value={nameCategory}
                    required
                />
                <Button>Add category</Button>
                <div className="mt-2">{infoCategory}</div>
            </form>

            <hr className="block h-2 bg-black" />

            <form onSubmit={handleAddExpense} className="bg-green-50 p-4">
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
                <div className="mt-2">{infoExpense}</div>
            </form>

            <hr className="block h-2 bg-black" />

            <form onSubmit={handleAddIncome} className="bg-blue-50 p-4">
                <h1 className="text-2xl mr-3">Income</h1>
                <Input
                    type="text"
                    id="nameIncome"
                    label="Name"
                    onChange={handleNameIncome}
                    value={nameIncome}
                />
                <Input
                    type="date"
                    id="dateIncome"
                    label="Date"
                    onChange={handleDateIncome}
                    value={dateIncome}
                />
                <Input
                    type="number"
                    id="priceIncome"
                    label="Price"
                    onChange={handlePriceIncome}
                    value={priceIncome}
                />
                <Select
                    id="familyMemberIncome"
                    label="Family Member"
                    onChange={handleFamilyMemberIncome}
                    value={familyMemberIncome}>
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
                <div className="mt-2">{infoIncome}</div>
            </form>
        </div>
        </Layout>
    )
}

export default BazaDodawanie


const Input = ({id, label, type, onChange, value, ...rest}) => {
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
    const {children, ...other} = props
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