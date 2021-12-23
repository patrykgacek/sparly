import { useState } from "react"
import Props2 from "./Props2"

const Props1 = () => {

    const [value, setValue] = useState('')

    const handleInput = e => {
        setValue(e.target.value)
        console.log(value)
    }

    return (
        <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
                <label htmlFor="exampleFormControlInput1" className="form-label inline-block mb-2 text-gray-700">Example label</label>
                <Props2 onChange={handleInput} value={value} placeholder="xd" />
            </div>
            <button onClick={() => console.log(value)}>xxxxx</button>
        </div>
    )
}

export default Props1