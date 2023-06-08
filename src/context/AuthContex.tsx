'use client'
import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/firebase/config";

const AuthContext = createContext<any>({});
export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children,

}: { children: React.ReactNode }) => {
    const [user, setUser] = useState<any>(null);
    const [loading, setloading] = useState<boolean>(true);

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    photoUrl: user.photoURL,
                })
            } else {
                setUser(null)
            }
            setloading(false)
        })

        return () => unsubcribe();
    }, [])

    const signup = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = async () => {
        await signOut(auth)
        setUser(null)
    }

    return (<AuthContext.Provider value={{ user, login, signup, logout }}>
        {loading ? null : children}
    </AuthContext.Provider>
    )
}
