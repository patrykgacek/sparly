import axios from 'axios'

const instance = axios.create({
    baseURL = 'https://formal-vortex-225715-default-rtdb.europe-west1.firebasedatabase.app/'
})

export default instance