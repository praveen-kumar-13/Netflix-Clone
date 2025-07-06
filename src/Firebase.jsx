
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBxjYsvZmoecCTLojYRTcUoPyTdye7D8DU",
  authDomain: "netflix-clone-431c5.firebaseapp.com",
  projectId: "netflix-clone-431c5",
  storageBucket: "netflix-clone-431c5.firebasestorage.app",
  messagingSenderId: "353602084433",
  appId: "1:353602084433:web:3b5a59eb4c8b19bfd7e270",
  measurementId: "G-LJ46ET2HLW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);


const signUp = async (name, email , password) =>{
    try {
       const res = await createUserWithEmailAndPassword(auth, email, password);
       const user = res.user;
       await addDoc(collection(db, "user"),{
        uid:user.uid,
        name,
        authProvider: "local",
        email,
       })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" ")) ;
    }
}


const signIn = async ()=>{
    try {
       await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
         toast.error(error.code.split('/')[1].split('-').join(" ")) ;
    }
}

const logOut = ()=>{
    signOut(auth);
}


export {auth, db, signUp, signIn, logOut};