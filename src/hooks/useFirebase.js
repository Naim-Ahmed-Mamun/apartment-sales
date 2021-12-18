import firebaseInitialize from "../Components/Firebase/Firebase.init";
import {
   getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile,
   signOut, signInWithEmailAndPassword
} from "firebase/auth";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
// import { CircularProgress } from "@mui/material";


firebaseInitialize();

const useFirebase = () => {
   const [user, setUser] = useState({});
   const [admin,setAdmin] = useState(false);
   const [loading,setLoading] = useState(true);

   const auth = getAuth();
   // register user
   const registerUser = (email, password, name,navigate) => {
      createUserWithEmailAndPassword(auth, email, password)
         .then((result) => {
            const user = {email,displayName:name};
            savedUser(email,name)
            setUser(user);
            // update profile
            updateProfile(auth.currentUser, {
               displayName: name,
            }).then(() => {

            }).catch((error) => {
               console.log(error.message)
            });
            setLoading(false)
            // sweet alert
            Swal.fire({
               position: 'top-center',
               icon: 'success',
               title: 'Register Successfully',
               timer: 2500
             })
             navigate('/')
         })
         .catch((error) => {
            const errorMessage = error.message;
            Swal.fire({
               position: 'top-center',
               icon: 'error',
               title: {errorMessage},
               timer: 2500
             })
         });
   }

   // login user
   const loginUser = (email,password,location,navigate) => {
      signInWithEmailAndPassword(auth, email, password)
         .then((result) => {
            const user = result.user;
            setUser(user)
            setLoading(false)
            // console.log(user);
            const redirect_uri = location?.state?.from || '/';
            Swal.fire({
               position: 'top-center',
               icon: 'success',
               title: 'Login Successfully',
               // showConfirmButton: false,
               timer: 2500
             })
             navigate(redirect_uri)
         })
         .catch((error) => {
            const errorMessage = error.message;
            Swal.fire({
               position: 'top-center',
               icon: 'error',
               title: {errorMessage},
               // showConfirmButton: false,
               timer: 2500
             })
         });
   }

   // on auth state change
   useEffect(() => {
      onAuthStateChanged(auth, (user) => {
         if (user) {
            setUser(user)
         } else {
            setUser({})
         }
      });
   }, [auth]);

   // user collection
   const savedUser = (email,name) => {
      const user = {name,email};
      fetch('http://localhost:5000/user',{
         method:'POST',
         headers:{
            'content-type': 'application/json'
         },
         body:JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
         console.log(data)
      })
   }

   // admin check status
   useEffect(() => {
      // if(!user?.email){
      //    return <CircularProgress/>
      // }
      fetch(`http://localhost:5000/addAdmin/${user?.email}`)
      .then(res => res.json())
      .then(data => {
         console.log(data)
         setAdmin(data.admin);
         setLoading(false)
      })
   },[user?.email])

   // logout 
   const logout = () => {
      signOut(auth).then(() => {
         setUser({})
      }).catch((error) => {
         console.log(error.message)
      });
   }

   return {
      registerUser,
      loginUser,
      user,
      logout,
      admin,
      loading,
   }
}

export default useFirebase;