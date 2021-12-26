import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useDatabase } from "../context/DatabaseContext";
import { TEST_DATA } from "../constans"; // Różne nazwy zapisane w jednym pliku żeby uniknąć pomyłki

const BazaTesty = () => {
    const [stringValue, setStringValue] = useState('') // Input kontrolowany 
    const [numberValue, setNumberValue] = useState('') // Input kontrolowany 

    const handleStringValue = e => setStringValue(e.target.value) // Input kontrolowany 
    const handleNumberValue = e => setNumberValue(e.target.value) // Input kontrolowany
    
    const { testData, setLoadTestData, updateTestData, addTestData } = useDatabase() // Baza danych

    // dodanie nowej wartości do bazy danych
    // klucz id jest tworzony przez firebase
    // funkcja asynchroniczna (async, await)
    const handleAdd = async e => {
        e.preventDefault() // Zablokowanie przeładowania strony

        const newData = { // Przygotowanie obiektu
            [TEST_DATA.POLE1]: stringValue,
            [TEST_DATA.POLE2]: numberValue
        }
        
        await addTestData(newData) // Dodanie wcześniej przygotowanego obiektu do bazy danych
        setStringValue('') // Wyczyszczenie input'u
        setNumberValue('') // Wyczyszczenie input'u

        /* Ewentualnie można tak:
        await addTestData({
            [TEST_DATA.POLE1]: stringValue,
            [TEST_DATA.POLE2]: numberValue
        })*/
    }

    // useEffect służy do wykonania jakiś rzeczy od razu po załadowaniu komponentu na stronie
    useEffect(() => {
        setLoadTestData(true)
    })


    // Usuwanie wartości z bazy danych o danym kluczu id
    // Lub aktualizowanie danych o danym kluczu id
    // funkcja asynchroniczna (async, await)
    const handleDelete = async key => {
        await updateTestData(key, null)
        // Jeżeli chcemy zaktualizowac to w miejsce null należy podać przygotowany obiekt jak w przypadku dodawania danych
    }

    return (
        <>
            <div className='border p-3 m-1'>
                <Link to='/dashboard' className="text-blue-600">Dashboard</Link>
            </div>


            {/* set Data */}
            <form onSubmit={handleAdd} className='border p-3 m-1'>
                <h1>Zapis do bazy</h1>
                <input
                    className='border'
                    placeholder='String'
                    type='text'
                    onChange={handleStringValue}
                    value={stringValue}
                />
                <input
                    className='border'
                    placeholder='Number'
                    type='number'
                    onChange={handleNumberValue}
                    value={numberValue}
                />
                <button>Prześlij</button>
            </form>




            {/* get Data */}
            <div className='border p-3 m-1'>
                {!!testData ? (
                    Object.keys(testData).length ? (
                        Object.keys(testData).map(key => {
                            const napis1 = testData[key][TEST_DATA.POLE1]
                            const napis2 = testData[key][TEST_DATA.POLE2]
                            return (
                                <div key={key}>
                                    String: <span className="text-red-600">{napis1}</span>,
                                    Number: <span className="text-red-600">{napis2}</span> -- 
                                    <button onClick={() => handleDelete(key)}>- Usuń</button>
                                </div>
                            )
                        })
                    ) : 'Brak danych' // Dane załadowane, ale nie ma nic do wyświetlenia
                ) : <FontAwesomeIcon icon={faCircleNotch} spin /> /* Ładowanie Danych */}
            </div>
        </>
    )
}

export default BazaTesty