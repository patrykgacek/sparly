import axios from 'axios'

const testRejestracjiAxios = () => {

    const rej = async () => {
        const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDZAo9KBwRiEPIC038UZ8ly-UL4y9HguR0', {
            email: 'jakis@xd.pl',
            password: 'tajne',
            returnSecureToken: true
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('Zarejestrowany - error');
            console.log(errorCode);
            console.log(errorMessage);
            console.log(error)
        })
        console.log(res)
    }

    return (
        <button onClick={rej}>
            Rejestruj
        </button>
    )
}

export default testRejestracjiAxios