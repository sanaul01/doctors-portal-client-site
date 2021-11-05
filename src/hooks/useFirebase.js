import { useEffect, useState } from "react";
import initializeFirebase from "../Components/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";

initializeFirebase();
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoding, setIsLoding] = useState(true)
    const [authError, setAuthError] = useState('')
    const auth = getAuth();

    const registerUser = (email, password) =>{
      setIsLoding(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('')
          })
          .catch((error) => {
            setAuthError(error.message);
          })
          .finally(()=> setIsLoding(false));
    };

    const loginUser = (email, password, location, history) =>{
      setIsLoding(true)
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/home';
        history.replace(destination)
        setAuthError('')
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(()=> setIsLoding(false));
    
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
              setUser({})
            }
            setIsLoding(false)
          });
          return ()=> unsubscribe;
    }, [])

    const logOut = () =>{
        setIsLoding(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=>setIsLoding(false));
    }

    return{
        authError,
        isLoding,
        user,
        registerUser,
        logOut,
        loginUser
    }
}

export default useFirebase;