import { createUserWithEmailAndPassword } from "firebase/auth"
import { ref, set, onValue } from "firebase/database";
import { auth } from "../firebase";
import { database } from "../firebase";

const Fb = () => {
    
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

    const wpisuj = () => {
        console.dir(set(ref(database, 'boczek'), {
            pole1: "xd",
            pole2: "xdssss2",
            pole3: "xd3"
        }))
    }

    const czytaj = () => {
        console.dir(onValue(ref(database, 'tabelka'), snapshot => {
            const data = snapshot.val()
            console.dir(data)
            console.log(data.pole1);
        }))
    }
    
    return (
        <>
        <button onClick={register}>
            Rejestruj
        </button>
        <hr/>
        <button onClick={wpisuj}>
            Wpisz do bazy
        </button>
        <hr/>
        <button onClick={czytaj}>
            czytaj
        </button>
        </>
    )
}

export default Fb