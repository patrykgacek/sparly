// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "@firebase/auth"
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDZAo9KBwRiEPIC038UZ8ly-UL4y9HguR0',
  authDomain: 'formal-vortex-225715.firebaseapp.com',
  databaseURL: 'https://formal-vortex-225715-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'formal-vortex-225715',
  storageBucket: 'formal-vortex-225715.appspot.co',
  messagingSenderId: '348447624562',
  appId: '1:348447624562:web:635853a0c54bf8d43e61eb'
}

// Initialize Firebase
const firebase = initializeApp(firebaseConfig)

export const database = getDatabase()
export const auth = getAuth()
export default firebase