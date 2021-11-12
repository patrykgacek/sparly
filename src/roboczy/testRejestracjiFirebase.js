import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase";

const testRejestracji = () => {
    
    const register = () => {
        
        
        createUserWithEmailAndPassword(auth, "emal@gmail.com", "tajne123")
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log('Zarejestrowany pomyslnie');
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('Zarejestrowany - error');
            console.log(errorCode);
            console.log(errorMessage);
        });
    }
    
    return (
        <button onClick={register}>
            Rejestruj
        </button>
    )
}

export default testRejestracji