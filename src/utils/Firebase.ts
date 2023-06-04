import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
  } from "firebase/auth";
  import { Shapepost  } from "../types/Shapeposts";

const firebaseConfig ={
    apiKey: "AIzaSyC6ZNFkCjXnNdOtdS9JGDtCAbVEkwJTnaI",
    authDomain: "dca-2023.firebaseapp.com",
    databaseURL: "https://dca-2023-default-rtdb.firebaseio.com",
    projectId: "dca-2023",
    storageBucket: "dca-2023.appspot.com",
    messagingSenderId: "223630970460",
    appId: "1:223630970460:web:28b2c7235b336b4f522099",
    measurementId: "G-WMVE4NM4N5"
    };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  const db = getFirestore(app);

const registerUser = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<boolean> => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential.user);
      return true;
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      return false;
    }
  };
  
  const loginUser = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<boolean> => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential.user);
      alert("welcome " + userCredential.user.email);
      return true;
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      return false;
    }
  };

  const savepostinDB = async (shapepost: Shapepost) => {
    try {
       await addDoc(collection(db, "products"), shapepost); 
      } catch (e) {
      console.error("Error adding document: ", e);
  
    }
    
  };

  export default {
   /*  addProduct,
    getProducts, */
    registerUser,
    loginUser,
  };
  