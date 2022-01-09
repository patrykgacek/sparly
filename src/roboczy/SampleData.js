import { useEffect, useState } from "react"

const SampleData = () => {
    const [data, setData] = useState({})

    useEffect(() => {
        const familyMembers = ['Aneta', 'Mateusz', 'Patryk', 'Kajetan', 'Krzysztof', 'Michał']
        const categoriesEx = ['Other', 'Food', 'Fees and bills', 'Fuel', 'Health, hygiene and chemicals', 'Shopping', 'Cloth']
        const categoriesIn = ['Other', 'payment', 'passive']

        let tmpData
        let newData = '{'
        for (let i = 0; i < 200; i++) {

            const expense = false;

            const kwota = (Math.random()*100).toFixed(1) + '0'
            const data = randomDate(new Date(2018, 0, 1), new Date())
            const nazwa = expense ? `Expense name ${i}` : `Income name ${i}`
            const opis = expense ? `Expense description ${i}` : `Income description ${i}`
            const czlonek = familyMembers[getRandomInt(0, 6)]
            const kategoriaWydatek = categoriesEx[getRandomInt(0, 7)]
            const kategoriaPrzychod = categoriesIn[getRandomInt(0, 3)]

            tmpData = i !== 0 ? ',' : ''
            tmpData += '"' + Math.random().toString(36).substr(2, 9) + '":{'
            tmpData += '"name":"' + nazwa + '",'
            tmpData += '"date":"' + data + '",'
            tmpData += '"price":"' + kwota + '",'
            tmpData += '"familyMember":"' + czlonek + '",'
            tmpData += '"category":"' + (expense ? kategoriaWydatek : kategoriaPrzychod) + '",'
            tmpData += '"description":"' + opis + '"'
            tmpData += '}'

            newData += tmpData
        }
        newData += '}'

        console.log(newData);

        setData(JSON.parse(newData))
    }, [])

    const randomDate = (start, end) => {
        let today = new Date(+start + Math.random() * (end - start))
        let month = (today.getMonth()+1) < 10 ? '0' + (today.getMonth()+1) : (today.getMonth()+1);
        let day = today.getDate() < 10 ? '0' + today.getDate() : today.getDate();
        let date = today.getFullYear()+'-'+month+'-'+day;
        return date
    }

    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    return (
        <pre>
            {JSON.stringify(data, null, 2)}
        </pre>
    )
}

export default SampleData