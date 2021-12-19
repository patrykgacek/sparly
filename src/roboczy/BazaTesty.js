import { child, onValue, push, ref, update } from "firebase/database";
import { useState } from "react"
import { database } from "../firebase";

// ============================================================
// https://firebase.google.com/docs/database/web/read-and-write
// ============================================================

const BazaTesty = () => {

    const tableName = 'test'

    const [stringValue, setStringValue] = useState('')
    const [numberValue, setNumberValue] = useState('')
    const [data, setData] = useState({})

    const handleStringValue = e => setStringValue(e.target.value)
    const handleNumberValue = e => setNumberValue(e.target.value)

    // set Data
    const fetchData = () => {
        const newData = {
            stringValueInDatabase: stringValue,
            numberValueInDatabase: numberValue
        }

        const newDataKey = push(child(ref(database), tableName)).key
        

        const updates = {}
        updates['/' + tableName + '/' + newDataKey] = newData;

        update(ref(database), updates)
    }

    // get Data
    const getData = () => {
        onValue(ref(database, tableName), snapshot => {
            setData(snapshot.val())
        })
    }

    // delete Data
    const deleteData = key => {
        const updates = {}
        updates['/' + tableName + '/' + key] = null;

        update(ref(database), updates)
    }


    return (
        <>
            {/* set Data */}
            <div className='border p-3 m-1'>
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
                <button onClick={fetchData}>Prześlij</button>
            </div>




            {/* get Data */}
            <div className='border p-3 m-1'>
                <button onClick={getData}>Pobierz</button>
                <br /> 
                {Object.keys(data).length ? (
                    Object.keys(data).map(key => {
                        return (
                            <div key={key}>
                                String: {data[key].stringValueInDatabase},
                                Number: {data[key].numberValueInDatabase} ---
                                <button onClick={() => deleteData(key)}>Usuń</button>
                            </div>
                        )
                    })
                ) : (
                    'Nie pobrano danych'
                )}
            </div>
        </>
    )
}

export default BazaTesty