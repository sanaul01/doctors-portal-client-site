import { useEffect, useState } from "react";
import initializeFirebase from "../Components/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword,  signInWithPopup, GoogleAuthProvider, updateProfile, getIdToken} from "firebase/auth";


initializeFirebase();
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoding, setIsLoding] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('')

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) =>{
      setIsLoding(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = {email, displayName: name};
            setUser(newUser);
            saveUser(email, name, 'POST')

            updateProfile(auth.currentUser, {
              displayName: name
            }).then(() => {
            }).catch((error) => {
            });

            history.replace('/');
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
    
    };

    const signInWithGoogle = (location, history) =>{
      setIsLoding(true)
      signInWithPopup(auth, googleProvider)
      .then((result) => {
        const destination = location?.state?.from || '/home';
        history.replace(destination)
        setAuthError('')
      const user = result.user;
      saveUser(user.email, user.displayName, 'PUT')
      history.replace('/');
      }).catch((error) => {
      setAuthError(error.message);
      }).finally(()=> setIsLoding(false));
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                .then(idToken =>{
                  setToken(idToken)
                })
            } else {
              setUser({})
            }
            setIsLoding(false)
          });
          return ()=> unsubscribe;
    }, [auth]);

    useEffect(()=>{
      fetch(`http://localhost:5000/users/${user?.email}`)
      .then(res=> res.json())
      .then(data =>{
        setAdmin(data.admin)
      })
    }, [user.email])

    const logOut = () =>{
        setIsLoding(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=>setIsLoding(false));
    }

    const saveUser = (email, displayName, method) =>{
      const user = {email, displayName};
      fetch('http://localhost:5000/users', {
        method: method,
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then()
    }

    return{
        authError,
        isLoding,
        admin,
        user,
        token,
        registerUser,
        logOut,
        loginUser,
        signInWithGoogle
    }
}

export default useFirebase;