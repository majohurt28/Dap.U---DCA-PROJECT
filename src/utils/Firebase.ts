import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes, uploadString } from "firebase/storage";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence 
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
  const storage = getStorage(app);

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
  }) => {
    setPersistence(auth, browserSessionPersistence)
    .then(() => {
      return signInWithEmailAndPassword(auth, email, password);
    })
    .catch((error) => {
      
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  };

  const savepostinDB = async (shapepost: Shapepost) => {
    try {
       await addDoc(collection(db, "Post"), shapepost); 
      } catch (e) {
      console.error("Error adding post: ", e);
    }
  };

  const uploadFile = async (file: File) => {
    const storageRef = ref(storage, file.name);
    const res = await uploadBytes(storageRef, file);
    console.log("file uploaded", res);
  };
  
  const getPost = async (): Promise<Shapepost[]> => {
    const resp: Shapepost[] = [];
    const querySnapshot = await getDocs(collection(db, "Post"));
    querySnapshot.forEach((doc) =>{
      console.log(`${doc.id}=>${doc.data()}`);
      resp.push({ ...doc.data(),
      } as Shapepost);
    });
    return resp;
  };



  export default {
   /*  addProduct,
    getProducts, */
    registerUser,
    loginUser,
    savepostinDB,
    uploadFile,
    getPost,
  };
  