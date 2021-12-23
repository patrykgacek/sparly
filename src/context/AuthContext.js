import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateEmail, updatePassword } from "firebase/auth"
import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "../firebase"

const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    
    const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password)
    const signin = (email, password) => signInWithEmailAndPassword(auth, email, password)
    const logout = () => signOut(auth)
    const resetPassword = email => sendPasswordResetEmail(auth, email)
    const updEmail = email => updateEmail(currentUser, email)
    const updPassword = password => updatePassword(currentUser, password)
    const emailConfirm = () => sendEmailVerification(currentUser)
    const developerLogin = () => signInWithEmailAndPassword(auth, '	developer@sparly.com', 'sparly123')

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup,
        signin,
        logout,
        resetPassword,
        updEmail,
        updPassword,
        emailConfirm,
        developerLogin,
    }
    
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}