import { useEffect, useState } from "react";
import initializeFirebase from "../Components/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

initializeFirebase();
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const auth = getAuth();

    const registerUser = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    }


    useEffect(()=>{
        const unsubscrbe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser()
            } else {
              setUser({})
            }
          });
          return ()=> unsubscrbe;
    }, [])

    const logOut = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    return{
        user,
        registerUser,
        logOut
    }
}

export default useFirebase;