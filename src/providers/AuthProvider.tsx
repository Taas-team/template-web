import React, { useEffect, useMemo, useState } from 'react';
import {
    AuthProvider as IAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from 'firebase/auth';
import { auth } from '../conf/firebase';
import { AuthContext } from './types/AuthContext';
import {ComponentWithChild} from "../types/proptypes/Auth/ComponentWIthChild";
import {User} from "../types/proptypes/Auth/User";


export function AuthProvider({ children }: ComponentWithChild) {
    const [user, setUser] = useState<User>(null);
    const [loading, setLoading] = useState(false);


    const logIn = (email: string, password: string) => (
        signInWithEmailAndPassword(auth, email, password)
    );

    const logOut = () => (
        signOut(auth)
    );

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    const userAuth = useMemo(() => ({
        user,
        logIn,
        logOut,
    }), [user]);

    return (
        <AuthContext.Provider value={userAuth}>
                   {children}
        </AuthContext.Provider>
    );
}