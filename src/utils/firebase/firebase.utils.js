import {
    initializeApp
} from "firebase/app";

import {
    getAuth, signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
  signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAakgCJ5_Z-hsjdobQ42zOE0qKBXddV52s",
    authDomain: "clothing-store-db-fc45e.firebaseapp.com",
    projectId: "clothing-store-db-fc45e",
    storageBucket: "clothing-store-db-fc45e.appspot.com",
    messagingSenderId: "289067459288",
    appId: "1:289067459288:web:110f5f2cbe0abecfd9adad"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt:"select_account",
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,provider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) =>{
      if(!userAuth) return;

      const userDocRef = doc(db, "users", userAuth.uid);

      const userSnapshot = await getDoc(userDocRef);

      const {displayName, email} = userAuth;
      createUserIfNotExists(userSnapshot,displayName, email, userDocRef);

      return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword = async(displayName,email, password) => {

    if(!email || !password) return;

    const userCredential = await createUserWithEmailAndPassword(auth,email,password);

    if(!!userCredential?.user){
      const userDocRef = doc(db, "users", userCredential.user.uid);

      const userSnapshot = await getDoc(userDocRef);
  
      await createUserIfNotExists(userSnapshot,displayName, email, userDocRef);
    }


    console.log(userCredential);

    return userCredential;
  } 

  export const signInAuthUserWithEmailWihEmailAndPassword = async(email, password) =>{
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email,password);

      return userCredential;
    }catch(error){
      console.log(error.message);

      switch(error.message){
        case "Firebase: Error (auth/wrong-password).":
          alert("Senha incorreta !");
          break;
        case "Firebase: Error (auth/invalid-email).":
          alert("Email inválido !");
          break;
        case "Firebase: Error (auth/user-not-found).":
          alert("Usuário não encontrado !");
          break;
        default:
          alert("Houve um erro");
      }
    }

  }


  export const signOutUser = async() =>{
    return await signOut(auth)
  } ;

  export const onAuthStateChangedListener = (callback) =>{
    return onAuthStateChanged(auth, callback);
  }

  const createUserIfNotExists = async(userSnapshot,displayName,email,userDocRef) =>{
    if(!userSnapshot.exists()){
      const createdAt = new Date();

      try {
      
          // await db.collection("users").doc(userSnapshot.uid).set({ displayName, email, createdAt})
          await setDoc(userDocRef, {
            displayName, email, createdAt
          });
    
      } catch(error){
        console.log('error creating the user',error.message);
      }
    }
  }